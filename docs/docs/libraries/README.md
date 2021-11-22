---
tags: [""]
---
# Libraries

## Introduction
Several Libraries have been created to support the OXRS eco system with the goal to minimize the effort in writing new FW for OXRS compatible hardware.

The diagram below shows how the libraries are connected to each other.

![Image Alt Text](/images/OXRS-SW-Structure.jpg)


### OXRS-SHA-RACK32-Lib
- Interface to the top layer firmware

- [Details]TBD

### OXRS-SHA-IOHandler-Lib
- Decodes different types of input actuators like switches, buttons, rotary encoder and more
- Keeps track of output state and handles interlocking and timers
- typical supported HW:  MCP23017 I/O expander

- [Details](/docs/libraries/esp32-io-handler-library.html)


### OXRS-IO-API-Lib
- Web service for basic configuration 
- Interface to configuration UI
- OTA download of SW updates

- [Details]TBD


### OXRS-IO-MQTT-Lib
- Maintains MQTT connection
- TBD

- [Details](/docs/libraries/esp32-mqtt-library.html)


### OXRS-IO-LCD-Lib
- Common status display for OXRS compatible controller with a LCD.
- Animated display of the I/O port status

- [Details](/docs/libraries/esp32-lcd-library.html)

