---
tags: ["OXRS-IO-LCD-ESP32-LIB", "TAG2", "TAG3"]
---
# ESP32 LCD library
<p class="maker">by <b>OXRS Core Team</b></p>

> SKU: OXRS-IO-LCD-ESP32-LIB

## Introduction
This library serves a common status display for OXRS compatible controller with a LCD.

![Image Alt Text](/images/LCD-ScreenShots.jpg)

The screen shots above show examples for 
  - State Monitor     (input only, 128 inputs, switches, buttons, ...) 
  - State Controller  (output only, 128 outpus, relays)
  - Smoke Detector    (input and output, 16 inputs, 32 outputs, special use case smoke detector)

For most of the fields the displayed information is the same for all three different I/O-boards, except the port animation is dedicated to the specific I/O.

The header shows the maker logo together with FW related information (details on the logo are below). 

The second block shows 
  - IP-address of the device. The virtual LED to the left shows the IP link status up/down in green/red. Self discovered by the lib.
  - MAC address of the device. Self discovered by the lib.
  - Wildcard MQTT topic for publish and subscribe. The two virtual LEDs to the left show MQTT activity (RX top, TX bottom) and flash when a message is received or sent. Self discovered by the lib.
  - Temperature. The value shown has to be supplied and updated periodically by the FW. The lib serves an API call `OXRS_lcd::show_temp (float temperature)` for this purpose. E.g. the RACK32 controller uses this for on-board temperature monitoring.
  
The third block shows the port animation. The layout of this field depends on the I/O-board and it's functionality. The lib reads the I/O-pins of the MCP23017 I/O-expander chips on the I/O-boards in it's loop() and reacts on any change by changing the shape and/or color of the associated virtual LED. Input LEDs are shown in yellow, output LEDs are shown in red if active. Not detected MCP23017 chips are indicated by a gray outline.

The bottom row is reserved to show events published over MQTT. The latest event is shown for 3 seconds and the display dimms after 10 seconds of inactivity (defaults)

---

## Configuration
### General

This library is designed to support a ST7789 based 240x240 pixel display.

It requires the `TFT_eSPI` library by Bodmer to be installed and configured for the target MCU + display.

You can install this library a number of ways;

1. Install via Arduino Library Manager (search for `TFT_eSPI`)
2. Download [original](https://github.com/Bodmer/TFT_eSPI) version from GitHub
3. Download [this](https://github.com/OXRS-IO/TFT_eSPI) version from GitHub which has been pre-configured for use with the ST7789 display **(recommended)**

If you choose options (1) or (2) you will need to make some changes to the `TFT_eSPI` library source files to configure it for the ST7789 display. For your convenience a suitable configuration file (`Setup000_RACK32_ST7789.h`) can be found in the `\User_Setup` folder of this library. Instructions on how to install and activate this setup can be found in the header of `Setup000_RACK32_ST7789.h`.

### Maker logo displayed on LCD
This lib has the ability to display a maker supplied logo in the top/left corner of the LCD.

The reserved space for a logo is 40 pixel high and 40 pixel wide at the top/left corner of the LCD.
* A larger logo will be cropped starting with the bottom/left corner of the .bmp.
* A smaller logo will be displayed starting at the bottom/left position of the reserved space.

#### Create your own logo
The first step to create your own logo is to prepare a 40x40 pixel 24-bit-bitmap file (.bmp). Use your choice of image processing tool. If you have an image file already from which you want to use an extract, you need to
* create/crop a quadratic extract of the desired content (width = height).
* change the image size to 40 x 40 pixel and save it as 24-bit-bitmap file named logo.bmp.

#### Deploy logo from SPIFFS
To use this method upload the logo.bmp file to the SPIFFS of your target MCU.
If you are using the Arduino IDE, copy your logo.bmp to the data folder of your sketch and use `ESP32 Sketch Data Upload` from the tools menu to upload everything located in the data folder.

#### Deploy logo embedded in FW binary
Using this method embeds your maker logo in the binary of your sketch. This guaranties the availability of your logo at runtime independent of the availability of the SPIFFS and without having to do the extra upload.

Following steps are required:
* convert your `logo.bmp` to a C header file using the `convert.py` script supplied in the tools folder of the lib
* copy `logo.h` into your sketch folder
* include `logo.h` in your FW.ino file, e.g. `#include "logo.h"`

::: tip
Use `convert.py -i logo.bmp -o logo.h -v FW_LOGO` to create a `logo.h` header file from `logo.bmp`
:::

#### Logo selection at start up
At startup the LCD lib searches for a logo in the following order, stopping once one is found;
1. check for `/logo.bmp` stored in SPIFFS
1. check for `fwLogo` reference passed by `OXRS_lcd::draw_header()`
1. use default `OXRS_logo` from PROGMEM (embedded in library)

---

## Downloads
Download the latest version of the firmware on [Github](https://github.com/OXRS-IO/OXRS-IO-LCD-ESP32-LIB).

## Supported Hardware
Designed to run on ESP32 based devices.
- [Rack32](/docs/hardware/controllers/rack32.html)

---

#### Credits
 - [OXRS](https://oxrs.io/) Core Team

---

#### License
Found [here](https://github.com/OXRS-IO/OXRS-IO-LCD-ESP32-LIB/blob/main/LICENSE).
