---
tags: ["OXRS-IO-StateGPIO-ESP32"]
---
# State GPIO ESP32
<p class="maker">by <b>moin</b></p>

> SKU: OXRS-IO-StateGPIO-ESP32-FW

## Introduction
This FW is similar to [OXRS-SHA-StateIO-ESP32](/docs/firmware/state-io-esp32.md) which combines the functionality of [OXRS-SHA-StateMonitor-ESP32](/docs/firmware/state-monitor-esp32.md) and [OXRS-SHA-StateController-ESP32](/docs/firmware/state-controller-esp32.md).

The major difference of ```StateGPIO``` compared to ```StateIO```  is the usage of 16 usable GPIO pins of an ESP32 to perform physical IO instead of I2C connected IO-expander.

By default all GPIOs are configured as ```input```. The available range can be split into an ```input``` and ```output partition``` which can be configured at runtime.

---

### How does it work?
The 16 available GPIOs are

```2, 4, 5, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27```

 This set of GPIOs can be split into a lower partition of inputs and an upper partition of outputs. With this configuration a single ESP32 can `monitor inputs` as well as `control outputs`. A split can start at any GPIO pin. GPIOs with smaller numbers are configured as input and GPIOs equal to and above the split are configured as output.
 
 Example : split (output start) configured as ```18```
 
|configured `output start`|`Input` GPIOs|`Output` GPIOs|
|:--|:--------|:--------|
`18`|`2`,`4`,`5`,`13`,`14`,`15`,`16`,`17`|`18`,`19`,`21`,`22`,`23`,`25`,`26`,`27`|


The [AdminUI-WEB-APP](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP) is the ideal tool to set and save your desired configuration. 

::: tip
- Inputs are configured with `internal pullup` and are `LOW active`
- Outputs are `LOW active`
- This FW runs on `WiFi only`
:::

## Possible use cases
- runs on an off the shelf ESP32 without any additional peripherals
- supports the standard OXRS eco-system so it can be used for bench testing to get familiar with the api without the need to have a RACK32 on hand.
- push buttons, switches, encoder, relay driver ... can be connected for a small scale applications or testing

## Configuration
This FW is fully compatible with [OXRS](https://oxrs.io) eco-system and is built using the standard OXRS [Libraries](/docs/libraries/README.md)

All the functionality of the [StateMonitor](/docs/firmware/state-monitor-esp32.md) applies to the input partition and [StateController](/docs/firmware/state-controller-esp32.md) functionality applies to the output partition. Please see their documentation for further details.

::: tip
Instead of using the ```index``` to address the IO-pin, the GPIO number is used for convenience. These numbers have to be used in all /cmnds and are returned in all /stats. Beside this change the api is equal to StateMonitor StateController to ensure compatability with the IO-expander HW.
:::

## Downloads
Download the [latest binary](https://github.com/OXRS-IO/OXRS-IO-StateGPIO-ESP32-FW/releases) of the firmware from GitHub.

Download the [source code](https://github.com/OXRS-IO/OXRS-IO-StateGPIO-ESP32-FW) of the firmware from GitHub.

## Supported Hardware
Any ESP32 with all GPIOs broken out and not connected to or used by additional HW

And is designed to run as part of the [OXRS](https://oxrs.io) eco-system.



---

#### Credits
 * Ben Jones <https://github.com/sumnerboy12>
 * Moin <https://github.com/moinmoin-sh>

 ---


#### License
Copyright 2020-2023 SuperHouse Automation Pty Ltd [www.superhouse.tv](www.superhouse.tv)

The software portion of this project is licensed under the Simplified
BSD License. The "licence" folder within this project contains a
copy of this license in plain text format.

