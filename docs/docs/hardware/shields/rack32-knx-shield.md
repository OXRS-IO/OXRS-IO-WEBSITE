---
tags: ["RACK32", "KNX"]
---
# RACK32 KNX Shield
<p class="maker">by <b>Frank McAlinden</b></p>

<!-- Board Image -->
![RACK32 KNX Shield](/images/rack32-knx-shield-side.jpg)

<!-- Board Description -->
Provides direct control and monitoring of [KNX](https://www.knx.org/) devices over the KNX bus. Requires a KNX Bus Coupling Unit (BCU) similar to [this](https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/). 

By using this shield and a KNX BCU you can program your [RACK32](/docs/hardware/controllers/rack32.html) to communicate directly with the KNX bus. This allows direct control of actuators without the need for any infrastructure (i.e. TCP/IP network, MQTT broker, automation rules engine).

The original intent for this was to provide a failover system in the case of network or MQTT failure.

## Features
- Pass through for RACK32 I2C and SPI breakouts
- I/O breakout for second I2C bus
- Optocoupler to provide galvanic separation between the RACK32 and KNX BCU
- 5x2 pin header for direct fixing of [Siemens KNX BCU](https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/)

## Supported Firmware
There is currently no firmware support. But the [State Monitor](/docs/firmware/state-monitor-esp32.html) firmware has a placeholder for adding failover support in the `publishEvent()` function.

Once firmware for this has been written this page will be updated.

## Additional Resources
- Blog - [Arduino and KNX](https://intranet-of-things.com/smarthome/infrastructure/knx/arduino/)
- Arduino library - [Arduino EIB/KNX Interface via TP-UART](https://github.com/thorsten-gehrig/arduino-tpuart-knx-user-forum)
- Arduino library - [KNX Device Library for Arduino](http://liwan.fr/KnxWithArduino/)

## Where to Buy
- RACK32 KNX Shield - contact [Frank McAlinden](/glossary/makers.html)
- KNX BCU - [www.knxtra.co.nz](https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/)
- KNX BCU - [Amazon DE](https://www.amazon.de/-/en/Siemens-Coupler-Fixing-Hanging-Bracket/dp/B00B7ZI5FO)

## FAQs
::: details 
How is the KNX BCU powered? Answer: It is powered directly from the KNX bus
:::

::: tip Maker Info
**Maker:** Frank McAlinden

**Link:** [Frank McAlinden](/glossary/makers.html)
:::

## Compatible With
- RACK32 [Link](/docs/hardware/controllers/rack32.html)