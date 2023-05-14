---
tags: ["URC", "Black", "OXRS Black"]
---
# OXRS Black
<p class="maker">by <b>Austins Creations</b></p>

<!-- Board Image -->
![SuperHouse Automation Rack32 ESP32 control board](/images/austins-creations/oxrs_black.jpg)

<!-- Board Description -->
A general purpose control board for rack mount projects.

DIY rack-mount projects often require an Ethernet connection, a status display, power regulation, and other features that are not specific to the project.

This board fits into a rack-mount case and provides those common features so they don't have to be recreated every time.

## Features

- **ESP32** microcontroller with **WiFi**.
- **10/100Mbps** Ethernet.
- Screw terminal block for 12-24v DC power input (12v recommended system voltage).
- 6-way IDC "I2C-Breakout" header for linking to other boards.
- 8-way IDC "SPI-LCD" header for connection to an LCD.
- 10-way IDC "KNX" an Isolated Serial connection with the main intent being used for a KNX adapter
- 5 pin 1.25mm JST Connection for RS485
- **USB-C** connector for loading firmware.
- Header for front-panel power LED.
- LM2596s 3.3v Power regulator - to meet all your power needs
- TCA4307 Hot Swap I2C IC to try and protect the I2C bus from harm
- 2x qwiic I2C connectors (each one on a seprate bus)

## Using the product

The two pin header next to the I2CBR 2x3 IDC header is to enable / disable VDD (12-24v) power. If your devices don't need this power it is advaible to leave this disabled.

The I2CBR and qw1 (qwiic I2c connection) share a connection with the TCA4307 Hot Swap I2C IC

The RS485 was initially added for testing with a TFT rack screen repalcement idea that potentially could allow the screen and controller to be more reliable than the SPI connection has been in some situations. It's currently untested (2023-05-14)

**Don't hot swapping your I2C cable**<br />
The 2*3 pin 2.54mm IDC cable isn't recommended to be removed or added when the system is powered, turn off power before changing things
**BUT** The good news is that in case soemthing does go wrong the OXRS Black has been designed with TCA4307 Hot Swap I2C IC to try and protect the I2C from accidental harm. But best practice it to power down the device before making changes


<!-- ## Supported Firmware
needs to be created (once  a board is built)
-->

<!-- ## Supported Libraries
needs to be created (once  a board is built)
-->

## Additional Resources
- More info [Github](https://github.com/austinscreations/Oxrs-Black)

## Where to Buy
- Contact on Discord or [WEBSITE](https://www.austinscreations.ca/)

<!-- ## FAQs
:::
TODO - to supply some FAQ's
::: -->

::: tip Maker Info
**Maker:** Austin's Creations

**Link:** [https://www.austinscreations.ca/](https://www.austinscreations.ca/)
:::

## Compatible Hardware
- I2CRJ45 [Link](/docs/hardware/input-devices/I2CRJ45.md)
- Modular I2CRJ45 [Link](/docs/hardware/input-devices/Modular-I2CRJ45.md)
- Modular Security I2CRJ45 [Link](/docs/hardware/input-devices/Modular-Security-I2CRJ45.md)
- Modular Rack Fan Controller [Link](/docs/hardware/controllers/rack-fan-controller.md)
- Universal Input/Output (UIO) 16Port [Link](/docs/hardware/input-output-devices/smoke-detector-sd-16port.md)
- 16ch PWM Controller [Link](/docs/hardware/output-devices/pwm-controllers.md)