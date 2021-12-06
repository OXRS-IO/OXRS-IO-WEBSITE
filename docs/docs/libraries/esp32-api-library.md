---
tags: ["OXRS-IO-API-ESP32-LIB", "TAG2", "TAG3"]
---
# ESP32 API library
<p class="maker">by <b>OXRS Core Team</b></p>

> SKU: OXRS-IO-API-ESP32-LIB

## Introduction
This library adds a REST API to OXRS compatible devices, providing a means to bootstrap MQTT configuration, check firmware details, and perform over-the-air (OTA) updates. It even serves a few simple HTML pages allowing you access to these features directly in your web browser.

Using this library allows you to release pre-compiled versions of your firmware. Users don't need to manually type in their MQTT broker details, compile the library, and then flash their devices. It can all be done via the OXRS API making releasing and distributing the firmware much easier.

---

### How does it work?
This library uses the Arduino [aWOT](https://github.com/lasselukkari/aWOT) library by Lasse Lukkari. It also makes use of the SPIFFS file system, if available, for persisting configuration and restoring on startup.

The library will expose the following REST API endpoints on the device;

|REST API|Supports|Description|
|:-------|:-------|:----------|
|`/firmware`|GET|Returns the firmware details of the device, in JSON format|
|`/restart`|POST|Force a soft-reset|
|`/factoryReset`|POST|Format SPIFFS and force a soft-reset|
|`/mqtt`|GET & POST|Get or set MQTT configuration, in JSON format, and persist to SPIFFS|
|`/config`|GET & POST|Get or set device configuration, in JSON format, and persist to SPIFFS|
|`/ota`|POST|Update device firmware with a new binary provided in the request body|

The library also serves some HTML pages for accessing the device via your web browser;

|Name|URL|Description|
|:---|:--|:----------|
|MQTT|`/`|For entering MQTT configuration|
|OTA|`/ota`|For upgrading your device with a new version of firmware|

::: warning
There is no authentication on any of the REST API endpoints or HTML pages. **DO NOT** expose your device to the internet... **EVER**!!
:::

## Usage
The library needs to be initialised with an instance of [`OXRS_MQTT`](/docs/libraries/esp32-mqtt-library.html), since we need to initialise that with the MQTT configuration provisioned by the API on startup.

The API library will also pass any device configuration, provisioned via the `/config` REST API, down to the MQTT library for handling, since that already has all the config callbacks used by the firmware. This ensures that all configuration is handled by your firmware in the same place, regardless of whether it was provisioned by the API, or received via MQTT on the `conf/<deviceid>` topic.

You can optionally provide the device firmware details using `.setFirmware()` (see below in the code example). This will mean these details are available via the `/firmware` REST API endpoint. If they are not provided the REST API will return `404` for this endpoint.

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
  _api.setFirmware("Firmware Name", "Firmware Short Name", "Firmware Maker", "0.0.1");
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

### GET `/firmware`
Retrieves the firmware details currently running on the device;
``` json
{
    "name": "OXRS-SHA-StateMonitor-ESP32-FW",
    "shortName": "State Monitor",
    "maker": "SuperHouse Automation",
    "version": "3.3.1-KNX"
}
```

### POST `/restart`
Empty payload. Soft-restarts the device.

### POST `/factoryReset`
Empty payload. Formats the SPIFFS (if present) and soft-restarts the device.

### GET `/mqtt`
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

### POST `/mqtt`
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
The only mandatory field is `broker`, everything else is optional. The `clientId` will typically default to the last 3 bytes of the device MAC address, but this is configurable in your firmware code when initialising the [`OXRS_MQTT`](/docs/libraries/esp32-mqtt-library.html) library.

### GET `/config`
Retrieves the current device config. Depends on the firmware (example below is from the [State Monitor](/docs/firmware/state-monitor.html) firmware);
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

### POST `/config`
Update the current device config, and persist to SPIFFS so it can be restored on restart. Depends on the firmware (example below is from the [State Monitor](/docs/firmware/state-monitor.html) firmware);
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

### POST `/ota`
Upload and reflash the device with the firmware binary sent in the request payload.

## Screenshots
Listed below are the HTML pages served from the device, including example screenshots.

### MQTT page [`/`]
The main page showing firmware details and fields for entering your MQTT configuration. It provides buttons to submit your config changes, restart or factory reset the device.

![MQTT Page](/images/oxrs-api-library-mqtt.png)

### OTA page [`/ota`]
The OTA page showing firmware details and a file picker for selecting a new firmware binary for uploading and re-flashing. 

![OTA Page](/images/oxrs-api-library-ota.png)

## Downloads
Download the latest version of the library on [Github](https://github.com/OXRS-IO/OXRS-IO-API-ESP32-LIB).

A good place to look for an example of how to use this MQTT library is in the [Rack32](/docs/hardware/controllers/rack32.html) library found [here](https://github.com/SuperHouse/OXRS-SHA-Rack32-ESP32-LIB).

## Supported Hardware
This library is compatible with any ESP-based hardware, including ESP32 and ESP8266 microprocessors.

---

#### Credits
 - [OXRS](https://oxrs.io/) Core Team

---

#### License
Found [here](https://github.com/OXRS-IO/OXRS-IO-API-ESP32-LIB/blob/main/LICENSE).
