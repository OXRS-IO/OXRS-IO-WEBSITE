---
tags: ["OXRS-AC-SENSORS-ESP-LIB", "TAG2", "TAG3"]
---
# ESP SENSOR library
<p class="maker">by <b>Austin's Creations</b></p>

> SKU: OXRS-AC-SENSORS-ESP-LIB

## Introduction
This library wraps up an i2c bus scanner + mqtt handling for qwiic / stemma I2C sensors

The library Supports
- BH1750 LUX sensor
- SHT40 Temperature and Humidity Sensor
- MCP9808 Temperature Sensor
- PCF8523 RTC module
- 128x32 OLED Display

Using this library means that config upon startup can be dynamic based on device configuration. all incoming and outgoing mqtt is handled by teh library, minimizing required code in main sketch. The library also handles the json payload for the OXRS API/MQTT adopt code. saving from having to copy / paste extra code in your main sketch. the adopt code is also dynamic - disabling elements that aren't connected.

---

### Dependencies
Library requires quite a few libraries

```c++
#include <Arduino.h>
#include <OXRS_MQTT.h>
#include <ArduinoJson.h>
#include <Wire.h>                     // For I2C
#include <Adafruit_MCP9808.h>         // For temp sensor
#include <Adafruit_SSD1306.h>         // For OLED display
#include <RTClib.h>                   // For PCF8523 RTC
#include <BH1750.h>                   // For BH1750 lux sensor - non-adafruit library: https://github.com/claws/BH1750
#include <Adafruit_SHT4x.h>           // For SHT40 Temp / humidity sensor

#if defined(ESP32)
  #include <WiFi.h>
  #include <ETH.h>
  #include <Ethernet.h> 
#elif defined(ESP8266)
  #include <ESP8266WiFi.h>
  #include <Ethernet.h>
#endif
```

### Setup
To use the library, ensure you have it downloaded / installed. The library is normally declared near the top of a sketch. after this is done the library isnatnce needs to be called / set. becuase the library uses i2c the `wire.begin();` should be called. you may need to include the SDA,SCL pin numbers in this declaration depending on hardware used.

```c++
#include <OXRS_SENSORS.h>            // Declare the library

OXRS_SENSORS sensors(mqtt);          // Create library isntance - * declare after mqtt

Wire.begin();                        // Start I2C connection
Wire.begin(SDA,SCL);                 // Start I2C connection, but with different I2C pins

sensors.begin();                     // start the Library - placed within SETUP()

sensors.oled(WiFi.macAddress(mac));  // Called before setting up network - will show MAC on screen
sensors.oled(Ethernet.localIP());    // Called after network setup - will now update display with IP address
```


There are also routines that need to be called within mqtt rountines.

```c++
sensors.setConfigSchema(properties);  // Placed within main sketch ConfigSchema routine

sensors.setCommandSchema(properties); // Placed within main sketch CommandSchema routine

sensors.conf(json);                   // Placed within main sketch CONF callback routine

sensors.cmnd(json);                   // Placed within main sketch CMND callback routine
```

See the libraries built in examples to better see how and where to place routines and callbacks

### Program Loop
The main loop requires two routines, one keeps an OLED updated, the other updates the MQTT TELE topic with sensor data per the set interval

```c++
// Required Routines in loop()

sensors.oled(); // updates OLED
sensors.tele(); // update MQTT TELE per configured interval
```

### Config
The library can autoamtically handle incoming mqtt config payloads to control sensors

### Command
The library can automatically handle incoming mqtt commands payloads to control sensors

### Publishing
The library Automatically handles the sending of TELE data

::: tip
These topics will be different if you set a topic prefix or suffix. E.g. a topic prefix of `home` and suffix of `oxrs` would result in a LWT topic of `home/stat/<clientid>/oxrs/lwt`
:::

|Publish API|Topic|Retained|Description|
|:----------|:----|:-------|:----------|
|`publishTelemetry`|`tele/<clientid>`|false|Publish a JSON **telemetry** message, e.g. when publishing regular sensor data|

## Downloads
Download the latest version of the library on [Github](https://github.com/austinscreations/OXRS-AC-I2CSensors-ESP-LIB).

## Supported Hardware
This library is compatible with  ESP32 and ESP8266 microprocessors.

---

#### Credits
 - Austins Creations
 - Ben Jones

---

#### License
Found [here](https://github.com/austinscreations/OXRS-AC-I2CSensors-ESP-LIB/blob/main/LICENSE).
