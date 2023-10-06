# OXRS Node-RED integrations


## Introduction
This guide shows `automation` samples to be used in Node-RED. They make use of the event structure that is sent by the StateMonitor via MQTT.

For details on `configuration` and `events` see the [StateMonitor](/docs/firmware/state-monitor-esp32.md) documentation.

The following samples are using the config topic `conf/58391f` and the state topic `stat/58391f`. Those are the defaults as allocated by the FW using the MAC address of the device. Index numbers need to be replaced according to your set up.

## Example set 1 (inputs), related to State Monitor, State IO and Smoke Detector

### Example 1.1: Use a `switch` to turn light on and off
---
#### Typical use case : standard wall switch. 

To configure input `index: 5`  as `switch` publish : 
```
 -t conf/58391f  -m '{"inputs": [{ "index": 5 , "type": "switch"}]}'
 ```
 
Use configured switch to turn a light on / off.
```

To Do

```



### Example 1.2: Use two `toggle` buttons to toggle a light state from several locations
---
#### Typical use cases: hallway lighting or bedroom lighting.

To configure inputs `index: 1` and `index: 2`  as `toggle` publish : 
```
 -t conf/58391f  -m '{"inputs": [{"index": 2, "type": "toggle"},{"index": 1, "type": "toggle" }]}'
```
 
Use configured buttons to toggle connected light by any of the buttons.
```

To Do

```
::: tip
Can be as many buttons as you like, just add more conditions:
```

To Do

```
:::



### Example 1.3: Use two `buttons` to control brightness and state of a light bulb
---
#### Typical use case: control of lights with variable brightness with up and down buttons.

To configure inputs `index: 1` and `index: 2`  as `buttons` publish : 
```
 -t conf/58391f  -m '{"inputs": [{"index": 2, "type": "button"},{"index": 1, "type": "button" }]}'
```
This is a more complex automation. It uses the `single` and `hold` events from each of the 2 involved buttons.
The `single` event is used for brightness control, and the `hold` event for turning the light on/off.


|index|event   |function
|:----|:-------|:-------|
|1    |single  |decrease brightness  |
|1    |hold    |turn off  |
|2    |single  |increase brightness  |
|2    |hold    |turn on  |

```

To Do

```

### Example 1.4: Use a rotary encoder with integrated button to control brightness and state of a light bulb
---
#### Typical use case: single knob control of lights with variable brightness via a rotary encoder.
The outputs `A` and `B` of the `rotary encoder` are connected to `index: 1` and `index: 2` . The integrated `push button` of the `rotary encoder` is connected to `index: 3` .

To configure inputs `index: 1` and `index: 2`  as `rotary` and `index:3` as `toggle` publish : 
```
 -t conf/58391f -m '{"inputs": [
    {"index": 1, "type": "rotary"},
    {"index": 2, "type": "rotary"},
    {"index": 3, "type": "toggle"}]}'

```
This is another more complex automation. It uses the `up` and `down` events from the rotary encoder for brightness control.
The `toggle` event of the integrated push button is used to control the state of the light bulb.

Turning the rotary encoder has no effect if the light is turned off.


|index|event   |function
|:----|:-------|:-------|
|2    |up      |increase brightness  |
|2    |down    |decrease brightness  |
|3    |toggle  |turn on / off |


```

To Do

```


## Example set 2 (outputs), related to State Controller, State IO and Smoke Detector

### Example 2.1: Turn light bulb on and off 
---
#### Typical use case : standard light bulb controlled by wall switch. 


```

To Do

```
