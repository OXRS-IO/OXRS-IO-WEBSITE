---
tags: ["OXRS-FMA-RACK32KNXSHIELD", "RACK32", "KNX"]
---
# Rack32 KNX Shield
<p class="maker">by <b>Frank McAlinden</b></p>

> SKU: OXRS-FMA-RACK32KNXSHIELD

<!-- Board Image -->
![Rack32 KNX Shield](/images/rack32-knx-shield-side.jpg)

<!-- Board Description -->
Provides direct control and monitoring of [KNX](https://www.knx.org/) devices over the KNX bus. Requires a KNX Bus Coupling Unit (BCU) similar to [this](https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/). 

By using this shield and a KNX BCU you can program your [Rack32](/docs/hardware/controllers/rack32.md) to communicate directly with the KNX bus. This allows direct control of actuators without the need for any infrastructure (i.e. TCP/IP network, MQTT broker, automation rules engine).

The original intent for this was to provide a failover system in the case of network or MQTT failure.

## Features
- Pass through for Rack32 I2C and SPI breakouts
- I/O breakout for second I2C bus
- Optocoupler to provide galvanic separation between the Rack32 and KNX BCU
- 5x2 pin header for direct fixing of [Siemens KNX BCU](https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/)

## Supported Firmware
There is a fork of the [State Monitor](/docs/firmware/state-monitor-esp32.md) firmware [here](https://github.com/sumnerboy12/OXRS-SHA-StateMonitor-ESP32-FW) which includes support for this shield.

This branch adds the option to set a KNX group address in config for each input. If the device enters failover mode it will publish KNX telegrams to the configured KNX group address directly on the KNX bus. This has been tested and works well.

## Additional Resources
- Blog - [Arduino and KNX](https://intranet-of-things.com/smarthome/infrastructure/knx/arduino/)
- Arduino library - [Arduino EIB/KNX Interface via TP-UART](https://github.com/thorsten-gehrig/arduino-tpuart-knx-user-forum)
- Arduino library - [KNX Device Library for Arduino](http://liwan.fr/KnxWithArduino/)

## Where to Buy
- Rack32 KNX Shield - contact <frankmc@internode.on.net>
- KNX BCU - [www.knxtra.co.nz](https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/)
- KNX BCU - [Amazon DE](https://www.amazon.de/-/en/Siemens-Coupler-Fixing-Hanging-Bracket/dp/B00B7ZI5FO)

## FAQs
::: details 
How is the KNX BCU powered? Answer: It is powered directly from the KNX bus
:::

::: tip Maker Info
**Maker:** Frank McAlinden

**Link:** [Frank McAlinden](/glossary/makers.md)
:::

## Compatible With
- Rack32 [Link](/docs/hardware/controllers/rack32.md)
