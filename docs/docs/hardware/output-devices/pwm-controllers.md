---
tags: ["PWM", "LED","OXRS-AC-PWMcontroller"]
---
# PWM Controllers
<p class="maker">by <b>Austin's Creations</b></p>

<!-- Board Image -->
![Austin's Creations PWM Controller](/images/pwm-controllers.jpg)

<!-- Board Description -->
WOAH, Look at all the LEDs

Lets be honest LEDs are everywhere and they look awesome. But most LED setups can be boring. Or maybe you dont want to spend the moeny on fully addressable LEDs becuase lets be honest in most cases they are overkill. Well that's where this collection of LED controllers comes in

These controllers are designed for controlling common anode 12-24v LED strips.

## Features
- 5 channel control or 16 channel (expanable) control
- 12-24V common andode led strip compatibility
- 30V 8A MOSFET per channel

## Choose Your Adventure
| Controller    | LED features  | Firmware |
| :------------ | :------------ | :------- |
| 16CH I2C PWM Controller | 16ch - I2C control and Expandble (requires extra controller) | ESP8266 [Github](https://github.com/austinscreations/OXRS-AC-PCALedController-ESP8266-FW) <br> ESP32 [Github](https://github.com/austinscreations/OXRS-AC-PCALedController-ESP32-FW) |
| LilyGO PWM Shield       | 5CH LED controller + I2C QWIIC             |   ESP32 [Github](https://github.com/austinscreations/OXRS-AC-GPIOLedController-ESP32-FW) |
| D1 Mini PWM             | 5CH LED controller + I2C QWIIC             |   ESP8266 [Github](https://github.com/austinscreations/OXRS-AC-GPIOLedController-ESP8266-FW)|


## Notes
D1 Mini
- the D1 mini only requires one power input, either from 2.1mm jack or the terminal block. this will pwoer both the D1 Mini and your lights

LilyGO
- The LilyGO can be powered from POE or it's on board usb c connection. The LED strip can be pwoered via teh 2.1mm jack or the terminal block. The sheild will **NOT** power the LilyGO

Required to Run the 16Ch PWM Board
- [Room8266](/docs/hardware/controllers/room8266.md)
- [Rack32](/docs/hardware/controllers/rack32.md)

## Cases
All these devices have 3d printable cases
The 16ch cases, is designed to work with the room8266, and they link together with dovetails
The LilyGO and D1 Mini case are designed with 2 lids, the main lid which is flat, allows everythign to be tucked away nicely, but with the use of a 3rd lid ontop of the main lid, you can now use cutouts that are on the main lid to hold I2C sensors. giving a seemless and adaptable case for holding parts together.

Cases can be found on [Github](https://github.com/austinscreations/PWM-Controllers/tree/main/3D%20Printable%20Cases)

## Additional Resources
- Schematics and design files on [Github](https://github.com/austinscreations/PWM-Controllers)

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
