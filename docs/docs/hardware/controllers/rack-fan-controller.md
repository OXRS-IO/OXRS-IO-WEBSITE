---
tags: ["OXRS-AC-RACKFANCONTROLLER", "fan"]
---

# Rack Fan Controller
<p class="maker">by <b>Austin's Creations</b></p>

> SKU: OXRS-AC-RACKFANCONTROLLER

<!-- Board Image -->
![Austin's Creations Rack Fan Controller](/images/oxrs-rack-fan-controller.jpg)

<!-- Board Description -->
This board allows for the control of 8 fans. It can control 3-4 wire fans that are mounted within an enclosure. the fans are connected to breakouts within a case, and eahc breakout uses and RJ45 socket. that links to a main controller that has an 8 port RJ45 socket

## Features

- TCA9548A I2C MUX chip - giving the system expandability
- EMC2101 Fan control chip (one on each TCA i2c line)
- 6 pin IDC connection for easy linkign to rack32 or room8266 or other compatible controller
- support to control a fan that the baord itself is mounted in
- offered breakout has onboard temp sensor, and purcase can include 30mm square 4 wire 5v fan
- allows the use of 5v or VDD to be sent to any given fan (selectable)
- has optional 2.1mm or terminal block power injection, to reduce current limits from IDC cable

## Library
- Fan Control library on [Github](https://github.com/austinscreations/OXRS-AC-FanControl-ESP-LIB)

## Supported Firmware
- Fan Controller firmware on [Github](https://github.com/austinscreations/OXRS-AC-FanController-ESP32-FW) **<-- Firmware incomplete -->**
- Power Distribution Unit (PDU) firmware on [Github](https://github.com/Bedrock-Media-Designs/OXRS-BMD-PDU-ESP32-FW)

## Additional Resources
- Schematics and design files on [Github](https://github.com/austinscreations/Rack-Fan-Controller)

## Where to Buy
- Contact on Discord or [website](https://www.austinscreations.ca/)

<!-- ## FAQs
:::
TODO - to supply some FAQ's
::: -->

::: tip Maker Info
**Maker:** Austin's Creations

**Link:** [https://www.austinscreations.ca/](https://www.austinscreations.ca/)
:::

## Compatible Hardware
- [Rack32](/docs/hardware/controllers/rack32.md)
- [Room8266](/docs/hardware/controllers/room8266.md)

