---
tags: ["TAG1", "TAG2", "TAG3"]
---

# Touch Panel ESP32

<p class="maker">by <b>OXRS Core Team</b></p>

> SKU: OXRS-IO-TouchPanel-ESP32-FW

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

- [Firmware Installation](/docs/firmware/touch-panel-esp32.html#firmware-installation)

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

`conf/<device-client-id>`
<Badge type="warning" text="MQTT State Topic" vertical="middle" />

`stat/<device-client-id>`
<Badge type="warning" text="MQTT Command Topic" vertical="middle" />

`cmnd/<device-client-id>`

::: tip Recommendation:
[comment]: <> ([TODO] Explanation into the recommended Node-RED usage for the product)
The recommended way to use the firmware and interact with the Touch Panel and your IoT Devices is via Node-RED and MQTT. They are used to configure, manage state and recieve events.

Further documentation and some example Node-RED Flows will be made available to get you started.
:::

---

# Tile Styles

[comment]: <> ([TODO] Tile Styles explanation)

| Tile Style                                                        | Tile Example                                               | Get Started                                                                                                                                                                                                      |
| :---------------------------------------------------------------- | :--------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button                                                            | ![TP32 Image Alt Text](/images/button-tile-not-active.png) | [Get Started](/docs/firmware/touch-panel-esp32/#button)                                                                                                                                                          |
| buttonLevelUp                                                     | ![TP32 Image Alt Text](/images/buttonLevelUp-tile.png)     | [Get Started](/docs/firmware/touch-panel-esp32/#buttonlevelup)                                                                                                                                                   |
| buttonLevelDown                                                   | ![TP32 Image Alt Text](/images/buttonLevelDown-tile.png)   | [Get Started](/docs/firmware/touch-panel-esp32/#buttonleveldown)                                                                                                                                                 |
| buttonUpDown                                                      | ![TP32 Image Alt Text](/images/buttonUpDown-tile.png)      | [Get Started](/docs/firmware/touch-panel-esp32/#buttonupdown)                                                                                                                                                    |
| buttonLeftRight                                                   | ![TP32 Image Alt Text](/images/buttonLeftRight-tile.png)   | [Get Started](/docs/firmware/touch-panel-esp32/#buttonleftright)                                                                                                                                                 |
| buttonPrevNext                                                    | ![TP32 Image Alt Text](/images/buttonPrevNext.png)         | [Get Started](/docs/firmware/touch-panel-esp32/#buttonprevnext)                                                                                                                                                  |
| indicator                                                         | ![TP32 Image Alt Text](/images/indicator-tile.png)         | [Get Started](/docs/firmware/touch-panel-esp32/#indicator)                                                                                                                                                       |
| colorPickerRgbCct <br><br> colorPickerRgb <br><br> colorPickerCct | ![TP32 Image Alt Text](/images/colorPicker-tile.png)       | [Get Started](/docs/firmware/touch-panel-esp32/#colorpickerrgbcct)<br><br>[Get Started](/docs/firmware/touch-panel-esp32/#colorpickerrgb)<br><br>[Get Started](/docs/firmware/touch-panel-esp32/#colorpickercct) |
| dropDown                                                          | ![TP32 Image Alt Text](/images/dropdown-tile.png)          | [Get Started](/docs/firmware/touch-panel-esp32/#dropdown)                                                                                                                                                        |
| remote                                                            | ![TP32 Image Alt Text](/images/remote-tile.png)            | [Get Started](/docs/firmware/touch-panel-esp32/#remote)                                                                                                                                                          |
| link                                                              | ![TP32 Image Alt Text](/images/link-tile.png)              | [Get Started](/docs/firmware/touch-panel-esp32/#link)                                                                                                                                                            |
| thermostat                                                        | ![TP32 Image Alt Text](/images/thermostat-arc-tile.png)    | [Get Started](/docs/firmware/touch-panel-esp32/#thermostat)                                                                                                                                                      |
| keyPad                                     | ![TP32 Image Alt Text](/images/keypad-tile-2.png)          | [Get Started](/docs/firmware/touch-panel-esp32/#keypad)                                                                                 |

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

| Parameter |   Type   | Options | Description                     |                                                            |
| :-------- | :------: | :-----: | :------------------------------ | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `button`  | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_bulb`     | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Lamps`    | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |         Type         |        Options         | Description                                     |
| :-------- | :------------------: | :--------------------: | :---------------------------------------------- |
| `screen`  |       _Number_       |          n/a           | Screen number triggering state event            |
| `tile`    |       _Number_       |          n/a           | Tile number triggering state event              |
| `style`   |       _String_       |          n/a           | Tile style `_thermostat`                        |
| `type`    |       _String_       |       `"button"`       |                                                 |
| `event`   |       _String_       | `"single"` \| `"hold"` | Indicates if the button press was short or long |
| `state`   | _String_ \| _Object_ |   `"on"` \| `"off"`    | The current tile state (prior to this event)    |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter  |   Type   |     Options     | Description                                                 |                                                            |
| :--------- | :------: | :-------------: | :---------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |       n/a       | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |       n/a       | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`    | _String_ | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `sublabel` | _String_ |       n/a       | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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

| Parameter    |   Type   | Options | Description                           |                                                            |
| :----------- | :------: | :-----: | :------------------------------------ | :--------------------------------------------------------- |
| `tile`       | _Number_ |   n/a   | Enter your tile number e.g. `1`       | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`      | _String_ |   n/a   | Enter tile style name `buttonLevelUp` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`       | _String_ |   n/a   | Enter icon name e.g.`_bulb`           | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`      | _String_ |   n/a   | Enter label text e.g.`Lamps`          | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `levelStart` | _String_ |   n/a   | Defaults to `0`                       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `levelStop`  | _String_ |   n/a   | Defaults to `100`                     | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |   Type   |                   Options                    | Description                                                                                |
| :-------- | :------: | :------------------------------------------: | :----------------------------------------------------------------------------------------- |
| `screen`  | _Number_ |                     n/a                      | Screen number triggering state event                                                       |
| `tile`    | _Number_ |                     n/a                      | Tile number triggering state event                                                         |
| `style`   | _String_ |                     n/a                      | Tile style `buttonLevelUp`                                                                 |
| `type`    | _String_ |            `"button"`\|`"level"`             | Indicates if touch event was a button press or level change                                |
| `event`   | _String_ | `"single"` \| `"hold"` \| `"up"` \| `"down"` | Indicates if a button press was `short` or `long`, or if a level change was `up` or `down` |
| `state`   | _Number_ |                     n/a                      | The current level state (prior to this event)                                              |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter  |   Type   |     Options     | Description                                                 |                                                            |
| :--------- | :------: | :-------------: | :---------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |       n/a       | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |       n/a       | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`    | _String_ | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `level`    | _Number_ |       n/a       | Update the level state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `sublabel` | _String_ |       n/a       | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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

| Parameter    |   Type   | Options | Description                             |                                                            |
| :----------- | :------: | :-----: | :-------------------------------------- | :--------------------------------------------------------- |
| `tile`       | _Number_ |   n/a   | Enter your tile number e.g. `1`         | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`      | _String_ |   n/a   | Enter tile style name `buttonLevelDown` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`       | _String_ |   n/a   | Enter icon name e.g.`_blind`            | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`      | _String_ |   n/a   | Enter label text e.g.`Blinds`           | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `levelStart` | _String_ |   n/a   | Defaults to `0`                         | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `levelStop`  | _String_ |   n/a   | Defaults to `100`                       | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |   Type   |                   Options                    | Description                                                                                |
| :-------- | :------: | :------------------------------------------: | :----------------------------------------------------------------------------------------- |
| `screen`  | _Number_ |                     n/a                      | Screen number triggering state event                                                       |
| `tile`    | _Number_ |                     n/a                      | Tile number triggering state event                                                         |
| `style`   | _String_ |                     n/a                      | Tile style `buttonLevelDown`                                                               |
| `type`    | _String_ |            `"button"`\|`"level"`             | Indicates if touch event was a button press or level change                                |
| `event`   | _String_ | `"single"` \| `"hold"` \| `"up"` \| `"down"` | Indicates if a button press was `short` or `long`, or if a level change was `up` or `down` |
| `state`   | _Number_ |                     n/a                      | The current level state (prior to this event)                                              |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter  |   Type   |     Options     | Description                                                 |                                                            |
| :--------- | :------: | :-------------: | :---------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |       n/a       | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |       n/a       | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`    | _String_ | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `level`    | _Number_ |       n/a       | Update the level state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `sublabel` | _String_ |       n/a       | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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

| Parameter |   Type   | Options | Description                          |                                                            |
| :-------- | :------: | :-----: | :----------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `buttonUpDown` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_speaker`       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Speakers`      | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |   Type   |           Options            | Description                                                                         |
| :-------- | :------: | :--------------------------: | :---------------------------------------------------------------------------------- |
| `screen`  | _Number_ |             n/a              | Screen number triggering state event                                                |
| `tile`    | _Number_ |             n/a              | Tile number triggering state event                                                  |
| `style`   | _String_ |             n/a              | Tile style `buttonLevelDown`                                                        |
| `type`    | _String_ | `"up"`\|`"down"`\|`"button"` | Indicates if touch event was a button press or up/down                              |
| `event`   | _String_ |    `"single"` \| `"hold"`    | Indicates if a button press was `short` or `long`                                   |
| `state`   | _String_ |      `"on"` \| `"off"`       | The current tile state (prior to this event), only included for button press events |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter  |   Type   |     Options     | Description                                                 |                                                            |
| :--------- | :------: | :-------------: | :---------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |       n/a       | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |       n/a       | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`    | _String_ | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `sublabel` | _String_ |       n/a       | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "buttonLeftRight",
          "icon": "_slider",
          "label": "Audio Balance"
        }
      ]
    }
  ]
}
```

### JSON parameters

| Parameter |   Type   | Options | Description                             |                                                            |
| :-------- | :------: | :-----: | :-------------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`         | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `buttonLeftRight` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_slider`           | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Audio Balance`    | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |   Type   |             Options             | Description                                                                         |
| :-------- | :------: | :-----------------------------: | :---------------------------------------------------------------------------------- |
| `screen`  | _Number_ |               n/a               | Screen number triggering state event                                                |
| `tile`    | _Number_ |               n/a               | Tile number triggering state event                                                  |
| `style`   | _String_ |               n/a               | Tile style `buttonLeftRight`                                                        |
| `type`    | _String_ | `"left"`\|`"right"`\|`"button"` | Indicates if touch event was a button press or left/right press                     |
| `event`   | _String_ |     `"single"` \| `"hold"`      | Indicates if a button press was `short` or `long`                                   |
| `state`   | _String_ |        `"on"` \| `"off"`        | The current tile state (prior to this event), only included for button press events |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter  |   Type   |     Options     | Description                                                 |                                                            |
| :--------- | :------: | :-------------: | :---------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |       n/a       | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |       n/a       | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`    | _String_ | `"on"`\|`"off"` | Updated the tile state                                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `sublabel` | _String_ |       n/a       | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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
  "screens": [
    {
      "screen": 1,
      "label": "Demo",
      "tiles": [
        {
          "tile": 1,
          "style": "buttonPrevNext",
          "icon": "_music",
          "label": "Skip track"
        }
      ]
    }
  ]
}
```

### JSON parameters

| Parameter |   Type   | Options | Description                             |                                                            |
| :-------- | :------: | :-----: | :-------------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`         | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `buttonLeftRight` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_music`            | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Skip track`       | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |   Type   |            Options             | Description                                                                         |
| :-------- | :------: | :----------------------------: | :---------------------------------------------------------------------------------- |
| `screen`  | _Number_ |              n/a               | Screen number triggering state event                                                |
| `tile`    | _Number_ |              n/a               | Tile number triggering state event                                                  |
| `style`   | _String_ |              n/a               | Tile style `buttonPrevNext`                                                         |
| `type`    | _String_ | `"prev"`\|`"next"`\|`"button"` | Indicates if touch event was a button press or prev/next press                      |
| `event`   | _String_ |     `"single"` \| `"hold"`     | Indicates if a button press was `short` or `long`                                   |
| `state`   | _String_ |       `"on"` \| `"off"`        | The current tile state (prior to this event), only included for button press events |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter  |   Type   |     Options     | Description                                                 |                                                            |
| :--------- | :------: | :-------------: | :---------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |       n/a       | Screen number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |       n/a       | Tile number sending command to                              | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`    | _String_ | `"on"`\|`"off"` | Update the tile state                                       | <Badge type="warning" text="Required" vertical="bottom" /> |
| `sublabel` | _String_ |       n/a       | String for additional tile information e.g. `"on just now"` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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
  "screens": [
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

| Parameter |   Type   | Options | Description                       |                                                            |
| :-------- | :------: | :-----: | :-------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `indicator` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Temp / Hum` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
:::

::: code-group-item Command

```json {3-13}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "number": {
        "value": "22.9",
        "units": "°C",
        "subValue": "56.8",
        "subUnits": "%"
      },
      "subLabel": "updated just now"
    }
  ]
}
```

### JSON parameters

| Parameter  |   Type   | Options | Description                                                                  |                                                            |
| :--------- | :------: | :-----: | :--------------------------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |   n/a   | Screen number sending command to                                             | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |   n/a   | Tile number sending command to                                               | <Badge type="warning" text="Required" vertical="bottom" /> |
| `number`   | _Object_ |   n/a   |                                                                              | <Badge type="warning" text="Required" vertical="bottom" /> |
| `value`    | _String_ |   n/a   | Formatted value to display e.g. `22.9` <br> (restricted to `0...9 + - . :` ) | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `units`    | _String_ |   n/a   | Suffix/unit e.g. "°C"                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subValue` | _String_ |   n/a   | Formatted sub-value to display e.g. `56.8`                                   | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subUnits` | _String_ |   n/a   | Suffix/unit e.g. "%"                                                         | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `sublabel` | _String_ |   n/a   | String for additional tile information e.g. `"updated just now"`             | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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
  "screens": [
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

| Parameter |   Type   | Options | Description                               |                                                            |
| :-------- | :------: | :-----: | :---------------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`           | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `colorPickerRgbCct` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_bulb`               | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Office light`       | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter     |         Type         |               Options                | Description                                                                                 |
| :------------ | :------------------: | :----------------------------------: | :------------------------------------------------------------------------------------------ |
| `screen`      |       _Number_       |                 n/a                  | Screen number triggering state event                                                        |
| `tile`        |       _Number_       |                 n/a                  | Tile number triggering state event                                                          |
| `style`       |       _String_       |                 n/a                  | Tile style `colorPickerRgbCct`                                                              |
| `type`        |       _String_       |    `"button"` \| `"colorPicker"`     | Indicates if touch event was a button press or long-press to launch the color picker popup  |
| `event`       |       _String_       | `"single"` \| `"hold"` \| `"change"` | `single` \| `hold` events only on type `button`. `change` events only on type `colorPicker` |
| `state`       | _String_ \| _Object_ |      `"on"` \| `"off"` \| `{}`       | The current tile state                                                                      |
| `colorRgb`    |       _Object_       |                 n/a                  |                                                                                             |
| `r`           |       _Number_       |                 n/a                  | Red colour Number between `0-255`                                                           |
| `g`           |       _Number_       |                 n/a                  | Green colour Number between `0-255`                                                         |
| `b`           |       _Number_       |                 n/a                  | Blue colour Number between `0-255`                                                          |
| `colorKelvin` |       _Number_       |                 n/a                  | For temperature mode, color temp (in kelvin)                                                |
| `brightness`  |       _Number_       |                 n/a                  | For either mode, color brightness                                                           |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
:::

::: code-group-item Command

```json {3-18}
{
  "tiles": [
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

| Parameter     |   Type   |            Options            | Description                                                            |                                                            |
| :------------ | :------: | :---------------------------: | :--------------------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`      | _Number_ |              n/a              | Screen number sending command to                                       | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`        | _Number_ |              n/a              | Tile number sending command to                                         | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`       | _String_ |        `"on"`\|`"off"`        | Update the tile state                                                  | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorPicker` | _Object_ |              n/a              |                                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `mode`        | _String_ | `"colorRgb"`\|`"colorKelvin"` | Update the color picker mode                                           | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorRgb`    | _Object_ |              n/a              | For RGB mode, update the selected color (in RGB)                       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `r`           | _Number_ |              n/a              | Red colour Number between 0-255                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `g`           | _Number_ |              n/a              | Green colour Number between 0-255                                      | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `b`           | _Number_ |              n/a              | Blue colour Number between 0-255                                       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorKelvin` | _Number_ |              n/a              | For temperature mode, update the selected color temp (in kelvin)       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `brightness`  | _Number_ |              n/a              | For either mode, update the selected color brightness                  | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`    | _String_ |              n/a              | String for additional tile information e.g. last updated "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the controls screen will appear. The controls screen has two tabs to choose from `Color` and `Temperature`. The color tab gives you the ability to adjust the `RGB Color` via the color wheel and `Brightness Color` via the slider. The temperature tab gives you the ability to adjust the `Color Temperature` and `Brightness White` via the sliders. You can also toggle the tile `on` \| `off` by pressing the light bulb button in thr bottom right of the popup.

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
  "screens": [
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

| Parameter |   Type   | Options | Description                            |                                                            |
| :-------- | :------: | :-----: | :------------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`        | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `colorPickerRgb` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_bulb`            | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Office light`    | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter    |         Type         |               Options                | Description                                                                                 |
| :----------- | :------------------: | :----------------------------------: | :------------------------------------------------------------------------------------------ |
| `screen`     |       _Number_       |                 n/a                  | Screen number triggering state event                                                        |
| `tile`       |       _Number_       |                 n/a                  | Tile number triggering state event                                                          |
| `style`      |       _String_       |                 n/a                  | Tile style `colorPickerRgb`                                                                 |
| `type`       |       _String_       |    `"button"` \| `"colorPicker"`     | Indicates if touch event was a button press or long-press to launch the color picker popup  |
| `event`      |       _String_       | `"single"` \| `"hold"` \| `"change"` | `single` \| `hold` events only on type `button`. `change` events only on type `colorPicker` |
| `state`      | _String_ \| _Object_ |      `"on"` \| `"off"` \| `{}`       | The current tile state                                                                      |
| `colorRgb`   |       _Object_       |                 n/a                  |                                                                                             |
| `r`          |       _Number_       |                 n/a                  | Red colour Number between `0-255`                                                           |
| `g`          |       _Number_       |                 n/a                  | Green colour Number between `0-255`                                                         |
| `b`          |       _Number_       |                 n/a                  | Blue colour Number between `0-255`                                                          |
| `brightness` |       _Number_       |                 n/a                  | For either mode, color brightness                                                           |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
:::

::: code-group-item Command

```json {3-18}
{
  "tiles": [
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

| Parameter     |   Type   |            Options            | Description                                                            |                                                            |
| :------------ | :------: | :---------------------------: | :--------------------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`      | _Number_ |              n/a              | Screen number sending command to                                       | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`        | _Number_ |              n/a              | Tile number sending command to                                         | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`       | _String_ |        `"on"`\|`"off"`        | Updated the tile state                                                 | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorPicker` | _Object_ |              n/a              |                                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `mode`        | _String_ | `"colorRgb"`\|`"colorKelvin"` | Update the color picker mode                                           | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorRgb`    | _Object_ |              n/a              | For RGB mode, update the selected color (in RGB)                       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `r`           | _Number_ |              n/a              | Red colour Number between 0-255                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `g`           | _Number_ |              n/a              | Green colour Number between 0-255                                      | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `b`           | _Number_ |              n/a              | Blue colour Number between 0-255                                       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `brightness`  | _Number_ |              n/a              | For either mode, update the selected color brightness                  | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`    | _String_ |              n/a              | String for additional tile information e.g. last updated "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the controls screen will appear giving you the ability to adjust the `RGB Color` via the color wheel and `Brightness Color` via the slider. You can also toggle the tile `on` \| `off` by pressing the light bulb button in thr bottom right of the popup.

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
  "screens": [
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

| Parameter |   Type   | Options | Description                            |                                                            |
| :-------- | :------: | :-----: | :------------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`        | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `colorPickerCct` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_bulb`            | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Office light`    | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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
    }
  }
}
```

### JSON parameters

| Parameter     |         Type         |               Options                | Description                                                                                 |
| :------------ | :------------------: | :----------------------------------: | :------------------------------------------------------------------------------------------ |
| `screen`      |       _Number_       |                 n/a                  | Screen number triggering state event                                                        |
| `tile`        |       _Number_       |                 n/a                  | Tile number triggering state event                                                          |
| `style`       |       _String_       |                 n/a                  | Tile style `colorPickerCct`                                                                 |
| `type`        |       _String_       |    `"button"` \| `"colorPicker"`     | Indicates if touch event was a button press or long-press to launch the color picker popup  |
| `event`       |       _String_       | `"single"` \| `"hold"` \| `"change"` | `single` \| `hold` events only on type `button`. `change` events only on type `colorPicker` |
| `state`       | _String_ \| _Object_ |      `"on"` \| `"off"` \| `{}`       | The current tile state                                                                      |
| `colorRgb`    |       _Object_       |                 n/a                  |                                                                                             |
| `colorKelvin` |       _Number_       |                 n/a                  | For temperature mode, color temp (in kelvin)                                                |
| `brightness`  |       _Number_       |                 n/a                  | For either mode, color brightness                                                           |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
:::

::: code-group-item Command

```json {3-12}
{
  "tiles": [
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

| Parameter     |   Type   |     Options     | Description                                                            |                                                            |
| :------------ | :------: | :-------------: | :--------------------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`      | _Number_ |       n/a       | Screen number sending command to                                       | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`        | _Number_ |       n/a       | Tile number sending command to                                         | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`       | _String_ | `"on"`\|`"off"` | Updated the tile state                                                 | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorPicker` | _Object_ |       n/a       |                                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `colorKelvin` | _Number_ |       n/a       | For temperature mode, update the selected color temp (in kelvin)       | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `brightness`  | _Number_ |       n/a       | For either mode, update the selected color brightness                  | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`    | _String_ |       n/a       | String for additional tile information e.g. last updated "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the controls screen will appear giving you the ability to adjust the `Color Temperature` and `Brightness White` via the sliders. You can also toggle the tile `on` \| `off` by pressing the light bulb button in thr bottom right of the popup.

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

| Parameter |   Type   | Options | Description                         |                                                            |
| :-------- | :------: | :-----: | :---------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`     | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `dropDown`    | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_music`        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Select Album` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |   Type   | Options | Description                                     |
| :-------- | :------: | :-----: | :---------------------------------------------- |
| `screen`  | _Number_ |   n/a   | Screen number triggering state event            |
| `tile`    | _Number_ |   n/a   | Tile number triggering state event              |
| `style`   | _String_ |   n/a   |                                                 |
| `type`    | _String_ |   n/a   |                                                 |
| `event`   | _String_ |   n/a   |                                                 |
| `state`   | _Number_ |   n/a   | Item selected (1-based index of `dropDownList`) |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter        |   Type   | Options | Description                                                               |                                                            |
| :--------------- | :------: | :-----: | :------------------------------------------------------------------------ | :--------------------------------------------------------- |
| `screen`         | _Number_ |   n/a   | Screen number sending command to                                          | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`           | _Number_ |   n/a   | Tile number sending command to                                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `dropDownList`   | _Array_  |   n/a   | List items Array of Strings `["Rock Album", "Dance Album", "Jazz Album"]` | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `dropDownSelect` | _Number_ |   n/a   | Selected item in dropdown list (1-based index of `dropDownList`)          | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`       | _String_ |   n/a   | String for additional tile information e.g. last updated `"playing now"`  | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the dropdown list screen will appear giving you the ability to select from the list of items.

![TP32 Image Alt Text](/images/dropdown-list-screen.png)

---

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

| Parameter |   Type   | Options | Description                        |                                                            |
| :-------- | :------: | :-----: | :--------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`    | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `keyPad`     | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_unlocked`    | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`House Alarm` | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |   Type   |      Options      | Description                             |
| :-------- | :------: | :---------------: | :-------------------------------------- |
| `screen`  | _Number_ |        n/a        | Screen number triggering state event    |
| `tile`    | _Number_ |        n/a        | Tile number triggering state event      |
| `style`   | _String_ |        n/a        |                                         |
| `type`    | _String_ |        n/a        |                                         |
| `event`   | _String_ |        n/a        |                                         |
| `state`   | _Number_ | `"on"` \| `"off"` | Item number selected                    |
| `keyCode` | _String_ |        n/a        | Code entered - NOTE: this is plain text |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
:::

::: code-group-item Command

```json  {3-17}
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "icon": "_locked",
      "keyPad": {
        "state": "failed",
        "text": "Failed",
        "icon": "_locked",
        "iconColorRgb": {
          "r": 255,
          "g": 0,
          "b": 0
        }
      }
    }
  ]
}
```

### JSON parameters

| Parameter      |   Type   |                        Options                        | Description                                                              |                                                            |
| :------------- | :------: | :---------------------------------------------------: | :----------------------------------------------------------------------- | :--------------------------------------------------------- |
| `state`        | _String_ | `"close"` \| `"failed"` \| `"unlocked"` \| `"locked"` | Update the tile state                                                    | <Badge type="warning" text="Required" vertical="bottom" /> |
| `text`         | _String_ |                          n/a                          | Keypad status label (optional, displays "state" if omitted)              | <Badge type="warning" text="Required" vertical="bottom" /> |
| `iconColorRgb` | _Object_ |                          n/a                          | Change RGB colour of the keyPad icon                                     | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `r`            | _Number_ |                          n/a                          | Red colour Number between 0-255                                          | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `g`            | _Number_ |                          n/a                          | Green colour Number between 0-255                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `b`            | _Number_ |                          n/a                          | Blue colour Number between 0-255                                         | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`     | _String_ |                          n/a                          | String for additional tile information e.g. last updated "Armed for 13m" | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the keypad tile the keypad screen will appear giving you the ability to enter the code.

![TP32 Image Alt Text](/images/keypad-screen-1.png) ![TP32 Image Alt Text](/images/keypad-screen-2.png)


::: warning Note:

You will be required to store and verify valid pin codes for example using Node RED. 

Once you verify the pincode you can close the keypad control screen by sending a payload to the cmnd/ topic setting keypad state to 'close'. Then send a payload to the cmnd/ topic to load the desired screen. 

(See the [Load Screen payload](/docs/firmware/touch-panel-esp32/#load-screen) in Device Commands on how to load a screen)

:::

# keyPadBlocking

If you wish to lock access to the screen and only allow access to users with a valid pin you are able to set this via a configuration payload. Note this is a 'Device' configuration payload.

:::: code-group

::: code-group-item Config

```json {7-12}
{
  "noActivitySecondsToLock": 60
}
```

### JSON parameters

| Parameter                 |   Type   | Options | Description                                                                                                   |                                                            |
| :------------------------ | :------: | :-----: | :------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| `noActivitySecondsToLock` | _Number_ |   n/a   | Lock Panel after a period of in-activity. Must be a number between 0 and 3600 (seconds) e.g. `60` is 1 minute | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
:::
::::

::: warning Note:

You will be required to store and verify valid pin codes for example using Node RED. 

Once you verify the pincode you can close the keypad control screen by sending a payload to the cmnd/ topic setting keypad state to 'close'. Then send a payload to the cmnd/ topic to load the desired screen. 

(See the [Load Screen payload](/docs/firmware/touch-panel-esp32/#load-screen) in Device Commands on how to load a screen)

:::


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

| Parameter |   Type   | Options | Description                     |                                                            |
| :-------- | :------: | :-----: | :------------------------------ | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1` | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `remote`  | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_remote`   | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Kodi TV`  | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter |   Type   |                                                Options                                                | Description                                                 |
| :-------- | :------: | :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------- |
| `screen`  | _Number_ |                                                  n/a                                                  | Screen number triggering state event                        |
| `tile`    | _Number_ |                                                  n/a                                                  | Tile number triggering state event                          |
| `style`   | _String_ |                                                  n/a                                                  | Tile style `remote`                                         |
| `type`    | _String_ | `"home"` \| `"info"` \| `"back"` \| `"list"` \| `"ok"` \| `"up"` \| `"down"` \| `"left"` \| `"right"` | Indicates which mote button on the popup screen was pressed |
| `event`   | _String_ |                                        `"single"` \| `"hold"`                                         | `single` \| `hold` events                                   |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter  |   Type   |     Options     | Description                                               |                                                            |
| :--------- | :------: | :-------------: | :-------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |       n/a       | Screen number sending command to                          | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |       n/a       | Tile number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`    | _String_ | `"on"`\|`"off"` | Updated the tile state                                    | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel` | _String_ |       n/a       | String for additional tile information e.g. "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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

| Parameter |   Type   | Options | Description                                       |                                                            |
| :-------- | :------: | :-----: | :------------------------------------------------ | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`                   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `link`                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Enter icon name e.g.`_music`                      | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `label`   | _String_ |   n/a   | Enter label text e.g.`HiFi Controls`              | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `link`    | _String_ |   n/a   | Number of screen which is loaded upon press event | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
:::

::: code-group-item State

```json
{
  "screen": 1,
  "type": "screen",
  "event": "change",
  "state": "loaded"
}
```

### JSON parameters

| Parameter |   Type   |          Options           | Description                          |
| :-------- | :------: | :------------------------: | :----------------------------------- |
| `screen`  | _Number_ |            n/a             | Screen number triggering state Event |
| `type`    | _String_ |            n/a             |                                      |
| `event`   | _String_ |            n/a             | `change` events                      |
| `state`   | _String_ | `"loaded"` \| `"unloaded"` | `loaded` \| `unloaded` events        |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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

| Parameter  |   Type   |     Options     | Description                                               |                                                            |
| :--------- | :------: | :-------------: | :-------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`   | _Number_ |       n/a       | Screen number sending command to                          | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`     | _Number_ |       n/a       | Tile number sending command to                            | <Badge type="warning" text="Required" vertical="bottom" /> |
| `state`    | _String_ | `"on"`\|`"off"` | Updated the tile state                                    | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel` | _String_ |       n/a       | String for additional tile information e.g. "on just now" | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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

| Parameter |   Type   | Options | Description                                                        |                                                            |
| :-------- | :------: | :-----: | :----------------------------------------------------------------- | :--------------------------------------------------------- |
| `tile`    | _Number_ |   n/a   | Enter your tile number e.g. `1`                                    | <Badge type="warning" text="Required" vertical="bottom" /> |
| `style`   | _String_ |   n/a   | Enter tile style name `thermostat`                                 | <Badge type="warning" text="Required" vertical="bottom" /> |
| `label`   | _String_ |   n/a   | Enter label text e.g.`Heating`                                     | <Badge type="warning" text="Required" vertical="bottom" /> |
| `icon`    | _String_ |   n/a   | Set to `_thermostat` for dynamic Arc tile, dont specify for digits | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
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

| Parameter           |         Type         |           Options            | Description                                                                     |
| :------------------ | :------------------: | :--------------------------: | :------------------------------------------------------------------------------ |
| `screen`            |       _Number_       |             n/a              | Screen number triggering state event                                            |
| `tile`              |       _Number_       |             n/a              | Tile number triggering state event                                              |
| `style`             |       _String_       |             n/a              | Tile style `_thermostat`                                                        |
| `type`              |       _String_       | `"button"` \| `"thermostat"` |                                                                                 |
| `event`             |       _String_       |    `"hold"` \| `"change"`    | `hold` events only on type `button`. `change` events only on type `themrmostat` |
| `state`             | _String_ \| _Object_ |  `"on"` \| `"off"` \| `{}`   | The current tile state                                                          |
| `mode`              |       _Number_       |             n/a              | The current mode state (1-based index of `modeList`)                            |
| `targetTemperature` |       _Number_       |             n/a              | The current target temperature                                                  |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`stat/<device-client-id>`
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
        "modeList": ["Off", "On", "Auto", "Maunal"],
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

| Parameter            |   Type   |     Options     | Description                                                                  |                                                            |
| :------------------- | :------: | :-------------: | :--------------------------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`             | _Number_ |       n/a       | Screen number sending command to e.g. `1`                                    | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`               | _Number_ |       n/a       | Tile number sending command to e.g. `1`                                      | <Badge type="warning" text="Required" vertical="bottom" /> |
| `number`             | _Object_ |       n/a       | Number object only used when icon not specified                              | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `value`              | _String_ |       n/a       | Formatted value to display e.g. `15.5` <br> (restricted to `0...9 + - . :` ) | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `units`              | _String_ |       n/a       | Suffix/unit e.g. "°C"                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subValue`           | _String_ |       n/a       | Formatted sub-value to display e.g. `13.8`                                   | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subUnits`           | _String_ |       n/a       | Suffix/unit e.g. "°C"                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `state`              | _String_ | `"on"`\|`"off"` | Update the tile state                                                        | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `thermostat`         | _Object_ |       n/a       |                                                                              | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `modeList`           | _Array_  |       n/a       | Array of strings to populate mode dropdown in thermostat popup               | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `mode`               | _Number_ |       n/a       | Set value in mode dropdown in thermostat popup (1-based index of `modeList`) | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `targetTemperature`  | _Number_ |       n/a       | Integer increments by 0.5 in thermostat popup `155` = `15.5`                 | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `currentTemperature` | _Number_ |       n/a       | Integer in thermostat popup `138` = `13.8`                                   | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `units`              | _String_ |       n/a       | Suffix/unit in thermostat popup e.g. "°C"                                    | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `subLabel`           | _String_ |       n/a       | String for additional tile information e.g. last updated "off just now"      | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile the thermostat popup screen will appear giving you the ability to interact with the thermostat controls.

![TP32 Image Alt Text](/images/thermostat-popup.png) ![TP32 Image Alt Text](/images/thermostat-popup-selector.png)

---

## Common Payloads

[comment]: <> ([TODO] Common Payloads explanation)
These commands are common to all tile styles.

## Set the background color

RGB color for a tile background (defaults to the parent screen background color).

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command

```json
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "backgroundColorRgb": {
        "r": 255,
        "g": 0,
        "b": 0
      }
    }
  ]
}
```

### JSON parameters

| Parameter            |   Type   | Options | Description                       |                                                            |
| :------------------- | :------: | :-----: | :-------------------------------- | :--------------------------------------------------------- |
| `screen`             | _Number_ |   n/a   | Screen number sending command     | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`               | _Number_ |   n/a   | Tile number sending command       | <Badge type="warning" text="Required" vertical="bottom" /> |
| `backgroundColorRgb` | _Object_ |   n/a   |                                   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `r`                  | _Number_ |   n/a   | Red colour Number between 0-255   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `g`                  | _Number_ |   n/a   | Green colour Number between 0-255 | <Badge type="warning" text="Required" vertical="bottom" /> |
| `b`                  | _Number_ |   n/a   | Blue colour Number between 0-255  | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

## Set the icon color

RGB color for a tile icon (defaults to white if the tile state is "off", or the configured device "on" icon color if the tile state is "on").

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command

```json
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "iconColorRgb": {
        "r": 255,
        "g": 0,
        "b": 0
      }
    }
  ]
}
```

### JSON parameters

| Parameter      |   Type   | Options | Description                       |                                                            |
| :------------- | :------: | :-----: | :-------------------------------- | :--------------------------------------------------------- |
| `screen`       | _Number_ |   n/a   | Screen number sending command     | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`         | _Number_ |   n/a   | Tile number sending command       | <Badge type="warning" text="Required" vertical="bottom" /> |
| `iconColorRgb` | _Object_ |   n/a   |                                   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `r`            | _Number_ |   n/a   | Red colour Number between 0-255   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `g`            | _Number_ |   n/a   | Green colour Number between 0-255 | <Badge type="warning" text="Required" vertical="bottom" /> |
| `b`            | _Number_ |   n/a   | Blue colour Number between 0-255  | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

## Actions to remove or disable a tile

- Removes a tile from the configuration.
- Disables touch input for a tile. The tile is greyed out. State changes are still updated.

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command

```json
{
  "tiles": [
    {
      "screen": 1,
      "tile": 1,
      "action": "remove"
    }
  ]
}
```

### JSON parameters

| Parameter |   Type   |               Options               | Description                              |                                                            |
| :-------- | :------: | :---------------------------------: | :--------------------------------------- | :--------------------------------------------------------- |
| `screen`  | _Number_ |                 n/a                 | Screen number sending command to         | <Badge type="warning" text="Required" vertical="bottom" /> |
| `tile`    | _Number_ |                 n/a                 | Tile number to be removed                | <Badge type="warning" text="Required" vertical="bottom" /> |
| `action`  | _String_ | `"remove"`\|`"disable"`\|`"enable"` | Command to remove\disable\re enable tile | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

# Screen Payloads

[comment]: <> ([TODO] Screen Payloads explanation)
These commands are specific to an individual screen.

## Remove a screen from the configuration

Removes a screen from the configuration.

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command

```json
{
  "screens": [
    {
      "screen": 2,
      "action": "remove"
    }
  ]
}
```

### JSON parameters

| Parameter |   Type   |  Options   | Description                 |                                                            |
| :-------- | :------: | :--------: | :-------------------------- | :--------------------------------------------------------- |
| `screen`  | _Number_ |    n/a     | Screen number to be removed | <Badge type="warning" text="Required" vertical="bottom" /> |
| `action`  | _String_ | `"remove"` | Command to remove screen    | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

::: tip

Removing a screen removes all tiles on this screen as well.

Removing screen 1 (Home Screen) technically removes screen 1 and creates an empty screen 1 (Home Screen)

:::

## Set the background color

RGB color for a screen background (defaults to the configured device background color).

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command

```json
{
  "screens": [
    {
      "screen": 1,
      "backgroundColorRgb": {
        "r": 255,
        "g": 0,
        "b": 0
      }
    }
  ]
}
```

### JSON parameters

| Parameter            |   Type   | Options | Description                       |                                                            |
| :------------------- | :------: | :-----: | :-------------------------------- | :--------------------------------------------------------- |
| `screen`             | _Number_ |   n/a   | Screen number sending command to  | <Badge type="warning" text="Required" vertical="bottom" /> |
| `backgroundColorRgb` | _Object_ |   n/a   |                                   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `r`                  | _Number_ |   n/a   | Red colour Number between 0-255   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `g`                  | _Number_ |   n/a   | Green colour Number between 0-255 | <Badge type="warning" text="Required" vertical="bottom" /> |
| `b`                  | _Number_ |   n/a   | Blue colour Number between 0-255  | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

## Set footer

[comment]: <> ([TODO] Set Footer explanation text goes here)

![TP32 Image Alt Text](/images/footer-screen.png) ![TP32 Image Alt Text](/images/footer-screen-2.png)

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command

```json
{
  "screens": [
    {
      "screen": 1,
      "footer": {
        "left": "Wed 07 Sep",
        "center": "",
        "right": "20:49pm"
      }
    }
  ]
}
```

### JSON parameters

| Parameter |   Type   | Options | Description                                              |                                                            |
| :-------- | :------: | :-----: | :------------------------------------------------------- | :--------------------------------------------------------- |
| `screen`  | _Number_ |   n/a   | Screen number sending command to                         | <Badge type="warning" text="Required" vertical="bottom" /> |
| `footer`  | _Object_ |   n/a   |                                                          | <Badge type="warning" text="Required" vertical="bottom" /> |
| `left`    | _String_ |   n/a   | Left aligned String for additional tile information      | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `center`  | _String_ |   n/a   | Centrally aligned String for additional tile information | <Badge type="tip" text="Optional" vertical="bottom" />     |
| `right`   | _String_ |   n/a   | Right aligned String for additional tile information     | <Badge type="tip" text="Optional" vertical="bottom" />     |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

::: tip

`<text>` supports coloring using`"#RRGGBB <text>#"` tags where RRGGBB are hex, e.g. `“#FF0000 RED#”`.

Missing key shows the default icon/string (empty) hides the default icon/string `"<any text>"` replaces the default icon/string with `"<any text>"` an empty list `"footer":{}` resets all to default
:::

# Device Payloads

[comment]: <> ([TODO] Device Payloads explanation)
These are configuration and command payloads for the device itself.

## Load Screen

This command gives you the ability to load a specific screen on a device.

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Config

```json
{
  "screen": {
      "load": 2
  }
}
```

### JSON parameters

| Parameter            |   Type   | Options | Description                       |                                                            |
| :------------------- | :------: | :-----: | :-------------------------------- | :--------------------------------------------------------- |
| `screen` | _Object_ |   n/a   |                                   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `load`                  | _Number_ |   n/a   | specify screen number you wish to load 1-32   | <Badge type="warning" text="Required" vertical="bottom" /> |


`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)


## Set the background color

Default RGB color for screen backgrounds (defaults to black - R0, G0, B0). If there is no explicit screen or tile background color defined then this is the fallback color used to render a screen or tile.

::: tip
The configured background color has the lowest precendence and will only be used if no background color has been set for the screen or tile being displayed.
:::

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Config

```json
{
  "backgroundColorRgb": {
    "r": 255,
    "g": 0,
    "b": 0
  }
}
```

### JSON parameters

| Parameter            |   Type   | Options | Description                       |                                                            |
| :------------------- | :------: | :-----: | :-------------------------------- | :--------------------------------------------------------- |
| `backgroundColorRgb` | _Object_ |   n/a   |                                   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `r`                  | _Number_ |   n/a   | Red colour Number between 0-255   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `g`                  | _Number_ |   n/a   | Green colour Number between 0-255 | <Badge type="warning" text="Required" vertical="bottom" /> |
| `b`                  | _Number_ |   n/a   | Blue colour Number between 0-255  | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

## Set the "on" icon color

RGB color of icon when 'on' (defaults to light green - R91, G190, B91).

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Config

```json
{
  "iconOnColorRgb": {
    "r": 255,
    "g": 0,
    "b": 0
  }
}
```

### JSON parameters

| Parameter        |   Type   | Options | Description                       |                                                            |
| :--------------- | :------: | :-----: | :-------------------------------- | :--------------------------------------------------------- |
| `iconOnColorRgb` | _Object_ |   n/a   |                                   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `r`              | _Number_ |   n/a   | Red colour Number between 0-255   | <Badge type="warning" text="Required" vertical="bottom" /> |
| `g`              | _Number_ |   n/a   | Green colour Number between 0-255 | <Badge type="warning" text="Required" vertical="bottom" /> |
| `b`              | _Number_ |   n/a   | Blue colour Number between 0-255  | <Badge type="warning" text="Required" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

## Home screen timeout

Return to home screen after a period of in-activity (defaults to 0 which disables the timeout). Must be a number between 0 and 600 (i.e. 10 minutes).

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Config

```json
{
  "noActivitySecondsToHome": 60
}
```

### JSON parameters

| Parameter                 |   Type   | Options | Description                             |                                                        |
| :------------------------ | :------: | :-----: | :-------------------------------------- | :----------------------------------------------------- |
| `noActivitySecondsToHome` | _Object_ |   n/a   | Return to home screen after in-activity | <Badge type="tip" text="Optional" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

## Screen sleep timeout

Turn off screen backlight after a period of in-activity (defaults to 0 which disables the timeout). Must be a number between 0 and 3600 (i.e. 1 hour).

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Config

```json
{
  "noActivitySecondsToSleep": 60
}
```

### JSON parameters

| Parameter                  |   Type   | Options | Description                          |                                                        |
| :------------------------- | :------: | :-----: | :----------------------------------- | :----------------------------------------------------- |
| `noActivitySecondsToSleep` | _Object_ |   n/a   | Turn off backlight after in-activity | <Badge type="tip" text="Optional" vertical="bottom" /> |

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`conf/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

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

`cmnd/<device-client-id>`
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

`stat/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

::: tip
`<number>` number between 1 .. 100 [%]
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
  "message": {
    "title": "<text>",
    "text": " <text>"
  }
}
```

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
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

`stat/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

## Add a custom icon

There are a limited set of built-in icons available, but it is possible to upload custom icons for use in your tile configuration. The built-in icons are sourced from [icons8.com](https://icons8.com/icon/set/ios/ios) but you can use any icon you want. This provides a great way to customise your touch panel.

::: tip
Custom icons are **not persistent** and have to be (re)loaded after restart and before they can be used in any configuration.
:::

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command

```json
{
  "addIcon": {
    "name": "<text>",
    "imageBase64": "<encodeBase64(.png)>"
  }
}
```

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

### How to prepare an icon for use

- Custom icons need to be in .PNG format
- Custom icons appear in alphabetical order after the built-in icons (which are preceded with "\_")
- Icon upload is performed using the [`addIcon`](/docs/firmware/touch-panel-esp32.html#add-a-custom-icon) command
- To upload via MQTT the icon has to be Base64 encoded using one of the following methods;
  - Use the [OXRS Icon Generator](/tools/icon-generator.html) which generates the required JSON payload ready-to-use
  - Use an online converter like [base64encode.org](https://www.base64encode.org/)
  - Use Node-RED [node-red-node-base64](https://flows.nodered.org/node/node-red-node-base64) for automated conversion
- Ensure there is no extra information added to the Base64 encoded file
- The encoded image should not exceed 4KB to avoid crashes
- If using the AdminUI, after uploading a custom icon the "Edit Config" page needs to be refreshed to update the icon list

### Icon size and alignment

- The tile layout is optimised for 60x60 pixel icons
- Max icon size is approx. 140x140 pixels (the tile size)
- Icons are aligned top/left of a tile
- There are no size checks for custom icons

## Add a background image

It is possible to upload custom images to be used for the background of your tile. They can be sourced in the same way as the icons are but are also able to be in colour. This provides a great way to customise your touch panel.

::: tip
Background images are **not persistent** and have to be (re)loaded after restart and before they can be used in any configuration.

Remove the image by sending a payload with a blank value for imageBase64

The parameters for the image can be updated if you have the image already on the screen and leave out the imageBase64 key from the payload. 

:::

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command

```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "backgroundImage": 
      {
        "imageBase64": "<encodeBase64(.png)>",
        "zoom": <number>,
        "angle": <number>,
        "offset": [<x number>,<y number>]
      }
    }
  ]
}
```

<Badge type="warning" text="MQTT Topic" vertical="middle" />

`cmnd/<device-client-id>`
:::
::::
[comment]: <> (END of JSON Example)

### How to prepare an image for use

- Background images need to be in .PNG format
- To upload via MQTT the background image has to be Base64 encoded using one of the following methods;
  - Use the [OXRS Icon Generator](/tools/icon-generator.html) which generates the required JSON payload ready-to-use
  - Use an online converter like [base64encode.org](https://www.base64encode.org/)
  - Use Node-RED [node-red-node-base64](https://flows.nodered.org/node/node-red-node-base64) for automated conversion
- Ensure there is no extra information added to the Base64 encoded file
- The encoded image should not exceed 4KB to avoid crashes - TBC

### Image size and alignment

- The tile layout is optimised for 60x60 pixel icons
- Max image size is approx. 140x140 pixels (the tile size)
- Images are aligned to the centre of the tile
- There are no size checks for custom images
- angle is an integer that defines the rotation angle in increments of 0.1 deg (eg 900 = 90 deg), + number rotates CW , - number rotates CCW

## Firmware Installation

### Initial Set-up – Windows 10

Workflow to commission a new Touch Panel:

1. [Download](https://github.com/OXRS-IO/OXRS-IO-TouchPanel-ESP32-FW/releases) the most recent wifi or ethernet version of the compiled _OXRS-IO-TouchPanel-ESP32-FW_ firmware to a work folder created for the commissioning process.
2. Connect the WT32-SC01 LCD dev board USB-C port to a USB connector on the Windows PC using a USB-C to USB-A cable (a USB-C to USB-C cable doesn’t appear to work).
3. Ensure the LCD dev board power LED comes on and the screen displays the factory default page display sequence.
4. Open the ‘Device Manager’ app (i.e. Invoke Windows logo key+R, type in “devmgmt.msc” and then press Enter), navigate down the devices list to Universal Serial Bus controllers and right click on the USB Root Hub icon.
5. If the ‘Device status’ window in the USB Root Hub properties window shows “This device is working properly”, skip to step 8. below.
6. If the ‘USB Root Hub properties’ window indicates the ‘CP210x driver is missing’, download the [CP210x_Universal_Windows_Driver.zip](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) file to your work folder, and extract its contents.
7. Locate the file `silabser.inf` within the extracted folder, right click on it and select _Install_ in the pop-up menu. Then repeat step 5. above.
8. [Download](https://github.com/esphome/esphome-flasher/releases) the most recent Windows executable version of the _esphome-flasher_ app and run it. (No need to install, it simply runs as an executable)
9. Use _esphome-flasher_ to install the compiled firmware.
10. Assuming the _esphome-flasher_ log window has confirmed the flashing was successful; if you are intending to couple the LCD Touch Screen to an [Ethernet shield](https://www.austinscreations.ca/oxrs), skip now to step 15. below.
11. Connect your computer to the LCD dev board's on-board wiFi Access Point (it appear with the ssid _OXRS-WiFi_), and connect using the password "superhouse".
12. Using a _Chrome_ or _Microsoft Edge_ browser (_FireFox_ does not appear to handle the rendered html properly), navigate to the IP address [192.168.4.1](http://192.168.4.1), at which point a device set-up menu screen should be displayed.
13. Clicking the [Configure WiFi](http://192.168.4.1/wifi) button will display a page enabling entry of your WiFi network _SSID_ and _Password_.
14. Once configured clicking the [Save](http://192.168.4.1/wifisave) button will set the WiFi configuration and the LCD Touchscreen should then connect and appear on your WiFi network.
15. At this point the screen of the LCD Touchscreen will display a default page. Touch the _Settings_ cog icon at the bottom right of the screen to display the LCD Touchscreen's MAC address and DHCP allocated IP address.
16. If you have not already done so, [download](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP) the _OXRS Web based administrator UI_ `index.html` file onto to your local machine and open it using your favourite web browser.
17. Using the displayed _OXRS Admin_ UI page, insert the IP address displayed on the LCD Touchscreen's _Settings_ screen in the _Device address_ field, then choose the _Setup MQTT_ menu option in the _Action_ field, and click the _Select_ button.
18. Fill out the _MQTT Configuration_ fields displayed to input your MQTT broker settings, and click the _Submit_ button. The LCD Touchscreen _Settings_ page should now confirm the MQTT broker connection, and the yellow warning triangle displayed bottom right on the main default screen should now have disappeared.

## API

The Touch Panel firmware implements the standard [OXRS REST API](/docs/libraries/esp32-api-library.html) endpoints. This allows you to configure the device, send commands, as well as perform OTA updates, restarts and factory resets.

The [OXRS Admin UI](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP) uses this REST API and is a great place to start with when setting up your device for the first time.

### API Endpoints

REST API endpoints have been added to the Touch Panel firmware, these are listed below with a brief explanation;

HTTP <Badge type="tip" text="GET" vertical="middle" />

`/api/snapshot.bmp`
download a snapshot (approx. 450kB) of the current display, to your computer

`/api/snapshot.bmp?tile=<1-6>`
download a snapshot (approx. 60kB) of the selected tile (1-6) in the current display, to your computer

## Downloads

Download the latest version of the firmware on [Github](https://github.com/OXRS-IO/OXRS-IO-TouchPanel-ESP32-FW/releases).

## Supported Hardware

- WT32-SC01 ESP32 TFT [Link](/add-ons/touch-displays/wt32-sc01)

### Credits

- Moin [Github](https://github.com/moinmoin-sh)
- Aaron Knox [Github](https://github.com/MakerDockio)
- Ben Jones [Github](https://github.com/sumnerboy12)

---

#### License

Copyright 2020-2022 SuperHouse Automation Pty Ltd www.superhouse.tv

The software portion of this project is licensed under the Simplified BSD License. The "licence" folder within this project contains a copy of this license in plain text format.
