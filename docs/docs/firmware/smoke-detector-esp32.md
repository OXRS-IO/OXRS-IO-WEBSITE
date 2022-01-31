---
tags: ["OXRS-SHA-RACK32", "RACK32"]
---
# Smoke Detector ESP32
<p class="maker">by <b>Ben Jones</b></p>

> SKU: OXRS-BMD-SMOKEDETECTOR-ESP32-FW

## Introduction
Originally designed to work with [Clipsal FireTek Smoke Alarms](https://www.clipsal.com/products/detail?CatNo=755PSMA4) fitted with the [Clipsal Fire Tek Mounting/Relay Base](https://www.clipsal.com/products/detail?CatNo=755RB). 

A single CAT5/6 cable can be used to monitor the alarm state, as well as trigger the remote TEST/HUSH functions (i.e. 2x outputs, 1x input per port).

Each port on a Smoke Detector 16-port (SD16) can control 2 outputs and monitor 1 input and are numbered;

|Index|Port|Channel|Type  |RJ45 Pin|
|:----|:---|:------|:-----|:-------|
|1    |1   |1      |Output|2       |
|2    |1   |2      |Output|3       |
|3    |1   |3      |Input |6       |
|4    |2   |1      |Output|2       |
|5    |2   |2      |Output|3       |
|6    |2   |3      |Input |6       |
|...  |    |       |      |        |
|46   |16  |1      |Output|2       |
|47   |16  |2      |Output|3       |
|48   |16  |3      |Input |6       |

---

### How does it work?
When an input state change is detected an MQTT message is published to the configured MQTT broker for further processing by your home automation system. 

Outputs can be switched by publishing an MQTT message to the configured MQTT broker. Each output can be configured as a `relay`, for simple `on`/`off` control. A `motor`, again with `on`/`off` control but longer interlock delays if interlocking is configured. Or a `timer`, for `on` and then timed `off` control.

### Interlocking
Interlocking two outputs allows them to control equipment such as roller blinds, garage doors, louvre roofing etc.

However if you are planning to control a motor of any sort then it is important that the two outputs are configured as type `motor` and that both are interlocked with each other. This is to ensure that both outputs will not be commanded to operate at the same time and adds a 2 second delay between any changes of output.

Example payload to configure outputs 4 & 5 to control a set of roller blinds;
``` json
{
  "outputs": [
    { "index": 4, "type": "motor", "interlockIndex": 5 },
    { "index": 5, "type": "motor", "interlockIndex": 4 }
  ]
}
```

The operation of the interlocked outputs should be verified before connecting to any external equipment. External interlocking equipment may be required for some equipment. Most importantly, the manufacturers wiring and installation guides must be adhered to.

### Timers
Timers allow an output to automatically turn `off` a set number of seconds after being turned `on` (configurable via `timerSeconds`, which defaults to 60 seconds).

If another `on` command is sent while the timer is running, it will reset to zero and begin counting down again. If an `off` command is sent the timer will be cancelled and the output turned `off` immediately.

## Configuration
The firmware can be configured by publishing an MQTT message to this topic;
```
[PREFIX/]conf/CLIENTID[/SUFFIX]
```
where:
- `PREFIX`: Optional topic prefix if required
- `CLIENTID`: Client id of device, defaults to `<MACADDRESS>`
- `SUFFIX`: Optional topic suffix if required
    
The message payload should be JSON and it's format is defined in a JSON schema document included in the adoption payload published here;
```
[PREFIX/]stat/CLIENTID[/SUFFIX]/adopt
```
See the `config` value in the `/adopt` payload.

### Input Config
Each INPUT can be configured via the following properties;

|Key|Mandatory|Value|
|:--|:--------|:----|
|`index`|Mandatory|Index of the input to configure|N/A|
|`type`|Optional|Either `button`, `contact`, `press`, `switch` or `toggle`|
|`invert`|Optional|Either `true` or `false`|

::: warning
Inverting a normally-open (NO) button input will result in a constant stream of `hold` events!
:::

### Output Config
Each OUTPUT can be configured via the following properties;

|Key|Mandatory|Value|
|:--|:--------|:----|
|`index`|Mandatory|Index of the output to configure|
|`type`|Optional|Either `motor`, `relay`, or `timer`|
|`interlockIndex`|Optional|Index to interlock with (lock the opposite for interlocking both ways or self-lock to disable interlocking)|
|`timerSeconds` |Optional|Number of seconds an output stays `on` when type set to `timer` (defaults to 60 seconds)|

The only difference between `motor` and `relay` outputs is the interlock delay (if an interlock is configured). 

|Output Type |Interlock delay|
|:-----------|:--------------|
|`motor`     |2000ms         |
|`relay`     |500ms          |

### Examples
To configure input 3 to be an inverted contact sensor and output 2 to be a 30 second timer;
```json
{ 
  "inputs": [
    { "index": 3, "type": "contact", "invert": true }
  ],
  "outputs": [
    { "index": 2, "type": "timer", "timerSeconds": 30 }
  ]
}
```

To configure input 9 to be a button and outputs 7 & 8 to drive a motor and be interlocked;
```json
{ 
  "inputs": [
    { "index": 9, "type": "button" }
  ],
  "outputs": [
    { "index": 7, "type": "motor", "interlockIndex": 8 },
    { "index": 8, "type": "motor", "interlockIndex": 7 }
  ]
}
```

::: tip
A retained message will ensure the device auto-configures on startup.
:::

### Recommended Configurations
Below is a table showing possible connected devices and the supported input types. Check marks indicate the recommended configurations to ensure intended behavior.

|Connected Device|`button`|`contact`|`press`|`rotary`|`switch`|`toggle`| 
|:---------------|:------:|:-------:|:-----:|:------:|:------:|:------:|
|**Bi-Stable Switch**   |:x:|:x:|:x:|:x:|:white_check_mark:|:white_check_mark:|
|**Door / Window Contact**|:x:|:white_check_mark:|:x:|:x:|:x:|:x:|
|**PIR**                  |:x:|:white_check_mark:|:x:|:x:|:x:|:x:|
|**Push Button**          |:white_check_mark:|:x:|:white_check_mark:|:x:|:x:|:x:|

## Commands
### Outputs
Each OUTPUT can be controlled by publishing an MQTT message to the topic;
```
[PREFIX/]cmnd/CLIENTID[/SUFFIX]
```
where;
- `PREFIX`:   Optional topic prefix if required
- `CLIENTID`: Client id of device, defaults to `<MACADDRESS>`
- `SUFFIX`:   Optional topic suffix if required

The message payload should be JSON and it's format is defined in a JSON schema document included in the adoption payload published here;
```
[PREFIX/]stat/CLIENTID[/SUFFIX]/adopt
```
See the `command` value in the `/adopt` payload.

|Key|Mandatory|Value|
|:--|:--------|:----|
|`index`|Mandatory|Index of the output to switched|
|`command`|Mandatory|Either `on`, `off`, or `query`|

::: tip
The `query` command will cause an event to be published, with the current state of that output.
:::

### Examples
To turn on output 4 and query the state of output 7;
``` json
{ 
  "outputs": [
    { "index": 4, "command": "on" },
    { "index": 7, "command": "query" }
  ]
}
```

## Events
An input EVENT or output STATE CHANGE is reported to a topic of the form:
```
[PREFIX/]stat/CLIENTID[/SUFFIX]
```
where; 
- `PREFIX`:   Optional topic prefix if required
- `CLIENTID`: Client id of device, defaults to `<MACADDRESS>`
- `SUFFIX`:   Optional topic suffix if required

The message payload is JSON and contains:

|Key|Value|
|:--|:----|
|`port`|Port this event occured on (1-16)|
|`channel`|Channel this event occured on (1-3)|
|`index`|Index of this event (1-48)|
|`type`|Event type (see below)|
|`event`|Event (see below)|

### Input Events
|Event Type|Event|
|:---------|:----|
|`button`  | `single`, `double`, `triple`, `quad`, `penta`, or `hold` |
|`contact` | `open` or `closed` |
|`press`   | `press` |
|`switch`  | `on` or `off` |
|`toggle`  | `toggle` |

### Output Events
|Event Type|Event|
|:---------|:----|
|`motor`   | `on` or `off` |
|`relay`   | `on` or `off` |
|`timer`   | `on` or `off` |

### Examples
A contact opening on input 6;
```json
{ 
  "port": 2,
  "channel": 3,
  "index": 6, 
  "type": "contact", 
  "event": "open" 
}
```

A triple button click on input 3;
```json
{ 
  "port": 1, 
  "channel": 3, 
  "index": 3, 
  "type": "button", 
  "event": "triple" 
}
```

A relay turning on for output 7;
``` json
{
  "index": 7, 
  "type": "relay", 
  "event": "on"
}
```

A timer turning off for output 10;
``` json
{
  "index": 10, 
  "type": "timer", 
  "event": "off"
}
```

## Downloads
Download the latest version of the firmware on [Github](https://github.com/Bedrock-Media-Designs/OXRS-BMD-SmokeDetector-ESP32-FW).


## Supported Hardware
This firmware is compatible with the [Smoke Detector](https://bmdesigns.com.au/shop/universal-input-output-uio/) and is designed to run on the [Universal Rack Controller](https://www.superhouse.tv/product/rack32) (URC).

The SD16 hardware provides 12V down the line, which can be used for powering sensors (e.g. PIRs), or illuminating LEDs. 

There are 2 relays for each port which connect the OUTPUT wires in the cable to a shared CMN. 

A sensor or switch should pull the INPUT wire in the cable to GND to indicate that it has been activated. 

The SD16 hardware has physical pull up resistors to pull the INPUT wires high and detects when they are pulled low.

The RJ45 pinout for each port is;

|PIN|DESCRIPTION|
|:--|:----------|
|1  |OUTPUT CMN |
|2  |OUTPUT 1   |
|3  |OUTPUT 2   |
|4  |VIN        |
|5  |VIN        |
|6  |INPUT 1    |
|7  |GND        |
|8  |GND        |

More information:

 * https://wiki.bmdesigns.com.au/en/BMD-urc-uio
 * http://www.superhouse.tv/rack32

#### Credits
 * James Kennewell <James@bmdesigns.com.au>
 * Ben Jones <https://github.com/sumnerboy12>


#### License
Copyright 2020-2021 Bedrock Media Designs Ltd [bmdesigns.com.au](https://bmdesigns.com.au/)

The software portion of this project is licensed under the Simplified
BSD License. The "licence" folder within this project contains a
copy of this license in plain text format.
