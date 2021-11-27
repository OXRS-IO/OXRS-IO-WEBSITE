# OXRS StateMonitor Home Assistant integration


## Introduction
This guide shows `automation` samples to be used in Home Assistant. They make use of the event structure that is sent by the StateMonitor via MQTT

For details on `configuration` and `events` see the [StateMonitor](/docs/firmware/state-monitor-esp32.html) documentation.

In the following samples the config topic `conf/58391f` is used. Index numbers need to be replaced according to your set up.

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
