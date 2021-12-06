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
This library use the Arduino [aWOT](https://github.com/lasselukkari/aWOT) library by Lasse Lukkari. It also uses the SPIFFS file system, if available, for persisting configuration and restoring on startup.

The library will expose the following REST API endpoints on the device;

|REST API|Supports|Description|
|:-------|:-------|:----------|
|`/firmware`|GET|Returns the firmware details of the device, in JSON format|
|`/restart`|POST|Force a soft-reset|
|`/factoryReset`|POST|Format SPIFFS and force a soft-reset|
|`/mqtt`|GET & POST|Get or set MQTT configuration, in JSON format, and persist to SPIFFS|
|`/config`|GET & POST|Get or set device configuration, in JSON format, and persist to SPIFFS|
|`/ota`|POST|Update device firmware with a new binary provided in the request body|

The library also serves a couple of HTML pages for access to the device via your web browser;

|URL|Description|
|:--|:----------|
|`/`|Bootstrap page for entering MQTT configuration, for on-boarding|
|`/ota`|OTA page for manually upgrading your device with a new version of firmware|

::: warning
There is no authentication on any of the REST API endpoints or HTML pages. **DO NOT** expose your device to the internet... **EVER**!!
:::

## Usage
The library needs to be initialised with an instance of [`OXRS_MQTT`](/docs/libraries/esp32-mqtt-library.html), since we need to initialise that with the MQTT configuration provisioned by the API on startup.

You can optionally provide the device firmware details using `.setFirmware()` (see below in the code example). This will mean these details are available via the `/firmware` REST API endpoint. If they are not provided the REST API will return `404` for this endpoint.

``` c
// MQTT client
PubSubClient _mqttClient(_client);
OXRS_MQTT _mqtt(_mqttClient);

// REST API
EthernetServer _server(80);
//WiFiServer _server(80);
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

  // Handle any WiFi REST API requests
  //WiFiClient client = _server.available();
  //_api.checkWifi(&client);
}
```

::: tip
You can use this library with a WiFi connected device as well. See commented code in the snippet above.
:::

The API library will also pass any device configuration, provisioned via the `/config` REST API, down to the MQTT library for handling, since that already has all the config callbacks used by the firmware. This ensures that all configuration is handled by your firmware in the same place, regardless of whether it was provisioned by the API, or received via MQTT on the `conf/<deviceid>` topic.

## Screenshots
### Bootstrap page
The main page showing firmware details and fields for entering your MQTT configuration. It provides buttons to submit your config changes, restart or factory reset the device.

![Bootstrap Page](/images/oxrs-api-library-bootstrap.png)

### OTA page
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
