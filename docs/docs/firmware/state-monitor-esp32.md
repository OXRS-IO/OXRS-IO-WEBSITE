---
tags: ["OXRS-SHA-RCESP32", "URC", "RACK32"]
---
# State Monitor ESP32
<p class="maker">by <b>Ben Jones</b></p>

> SKU: OXRS-SHA-STATEMONITOR-ESP32-FW

## Introduction
A binary state monitor for DIY home automation projects.

This system uses UTP cable (typically Cat-5e because it's cheap) to connect binary sensors to a central controller. The sensors can be buttons or switches mounted in wall plates for lighting control, reed sensors attached to doors or windows, PIR sensors for motion detection, or anything else that reports a binary state.

It also supports rotary encoders (using 2 data lines) to allow up/down control for media player volume, light dimming, etc.

---

### How does it work?
When an input state change is detected an MQTT message is published to the configured MQTT broker for further processing by your home automation system.

Each port can monitor up to 4 channels and are numbered:

|INDEX|PORT|CHANNEL|TYPE |RJ45 Pin|
|:-----|:----|:-------|:-----|:--------|
|1    |1   |1      |Input|1       |
|2    |1   |2      |Input|2       |
|3    |1   |3      |Input|3       |
|4    |1   |4      |Input|6       |
|5    |2   |1      |Input|1       |
|6    |2   |2      |Input|2       |
|7    |2   |3      |Input|3       |
|8    |2   |4      |Input|6       |
|...  |    |       |     |        |

The firmware is designed to run on hardware using MCP23017 I/O buffer chips via I2C, e.g. the [Light Switch Controller](https://github.com/SuperHouse/LSC).

A single I2C bus can support up to a maximum of 8x MCP23017 chips (addresses `0x20-0x27`). Therefore the maximum number of supported inputs is 128 (i.e. 8x MCP23017s * 16x I/O pins), or 32 ports.

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

### Default Input Type
By default all inputs are initialised as type `switch`. Individual inputs can then be configured as required ([see below](./state-monitor-esp32.md#input-config)). However it is also possible to change this default. For example, if you are intending to use push buttons throughout your home, instead of setting individual config for each input, you can simply set the `defaultInputType` to `button` and be done with it.

|Key|Mandatory|Value|  
|:--|:--------|:----|
|`defaultInputType`|Optional|Either `button`, `contact`, `press`, `rotary`, `switch` or `toggle`|

### Examples
To configure the default input type to be `button`;
```json
{ 
  "defaultInputType": "button"
}
```

::: tip
You can still override the default input type with specific configuration for individual inputs, see below.
:::

### Input Config
Each INPUT can be configured via the following properties;

|Key|Mandatory|Value|
|:--|:--------|:----|
|`index`|Mandatory|Index of the input to configure|
|`type`|Optional|Either `button`, `contact`, `press`, `rotary`, `switch` or `toggle`|
|`invert`|Optional|Either `true` or `false`|

::: warning
Inverting a normally-open (NO) button input will result in a constant stream of `hold` events!
:::

### Examples
To configure input 4 to be a contact sensor, and input 7 to be an inverted button;
```json
{ 
  "inputs": [
    { "index": 4, "type": "contact" },
    { "index": 7, "type": "button", "invert": true }
  ]
}
```

::: tip
A retained message will ensure the device auto-configures on startup.
:::

### Recommended Configurations
Below is a table showing possible **Connected Device** and the supported `input types`. Check marks are indicating the recommended combinations to ensure intended behavior.

|Connected Devices|`button`|`contact`|`press`|`rotary`|`switch`|`toggle`| 
|:----------------|:------:|:-------:|:-----:|:------:|:------:|:------:|
|**Bi-Stable Switch**   |:x:|:x:|:x:|:x:|:white_check_mark:|:white_check_mark:|
|**Door / Window Contact**|:x:|:white_check_mark:|:x:|:x:|:x:|:x:|
|**PIR**                  |:x:|:x:|:white_check_mark:|:x:|:x:|:x:|
|**Push Button**          |:white_check_mark:|:x:|:white_check_mark:|:x:|:x:|:x:|
|**Rotary Encoder**       |:x:|:white_check_mark:|:x:|:x:|:x:|:x:|


## Events
An input EVENT is reported to a topic of the form:
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
|`port`|Port this event occured on (1-32)|
|`channel`|Channel this event occured on (1-4)|
|`index`|Index of this event (1-128)|
|`type`|Event type (see below)|
|`event`|Event (see below)|

|Event Type|Event|
|:---------|:----|
|`button`  | `single`, `double`, `triple`, `quad`, `penta`, or `hold` |
|`contact` | `open` or `closed` |
|`press`   | `press` |
|`rotary`  | `up` or `down` |
|`switch`  | `on` or `off` |
|`toggle`  | `toggle` |

### Examples
A contact opening on input 7;
```json
{ 
  "port": 2, 
  "channel": 3, 
  "index": 7, 
  "type": "contact", 
  "event": "open" 
}
```

A triple button click on input 4;
```json
{ 
  "port": 1, 
  "channel": 4, 
  "index": 4, 
  "type": "button", 
  "event": "triple" 
}
```


## Downloads
Download the latest version of the firmware on [Github](https://github.com/SuperHouse/OXRS-SHA-StateMonitor-ESP32-FW).


## Supported Hardware
This firmware is compatible with the [Light Switch Controller](https://github.com/SuperHouse/LSC) (LSC) and is designed to run on the [RACK32](/docs/hardware/controllers/rack32.html) as part of the [OXRS](https://oxrs.io) eco-system.

The LSC hardware provides 12V power down the cable, which can be used for powering sensors (e.g. PIRs), or illuminating LEDs.

The sensors or switches should pull one of 4 INPUT wires in the cable to GND to indicate that they have been activated. 

The LSC hardware has physical pull up resistors to pull the INPUT wires high and detects when they are pulled low.

The RJ45 pinout for each port is;

|PIN|DESCRIPTION|
|:--|:----------|
|1  |INPUT 1    |
|2  |INPUT 2    |
|3  |INPUT 3    |
|4  |VIN        |
|5  |VIN        |
|6  |INPUT 4    |
|7  |GND        |
|8  |GND        |


#### Credits
 * Jonathan Oxer <jon@oxer.com.au>
 * Ben Jones <https://github.com/sumnerboy12>
 * Moin <https://github.com/moinmoin-sh>


#### License
Copyright 2020-2022 SuperHouse Automation Pty Ltd [www.superhouse.tv](www.superhouse.tv)

The software portion of this project is licensed under the Simplified
BSD License. The "licence" folder within this project contains a
copy of this license in plain text format.
