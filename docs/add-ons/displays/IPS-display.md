---
tags: [""]
---

# 1.54″ 240×240 IPS

<!-- Board Image -->
![IPS Display](/images/addons/ips-display.jpg)

<!-- Board Description -->
IPS Display

This is the IPS display commonly used with the [Rack32](/docs/hardware/controllers/rack32.md) controller via the 8 pin IDC (SPI) header. While there is a slightly smaller version of this display, this one was choosen because it has the CS connection, which is required in our use case.

Most OXRS firmware has some form of support for this display, showing firmware and network/MQTT connection details, along with some form of I/O state depending on the firmware type.

![Image Alt Text](/images/LCD-ScreenShots.jpg)


## Supported Firmware
- OXRS-SHA-StateController-ESP32-FW  [Github](https://github.com/SuperHouse/OXRS-SHA-StateController-ESP32-FW)
- OXRS-SHA-StateMonitor-ESP32-FW [Github](https://github.com/SuperHouse/OXRS-SHA-StateMonitor-ESP32-FW)
- OXRS-BMD-SmokeDetector-ESP32-FW [Github](https://github.com/Bedrock-Media-Designs/OXRS-BMD-SmokeDetector-ESP32-FW)
- OXRS-IO-SecurityMonitor-ESP32-FW [Github](https://github.com/austinscreations/OXRS-AC-SecurityMonitor-ESP32-FW)


## Supported Libraries
- ESP32 LCD Library  [Link](/docs/libraries/esp32-lcd-library.md)


## Where to Buy
- Superhouse [WEBSITE](https://www.superhouse.tv/product/tft-display-breakout/) **<-- Best Choice**
- AliExpress [WEBSITE](https://www.aliexpress.com/item/1005002299290564.html)

<!-- ## FAQs
:::
TODO - to supply some FAQ's
::: -->

## Compatible Hardware
- Rack32  [Link](/docs/hardware/controllers/rack32.md)
