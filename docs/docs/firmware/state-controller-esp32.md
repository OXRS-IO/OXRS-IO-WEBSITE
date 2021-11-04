---
tags: ["OXRS-SHA-RACK32", "RACK32"]
---
# State Controller ESP32
<p class="maker">by <b>Ben Jones</b></p>

> SKU: OXRS-SHA-STATECONTROLLER-ESP32-FW

## Introduction
A binary state controller for DIY home automation projects.

Listens for MQTT messages and send on/off binary output signals using MCP23017 I2C I/O buffers.

Typically the output signals would be used to drive relay coils in order to switch larger voltages - e.g. light circuits.

---

### How does it work?
Outputs can be switched by publishing an MQTT message to the configured MQTT broker. 

Each output can be configured as a `relay`, for simple `on`/`off` control. A `motor`, again with `on`/`off` control but longer interlock delays if interlocking is configured. Or a `timer`, for `on` and then timed `off` control.

The firmware is designed to run on hardware using MCP23017 I/O buffer chips via I2C, e.g. the [16 Channel Relay Driver](https://bmdesigns.com.au/shop/relay16-16-channel-relay-driver/).

A single I2C bus can only support up to a maximum of 8x MCP23017 chips (addresses `0x20-0x27`). Therefore the maximum number of supported outputs is 128 (i.e. 8x MCP23017s * 16x I/O pins).

### Interlocking
Interlocking two outputs allows them to control equipment such as roller blinds, garage doors, louvre roofing etc.

However if you are planning to control a motor of any sort then it is important that the two outputs are configured as type `motor` and that both are interlocked with each other. This is to ensure that both outputs will not be commanded to operate at the same time and adds a 2 second delay between any changes of output.

Example payload to confingure outputs 4 & 5 to control a set of roller blinds;
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

### Output Config
Each OUTPUT can be configured via the following properties;

|Key|Mandatory|Value|Default|
|---|---------|-----|-------|
|`index`|Mandatory|Index of the output to configure|N/A|
|`type`|Optional|Either `motor`, `relay`, or `timer`|`relay`|
|`interlockIndex`|Optional|Index to interlock with (lock the opposite for interlocking both ways or self-lock to disable interlocking)|Self-locked|
|`timerSeconds` |Optional|Number of seconds an output stays `on` when type set to `timer`|60 seconds|

The only difference between `motor` and `relay` outputs is the interlock delay (if an interlock is configured). 

|Output Type |Interlock delay|
|------------|---------------|
|`motor`     |2000ms         |
|`relay`     |500ms          |

#### Examples
To configure output 4 to be a 30 second timer and outputs 6 & 7 to drive a motor and be interlocked;
``` json
{ 
  "outputs": [
    { "index": 4, "type": "timer", "timerSeconds": 30 },
    { "index": 6, "type": "motor", "interlockIndex": 7 },
    { "index": 7, "type": "motor", "interlockIndex": 6 }
  ]
}
```

::: tip
A retained message will ensure the device auto-configures on startup.
:::

## Commands
Each OUTPUT can be controlled by publishing an MQTT message to the topic;
```
[PREFIX/]cmnd/CLIENTID[/SUFFIX]
```
where;
- `PREFIX`:   Optional topic prefix if required
- `CLIENTID`: Client id of device, defaults to `<MACADDRESS>`
- `SUFFIX`:   Optional topic suffix if required

The message payload should be JSON and contain:

|Key|Mandatory|Value|Default|
|---|---------|-----|-------|
|`index`|Mandatory|Index of the output to switched|N/A|
|`command`|Mandatory|Either `on`, `off`, or `query`|`query`|

::: tip
The `query` command will cause an event to be published, with the current state of that output.
:::
    
### Examples
To turn on output 4:
``` json
{ 
  "index": 4, 
  "command": "on" 
}
```

To query the state of output 7:
``` json
{ 
  "index": 7, 
  "command": "query"
}
```

## Events
An output STATE CHANGE is reported to a topic of the form;
```
[PREFIX/]stat/CLIENTID[/SUFFIX]
```
where;
- `PREFIX`:   Optional topic prefix if required
- `CLIENTID`: Client id of device, defaults to `<MACADDRESS>`
- `SUFFIX`:   Optional topic suffix if required

The message payload is JSON and contains:

|Key|Value|
|---|-----|
|`index`|Index of this event (1-128)|
|`type`|Event type (see below)|
|`event`|Event (see below)|

|Event Type|Event|
|----------|-----|
|`motor`|`on` or `off`|
|`relay`|`on` or `off`|
|`timer`|`on` or `off`|

### Examples
A relay turning on for output 6;
``` json
{
  "index": 6, 
  "type": "relay", 
  "event": "on"
}
```

A timer turning off for output 12;
``` json
{
  "index": 12, 
  "type": "timer", 
  "event": "off"
}
```

## Downloads
Download the latest version of the firmware on [Github](https://github.com/SuperHouse/OXRS-SHA-StateController-ESP32-FW).


## Supported Hardware
This firmware is compatible with the boards;
* [8 Channel Relay Driver Shield](https://www.superhouse.tv/product/8-channel-relay-driver-shield/) by SuperHouse
* [128 Channel Relay Driver](https://bmdesigns.com.au/shop/relay128-128-channel-relay-driver/) by Bedrock Media Designs
* [16 Channel Relay Driver](https://bmdesigns.com.au/shop/relay16-16-channel-relay-driver/) by Bedrock Media Designs

And is designed to run on the [RACK32](/docs/hardware/controllers/rack32.html) as part of the [OXRS](https://oxrs.io) eco-system.


#### Credits
 * Jonathan Oxer <jon@oxer.com.au>
 * Ben Jones <https://github.com/sumnerboy12>
 * Moin <https://github.com/moinmoin-sh>


#### License
Copyright 2020-2021 SuperHouse Automation Pty Ltd [www.superhouse.tv](www.superhouse.tv)

The software portion of this project is licensed under the Simplified
BSD License. The "licence" folder within this project contains a
copy of this license in plain text format.
