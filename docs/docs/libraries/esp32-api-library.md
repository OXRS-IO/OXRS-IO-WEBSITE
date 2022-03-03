---
tags: ["OXRS-IO-API-ESP32-LIB", "TAG2", "TAG3"]
---
# ESP32 API library
<p class="maker">by <b>OXRS Core Team</b></p>

> SKU: OXRS-IO-API-ESP32-LIB

## Introduction
This library adds a REST API to OXRS compatible devices, providing a means to bootstrap MQTT configuration, retrieve adoption details, send configuration and commands, and perform over-the-air (OTA) updates. 

Using this library allows you to release pre-compiled versions of your firmware. Users don't need to manually type in their MQTT broker details, compile the library, and then flash their devices. It can all be done via the OXRS API making releasing and distributing the firmware much easier.

---

### How does it work?
This library uses the Arduino [aWOT](https://github.com/lasselukkari/aWOT) library by Lasse Lukkari. It also makes use of the SPIFFS file system, if available, for persisting configuration and restoring on startup.

The library will expose the following REST API endpoints on the device;

|REST API|Supports|Description|
|:-------|:-------|:----------|
|`/api/adopt`|GET|Gets firmware and network details and configuration/command schemas, in JSON format|
|`/api/restart`|POST|Force a soft-reset|
|`/api/factoryReset`|POST|Format SPIFFS and force a soft-reset|
|`/api/mqtt`|GET & POST|Get or set MQTT configuration, in JSON format, and persist to SPIFFS|
|`/api/config`|GET & POST|Get or set device configuration, in JSON format based on the `commandSchema` in the adoption payload, and persist to SPIFFS|
|`/api/command`|POST|Send device commands, in JSON format based on the `commandSchema` in the adoption payload|
|`/api/ota`|POST|Update device firmware with a new binary provided in the request body|

::: warning
There is no authentication on any of the REST API endpoints. **DO NOT** expose your device to the internet... **EVER**!!
:::

## Usage
The library needs to be initialised with an instance of [`OXRS_MQTT`](/docs/libraries/esp32-mqtt-library.md), since we need to initialise that with the MQTT configuration provisioned by the API on startup.

The API library will pass any device configuration, provisioned via the `/api/config` REST API, down to the MQTT library for handling, since that already has all the config callbacks used by the firmware. This ensures that all configuration is handled by your firmware in the same place, regardless of whether it was provisioned by the API, or received via MQTT on the `conf/<clientid>` topic.

The API library will pass any device commands, provisioned via the `/api/command` REST API, down to the MQTT library for handling, since that already has all the command callbacks used by the firmware. This ensures that all commands are handled by your firmware in the same place, regardless of whether it was sent via the API, or received via MQTT on the `cmnd/<clientid>` topic.

You can optionally provide the adoption details for the device by setting the `.onAdopt()` callback. This callback will be called any time the API or MQTT libraries are required to generate the adoption payload. The adoption payload is available via the `/api/adopt` REST API endpoint or published via MQTT to `stat/<deviceid>/adopt`, upon successful connection to your MQTT broker. 

The following code is all you need to enable the OXRS REST API and HTML pages on your device;

``` c
// MQTT client
PubSubClient _mqttClient(_client);
OXRS_MQTT _mqtt(_mqttClient);

// REST API
EthernetServer _server(80);
OXRS_API _api(_mqtt);

void setup()
{
  // Set up the REST API
  _api.begin();
}

void loop()
{
  // Handle any Ethernet REST API requests
  EthernetClient client = _server.available();
  _api.checkEthernet(&client);
}
```

::: tip
You can use this library with a WiFi connected device as well. Use `WifiServer`, `WiFiClient` and `_api.checkWifi()` in place of the Ethernet versions in the code snippet above.
:::

## REST API
Listed below are the REST API endpoints supported by this library, including example payloads.

### GET `/api/adopt`
Retrieves the adoption details for the device;
``` json
{
  "firmware": {
    "name": "OXRS-SHA-StateMonitor-ESP32-FW",
    "shortName": "State Monitor",
    "maker": "SuperHouse Automation",
    "version": "3.5.0"
  },
  "network": {
    "ip": "192.168.40.64",
    "mac": "94:B9:7E:F1:D2:5B"
  },
  "configSchema": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "OXRS-SHA-StateMonitor-ESP32-FW",
    "type": "object",
    "properties": {
      "inputs": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "index": {
              "type": "integer",
              "minimum": 1,
              "maximum": 128
            },
            "type": {
              "enum": [
                "button",
                "contact",
                "rotary",
                "switch",
                "toggle"
              ]
            },
            "invert": {
              "type": "boolean"
            }
          },
          "required": [
            "index"
          ]
        }
      },
      "temperatureUpdateMillis": {
        "type": "integer",
        "minimum": 0
      }
    }
  },
  "commandSchema": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "OXRS-SHA-StateMonitor-ESP32-FW",
    "type": "object",
    "properties": {
      "restart": {
        "type": "boolean"
      }
    }
  }
}
```

### POST `/api/restart`
Empty payload. Soft-restarts the device.

### POST `/api/factoryReset`
Empty payload. Formats the SPIFFS (if present) and soft-restarts the device.

### GET `/api/mqtt`
Retrieves the current MQTT configuration, excluding any password (if set);
``` json
{
    "broker": "mqtt.home",
    "port": "1883",
    "clientId": "f1d25b",
    "username": "oxrs",
    "topicPrefix": "",
    "topicSuffix": "",
    "connected": true,
    "topics": {
        "lwt": "stat/f1d25b/lwt",
        "adopt": "stat/f1d25b/adopt",
        "config": "conf/f1d25b",
        "command": "cmnd/f1d25b",
        "status": "stat/f1d25b",
        "telemetry": "tele/f1d25b"
    }
}
```
Also includes a `connected` flag which indicates if the device is connected to the MQTT broker. And the full set of topics this device is using, for convenience.

### POST `/api/mqtt`
Update the current MQTT configuration, and persist to SPIFFS so it can be restored on restart;
``` json
{
    "broker": "mqtt.home",
    "port": "1883",
    "clientId": "f1d25b",
    "username": "oxrs",
    "password": "secret",
    "topicPrefix": "",
    "topicSuffix": ""
}
```
The only mandatory field is `broker`, everything else is optional. The `clientId` will typically default to the last 3 bytes of the device MAC address, but this is configurable in your firmware code when initialising the [`OXRS_MQTT`](/docs/libraries/esp32-mqtt-library.md) library.

### GET `/api/config`
Retrieves the current device config. Depends on the firmware (example below is from the [State Monitor](/docs/firmware/state-monitor-esp32.md) firmware);
``` json
{
    "temperatureUpdateMillis": 60000,
    "inputs": [
        {
            "index": 1,
            "type": "toggle"
        },
        {
            "index": 2,
            "type": "switch"
        },
        {
            "index": 3,
            "type": "button"
        },
        {
            "index": 4,
            "type": "contact",
            "invert": true
        }
    ]
}
```

### POST `/api/config`
Update the current device config, and persist to SPIFFS so it can be restored on restart. Depends on the firmware (example below is from the [State Monitor](/docs/firmware/state-monitor-esp32.md) firmware);
``` json
{
    "temperatureUpdateMillis": 60000,
    "inputs": [
        {
            "index": 1,
            "type": "toggle"
        },
        {
            "index": 2,
            "type": "switch"
        },
        {
            "index": 3,
            "type": "button"
        },
        {
            "index": 4,
            "type": "contact",
            "invert": true
        }
    ]
}
```

### POST `/api/command`
Send a command to the device. Depends on the firmware (example below is from the [State Monitor](/docs/firmware/state-monitor-esp32.md) firmware);
``` json
{
    "restart": true
}
```

### POST `/api/ota`
Upload and reflash the device with the firmware binary sent in the request payload.

## Downloads
Download the latest version of the library on [Github](https://github.com/OXRS-IO/OXRS-IO-API-ESP32-LIB).

A good place to look for an example of how to use this MQTT library is in the [Rack32](/docs/hardware/controllers/rack32.md) library found [here](https://github.com/SuperHouse/OXRS-SHA-Rack32-ESP32-LIB).

## Supported Hardware
This library is compatible with any ESP-based hardware, including ESP32 and ESP8266 microprocessors.

---

#### Credits
 - [OXRS](https://oxrs.io/) Core Team

---

#### License
Found [here](https://github.com/OXRS-IO/OXRS-IO-API-ESP32-LIB/blob/main/LICENSE).
