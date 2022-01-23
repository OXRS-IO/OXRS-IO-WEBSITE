---
tags: ["OXRS-SHA-RACK32", "URC", "RACK32"]
---
# Rack32
<p class="maker">by <b>SuperHouse Automation</b></p>

> SKU: OXRS-SHA-RACK32

<!-- Board Image -->
![SuperHouse Automation Rack32 ESP32 control board](/images/oxrs-rack32.jpg)

<!-- Board Description -->
A general purpose control board for rack mount projects.

DIY rack-mount projects often require an Ethernet connection, a status display, power regulation, and other features that are not specific to the project.

This board fits into a rack-mount case and provides those common features so they don't have to be recreated every time.

## Features

- **ESP32** microcontroller with **WiFi**.
- **10/100Mbps** Ethernet.
- Support for both DIY (12V) PoE and **802.3af PoE**.
- Pluggable terminal block for optional external DC power input.
- Automotive-grade voltage regulator for harsh electrical environments.
- 6-way IDC "I2C-Breakout" header for linking to other boards.
- 8-way IDC "SPI-LCD" header for connection to an LCD.
- **USB-C** connector for loading firmware.
- Auto power source selection between USB-C, PoE, and external DC.
- I/O header with power, 2 x I2C ports, and second hardware serial port.
- Micro SD card slot for config files, logs, and media storage.
- Onboard **temperature sensor**.
- Header for front-panel power LED.
- Can be built with onboard PCB antenna or external WiFi antenna.

::: danger PoE Bypass Jumpers
The PoE bypass jumper headers are 'Red' for a reason. **DO NOT** insert these jumpers if you are intending to power the Rack32 via **802.3af PoE**. ONLY insert them if you intend using DIY (12V) PoE, otherwise you will apply 48VDC from the **802.3af PoE** source to the L78S05CV linear 5V regulator (25VDC max input voltage) and destroy it.
:::

::: danger External I2C Hardware
**DO NOT** connect any external supported hardware to the 'I2CBreakout' socket while the Rack32 is powered up as this will likely cause a failure of the AP2112K LDO 3.3V regulator or the ESP32 itself. **ONLY connect external supported hardware to the 'I2CBreakout' socket when the Rack32 is powered down.**
:::

## Supported Firmware
- OXRS-SHA-SmokeDetector-ESP32-FW [Github](https://github.com/SuperHouse/OXRS-SHA-SmokeDetector-ESP32-FW)
- OXRS-SHA-StateController-ESP32-FW  [Github](https://github.com/SuperHouse/OXRS-SHA-StateController-ESP32-FW)
- OXRS-SHA-StateMonitor-ESP32-FW [Github](https://github.com/SuperHouse/OXRS-SHA-StateMonitor-ESP32-FW)

## Supported Libraries
- OXRS-SHA-Rack32-ESP32-LIB [Github](https://github.com/SuperHouse/OXRS-SHA-Rack32-ESP32-LIB)

## Additional Resources
- More info [Github](https://github.com/SuperHouse/RACK32)

## Where to Buy
- [SuperHouse Store](https://www.superhouse.tv/product/rack32-universal-rack-controller-board/)

## FAQs
::: details Does it come with a power supply?
TODO - Jon to supply some FAQ's
:::

::: tip Maker Info
**Maker:** SuperHouse Automation

**Link:** [https://www.superhouse.tv](https://www.superhouse.tv)
:::

## Compatible Hardware
- Universal Input/Output (UIO) 16Port [Link](/docs/hardware/input-output-devices/smoke-detector-sd-16port.html)
