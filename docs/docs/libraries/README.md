---
tags: [""]
---
# Libraries

## Introduction
Several Libraries have been created to support the OXRS eco-system with the goal to minimize the effort in writing new firmware for OXRS compatible hardware.

The diagram below shows how the libraries relate to each other.

![Image Alt Text](/images/OXRS-SW-Structure.jpg)


### OXRS-SHA-RACK32-Lib
- Helper library for firmware designed to run on the [Rack32](/docs/hardware/controllers/rack32.html) controller
- Handles initialisation and polling for ethernet, MQTT, API and LCD libraries


### [OXRS-SHA-IOHandler-LIB](/docs/libraries/esp32-io-handler-library.html)
- Decodes inputs from various devices like switches, buttons, rotary encoders and more
- Keeps track of output state and handles interlocking and timers
- Typically used with MCP23017 I/O expanders


### [OXRS-IO-API-LIB](/docs/libraries/esp32-api-library.html)
- REST API for device configuration
- Web UI for device configuration
- OTA upload of firmware updates


### [OXRS-IO-MQTT-LIB](/docs/libraries/esp32-mqtt-library.html)
- Maintains MQTT connection
- Decodes JSON config & command payloads and passes them to your firmware for handling
- Provides a simple API for publishing JSON status and telemetry data


### [OXRS-IO-LCD-LIB](/docs/libraries/esp32-lcd-library.html)
- Common status display for OXRS compatible controller with a LCD
- Animated display of the I/O port status

