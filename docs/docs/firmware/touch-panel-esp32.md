---
tags: ["TAG1", "TAG2", "TAG3"]
---
# Touch Panel ESP32 
<p class="maker">by <b>OXRS Core Team</b></p>

> SKU:  OXRS-IO-TouchPanel-ESP32-FW

<!-- Board Image -->
![OXRS TP32 Firmware](/images/advert-tp32.png)

## Introduction
[comment]: <> ([TODO] Introduction)

Touch Panel ESP32 is a firmware for the WT32-SC01, which is a low-cost device comprising a 3.5-inch touchscreen, ESP32, and options for hardware expansion. The firmware provides a user interface that complements your existing home or buildings automation system by providing elements such as tiles or keypads presented on a given "screen", and the user may switch between screens. The unit uses MQTT to provide control of your existing automation hub, and MQTT is used to provide feedback to UI elements, as well as to provide means of dynamic configuration of screens and other settings.

The W32-SC01 device may be flashed straight out of the box with the firmware available below, joined to wi-fi or wired ethernet, then configured remotely using OXRS Admin, which is a single HTML file that targets a given unit by IP address. The unit is then further configured by OXRS Admin or MQTT.

Touch Panel ESP32 may best be described as a "thin client"; that is, it sends messages when buttons are pressed, and updates the UI when messages are received, but automation states are not stored within Touch Panel ESP32 itself.

Example applications include: a light switch to control dimming or colour for multiple lights in a room or to initiate scene selection, an intruder alarm panel allowing keycode entry to set or unset the alarm and visual feedback to show the state, or a weather monitor. The built-in tile and screen management, along with external tools to create and upload your own icons, combine to make a panel with infinite possibilities for home or buildings control and monitoring.


## Getting Started
[comment]: <> ([TODO] Getting started text)

- [Tile Payloads](/docs/firmware/touch-panel-esp32.html#tile-payloads)
- [Screen Payloads](/docs/firmware/touch-panel-esp32.html#screen-payloads)
- [Device Payloads](/docs/firmware/touch-panel-esp32.html#device-payloads)


### Prerequisites:
- WT32-SC01 ESP32 TFT [Read more](/add-ons/touch-displays/wt32-sc01)
- OXRS-IO-TouchPanel-ESP32-FW [Github](https://github.com/OXRS-IO/OXRS-IO-TouchPanel-ESP32-FW/releases)
- OXRS Admin UI [Github](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP)
- Node-RED [Read more](https://nodered.org)
- MQTT Broker - e.g. Mosquitto, Mosca [Wiki](https://en.wikipedia.org/wiki/MQTT)


### How does it work?
[comment]: <> ([TODO] How it works)
How it works text goes here...


Configuration, State and Commands

<Badge type="warning" text="MQTT Configuration Topic" vertical="middle" />

```conf/<device-client-id>```
<Badge type="warning" text="MQTT State Topic" vertical="middle" />

```stat/<device-client-id>```
<Badge type="warning" text="MQTT Command Topic" vertical="middle" />

```cmnd/<device-client-id>```


::: tip Recommendation:
[comment]: <> ([TODO] Explanation into the recommended Node-RED usage for the product)
The recommended way to use the firmware and interact with the Touch Panel and your IoT Devices is via Node-RED and MQTT. They are used to configure, manage state and recieve events. 

Further documentation and some example Node-RED Flows will be made available to get you started. 
:::

---

# Tile Styles
[comment]: <> ([TODO] Tile Styles explanation)

|Tile Style| Tile Example| Get Started |
| :---- |:----|:----|
| button | ![TP32 Image Alt Text](/images/button-tile-not-active.png)|[Get Started](/docs/firmware/touch-panel-esp32/#button) |
| buttonLevelUp | ![TP32 Image Alt Text](/images/buttonLevelUp-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonlevelup) |
| buttonLevelDown | ![TP32 Image Alt Text](/images/buttonLevelDown-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonleveldown) |
| buttonUpDown | ![TP32 Image Alt Text](/images/buttonUpDown-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonupdown) |
| buttonLeftRight | ![TP32 Image Alt Text](/images/buttonLeftRight-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonleftright) |
| buttonPrevNext | ![TP32 Image Alt Text](/images/buttonPrevNext.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonprevnext) |
| indicator | ![TP32 Image Alt Text](/images/indicator-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#indicator) |
| colorPickerRgbCct <br><br> colorPickerRgb <br><br> colorPickerCct | ![TP32 Image Alt Text](/images/colorPicker-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#colorpickerrgbcct)<br><br>[Get Started](/docs/firmware/touch-panel-esp32/#colorpickerrgb)<br><br>[Get Started](/docs/firmware/touch-panel-esp32/#colorpickercct) |
| dropDown | ![TP32 Image Alt Text](/images/dropdown-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#dropdown) |
| remote | ![TP32 Image Alt Text](/images/remote-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#remote) |
| link | ![TP32 Image Alt Text](/images/link-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#link) |
| thermostat | ![TP32 Image Alt Text](/images/thermostat-arc-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#thermostat) |

<!-- | keyPad <br><br> keyPadBlocking  | ![TP32 Image Alt Text](/images/keypad-tile-2.png)|[Get Started](/docs/firmware/touch-panel-esp32/#keypad)<br><br> [Get Started](/docs/firmware/touch-panel-esp32/#keypadblocking) | -->

# Tile Payloads
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

---


## button

![TP32 Image Alt Text](/images/button-tile-not-active.png) ![TP32 Image Alt Text](/images/button-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "button",
          "icon": "_bulb",
          "label": "Lamps"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                     |                                                            |
|:---       |:---:     |:---:    |:---                             |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `button`  | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_bulb`     | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`Lamps`    | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "button",
  "type": "button",
  "event": "single",
  "state": "off"
}
```

### JSON parameters
| Parameter | Type                 | Options                   | Description                                     |
|:---       |:----:                |:---:                      |:---                                             |
| `screen`  | *Number*             | n/a                       | Screen number triggering state event            |
| `tile`    | *Number*             | n/a                       | Tile number triggering state event              |
| `style`   | *String*             | n/a                       | Tile style `_thermostat`                        |
| `type`    | *String*             | `"button"`                |                                                 |
| `event`   | *String*             | `"single"` \| `"hold"`    | Indicates if the button press was short or long |
| `state`   | *String* \| *Object* | `"on"` \| `"off"`         | The current tile state (prior to this event)    |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-8}
{
  "tiles":[
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "subLabel": "on just now"
    }
  ]
}
```

### JSON parameters
| Parameter  | Type     | Options         | Description                                                 |                                                            |
|:---        |:---:     |:---:            |:---                                                         |:---                                                        |
| `screen`   | *Number* | n/a             | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`     | *Number* | n/a             | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`    | *String* | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `sublabel` | *String* | n/a             | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonLevelUp

![TP32 Image Alt Text](/images/buttonLevelUp-tile.png) ![TP32 Image Alt Text](/images/buttonLevelUp-tile-toggle.png)
![TP32 Image Alt Text](/images/buttonLevelUp-tile-active.png) ![TP32 Image Alt Text](/images/buttonLevelUp-tile-active-toggle.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-14}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "buttonLevelUp",
          "icon": "_bulb",
          "label": "Light",
          "levelStart": 0,
          "levelStop": 10
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter    | Type     | Options | Description                           |                                                            |
|:---          |:---:     |:---:    |:---                                   |:---                                                        |
| `tile`       | *Number* | n/a     | Enter your tile number e.g. `1`       | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`      | *String* | n/a     | Enter tile style name `buttonLevelUp` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`       | *String* | n/a     | Enter icon name e.g.`_bulb`           | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`      | *String* | n/a     | Enter label text e.g.`Lamps`          | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `levelStart` | *String* | n/a     | Defaults to `0`                       | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `levelStop`  | *String* | n/a     | Defaults to `100`                     | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "buttonLevelUp",
  "type": "level",
  "event": "up",
  "state": 5
}
```


### JSON parameters
| Parameter | Type                 | Options                                      | Description                                                                                |
|:---       |:----:                |:---:                                         |:---                                                                                        |
| `screen`  | *Number*             | n/a                                          | Screen number triggering state event                                                       |
| `tile`    | *Number*             | n/a                                          | Tile number triggering state event                                                         |
| `style`   | *String*             | n/a                                          | Tile style `buttonLevelUp`                                                                 |
| `type`    | *String*             | `"button"`\|`"level"`                        | Indicates if touch event was a button press or level change                                |
| `event`   | *String*             | `"single"` \| `"hold"` \| `"up"` \| `"down"` | Indicates if a button press was `short` or `long`, or if a level change was `up` or `down` |
| `state`   | *Number*             | n/a                                          | The current level state (prior to this event)                                              |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-9}
{
    "tiles": [
        {
            "screen": 1,
            "tile": 1,
            "state": "on",
            "level": 5,
            "subLabel": "on just now"
        }
    ]
}
```


### JSON parameters
| Parameter  | Type     | Options         | Description                                                 |                                                            |
|:---        |:---:     |:---:            |:---                                                         |:---                                                        |
| `screen`   | *Number* | n/a             | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`     | *Number* | n/a             | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`    | *String* | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `level`    | *Number* | n/a             | Update the level state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `sublabel` | *String* | n/a             | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonLevelDown

![TP32 Image Alt Text](/images/buttonLevelDown-tile.png) ![TP32 Image Alt Text](/images/buttonLevelDown-tile-toggle.png)
![TP32 Image Alt Text](/images/buttonLevelDown-tile-active.png) ![TP32 Image Alt Text](/images/buttonLevelDown-tile-active-toggle.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-14}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "buttonLevelDown",
          "icon": "_blind",
          "label": "Blinds",
          "levelStart": 0,
          "levelStop": 10
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter    | Type     | Options | Description                             |                                                            |
|:---          |:---:     |:---:    |:---                                     |:---                                                        |
| `tile`       | *Number* | n/a     | Enter your tile number e.g. `1`         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`      | *String* | n/a     | Enter tile style name `buttonLevelDown` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`       | *String* | n/a     | Enter icon name e.g.`_blind`            | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`      | *String* | n/a     | Enter label text e.g.`Blinds`           | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `levelStart` | *String* | n/a     | Defaults to `0`                         | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `levelStop`  | *String* | n/a     | Defaults to `100`                        | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "buttonLevelDown",
  "type": "level",
  "event": "up",
  "state": 5
}
```


### JSON parameters
| Parameter | Type                 | Options                                      | Description                                                                                |
|:---       |:----:                |:---:                                         |:---                                                                                        |
| `screen`  | *Number*             | n/a                                          | Screen number triggering state event                                                       |
| `tile`    | *Number*             | n/a                                          | Tile number triggering state event                                                         |
| `style`   | *String*             | n/a                                          | Tile style `buttonLevelDown`                                                                 |
| `type`    | *String*             | `"button"`\|`"level"`                        | Indicates if touch event was a button press or level change                                |
| `event`   | *String*             | `"single"` \| `"hold"` \| `"up"` \| `"down"` | Indicates if a button press was `short` or `long`, or if a level change was `up` or `down` |
| `state`   | *Number*             | n/a                                          | The current level state (prior to this event)                                              |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json{3-9}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "level": 5,
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter  | Type     | Options         | Description                                                 |                                                            |
|:---        |:---:     |:---:            |:---                                                         |:---                                                        |
| `screen`   | *Number* | n/a             | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`     | *Number* | n/a             | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`    | *String* | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `level`    | *Number* | n/a             | Update the level state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `sublabel` | *String* | n/a             | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonUpDown

![TP32 Image Alt Text](/images/buttonUpDown-tile.png) ![TP32 Image Alt Text](/images/buttonUpDown-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "buttonUpDown",
          "icon": "_speaker",
          "label": "Speakers"
        }
      ]
    }
  ]
}
```

### JSON parameters
| Parameter    | Type     | Options | Description                             |                                                            |
|:---          |:---:     |:---:    |:---                                     |:---                                                        |
| `tile`       | *Number* | n/a     | Enter your tile number e.g. `1`         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`      | *String* | n/a     | Enter tile style name `buttonUpDown`    | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`       | *String* | n/a     | Enter icon name e.g.`_speaker`          | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`      | *String* | n/a     | Enter label text e.g.`Speakers`         | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "buttonUpDown",
  "type": "button",
  "event": "single",
  "state": "on"
}
```


### JSON parameters
| Parameter | Type                 | Options                                      | Description                                                                                |
|:---       |:----:                |:---:                                         |:---                                                                                        |
| `screen`  | *Number*             | n/a                                          | Screen number triggering state event                                                       |
| `tile`    | *Number*             | n/a                                          | Tile number triggering state event                                                         |
| `style`   | *String*             | n/a                                          | Tile style `buttonLevelDown`                                                               |
| `type`    | *String*             | `"up"`\|`"down"`\|`"button"`                 | Indicates if touch event was a button press or up/down                                     |
| `event`   | *String*             | `"single"` \| `"hold"`                       | Indicates if a button press was `short` or `long`                                          |
| `state`   | *String*             | `"on"` \| `"off"`                            | The current tile state (prior to this event), only included for button press events        |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-8}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter  | Type     | Options         | Description                                                 |                                                            |
|:---        |:---:     |:---:            |:---                                                         |:---                                                        |
| `screen`   | *Number* | n/a             | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`     | *Number* | n/a             | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`    | *String* | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `sublabel` | *String* | n/a             | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonLeftRight

![TP32 Image Alt Text](/images/buttonLeftRight-tile.png) ![TP32 Image Alt Text](/images/buttonLeftRight-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens":[
    {
      "screen":1,
      "label":"Demo",
      "tiles":[
        {
          "tile":1,
          "style":"buttonLeftRight",
          "icon":"_slider",
          "label":"Audio Balance"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter    | Type     | Options | Description                             |                                                            |
|:---          |:---:     |:---:    |:---                                     |:---                                                        |
| `tile`       | *Number* | n/a     | Enter your tile number e.g. `1`         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`      | *String* | n/a     | Enter tile style name `buttonLeftRight` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`       | *String* | n/a     | Enter icon name e.g.`_slider`           | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`      | *String* | n/a     | Enter label text e.g.`Audio Balance`    | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "buttonLeftRight",
  "type": "button",
  "event": "single",
  "state": "on"
}
```


### JSON parameters
| Parameter | Type                 | Options                         | Description                                                                                |
|:---       |:----:                |:---:                            |:---                                                                                        |
| `screen`  | *Number*             | n/a                             | Screen number triggering state event                                                       |
| `tile`    | *Number*             | n/a                             | Tile number triggering state event                                                         |
| `style`   | *String*             | n/a                             | Tile style `buttonLeftRight`                                                               |
| `type`    | *String*             | `"left"`\|`"right"`\|`"button"` | Indicates if touch event was a button press or left/right press                                     |
| `event`   | *String*             | `"single"` \| `"hold"`          | Indicates if a button press was `short` or `long`                                          |
| `state`   | *String*             | `"on"` \| `"off"`               | The current tile state (prior to this event), only included for button press events        |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-8}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter  | Type     | Options         | Description                                                 |                                                            |
|:---        |:---:     |:---:            |:---                                                         |:---                                                        |
| `screen`   | *Number* | n/a             | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`     | *Number* | n/a             | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`    | *String* | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `sublabel` | *String* | n/a             | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonPrevNext

![TP32 Image Alt Text](/images/buttonPrevNext.png) ![TP32 Image Alt Text](/images/buttonPrevNext-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens":[
    {
      "screen":1,
      "label":"Demo",
      "tiles":[
        {
          "tile":1,
          "style":"buttonPrevNext",
          "icon":"_music",
          "label":"Skip track"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter    | Type     | Options | Description                             |                                                            |
|:---          |:---:     |:---:    |:---                                     |:---                                                        |
| `tile`       | *Number* | n/a     | Enter your tile number e.g. `1`         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`      | *String* | n/a     | Enter tile style name `buttonLeftRight` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`       | *String* | n/a     | Enter icon name e.g.`_music`            | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`      | *String* | n/a     | Enter label text e.g.`Skip track`       | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "buttonLeftRight",
  "type": "button",
  "event": "single",
  "state": "on"
}
```


### JSON parameters
| Parameter | Type                 | Options                         | Description                                                                         |
|:---       |:----:                |:---:                            |:---                                                                                 |
| `screen`  | *Number*             | n/a                             | Screen number triggering state event                                                |
| `tile`    | *Number*             | n/a                             | Tile number triggering state event                                                  |
| `style`   | *String*             | n/a                             | Tile style `buttonPrevNext`                                                         |
| `type`    | *String*             | `"prev"`\|`"next"`\|`"button"` | Indicates if touch event was a button press or prev/next press                       |
| `event`   | *String*             | `"single"` \| `"hold"`          | Indicates if a button press was `short` or `long`                                   |
| `state`   | *String*             | `"on"` \| `"off"`               | The current tile state (prior to this event), only included for button press events |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-8}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter  | Type     | Options         | Description                                                 |                                                            |
|:---        |:---:     |:---:            |:---                                                         |:---                                                        |
| `screen`   | *Number* | n/a             | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`     | *Number* | n/a             | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`    | *String* | `"on"`\|`"off"` | Update the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `sublabel` | *String* | n/a             | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## indicator

![TP32 Image Alt Text](/images/indicator-tile.png) ![TP32 Image Alt Text](/images/indicator-tile-2.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-11}
{
  "screens":[
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "indicator",
          "label": "Temp / Hum"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter    | Type     | Options | Description                             |                                                            |
|:---          |:---:     |:---:    |:---                                     |:---                                                        |
| `tile`       | *Number* | n/a     | Enter your tile number e.g. `1`         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`      | *String* | n/a     | Enter tile style name `indicator`       | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `label`      | *String* | n/a     | Enter label text e.g.`Temp / Hum`       | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item Command
```json {3-13}
{
  "tiles":[
    {
      "screen":1,
      "tile":1,
      "number":{
        "value":"22.9",
        "units":"°C",
        "subValue":"56.8",
        "subUnits":"%"
      },
      "subLabel":"updated just now"
    }
  ]
}
```


### JSON parameters
| Parameter  | Type     | Options | Description                                                                  |                                                            |
|:---        |:---:     |:---:    |:---                                                                          |:---                                                        |
| `screen`   | *Number* | n/a     | Screen number sending command to                                             | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`     | *Number* | n/a     | Tile number sending command to                                               | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `number`   | *Object* | n/a     |                                                                              | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `value`    | *String* | n/a     | Formatted value to display e.g. `22.9` <br> (restricted to `0...9 + - . :` ) | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `units`    | *String* | n/a     | Suffix/unit e.g. "°C"                                                         | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subValue` | *String* | n/a     | Formatted sub-value to display e.g. `56.8`                                   | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subUnits` | *String* | n/a     | Suffix/unit e.g. "%"                                                          | <Badge type="tip" text="Optional" vertical="bottom" />     | 
| `sublabel` | *String* | n/a     | String for additional tile information e.g. `"updated just now"`             | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## colorPickerRgbCct

![TP32 Image Alt Text](/images/colorPicker-tile.png) ![TP32 Image Alt Text](/images/colorPicker-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens":[
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "colorPickerRgbCct",
          "icon": "_bulb",
          "label": "Office light"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                               |                                                            |
|:---       |:---:     |:---:    |:---                                       |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1`           | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `colorPickerRgbCct` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_bulb`               | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`Office light`        | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "colorPickerRgbCct",
  "type": "colorPicker",
  "event": "change",
  "state": {
    "colorRgb": {
      "r": 255,
      "g": 124,
      "b": 208
    },
    "colorKelvin": 0,
    "brightness": 0
  }
}
```


### JSON parameters
| Parameter     | Type                 | Options                              | Description                                                                                 |
|:---           |:----:                |:---:                                 |:---                                                                                         |
| `screen`      | *Number*             | n/a                                  | Screen number triggering state event                                                        |
| `tile`        | *Number*             | n/a                                  | Tile number triggering state event                                                          |
| `style`       | *String*             | n/a                                  | Tile style `colorPickerRgbCct`                                                              |
| `type`        | *String*             | `"button"` \| `"colorPicker"`        | Indicates if touch event was a button press or long-press to launch the color picker popup  |
| `event`       | *String*             | `"single"` \| `"hold"` \| `"change"` | `single` \| `hold` events only on type `button`. `change` events only on type `colorPicker` |
| `state`       | *String* \| *Object* | `"on"` \| `"off"` \| `{}`            | The current tile state                                                                      |
| `colorRgb`    | *Object*             | n/a                                  |                                                                                             |
| `r`           | *Number*             | n/a                                  | Red colour Number between `0-255`                                                           |
| `g`           | *Number*             | n/a                                  | Green colour Number between `0-255`                                                         | 
| `b`           | *Number*             | n/a                                  | Blue colour Number between `0-255`                                                          |  
| `colorKelvin` | *Number*             | n/a                                  | For temperature mode, color temp (in kelvin)                                                | 
| `brightness`  | *Number*             | n/a                                  | For either mode, color brightness                                                           | 


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-18}
{
  "tiles":[
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "colorPicker": {
        "mode": "colorRgb",
        "colorRgb": {
          "r": 255,
          "g": 0,
          "b": 0
        },
        "colorKelvin": 0,
        "brightness": 50
      },
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter     | Type     | Options                       | Description                                                            |                                                            |
|:---           |:---:     |:---:                          |:---                                                                    |:---                                                        |
| `screen`      | *Number* | n/a                           | Screen number sending command to                                       | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`        | *Number* | n/a                           | Tile number sending command to                                         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`       | *String* | `"on"`\|`"off"`               | Update the tile state                                                 | <Badge type="tip" text="Optional" vertical="bottom" />     | 
| `colorPicker` | *Object* | n/a                           |                                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `mode`        | *String* | `"colorRgb"`\|`"colorKelvin"` | Update the color picker mode                                           | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorRgb`    | *Object* | n/a                           | For RGB mode, update the selected color (in RGB)                       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `r`           | *Number* | n/a                           | Red colour Number between 0-255                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `g`           | *Number* | n/a                           | Green colour Number between 0-255                                      | <Badge type="tip" text="Optional" vertical="bottom" />     | 
| `b`           | *Number* | n/a                           | Blue colour Number between 0-255                                       | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `colorKelvin` | *Number* | n/a                           | For temperature mode, update the selected color temp (in kelvin)       | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `brightness`  | *Number* | n/a                           | For either mode, update the selected color brightness                  | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `subLabel`    | *String* | n/a                           | String for additional tile information e.g. last updated "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the controls screen will appear. The controls screen has two tabs to choose from ``Color`` and ``Temperature``. The color tab gives you the ability to adjust the ``RGB Color`` via the color wheel and ``Brightness Color`` via the slider. The temperature tab gives you the ability to adjust the ``Color Temperature`` and ``Brightness White`` via the sliders. You can also toggle the tile `on` \| `off` by pressing the light bulb button in thr bottom right of the popup.

![TP32 Image Alt Text](/images/colorPicker-both-color-tab.png) ![TP32 Image Alt Text](/images/colorPicker-both-temp-tab.png)



---


## colorPickerRgb

![TP32 Image Alt Text](/images/colorPicker-tile.png) ![TP32 Image Alt Text](/images/colorPicker-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens":[
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "colorPickerRgb",
          "icon": "_bulb",
          "label": "Office light"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                               |                                                            |
|:---       |:---:     |:---:    |:---                                       |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1`           | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `colorPickerRgb` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_bulb`               | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`Office light`        | <Badge type="tip" text="Optional" vertical="bottom" />     |  

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "colorPickerRgb",
  "type": "colorPicker",
  "event": "change",
  "state": {
    "colorRgb": {
      "r": 255,
      "g": 124,
      "b": 208
    },
    "brightness": 0
  }
}
```


### JSON parameters
| Parameter     | Type                 | Options                              | Description                                                                                 |
|:---           |:----:                |:---:                                 |:---                                                                                         |
| `screen`      | *Number*             | n/a                                  | Screen number triggering state event                                                        |
| `tile`        | *Number*             | n/a                                  | Tile number triggering state event                                                          |
| `style`       | *String*             | n/a                                  | Tile style `colorPickerRgb`                                                              |
| `type`        | *String*             | `"button"` \| `"colorPicker"`        | Indicates if touch event was a button press or long-press to launch the color picker popup  |
| `event`       | *String*             | `"single"` \| `"hold"` \| `"change"` | `single` \| `hold` events only on type `button`. `change` events only on type `colorPicker` |
| `state`       | *String* \| *Object* | `"on"` \| `"off"` \| `{}`            | The current tile state                                                                      |
| `colorRgb`    | *Object*             | n/a                                  |                                                                                             |
| `r`           | *Number*             | n/a                                  | Red colour Number between `0-255`                                                           |
| `g`           | *Number*             | n/a                                  | Green colour Number between `0-255`                                                         | 
| `b`           | *Number*             | n/a                                  | Blue colour Number between `0-255`                                                          |  
| `brightness`  | *Number*             | n/a                                  | For either mode, color brightness                                                           | 

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-18}
{
  "tiles":[
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "colorPicker": {
        "mode": "colorRgb",
        "colorRgb": {
          "r": 255,
          "g": 0,
          "b": 0
        },
        "brightness": 50
      },
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter     | Type     | Options                       | Description                                                            |                                                            |
|:---           |:---:     |:---:                          |:---                                                                    |:---                                                        |
| `screen`      | *Number* | n/a                           | Screen number sending command to                                       | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`        | *Number* | n/a                           | Tile number sending command to                                         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`       | *String* | `"on"`\|`"off"`               | Updated the tile state                                                 | <Badge type="tip" text="Optional" vertical="bottom" />     | 
| `colorPicker` | *Object* | n/a                           |                                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `mode`        | *String* | `"colorRgb"`\|`"colorKelvin"` | Update the color picker mode                                           | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorRgb`    | *Object* | n/a                           | For RGB mode, update the selected color (in RGB)                       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `r`           | *Number* | n/a                           | Red colour Number between 0-255                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `g`           | *Number* | n/a                           | Green colour Number between 0-255                                      | <Badge type="tip" text="Optional" vertical="bottom" />     | 
| `b`           | *Number* | n/a                           | Blue colour Number between 0-255                                       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `brightness`  | *Number* | n/a                           | For either mode, update the selected color brightness                  | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `subLabel`    | *String* | n/a                           | String for additional tile information e.g. last updated "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |  

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the controls screen will appear giving you the ability to adjust the ``RGB Color`` via the color wheel and ``Brightness Color`` via the slider. You can also toggle the tile `on` \| `off` by pressing the light bulb button in thr bottom right of the popup.

![TP32 Image Alt Text](/images/colorPicker-color-tab.png)



---


## colorPickerCct

![TP32 Image Alt Text](/images/colorPicker-tile.png) ![TP32 Image Alt Text](/images/colorPicker-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens":[
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "colorPickerCct",
          "icon": "_bulb",
          "label": "Office light"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                               |                                                            |
|:---       |:---:     |:---:    |:---                                       |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1`           | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `colorPickerCct` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_bulb`               | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`Office light`        | <Badge type="tip" text="Optional" vertical="bottom" />     |  

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "colorPickerCct",
  "type": "colorPicker",
  "event": "change",
  "state": {
    "colorRgb": {
      "colorKelvin": 2000,
      "brightness": 50
    },
  }
}
```


### JSON parameters
| Parameter     | Type                 | Options                              | Description                                                                                 |
|:---           |:----:                |:---:                                 |:---                                                                                         |
| `screen`      | *Number*             | n/a                                  | Screen number triggering state event                                                        |
| `tile`        | *Number*             | n/a                                  | Tile number triggering state event                                                          |
| `style`       | *String*             | n/a                                  | Tile style `colorPickerCct`                                                                 |
| `type`        | *String*             | `"button"` \| `"colorPicker"`        | Indicates if touch event was a button press or long-press to launch the color picker popup  |
| `event`       | *String*             | `"single"` \| `"hold"` \| `"change"` | `single` \| `hold` events only on type `button`. `change` events only on type `colorPicker` |
| `state`       | *String* \| *Object* | `"on"` \| `"off"` \| `{}`            | The current tile state                                                                      |
| `colorRgb`    | *Object*             | n/a                                  |                                                                                             | 
| `colorKelvin` | *Number*             | n/a                                  | For temperature mode, color temp (in kelvin)                                                | 
| `brightness`  | *Number*             | n/a                                  | For either mode, color brightness                                                           | 

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-12}
{
  "tiles":[
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "colorPicker": {
        "colorKelvin": 2000,
        "brightness": 50
      },
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter     | Type     | Options                       | Description                                                            |                                                            |
|:---           |:---:     |:---:                          |:---                                                                    |:---                                                        |
| `screen`      | *Number* | n/a                           | Screen number sending command to                                       | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`        | *Number* | n/a                           | Tile number sending command to                                         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`       | *String* | `"on"`\|`"off"`               | Updated the tile state                                                 | <Badge type="tip" text="Optional" vertical="bottom" />     | 
| `colorPicker` | *Object* | n/a                           |                                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `colorKelvin` | *Number* | n/a                           | For temperature mode, update the selected color temp (in kelvin)       | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `brightness`  | *Number* | n/a                           | For either mode, update the selected color brightness                  | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `subLabel`    | *String* | n/a                           | String for additional tile information e.g. last updated "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |  

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the controls screen will appear giving you the ability to adjust the ``Color Temperature`` and ``Brightness White`` via the sliders. You can also toggle the tile `on` \| `off` by pressing the light bulb button in thr bottom right of the popup.

![TP32 Image Alt Text](/images/colorPicker-temp-tab.png)


---


## dropDown

![TP32 Image Alt Text](/images/dropdown-tile.png) ![TP32 Image Alt Text](/images/dropdown-tile-1.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "dropDown",
          "icon": "_music",
          "label": "Select Album"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                               |                                                            |
|:---       |:---:     |:---:    |:---                                       |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1`           | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `dropDown`          | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_music`               | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`Select Album`        | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1, 
  "tile": 1,
  "style": "dropDown",
  "type": "dropDown",
  "event": "selection",
  "state": 2
}
```


### JSON parameters
| Parameter     | Type                 | Options | Description                          |
|:---           |:----:                |:---:    |:---                                  |
| `screen`      | *Number*             | n/a     | Screen number triggering state event |
| `tile`        | *Number*             | n/a     | Tile number triggering state event   |
| `style`       | *String*             | n/a     |                                      |
| `type`        | *String*             | n/a     |                                      |
| `event`       | *String*             | n/a     |                                      |
| `state`       | *Number*             | n/a     | Item number selected                 |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-15}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "dropDownList": [
        "Rock Album",
        "Dance Album",
        "Jazz Album",
        "Soul Album",
        "Classical Album"
      ],
      "dropDownSelect": 2,
      "subLabel": "playing now"
    }
  ]
}
```


### JSON parameters
| Parameter        | Type     | Options | Description                                                               |                                                            |
|:---              |:---:     |:---:    |:---                                                                       |:---                                                        |
| `screen`         | *Number* | n/a     | Screen number sending command to                                          | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`           | *Number* | n/a     | Tile number sending command to                                            | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `dropDownList`   | *Array*  | n/a     | List items Array of Strings `["Rock Album", "Dance Album", "Jazz Album"]` | <Badge type="tip" text="Optional" vertical="bottom" />     |   
| `dropDownSelect` | *Number* | n/a     | Update the selected item in the dropdown list                            | <Badge type="tip" text="Optional" vertical="bottom" />     |   
| `subLabel`       | *String* | n/a     | String for additional tile information e.g. last updated `"playing now"`  | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the dropdown list screen will appear giving you the ability to select from the list of items.

![TP32 Image Alt Text](/images/dropdown-list-screen.png)

---

<!-- 
## keyPad

![TP32 Image Alt Text](/images/keypad-tile-1.png) ![TP32 Image Alt Text](/images/keypad-tile-2.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "keyPad",
          "icon": "_locked",
          "label": "House Alarm"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                        |                                                            |
|:---       |:---:     |:---:    |:---                                |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1`    | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `keyPad`     | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_unlocked`    | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`House Alarm` | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "keyPad",
  "type": "button",
  "event": "key",
  "state": "on",
  "keyCode": "1234"
}
```


### JSON parameters
| Parameter     | Type                 | Options           | Description                             |
|:---           |:----:                |:---:              |:---                                     |
| `screen`      | *Number*             | n/a               | Screen number triggering state event    |
| `tile`        | *Number*             | n/a               | Tile number triggering state event      |
| `style`       | *String*             | n/a               |                                         |
| `type`        | *String*             | n/a               |                                         |
| `event`       | *String*             | n/a               |                                         |
| `state`       | *Number*             | `"on"` \| `"off"` | Item number selected                    |
| `keyCode`     | *String*             | n/a               | Code entered - NOTE: this is plain text |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command (Tile)
```json {3-11}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "icon": "_locked",
      "keyPad": {
        "state": "locked"
      },
      "subLabel": "Armed for 13m"
    }
  ]
}
```


### JSON parameters
| Parameter      | Type     | Options                                               | Description                                                              |                                                            |
|:---            |:---:     |:---:                                                  |:---                                                                      |:---                                                        |
| `screen`       | *Number* | n/a                                                   | Screen number sending command to                                         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`         | *Number* | n/a                                                   | Tile number sending command to                                           | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `icon`         | *String* |                                                       | Dynamically set icon by entering icon name e.g."_locked"                 | <Badge type="tip" text="Optional" vertical="bottom" />     |   
| `keyPad`       | *Object* |                                                       |                                                                          | <Badge type="tip" text="Optional" vertical="bottom" />     |   
| `state`        | *String* | `"close"` \| `"failed"` \| `"unlocked"` \| `"locked"` | Update the tile state                                                    | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `subLabel`     | *String* | n/a                                                   | String for additional tile information e.g. last updated "Armed for 13m" | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::

::: code-group-item Command (KeyPad)
```json
{
  "keyPad":{
    "state":"failed",
    "text":"Failed",
    "icon":"_locked",
    "iconColorRgb":{
      "r":255,
      "g":0,
      "b":0
    }
  }
}
```


### JSON parameters
| Parameter      | Type     | Options                                               | Description                                                              |                                                            |
|:---            |:---:     |:---:                                                  |:---                                                                      |:---                                                        |  
| `state`        | *String* | `"close"` \| `"failed"` \| `"unlocked"` \| `"locked"` | Update the tile state                                                                         | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `text`         | *String* | n/a                                                   | Keypad status label (optional, displays "state" if omitted)              | <Badge type="warning" text="Required" vertical="bottom" /> |   
| `iconColorRgb` | *Object* | n/a                                                   | Change RGB colour of the keyPad icon                                     | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `r`            | *Number* | n/a                                                   | Red colour Number between 0-255                                          | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `g`            | *Number* | n/a                                                   | Green colour Number between 0-255                                        | <Badge type="tip" text="Optional" vertical="bottom" />     | 
| `b`            | *Number* | n/a                                                   | Blue colour Number between 0-255                                         | <Badge type="tip" text="Optional" vertical="bottom" />     | 
| `subLabel`     | *String* | n/a                                                   | String for additional tile information e.g. last updated "Armed for 13m" | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the keypad screen will appear giving you the ability to enter the code.

![TP32 Image Alt Text](/images/keypad-screen-1.png) ![TP32 Image Alt Text](/images/keypad-screen-2.png)


--- -->

<!-- 
## keyPadBlocking

![TP32 Image Alt Text](/images/keypad-screen-1.png) ![TP32 Image Alt Text](/images/keypad-screen-2.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "keyPadBlocking",
          "icon": "_locked",
          "label": "House Alarm"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                            |                                                            |
|:---       |:---:     |:---:    |:---                                    |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1`        | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `keyPadBlocking` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_unlocked`        | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`House Alarm`     | <Badge type="tip" text="Optional" vertical="bottom" />     |  

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1
  "tile": <number>,                 // Tile number e.g. 1 
  "style": "keyPadBlocking",
  "type": "button",
  "event": "key",
  "state": "on"|"off",              // The current tile state
  "keyCode": <code>                 // Code entered - NOTE: this is plain text
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "keyPad":{
    "state": "close"|"failed"|"unlocked"|"locked",
    "text": <label_text>,         // Keypad status label (optional, displays "state" if omitted)
    "colorRgb":{                  // Keypad icon color
      "r": <number>,
      "g": <number>,
      "b": <number>
    }
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


--- -->


## remote

![TP32 Image Alt Text](/images/remote-tile.png) ![TP32 Image Alt Text](/images/remote-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "remote",
          "icon": "_remote",
          "label": "Kodi TV"
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                     |                                                            |
|:---       |:---:     |:---:    |:---                             |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1` | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `remote`  | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_remote`   | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`Kodi TV`  | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "remote",
  "type": "up",
  "event": "single"
}
```


### JSON parameters
| Parameter     | Type                 | Options                                                                                               | Description                                                 |
|:---           |:----:                |:---:                                                                                                  |:---                                                         |
| `screen`      | *Number*             | n/a                                                                                                   | Screen number triggering state event                        |
| `tile`        | *Number*             | n/a                                                                                                   | Tile number triggering state event                          |
| `style`       | *String*             | n/a                                                                                                   | Tile style `remote`                                         |
| `type`        | *String*             | `"home"` \| `"info"` \| `"back"` \| `"list"` \| `"ok"` \| `"up"` \| `"down"` \| `"left"` \| `"right"` | Indicates which mote button on the popup screen was pressed |
| `event`       | *String*             | `"single"` \| `"hold"`                                                                                | `single` \| `hold` events                                   |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-8}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter     | Type     | Options         | Description                                               |                                                            |
|:---           |:---:     |:---:            |:---                                                       |:---                                                        |
| `screen`      | *Number* | n/a             | Screen number sending command to                          | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`        | *Number* | n/a             | Tile number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`       | *String* | `"on"`\|`"off"` | Updated the tile state                                    | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`    | *String* | n/a             | String for additional tile information e.g. "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |  

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the remote screen will appear giving you the ability to interact with the remote controls.

![TP32 Image Alt Text](/images/remote-screen.png)


---


## link

![TP32 Image Alt Text](/images/link-tile.png) ![TP32 Image Alt Text](/images/link-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-13}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "link",
          "icon": "_music",
          "label": "HiFi Controls",
          "link": 2
        }
      ]
    }
  ]
}
```


### JSON parameters
| Parameter | Type     | Options | Description                                       |                                                            |
|:---       |:---:     |:---:    |:---                                               |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1`                   | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `link`                      | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Enter icon name e.g.`_music`                      | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `label`   | *String* | n/a     | Enter label text e.g.`HiFi Controls`              | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `link`    | *String* | n/a     | Number of screen which is loaded upon press event | <Badge type="warning" text="Required" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "type": "screen",          
  "event":"change",
  "state":"loaded"
}
```


### JSON parameters
| Parameter | Type     | Options                    | Description                          |
|:---       |:----:    |:---:                       |:---                                  |
| `screen`  | *Number* | n/a                        | Screen number triggering state Event |
| `type`    | *String* | n/a                        |                                      |
| `event`   | *String* | n/a                        | `change` events                      |
| `state`   | *String* | `"loaded"` \| `"unloaded"` | `loaded` \| `unloaded` events        |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-8}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "state": "on",
      "subLabel": "on just now"
    }
  ]
}
```


### JSON parameters
| Parameter     | Type     | Options         | Description                                               |                                                            |
|:---           |:---:     |:---:            |:---                                                       |:---                                                        |
| `screen`      | *Number* | n/a             | Screen number sending command to                          | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `tile`        | *Number* | n/a             | Tile number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `state`       | *String* | `"on"`\|`"off"` | Updated the tile state                                    | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`    | *String* | n/a             | String for additional tile information e.g. "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

---


## thermostat

![TP32 Image Alt Text](/images/thermostat-arc-tile.png) ![TP32 Image Alt Text](/images/thermostat-arc-tile-active.png) ![TP32 Image Alt Text](/images/thermostat-digit-tile.png) ![TP32 Image Alt Text](/images/thermostat-digit-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The thermostat tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json {7-12}
{
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "thermostat",
          "label": "Heating",
          "icon": "_thermostat"
        }
      ]
    }
  ]
}
```

### JSON parameters
| Parameter | Type     | Options | Description                                                        |                                                            |
|:---       |:---:     |:---:    |:---                                                                |:---                                                        |
| `tile`    | *Number* | n/a     | Enter your tile number e.g. `1`                                    | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `style`   | *String* | n/a     | Enter tile style name `thermostat`                                 | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `label`   | *String* | n/a     | Enter label text e.g.`Heating`                                     | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `icon`    | *String* | n/a     | Set to `_thermostat` for dynamic Arc tile, dont specify for digits | <Badge type="warning" text="Required" vertical="bottom" /> |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": 1,
  "tile": 1,
  "style": "thermostat",
  "type": "thermostat",
  "event": "change",
  "state": {
    "mode": 3,
    "targetTemperature": 155
    }
}
```

### JSON parameters
| Parameter           | Type                  | Options                      | Description                                                                     |
|:---                 |:----:                 |:---:                         |:---                                                                             |
| `screen`            | *Number*              | n/a                          | Screen number triggering state event                                            |
| `tile`              | *Number*              | n/a                          | Tile number triggering state event                                              |
| `style`             | *String*              | n/a                          | Tile style `_thermostat`                                                        |
| `type`              | *String*              | `"button"` \| `"thermostat"` |                                                                                 |
| `event`             | *String*              | `"hold"` \| `"change"`       | `hold` events only on type `button`. `change` events only on type `themrmostat` |
| `state`             | *String* \| *Object*  | `"on"` \| `"off"` \| `{}`    | The current tile state                                                          |
| `mode`              | *Number*              | n/a                          | The current mode state                                                          |
| `targetTemperature` | *Number*              | n/a                          | The current target temperature                                                  |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json {3-21}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "number": {
        "value": "15.5",
        "units": "°C",
        "subValue": "13.8",
        "subUnits": "°C"
      },
      "state": "off",
      "thermostat": {
        "modeList": ["Off","On","Auto","Maunal"],
        "mode": 1,
        "targetTemperature": 155,
        "currentTemperature": 138,
        "units": "°C"
      },
      "subLabel": "off just now"
    }
  ]
}
```


### JSON parameters
| Parameter            | Type      | Options         | Description                                                                   |                                                            |
|:---                  |:---:      |:---:            |:---                                                                           |:---                                                        |
| `screen`             | *Number*  | n/a             | Screen number sending command to e.g. `1`                                     | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`               | *Number*  | n/a             | Tile number sending command to e.g. `1`                                       | <Badge type="warning" text="Required" vertical="bottom" /> |
| `number`             | *Object*  | n/a             | Number object only used when icon not specified                                | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `value`              | *String*  | n/a             | Formatted value to display e.g. `15.5` <br> (restricted to `0...9 + - . :` )  | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `units`              | *String*  | n/a             | Suffix/unit e.g. "°C"                                                          | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subValue`           | *String*  | n/a             | Formatted sub-value to display e.g. `13.8`                                    | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subUnits`           | *String*  | n/a             | Suffix/unit e.g. "°C"                                                          | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `state`              | *String*  | `"on"`\|`"off"` | Update the tile state                                                         | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `thermostat`         | *Object*  | n/a             |                                                                               | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `modeList`           | *Array*   | n/a             | Array of strings to populate modelist dropdown in thermostat popup            | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `mode`               | *Number*  | n/a             | Set value in modelist dropdown in thermostat popup                            | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `targetTemperature`  | *Number*  | n/a             | Integer increments by 0.5 in thermostat popup `155` = `15.5`                  | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `currentTemperature` | *Number*  | n/a             | Integer in thermostat popup `138` = `13.8`                                    | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `units`              | *String*  | n/a             | Suffix/unit in thermostat popup e.g. "°C"                                      | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`           | *String*  | n/a             | String for additional tile information e.g. last updated "off just now"       | <Badge type="tip" text="Optional" vertical="bottom" />     |


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile the thermostat popup screen will appear giving you the ability to interact with the thermostat controls.

![TP32 Image Alt Text](/images/thermostat-popup.png) ![TP32 Image Alt Text](/images/thermostat-popup-selector.png)

---

# Screen Payloads
[comment]: <> ([TODO] Screen Payloads explanation)
These payloads are specific to the screen object.

## Set footer
[comment]: <> ([TODO] Set Footer explanation text goes here)

![TP32 Image Alt Text](/images/footer-screen.png) ![TP32 Image Alt Text](/images/footer-screen-2.png)

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "screens":[
    {
      "screen": 1,
      "footer":{
        "left": "Wed 07 Sep",
        "center": "",
        "right": "20:49pm"
      }
    }
  ]
}
```
### JSON parameters
| Parameter | Type     | Options | Description                                              |                                                            |
|:---       |:---:     |:---:    |:---                                                      |:---                                                        |
| `screen`  | *Number* | n/a     | Screen number sending command to                         | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `footer`  | *Object* | n/a     |                                                          | <Badge type="warning" text="Required" vertical="bottom" /> |  
| `left`    | *String* | n/a     | Left aligned String for additional tile information      | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `center`  | *String* | n/a     | Centrally aligned String for additional tile information | <Badge type="tip" text="Optional" vertical="bottom" />     |  
| `right`   | *String* | n/a     | Right aligned String for additional tile information     | <Badge type="tip" text="Optional" vertical="bottom" />     |  


<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

::: tip

``<text>`` supports coloring using``"#RRGGBB <text>#"`` tags where RRGGBB are hex, e.g. ``“#FF0000 RED#”``. 

Missing key shows the default icon/string (empty) hides the default icon/string ``"<any text>"`` replaces the default icon/string with ``"<any text>"`` an empty list ``"footer":{}`` resets all to default
:::


## Set screen background color
[comment]: <> ([TODO] Set screen background color explanation text goes here)

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "backgroundColorRgb":{
    "r": 255,
    "g": 0,
    "b": 0
  }
}
```


### JSON parameters
| Parameter            | Type     | Options | Description                       |                                                               |
|:---                  |:---:     |:---:    |:---                               |:---                                                           |
| `screen`             | *Number* | n/a     | Screen number sending command to  | <Badge type="warning" text="Required" vertical="bottom" />    |  
| `backgroundColorRgb` | *Object* | n/a     |                                   | <Badge type="warning" text="Required" vertical="bottom" />    |
| `r`                  | *Number* | n/a     | Red colour Number between 0-255   | <Badge type="warning" text="Required" vertical="bottom" />    |
| `g`                  | *Number* | n/a     | Green colour Number between 0-255 | <Badge type="warning" text="Required" vertical="bottom" />    | 
| `b`                  | *Number* | n/a     | Blue colour Number between 0-255  | <Badge type="twarningip" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



# Device Payloads
[comment]: <> ([TODO] Device Payloads explanation)
These payloads are specific to the screen object.

## Control the backlight
[comment]: <> ([TODO] Explanation)
The backlight level can be set via the slider on the settings screen or with an MQTT Payload.


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "backlight":{
    "brightness": <number>
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::: code-group-item State
```json
{
  "type": "backlight",
  "event": "change",
  "state": "sleep"|"awake",
  "brightness": <number>
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

::: tip
``<number>`` number between 1 .. 100 [%]
:::

The backlight state can be set to on or off. Additionally a "Screen Sleep Timeout" can be set via the Admin UI config page. 



## Show a message in modal pop-up
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "message":{
    "title": "<text>",
    "text":" <text>"
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::: code-group-item State
```json
{
  "screen": <number>,
  "type": "message",
  "event": "close"|"open",
  "state": "closed"|"open"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## Add a custom icon
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "addIcon":{
    "name": "<text>",
    "imageBase64": "<encodeBase64(.png)>"
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## Custom Icons
* Custom icons have to be downloaded before they can be used
* Configure a tile after the custom icons have been loaded
* If using AdminUI, the “Edit Config” has to be refreshed to make the new icon appear in the icon list
* On the fly loaded or changed icons are shown on their tile(s) only after the ``cmnd/``  “Set icon for state” with  ``“state”:”on”``  and ``“state”:”off”``  has been sent for all tiles having this icon

### Notes on how to prepare an icon for use;

* Built-in icons are sourced from [icons8.com](https://icons8.com/icon/set/ios/ios), style ios / outline
* The tile layout is optimised for a size of 60x60 pixels
* There are no size checks for custom icons
* Icons are aligned top/left of a tile. Up to approx. 140x140 pixel would fit on a tile
* The encoded image size should not exceed 4k to avoid crashes (TBD)
* Custom icons have to be .png files
* For download via mqtt/json the binary .png has to be encoded Base64
* Online converter like [base64encode.org](https://www.base64encode.org/) can be used, or you can tru our new online convertor which also generates the Json Object required which can be easily copy & pasted into your payload [OXRS Icon Generator](/tools/icon-generator.html). Alternativley for automation there is a Base64 node for NR. Make sure there is no extra information added to the Base64 encoded file.
* Icon download is performed via [“addIcon” command](/docs/firmware/touch-panel-esp32.html#add-a-custom-icon)
* The added icons appear in alphabetical order after the built-in icons (which are preceded with "_")
* Custom icons are not persistent, they need to be reloaded after restart, and (stored) config needs to be resent to allow the custom icons to be used


## API
The Touch Panel firmware implements the standard [OXRS REST API](/docs/libraries/esp32-api-library.html) endpoints. This allows you to configure the device, send commands, as well as perform OTA updates, restarts and factory resets.

The [OXRS Admin UI](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP) uses this REST API and is a great place to start with when setting up your device for the first time.


### API Endpoints
REST API endpoints have been added to the Touch Panel firmware, these are listed below with a brief explanation;

HTTP <Badge type="tip" text="GET" vertical="middle" /> 

``/api/snapshot.bmp``
download a snapshot (approx. 450kB) of the current display, to your computer

``/api/snapshot.bmp?tile=<1-6>``
download a snapshot (approx. 60kB) of the selected tile (1-6) in the current display, to your computer


## Downloads
Download the latest version of the firmware on [Github](https://github.com/OXRS-IO/OXRS-IO-TouchPanel-ESP32-FW/releases).


## Supported Hardware
- WT32-SC01 ESP32 TFT [Link](/add-ons/touch-displays/wt32-sc01)


### Credits
 - Moin [Github](https://github.com/moinmoin-sh)
 - Ben Jones [Github](https://github.com/sumnerboy12)
 - Austin's Creations [Maker Website](https://www.austinscreations.ca/)

 ---


#### License
Copyright 2020-2022 SuperHouse Automation Pty Ltd www.superhouse.tv

The software portion of this project is licensed under the Simplified BSD License. The "licence" folder within this project contains a copy of this license in plain text format.
