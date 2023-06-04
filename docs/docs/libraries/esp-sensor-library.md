---
tags: ["OXRS-AC-SENSORS-ESP-LIB", "TAG2", "TAG3"]
---
# ESP SENSOR library
<p class="maker">by <b>Austin's Creations</b></p>

> SKU: OXRS-AC-SENSORS-ESP-LIB

## Introduction
This library wraps up an I2C bus scanner + MQTT handling for QWIIC/Stemma I2C sensors

The library Supports
- BH1750 LUX sensor
- SHT40 Temperature and Humidity Sensor
- MCP9808 Temperature Sensor

Using this library means that config upon startup can be dynamic based on device configuration. All incoming and outgoing MQTT is handled by the library, minimizing required code in main sketch. The library also handles the JSON payload for the OXRS API/MQTT adoption code, saving from having to copy/paste extra code in your main sketch. The adopt code is also dynamic - disabling elements that aren't connected.

---

### Dependencies
Library requires quite a few libraries

```c++
#include <Arduino.h>
#include <ArduinoJson.h>
#include <Wire.h>                     // For I2C
#include <Adafruit_MCP9808.h>         // For temp sensor
#include <Adafruit_SHT4x.h>           // For SHT40 Temp / humidity sensor
#include <BH1750.h>                   // For BH1750 lux sensor - non-adafruit library: https://github.com/claws/BH1750
```

### Setup
To use the library, ensure you have it downloaded/installed. The library is normally declared near the top of a sketch. After this is done the library instance needs to be called/set. Because the library uses I2C `Wire.begin()` should be called. You may need to include the SDA + SCL pin numbers in this declaration depending on hardware used.

```c++
#include <OXRS_SENSORS.h>           // Declare the library

OXRS_SENSORS sensors();             // Create library isntance

Wire.begin(SDA,SCL);                // Start I2C connection, but with different I2C pins

sensors.begin();                    // Start the Library - placed within SETUP()
```

There are also routines that need to be called within MQTT routines.

```c++
sensors.setConfigSchema(properties);  // Placed within main sketch ConfigSchema routine

sensors.setCommandSchema(properties); // Placed within main sketch CommandSchema routine

sensors.conf(json);                   // Placed within main sketch CONF callback routine

sensors.cmnd(json);                   // Placed within main sketch CMND callback routine
```

See the libraries built in examples to better see how and where to place routines and callbacks.

### Program Loop
The main loop requires you to request any telemetry data, if if returned, to publish it.

```c++
  StaticJsonDocument<150> telemetry;
  sensors.tele(telemetry.as<JsonVariant>());

  if (telemetry.size() > 0)
  {
    oxrs.publishTelemetry(telemetry.as<JsonVariant>());
  }
```

### Config
The library can automatically handle incoming MQTT config payloads to control sensors.

### Command
The library can automatically handle incoming MQTT commands payloads to control sensors (none current supported).

### Publishing
The library will generate telemetry data in JSON format, ready for publishing.

::: tip
These topics will be different if you set a topic prefix or suffix. E.g. a topic prefix of `home` and suffix of `oxrs` would result in a LWT topic of `home/stat/<clientid>/oxrs/lwt`
:::

|Publish API|Topic|Retained|Description|
|:----------|:----|:-------|:----------|
|`publishTelemetry`|`tele/<clientid>`|false|Publish a JSON **telemetry** message, e.g. when publishing regular sensor data|

## Downloads
Download the latest version of the library on [Github](https://github.com/austinscreations/OXRS-AC-I2CSensors-ESP-LIB).

## Supported Hardware
This library is compatible with ESP32 and ESP8266 microprocessors.

---

#### Credits
 - Austins Creations
 - Ben Jones

---

#### License
Found [here](https://github.com/austinscreations/OXRS-AC-I2CSensors-ESP-LIB/blob/main/LICENSE).
