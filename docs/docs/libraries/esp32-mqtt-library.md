---
tags: ["OXRS-IO-MQTT-ESP32-LIB", "TAG2", "TAG3"]
---
# ESP32 MQTT library
<p class="maker">by <b>OXRS Core Team</b></p>

> SKU: OXRS-IO-MQTT-ESP32-LIB

## Introduction
This library wraps up all MQTT related functions in an easy-to-use API, ensuring OXRS compatible events and config/command handlers. It includes the following;

- MQTT broker connection and re-connection attempts
- Callbacks for connect/disconnect events
- Callbacks for JSON messages received on the config/command topics
- Simple API for publishing JSON-based status and telemetry data

By using this library you can be sure your firmware will adhere to the OXRS standards and be compatible with other parts of the OXRS eco-system.

---

### How does it work?
This library is a wrapper around the Arduino [PubSubClient](https://github.com/knolleary/pubsubclient) library by Nick O'Leary. It forms the cornerstone of OXRS compatibility since MQTT is the protocol used for configuration, commands and status/telemetry reporting. 

The library will automatically publish and subscribe to various topics, depending on how you use it;

|Topic|Description|
|:----|:----------|
|`stat/<clientid>/lwt`|Publishes `{"online":true\|false}` to this topic when connected/disconnected from the MQTT broker|
|`stat/<clientid>`|Publishes JSON status messages to this topic via `publishStatus()`|
|`tele/<clientid>`|Publishes JSON telemetry messages to this topic via `publishTelemetry()`|
|`stat/<clientid>/adopt`|Publishes JSON adoption messages to this topic via `publishAdopt()`|
|`conf/<clientid>`|Subscribes to this topic for JSON config messages and passes them on to your `onConfig` callback|
|`cmnd/<clientid>`|Subscribes to this topic for JSON command messages and passes them on to your `onCommand` callback|

## Configuration
### Setup
The library needs to be initialised with an instance of `PubSubClient`, which can be created for either WiFi or Ethernet connections. You also need to register a callback on your `PubSubClient` for incoming MQTT messages, and pass these events down to the MQTT library;

``` c
void _mqttCallback(char * topic, byte * payload, int length) 
{
  // Pass down to our MQTT handler and check it was processed ok
  int state = _mqtt.receive(topic, payload, length);
  switch (state)
  {
    case MQTT_RECEIVE_ZERO_LENGTH:
      Serial.println(F("Empty MQTT payload received"));
      break;
    case MQTT_RECEIVE_JSON_ERROR:
      Serial.println(F("Failed to deserialise MQTT JSON payload"));
      break;
    case MQTT_RECEIVE_NO_CONFIG_HANDLER:
      Serial.println(F("No MQTT config handler"));
      break;
    case MQTT_RECEIVE_NO_COMMAND_HANDLER:
      Serial.println(F("No MQTT command handler"));
      break;
  }
}
```

The library will return a status code from `.receive()` indicating if it was able to successfully process the message. See [`OXRS_MQTT.h`](https://github.com/OXRS-IO/OXRS-IO-MQTT-ESP32-LIB/blob/main/src/OXRS_MQTT.h) for the full list of return codes.

### Client ID
A unique client id for the MQTT connection must be specified. Typically we use the last 6 bytes of the device MAC address, but you can use anything you like. The client id must be unique since if another device attempts to connect with the same client id, the broker will boot any existing connections with the same id. See [here](https://www.cloudmqtt.com/blog/mqtt-what-is-client-id.html) for more details.

### Broker Details
You need to tell the library where and how to connect to your MQTT broker of choice;

|Broker Config|Description|
|:------------|:----------|
|`setBroker`|MQTT broker IP address or hostname, and port (typically `1883`)|
|`setAuth`|Optional, the username and password to authenticate with your MQTT broker|
|`setTopicPrefix`|Optional, a topic prefix applied to all subscriptions and publishes|
|`setTopicSuffix`|Optional, a topic suffix applied to all subscriptions and publishes|

Only `setBroker()` is mandatory, the rest are optional.

### Callbacks
Next add your callbacks for the various events supported by the library and register them with the MQTT library;

|Callback Register|Description|
|:----------------|:----------|
|`onConnected`|Successfully connected to the configured MQTT broker|
|`onDisconnected`|Connection to the configured MQTT broker has dropped|
|`onConfig`|JSON configuration payload received on the `conf/<clientid>` topic|
|`onCommand`|JSON command payload received on the `cmnd/<clientid>` topic|

These are all optional, for example the [State Monitor](/docs/firmware/state-monitor-esp32.html) firmware has no need for the `onCommand` callback.

### Program Loop
Finally your firmware needs to call the MQTT library `.loop()` method as often as possible, e.g. typically inside your main program `loop()` method. This allows the library to check for incoming MQTT messages, process outgoing messages, and do any other internal housekeeping.

### Publishing
The library makes it very easy to publish JSON data by providing a set of simple APIs;

|Publish API|Description|
|:----------|:----------|
|`publishStatus`|Publish a JSON **status** message to `stat/<clientid>`|
|`publishTelemetry`|Publish a JSON **telemetry** message to `tele/<clientid>`|
|`publishAdopt`|Publish a JSON **adoption** message to `stat/<clientid>/adopt`|

The adoption message is optional but is used by downstream systems in the OXRS eco-system to identify the device and provide a means for building self-describing configuration and control systems/UIs.

---

## Downloads
Download the latest version of the library on [Github](https://github.com/OXRS-IO/OXRS-IO-MQTT-ESP32-LIB).

## Supported Hardware
This library is compatible with any Arduino-based hardware, including ESP32, ESP8266 and AVR microprocessors.

::: warning
When running on AVR MCUs the max MQTT message size is reduced to only 256 bytes, due to memory constraints on these devices. However for ESP32 and ESP8266 devices the max MQTT message size is 4096 bytes.
:::

---

#### Credits
 - [OXRS](https://oxrs.io/) Core Team

---

#### License
Found [here](https://github.com/OXRS-IO/OXRS-IO-MQTT-ESP32-LIB/blob/main/LICENSE).
