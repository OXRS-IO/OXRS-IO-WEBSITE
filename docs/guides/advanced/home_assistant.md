# OXRS StateMonitor Home Assistant integration


## Introduction
This guide shows `automation` samples to be used in Home Assistant. They make use of the event structure that is sent by the StateMonitor via MQTT

For details on `configuration` and `events` see the [StateMonitor](/docs/firmware/state-monitor-esp32.html) documentation.

The following samples are using the config topic `conf/58391f` and the state topic `stat/58391f`. Those are the defaults as allocated by the FW using the MAC address of the device. Index numbers need to be replaced according to your set up.

All samples are based on Home Assistant [MQTT triggers](https://www.home-assistant.io/docs/automation/trigger/#mqtt-trigger) were a template filters the payload sent by the StateMonitor via `stat/..` for the desired `index` and `event`



### Example 1: Use a `switch` to turn light on and off 
---
#### Typical use case : standard wall switch. 

to configure input `index: 5`  as `switch` publish : 
```
 -t conf/58391f  -m '{"inputs": [{ "index": 5 , "type": "switch"}]}'
 ```
 
use configured switch to turn a light on / off.
```
automation:
  - id: OX001
    alias: OXRS idx 5 on
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
    - condition: template
      value_template: '{{trigger.payload_json.index == 5 and trigger.payload_json.event == "on"}}'
    action:
    - service: light.turn_on
      target:
        entity_id: light.light_bulb
      
  - id: OX002
    alias: OXRS idx 5 off
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
    - condition: template
      value_template: '{{trigger.payload_json.index == 5 and trigger.payload_json.event == "off"}}'
    action:
    - service: light.turn_off
      target:
        entity_id: light.light_bulb
```



### Example 2: Use two `toggle` buttons to toggle a light state from several locations
---
#### Typical use cases: hallway lighting or bedroom lighting.

to configure inputs `index: 1` and `index: 2`  as `toggle` publish : 
```
 -t conf/58391f  -m '{"inputs": [{"index": 2, "type": "toggle"},{"index": 1, "type": "toggle" }]}'
```
 
Use configured buttons to toggle connected light by any of the buttons.


```
automation:
  - id: OX007
    alias: OXRS idx 1/2 toggle
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
      condition: or
      conditions:
      - condition: template
        value_template: '{{trigger.payload_json.index == 1 and trigger.payload_json.event == "toggle"}}'
      - condition: template
        value_template: '{{trigger.payload_json.index == 2 and trigger.payload_json.event == "toggle"}}'
    action:
    - service: light.toggle
      target:
        entity_id: light.light_bulb
```
::: tip
Can be as many buttons as you like, just add more conditions:
```
  - condition: template
      value_template: '{{trigger.payload_json.index == nnn and trigger.payload_json.event == "toggle"}}'
```
:::



### Example 3: Use two `buttons` to control brightness and state of a light bulb
---
#### Typical use case: control of lights with variable brightness with up and down buttons

to configure inputs `index: 1` and `index: 2`  as `buttons` publish : 
```
 -t conf/58391f  -m '{"inputs": [{"index": 2, "type": "button"},{"index": 1, "type": "button" }]}'
```
This is a more complex automation. It uses the `single` and `hold` events from each of the 2 involved buttons.
The `single` event is used to control the state of the light bulb and the `hold` event for brightness control.


|index|event   |function
|:----|:-------|:-------|
|1    |single  |turn off |
|1    |hold    |decrease brightness  |
|2    |single  |turn on |
|2    |hold    |increase brightness  |

```
# on / off automations

automation:
  - id: OX003
    alias: OXRS idx 1 single off
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
    - condition: template
      value_template: '{{trigger.payload_json.index == 1 and trigger.payload_json.event == "single"}}'
    action:
    - service: light.turn_off
      target:
        entity_id: light.light_bulb
        
  - id: OX004
    alias: OXRS idx 2 single on
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
    - condition: template
      value_template: '{{trigger.payload_json.index == 2 and trigger.payload_json.event == "single"}}'
    action:
    - service: light.turn_on
      target:
        entity_id: light.light_bulb

# brightness control

automation:
  - id: OX005
    alias: OXRS idx 1 hold
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
    - condition: template
      value_template: '{{trigger.payload_json.index == 1 and trigger.payload_json.event == "hold"}}'
    action:
    - service: light.turn_on
      target:
        entity_id: light.light_bulb
      data:
        brightness_step_pct: -5
        
  - id: OX006
    alias: OXRS idx 2 hold
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
    - condition: template
      value_template: '{{trigger.payload_json.index == 2 and trigger.payload_json.event == "hold"}}'
    action:
    - service: light.turn_on
      target:
        entity_id: light.light_bulb
      data:
        brightness_step_pct: 5     
```

### Example 4: Use a rotary encoder with integrated button to control brightness and state of a light bulb
---
#### Typical use case: single knob control of lights with variable brightness via a rotary encoder
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
automation:

# brightness control up
  - id: OX010
    alias: OXRS idx 2 up
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
      condition: and
      conditions:
      - condition: state
        entity_id: light.light_bulb
        state: 'on'
      - condition: template
        value_template: '{{trigger.payload_json.index == 2 and trigger.payload_json.event == "up"}}'
    action:
    - service: light.turn_on
      target:
        entity_id: light.light_bulb
      data:
        brightness_step: 10

# brightness control down
  - id: OX011
    alias: OXRS idx 2 down
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
      condition: and
      conditions:
      - condition: template
        value_template: '{{ state_attr("light.light_bulb", "brightness") > 10 }}'
      - condition: template
        value_template: '{{trigger.payload_json.index == 2 and trigger.payload_json.event == "down"}}'
    action:
    - service: light.turn_on
      target:
        entity_id: light.light_bulb
      data:
        brightness_step: -10

# toggle state (on / off)
  - id: OX012
    alias: OXRS idx 3 toggle
    trigger:
    - platform: mqtt
      topic: stat/58391f
    condition:
    - condition: template
      value_template: '{{trigger.payload_json.index == 3 and trigger.payload_json.event == "toggle"}}'
    action:
    - service: light.toggle
      target:
        entity_id: light.light_bulb
```
