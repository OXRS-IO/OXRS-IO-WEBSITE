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
Introduction text goes here...


## Getting Started
[comment]: <> ([TODO] Getting started text)
Getting started text goes here...


- [Tile Payloads](/docs/firmware/touch-panel-esp32.html#tile-payloads)
- [Global Command Payloads](/docs/firmware/touch-panel-esp32.html#global-command-payloads)
- [State / Event Payloads](/docs/firmware/touch-panel-esp32.html#state-and-event-payloads)

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
Tile Styles explanation text goes here...

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
| keyPad <br><br> keyPadBlocking  | ![TP32 Image Alt Text](/images/keypad-tile-2.png)|[Get Started](/docs/firmware/touch-panel-esp32/#keypad)<br><br> [Get Started](/docs/firmware/touch-panel-esp32/#keypadblocking) |
| remote | ![TP32 Image Alt Text](/images/remote-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#remote) |
| link | ![TP32 Image Alt Text](/images/link-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#link) |


# Tile Payloads
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

---


## button

![TP32 Image Alt Text](/images/button-tile-not-active.png) ![TP32 Image Alt Text](/images/button-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The button tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,            // Enter your tile number e.g. 1  
  "style": "button",
  "icon": "<icon_name>",       // Enter icon name e.g."_bulb"
  "label": "<label_text>"      // Enter label text e.g."Lamps"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,           // Screen number triggering state event  
  "tile": <number>,             // Tile number triggering state event  
  "style": "button",
  "type": "button",
  "event": "single"|"hold",     // Indicates if the button press was short or long
  "state": "on"|"off"           // The current tile state (prior to this event)
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to 
  "tile": <number>,                 // Tile number sending command to
  "state": "on"|"off",              // Update the tile state
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonLevelUp

![TP32 Image Alt Text](/images/buttonLevelUp-tile.png) ![TP32 Image Alt Text](/images/buttonLevelUp-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The buttonLevelUp tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                       // Enter your tile number e.g. 1  
  "style": "buttonLevelUp",
  "icon": "<icon_name>",                  // Enter icon name e.g."_bulb"
  "label": "<label_text>",                // Enter label text e.g."Light"
  "levelStart": <number>,                 // Defaults to 0
  "levelStop": <number>                   // Defaults to 100
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,                     // Screen number e.g. 1 
  "tile": <number>,                       // Tile number e.g. 1 
  "style": "buttonLevelUp",
  "type": "button"|"level",               // Indicates if touch event was a button press or level change
  "event": "single"|"hold"|"up"|"down",   // Indicates if a button press was short or long, or if a level change was up or down
  "state": <number>                       // The current level state (prior to this event)
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "state": "on"|"off",                    // Update the tile state
  "level": <number>,                      // Update the level state
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonLevelDown

![TP32 Image Alt Text](/images/buttonLevelDown-tile.png) ![TP32 Image Alt Text](/images/buttonLevelDown-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The buttonLevelDown tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,             // Enter your tile number e.g. 1  
  "style": "buttonLevelDown",
  "icon": "<icon_name>",        // Enter icon name e.g."_blind"
  "label": "<label_text>",      // Enter label text e.g."Blinds"
  "levelStart": <number>,       // Defaults to 0
  "levelStop": <number>         // Defaults to 100
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,                         // Screen number e.g. 1 
  "tile": <number>,                           // Tile number e.g. 1 
  "style": "buttonLevelDown",
  "type": "button"|"level",                   // Indicates if touch event was a button press or level change
  "event": "single"|"hold"|"up"|"down",       // Indicates if a button press was short or long, or if a level change was up or down
  "state": <number>                           // The current level state (prior to this event)
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "state": "on"|"off",                    // Update the tile state
  "level": <number>,                      // Update the level state
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonUpDown

![TP32 Image Alt Text](/images/buttonUpDown-tile.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The buttonUpDown tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,             // Enter your tile number e.g. 1  
  "style": "buttonUpDown",
  "icon": "<icon_name>",        // Enter icon name e.g."_speaker"
  "label": "<label_text>",      // Enter label text e.g."Speakers"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,           // Screen number e.g. 1 
  "tile": <number>,             // Tile number e.g. 1 
  "style": "buttonUpDown",
  "type": "up"|"down"|"button", // Indicates if touch event was a button press or up/down press
  "event": "single"|"hold",     // Indicates if a button press was short or long
  "state": "on"|"off"           // The current tile state (prior to this event), only included for button press events
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "state": "on"|"off",                    // Update the tile state
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonLeftRight

![TP32 Image Alt Text](/images/buttonLeftRight-tile.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The buttonLeftRight tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,               // Enter your tile number e.g. 1  
  "style": "buttonLeftRight",
  "icon": "<icon_name>",          // Enter icon name e.g."_slider"
  "label": "<label_text>",        // Enter label text e.g."Audio Balance"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,                 // Screen number e.g. 1 
  "tile": <number>,                   // Tile number e.g. 1 
  "style": "buttonLeftRight",
  "type": "left"|"right"|"button",    // Indicates if touch event was a button press or left/right press
  "event": "single"|"hold",           // Indicates if a button press was short or long
  "state": "on"|"off"                 // The current tile state (prior to this event), only included for button press events
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "state": "on"|"off",                    // Update the tile state
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## buttonPrevNext

![TP32 Image Alt Text](/images/buttonPrevNext.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The buttonPrevNext tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "buttonPrevNext",
  "icon": "<icon_name>",            // Enter icon name e.g."_music"
  "label": "<label_text>"           // Enter label text e.g."Skip track"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style": "buttonPrevNext",
  "type": "prev"|"next"|"button",   // Indicates if touch event was a button press or prev/next press
  "event": "single"|"hold",         // Indicates if a button press was short or long
  "state": "on"|"off"               // The current tile state (prior to this event), only included for button press events
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "state": "on"|"off",                    // Update the tile state
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## indicator

![TP32 Image Alt Text](/images/indicator-tile.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The indicator tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1           
  "style": "indicator",
  "label": "<label_text>" ,         // Enter label text e.g."Temperature"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,             // Screen number e.g. 1     
  "tile": <number>,               // Tile number e.g. 1 
  "value": "<value-text>",        // The formatted value to display e.g. "22.9"."
  "units": "<unit-text>",         // The value suffix/unit e.g. "%"
  "subLabel": "<subLabel_text>"   // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


---


## colorPickerRgbCct

![TP32 Image Alt Text](/images/colorPicker-tile.png) ![TP32 Image Alt Text](/images/colorPicker-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The colorPickerRgbCct tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "colorPickerRgbCct",     // Enter icon name e.g."_bulb"
  "icon": "<icon_name>",
  "label": "<label_text>"           // Enter label text e.g."Office light" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style":"colorPickerRgbCct",
  "type": "button"|"colorPicker",   // Indicates if touch event was a button press or long-press to launch the color picker popup
  "event": "single"|"change",       // "single" for a button press or "change" when the color picker popup is closed
  "state": "on"|"off"| {            // "on"|"off" for a button press or the selected color when the color picker popup is closed
    "colorRgb":{
      "r": <number>,
      "g": <number>,
      "b": <number>
    },
    "colorKelvin": <number>,
    "brightness": <number>
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to  
  "state": "on"|"off",                    // Update the tile state
  "colorPicker": {
    "mode": "colorRgb"|"colorKelvin",     // Update the color picker mode
    "colorRgb": {                         // For RGB mode, update the selected color (in RGB)
      "r": <number>,
      "g": <number>,
      "b": <number>
    },
    "colorKelvin": <number>,              // For temperature mode, update the selected color temp (in kelvin)
    "brightness": <number>                // For either mode, update the selected color brightness
  },
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press and hold the tile button the controls screen will appear. The controls screen has two tabs to choose from ``Color`` and ``Temperature``. The color tab gives you the ability to adjust the ``RGB Color`` via the color wheel and ``Brightness Color`` via the slider. The temperature tab gives you the ability to adjust the ``Color Temperature`` and ``Brightness White`` via the sliders.

![TP32 Image Alt Text](/images/colorPicker-both-color-tab.png) ![TP32 Image Alt Text](/images/colorPicker-both-temp-tab.png)



---


## colorPickerRgb

![TP32 Image Alt Text](/images/colorPicker-tile.png) ![TP32 Image Alt Text](/images/colorPicker-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The colorPickerRgb tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "colorPickerRgb",        // Enter icon name e.g."_bulb"
  "icon": "<icon_name>",
  "label": "<label_text>"           // Enter label text e.g."Office light" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style":"colorPickerRgb",
  "type": "button"|"colorPicker",   // Indicates if touch event was a button press or long-press to launch the color picker popup
  "event": "single"|"change",       // "single" for a button press or "change" when the color picker popup is closed
  "state": "on"|"off"| {            // "on"|"off" for a button press or the selected color when the color picker popup is closed
    "colorRgb":{
      "r": <number>,
      "g": <number>,
      "b": <number>
    }
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to 
  "tile": <number>,                 // Tile number sending command to  
  "state": "on"|"off",              // Update the tile state
  "colorPicker": {
    "colorRgb": {                   // Update the selected color (in RGB)
      "r": <number>,
      "g": <number>,
      "b": <number>
    },
    "brightness": <number>          // Update the selected color brightness
  },
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press and hold the tile button the controls screen will appear giving you the ability to adjust the ``RGB Color`` via the color wheel and ``Brightness Color`` via the slider.

![TP32 Image Alt Text](/images/colorPicker-color-tab.png)



---


## colorPickerCct

![TP32 Image Alt Text](/images/colorPicker-tile.png) ![TP32 Image Alt Text](/images/colorPicker-tile-active.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The colorPickerCct tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "colorPickerCct",        // Enter icon name e.g."_bulb"
  "icon": "<icon_name>",
  "label": "<label_text>"           // Enter label text e.g."Office light" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style":"colorPickerRgb",
  "type": "button"|"colorPicker",   // Indicates if touch event was a button press or long-press to launch the color picker popup
  "event": "single"|"change",       // "single" for a button press or "change" when the color picker popup is closed
  "state": "on"|"off"| {            // "on"|"off" for a button press or the selected color when the color picker popup is closed
    "colorKelvin": <number>,
    "brightness": <number>
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to 
  "tile": <number>,                 // Tile number sending command to  
  "state": "on"|"off",              // Update the tile state
  "colorPicker": {
    "colorKelvin": <number>,        // Update the selected color temp (in kelvin)
    "brightness": <number>          // Update the selected color brightness
  },
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press and hold the tile button the controls screen will appear giving you the ability to adjust the ``Color Temperature`` and ``Brightness White`` via the sliders.

![TP32 Image Alt Text](/images/colorPicker-temp-tab.png)


---


## dropDown

![TP32 Image Alt Text](/images/dropdown-tile.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The dropDown tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "dropDown",              
  "icon": "<icon_name>",            // Enter icon name e.g."_music"
  "label": "<label_text>"           // Enter label text e.g."Select Album" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style": "dropDown",
  "type": "dropDown",
  "event": "selection",
  "state": <number>                 // Item number selected
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to  
  "tile": <number>,                 // Tile number sending command to  
  "dropDownList": ["list-item"],    // List items Array of Strings ["item-1", "item-2", "item-3"]
  "dropDownSelect": <number>,       // Update the selected item in the dropdown list
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
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

 The keyPad tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "keyPad",        
  "icon": "<icon_name>",            // Enter icon name e.g."_unlocked"
  "label": "<label_text>"           // Enter label text e.g."House Alarm" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1
  "tile": <number>,                 // Tile number e.g. 1 
  "style": "keyPad",
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

### Control Screen:

When you press the tile button the keypad screen will appear giving you the ability to enter the code.

![TP32 Image Alt Text](/images/keypad-screen-1.png)![TP32 Image Alt Text](/images/keypad-screen-2.png)


---


## keyPadBlocking

![TP32 Image Alt Text](/images/keypad-screen-1.png)![TP32 Image Alt Text](/images/keypad-screen-2.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The keyPadBlocking tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "keyPadBlocking",        
  "icon": "<icon_name>",            // Enter icon name e.g."_unlocked"
  "label": "<label_text>"           // Enter label text e.g."House Alarm" 
}
```
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


---


## remote

![TP32 Image Alt Text](/images/remote-tile.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The remote tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "remote",        
  "icon": "<icon_name>",            // Enter icon name e.g."_remote"
  "label": "<label_text>"           // Enter label text e.g."Kodi TV" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,
  "tile": <number>,
  "style": "remote",
  "type": "home"|"info"|"back"|"list"|"ok"|"up"|"down"|"left"|"right",
  "event": "single"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to 
  "tile": <number>,                 // Tile number sending command to  
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
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

![TP32 Image Alt Text](/images/link-tile.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The link tile style allows you to simply...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item Config

```json
{
  "tile": <number>,                 // Enter your tile number e.g. 1  
  "style": "link",        
  "icon": "<icon_name>",            // Enter icon name e.g."_music_"
  "label": "<label_text>",          // Enter label text e.g."HiFi Controls"
  "link": 5                         // Screen which is loaded upon press event
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<device-client-id>```
:::

::: code-group-item State
```json
{
  "screen": <number>,
  "type":"screen",
  "event":"change",
  "state":"loaded"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to 
  "tile": <number>,                 // Tile number sending command to  
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



# Global Command Payloads
[comment]: <> ([TODO] Commands explanation)
Commands explanation text goes here...

<Badge type="warning" text="MQTT Command Topic" vertical="middle" />

```cmnd/<device-client-id>```



## Set footer
[comment]: <> ([TODO] Set Footer explanation text goes here)
Set Footer explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "screens":[
    {
      "screen": <number>,
      "footer":{
        "left": "<text>",
        "center": "<text>",
        "right": "<text>"
      }
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

::: tip

``<text>`` supports coloring using``"#RRGGBB <text>#"`` tags where RRGGBB are hex, e.g. ``“#FF0000 RED#”``. 

Missing key shows the default icon/string (empty) hides the default icon/string ``"<any text>"`` replaces the default icon/string with ``"<any text>"`` an empty list ``"footer":{}`` resets all to default
:::


## Set icon color
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "colorRgb":{
        "r": <number>,
        "g": <number>,
        "b": <number>
      }
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
``<number>``  value between 0 .. 255  [r, g, b]
:::



## Set icon
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "icon": "<name>"
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)

::: tip
``<name>``  name of icon as stored in list (built-in or custom)
:::



## Set subLabel
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "subLabel": "<text>"
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## Set a background image
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen":"<number>",
      "tile":"<number>",
      "backgroundImage":{
        "imageBase64":"<encodeBase64(.png)>",
        "zoom":"<number>",
        "angle":"<number>",
        "offset":[
          "<x number>",
          "<y number>"
        ]
      }
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



##  Set text to replace the icon
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen":<number>,
      "tile":<number>,
      "text":"<text>"
    }
  ]
} 
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## Set a value and units to replace the icon
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "value": "<text>",         // String restricted to "0...9 + - . : "
      "units": "<text>"          // Optional
    }
  ]
}   
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## Set a level value
[comment]: <> ([TODO] Explanation)
(for buttonLevelUp and buttonLevelDown)


Explanation text goes here...



[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "level": <number>
    }
  ]
}  
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## Set items in drop down list
[comment]: <> ([TODO] Explanation)
Explanation text goes here...



[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "dropDownList": ["list-item"],     // List items Array of Strings ["item-1", "item-2", "item-3"]
    }
  ]
} 
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


## Set index to selected list item
[comment]: <> ([TODO] Explanation)
(will be shown on parent tile)

Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "dropDownSelect": <number>
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
``<number>`` index to selected list item
:::



## Set a label for the drop down list
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "dropDownLabel": "<text>"
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
``<text>`` shows fixed text instead of selection in top row
:::



## Populate the selectorList
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "selectorList": ["list-item"],     // List items Array of Strings ["item-1", "item-2", "item-3"]
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip

Populate the selector list with items and enable the selector feature for this tile: ``buttonUpDown``, ``-LeftRight``, ``-PrevNext``
:::



## Set index to selected selector list item
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (END of JSON Example)


::: tip
``<text>`` shows fixed text instead of selection in top row
:::



## Populate the selectorList
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "selectorSelect": <number>
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
``<number>`` index to selected list item
:::



## Set values for colorPicker
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "tiles":[
    {
      "screen": <number>,
      "tile": <number>,
      "colorPicker":{
        "mode": "colorKelvin"|"colorRgb",
        "colorKelvin": <number>,
        "colorRgb":{
          "r": <number>,
          "g": <number>,
          "b": <number>
        },
        "brightness": <number>
      }
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## Load a screen
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "screen":{
    "load": <number>
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
``<number>`` screen number between 1 .. 32    
:::



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
::::
[comment]: <> (END of JSON Example)



## Send feedback to open keyPad
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "keyPad":{
    "state": "locked"|"unlocked"|"failed"|"close"
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
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
::::
[comment]: <> (END of JSON Example)

::: tip
``<number>`` number between 1 .. 100 [%]
:::

The backlight state can be set to on or off. Additionally a "Screen Sleep Timeout" can be set via the Admin UI config page. 


[comment]: <> (START of JSON Example)
:::: code-group
::: code-group-item Command
```json
{
  "backlight":{
    "state": "sleep"|"awake"
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



# State and Event Payloads
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```

## Remote :
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item State
```json
{
  "screen": <number>,
  "tile": <number>,
  "style": "remote",
  "type": "up"|"down"|"left"|"right"|"ok"|"info"|"list"|"back"|"home"
  "event":"single"|"hold"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## DropDown :
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item State
```json
{
  "screen":<number>,
  "tile":<number>,
  "style":"dropDown",
  "type":"dropDown",
  "event":"selection",
  "state":<number>
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## Selector :
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item State
```json
{
  "screen": <number>,
  "tile": <number>,
  "style": "<style>",
  "type": "selector",
  "event": "selection",
  "state": <number>
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## KeyPad :
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item State
```json
{
  "screen": <number>,
  "tile": <number>,
  "style": "keyPad"|"keyPadBlocking",
  "type": "button",
  "event": "key",
  "state": "on"|"off",
  "keyCode": "<text>"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## PrevNext , UpDown, LeftRight :
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item State
```json
{
  "screen": <number>,
  "tile": <number>,
  "style": "<style>",
  "type": "<type>",
  "event": "single"|"hold"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
``<type>`` depends on the ``<style>`` chosen see table below:
|Type| Style Dependancy |
| :---- |:----|
|``"buttonUpDown"``|``"up"\|"down"``|
|``"buttonLeftRight"``|``"left"\|"right"``|
|``"buttonPrevNext"``|``"prev"\|"next"``|

:::



## LevelEvent :
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item State
```json
{
  "screen": <number>,
  "tile": <number>,
  "style": "<style>",
  "type": "level",
  "event": "up"|"down",
  "state": <number>
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
|Type| Event | |
| :---- |:----|:---|
|``"level"``|``"up"``| level+ |
|``"level"``|``"down"``| level- |
:::



## ColorPickerEvent :
[comment]: <> ([TODO] Explanation)
Explanation text goes here...


[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item State
```json
{
  "screen": <number>,
  "tile": <number>,
  "style": "<style>",
  "type": "colorPicker",
  "event": "change",
  "state":{
    "colorRgb":{
      "r": <number>,
      "g": <number>,
      "b": <number>
    },
    "colorKelvin": "<value>",
    "brightness": "<value>"
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::
::::
[comment]: <> (END of JSON Example)



## ScreenChange :
[comment]: <> ([TODO] Explanation)
Explanation text goes here...



[comment]: <> (START of JSON Example)
:::: code-group

::: code-group-item State
```json
{
  "screen": <number>,
  "type": "screen",
  "event": "change",
  "state": "loaded"|"unloaded"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<device-client-id>```
:::

::::
[comment]: <> (END of JSON Example)



## Backlight Change:
[comment]: <> ([TODO] Explanation)
Changing the backlight level or state will generate a change event message containing the backlight state and brightness level. Sleep state events will return a brightness of 0.



[comment]: <> (START of JSON Example)
:::: code-group

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



## Message popup:
[comment]: <> ([TODO] Explanation)
Explanation text goes here...



[comment]: <> (START of JSON Example)
:::: code-group

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


### Custom APIs
Some extra REST API endpoints have been added to the Touch Panel firmware, these are listed below with a brief explanation;

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
