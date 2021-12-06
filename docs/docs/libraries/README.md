---
tags: [""]
---
# Libraries

## Introduction
Several Libraries have been created to support the OXRS eco-system with the goal to minimize the effort in writing new firmware for OXRS compatible hardware.

The diagram below shows how the libraries relate to each other.

![Image Alt Text](/images/OXRS-SW-Structure.jpg)


### OXRS-SHA-RACK32-Lib
- Interface to the top layer firmware

- [Details]TBD

### OXRS-SHA-IOHandler-Lib
- Decodes inputs from various devices like switches, buttons, rotary encoders and more
- Keeps track of output state and handles interlocking and timers
- Typically used with MCP23017 I/O expanders

- [Details](/docs/libraries/esp32-io-handler-library.html)


### OXRS-IO-API-Lib
- REST API for device configuration
- Web UI for device configuration
- OTA upload of firmware updates

- [Details](/docs/libraries/esp32-api-library.html)


### OXRS-IO-MQTT-Lib
- Maintains MQTT connection
- Decodes JSON config & command payloads and passes them to your firmware for handling
- Provides a simple API for publishing JSON status and telemetry data

- [Details](/docs/libraries/esp32-mqtt-library.html)


### OXRS-IO-LCD-Lib
- Common status display for OXRS compatible controller with a LCD
- Animated display of the I/O port status

- [Details](/docs/libraries/esp32-lcd-library.html)

