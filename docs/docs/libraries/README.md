---
tags: [""]
---
# Libraries

## Introduction
Several libraries have been created to support the OXRS eco-system with the goal to minimise the effort in writing new firmware for OXRS compatible hardware.

The diagram below shows how the libraries relate to each other;

![OXRS Libraries](/images/OXRS-SW-Structure.jpg)


### [OXRS-SHA-RACK32-ESP32-LIB](https://github.com/SuperHouse/OXRS-SHA-Rack32-ESP32-LIB)
- Helper library for firmware designed to run on the [Rack32](/docs/hardware/controllers/rack32.md) controller
- Handles initialisation and polling for ethernet, MQTT, API and LCD libraries


### [OXRS-IO-IOHandler-ESP32-LIB](/docs/libraries/esp32-io-handler-library.md)
- Decodes inputs from various devices like switches, buttons, rotary encoders and more
- Keeps track of output state and handles interlocking and timers
- Typically used with MCP23017 I/O expanders


### [OXRS-IO-API-ESP32-LIB](/docs/libraries/esp32-api-library.md)
- REST API for device configuration
- Web UI for device configuration
- OTA upload of firmware updates


### [OXRS-IO-MQTT-ESP32-LIB](/docs/libraries/esp32-mqtt-library.md)
- Maintains MQTT connection
- Decodes JSON config & command payloads and passes them to your firmware for handling
- Provides a simple API for publishing JSON status and telemetry data


### [OXRS-IO-LCD-ESP32-LIB](/docs/libraries/esp32-lcd-library.md)
- Common status display for OXRS compatible controller with a LCD
- Animated display of the I/O port status

