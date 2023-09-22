---
tags: ["OXRS-IO-DigitalIO-ESP"]
---
# Digital IO ESP32/ESP8266
<p class="maker">by <b>OXRS Core Team</b></p>

> SKU: OXRS-IO-DigitalIO-ESP-FW

## Introduction
This FW is similar to [OXRS-SHA-StateIO-ESP32](/docs/firmware/state-io-esp32.md) which combines the functionality of [OXRS-SHA-StateMonitor-ESP32](/docs/firmware/state-monitor-esp32.md) and [OXRS-SHA-StateController-ESP32](/docs/firmware/state-controller-esp32.md).

The major difference of ```DigitalIO``` compared to ```StateIO```  is the usage of spare GPIO pins of an ESP32/ESP8266 to perform physical IO instead of I2C connected IO-expander.

By default all GPIOs are configured as ```input```.

---

### How does it work?
The 16 available GPIOs on an ESP32 are;

```2, 4, 5, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27```

The 8 available GPIOs on an ESP8266 are;

```2, 4, 5, 12, 13, 14, 15, 16```

Each GPIO can be individually configured to be either `monitor inputs` or `control outputs`.

The [AdminUI-WEB-APP](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP) is the ideal tool to set and save your desired configuration. 

::: tip
- Inputs are configured with `internal pullup` and are `LOW active`
- Outputs are `LOW active`
- This FW runs on `WiFi only`
:::

## Possible use cases
- Runs on an off the shelf ESP32/ESP8266 dev boards without any additional peripherals
- Supports the standard OXRS eco-system so it can be used for bench testing to get familiar with the api without the need to have a RACK32 on hand
- Push buttons, switches, encoder, relay driver ... can be connected for a small scale applications or testing

## Configuration
This FW is fully compatible with [OXRS](https://oxrs.io) eco-system and is built using the standard OXRS [Libraries](/docs/libraries/README.md)

All the functionality of the [StateMonitor](/docs/firmware/state-monitor-esp32.md) applies to input GPIOs and [StateController](/docs/firmware/state-controller-esp32.md) functionality applies to output GPIOs. Please see their documentation for further details.

::: tip
Instead of using the ```index``` to address the IO-pin, the `gpio` number is used for convenience. These numbers have to be used in all `/cmnd` requests and are returned in all `/stat` updates. Beside this change the API is equal to StateMonitor/StateController to ensure compatability with the IO-expander HW.
:::

The configuration payloads are wrapped in an extra JSON object, containing the GPIO pin and type. The payloads inside the `input` and `output` objects mirror the format in the [StateMonitor](/docs/firmware/state-monitor-esp32.md) and [StateController](/docs/firmware/state-controller-esp32.md) firmware. The only exception is `interlockGpio` which is named `interlockIndex` in the State Controller firmware.

```json
{
  "gpios": [
    {
      "gpio": 2,
      "type": "input",
      "input": { "type": "contact", "invert": true }
    },
    {
      "gpio": 4,
      "type": "input",
      "input": { "type": "button" }
    },
    {
      "gpio": 19,
      "type": "output",
      "output": { "type": "timer", "timerSeconds": 5 }
    },
    {
      "gpio": 21,
      "type": "output",
      "output": { "type": "motor", "interlockGpio": 22 }
    },
    {
      "gpio": 22,
      "type": "output",
      "output": { "type": "motor", "interlockGpio": 21 }
    }
  ]
}
```

## Downloads
Download the [latest binary](https://github.com/OXRS-IO/OXRS-IO-DigitalIO-ESP-FW/releases) of the firmware from GitHub.

Download the [source code](https://github.com/OXRS-IO/OXRS-IO-DigitalIO-ESP-FW) of the firmware from GitHub.

## Supported Hardware
Any ESP32 or ESP8266 with all GPIOs broken out and not connected to or used by additional hardware.

Is designed to run as part of the [OXRS](https://oxrs.io) eco-system.



---

#### Credits
 * Ben Jones <https://github.com/sumnerboy12>
 * Moin <https://github.com/moinmoin-sh>

 ---


#### License
Copyright 2020-present SuperHouse Automation Pty Ltd [www.superhouse.tv](www.superhouse.tv)

The software portion of this project is licensed under the Simplified
BSD License. The "licence" folder within this project contains a
copy of this license in plain text format.

