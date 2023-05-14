---
tags: ["I2CRJ45", "URC", "modular", "modular I2CRJ45"]
---
# Modular-RJ45
<p class="maker">by <b>Austins Creations</b></p>

<!-- Board Image -->
![Austins Creations Modular I2CRJ45](/images/austins-creations/modular_I2CRJ45.jpg)

<!-- Board Description -->
I2C compatible board that handles multiple inputs via an RJ45 connection

Designed to be assembled in a modular format so multiple boards can easily fit next to each other

## Features
- Comes with 8 port
- Expandable up to 32 ports
- Firmware supports multiple types of switches, contacts, encoders
- 12-24v DIY POE on the RJ45 connections for switches with basic LEDs
- 4 inputs per port
- Per port power switching via external DIP switches
- Each port has a 150mA poly fuse
- Will fit side by side in the same space as a normal I2CRJ45 board from [SuperHouse](/docs/hardware/input-devices/I2CRJ45.md)

## Using the product
Using your modular I2CRJ45 board is a fairly strightforward process. eachbaord has a set of screw terminals. these are for your 12-24v power input (12v is the recommended option). there are two terminals to allow for easy daisy chaining between other boards. The board **Doesn't** use power input on IDC connector. only VCC (logic voltage; commonly 3.3v with the [rack32](/docs/hardware/controllers/rack32.md) / [oxrs black](/docs/hardware/controllers/oxrs-black.md))

**Don't hot swapping your I2C cable**<br />
The 2*3 pin 2.54mm IDC cable isn't recommended to be removed or added when the system is powered, turn off power before changing things

There are a totally of 3 DIP switches built into the Board. The one on the right top is labeled length wise along itself *I2C P/U* this is for your I2C pullup resistors. The device that is the furthest away from the main rack controller should have this enabled. (both pin turn on)

The other two DIP switches are 4 pin. The lowest pin - closest to the 8 port RJ45 is the *RST* this connects the MCP (the one to the right of each DIP) to the main controller RST line. These should be on, but can be turned off when trying to solve debug problems

The other three positions on those 4 position DIP switches are for setting the MCP address. Up to 8 MCPs can be on an I2C bus but they each need their own address, position 0 starts at the top of the PCB

| Position | 0X20 | 0X21 | 0X22 | 0X23 | 0X24 | 0X25 | 0X26 | 0X27 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 0 | off | on | off | off | on | on | off | on |
| 1 | off | off | on | off | on | off | on | on |
| 2 | off | off | off | on | off | on | on | on |

The ports are numbered:
|||||||
| :-: | :-: | :-: | :-: | :-: | :-: |
|Top | |1 | 3 | 5 | 7 |
|Bottom | | 2 | 4 | 6 | 8 |

From looking at the ports in front of an assembly like it would look installed in a rack case

Each Port has 8 pins they breakout as follows:
|1|2|3|4|5|6|7|8|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|Input 1|Input 2|Input 3|VDD|VDD|Input 4|GND|GND|

VDD is your system voltage; AKA the power being feed by the Screw Terminals (12-24v)

## Supported Firmware
- OXRS-SHA-StateController-ESP32-FW  [Github](https://github.com/SuperHouse/OXRS-SHA-StateController-ESP32-FW)
- OXRS-SHA-StateMonitor-ESP32-FW [Github](https://github.com/SuperHouse/OXRS-SHA-StateMonitor-ESP32-FW)
- OXRS-BMD-SmokeDetector-ESP32-FW [Github](https://github.com/Bedrock-Media-Designs/OXRS-BMD-SmokeDetector-ESP32-FW)
- OXRS-IO-SecurityMonitor-ESP32-FW [Github](https://github.com/austinscreations/OXRS-AC-SecurityMonitor-ESP32-FW)

## Additional Resources
- More info [Github](https://github.com/SuperHouse/I2CRJ45)

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
- Rack32 [Link](/docs/hardware/controllers/rack32.md)
- OXRS Black [Link](/docs/hardware/controllers/oxrs-black.md)
