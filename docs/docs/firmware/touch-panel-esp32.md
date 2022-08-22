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

Prerequisites:
- OXRS-IO-TouchPanel-ESP32-FW - [Github](https://github.com/OXRS-IO/OXRS-IO-TouchPanel-ESP32-FW/releases)
- OXRS Web UI Admin - [Github](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP)
- WT32-SC01 Touch Screen Display - [Read more](/add-ons/touch-displays/WT32-SC01-display).
- Node Red - [Read more](https://nodered.org).
- MQTT Broker - e.g. Mosquitto, Mosca - [Wiki](https://en.wikipedia.org/wiki/MQTT).


### How does it work?
[comment]: <> ([TODO] How it works)
How it works text goes here...


Configuration, State and Commands

<Badge type="warning" text="MQTT Configuration Topic" vertical="middle" />

```conf/<your-device-topic>```
<Badge type="warning" text="MQTT State Topic" vertical="middle" />

```stat/<your-device-topic>```
<Badge type="warning" text="MQTT Command Topic" vertical="middle" />

```cmnd/<your-device-topic>```


::: tip Recommendation:
[comment]: <> ([TODO] Explanation into the recommended Node Red usage for the product)
The recommended way to use the firmware and interact with the Touch Panel and your IoT Devices is via Node Red and MQTT. They are used to configure, manage state and recieve events. 

Further documentation and some example Node Red Flows will be made available to get you started. 
:::

---

# Tile Styles
[comment]: <> ([TODO] Tile Styles explanation)
Tile Styles explanation text goes here...

|Tile Style| Tile Example| Get Started |
| :---- |:----|:----|
| button | ![TP32 Image Alt Text](/images/button-tile-not-active.png)|[Get Started](/docs/firmware/touch-panel-esp32/#button-tile) |
| buttonLevelUp | ![TP32 Image Alt Text](/images/buttonLevelUp-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonlevelup-tile) |
| buttonLevelDown | ![TP32 Image Alt Text](/images/buttonLevelDown-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonleveldown-tile) |
| buttonUpDown | ![TP32 Image Alt Text](/images/buttonUpDown-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonupdown-tile) |
| buttonLeftRight | ![TP32 Image Alt Text](/images/buttonLeftRight-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonleftright-tile) |
| buttonPrevNext | ![TP32 Image Alt Text](/images/buttonPrevNext.png)|[Get Started](/docs/firmware/touch-panel-esp32/#buttonprevnext-tile) |
| indicator | ![TP32 Image Alt Text](/images/indicator-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#indicator-tile) |
| colorPickerRgbCct <br><br> colorPickerRgb <br><br> colorPickerCct | ![TP32 Image Alt Text](/images/colorPicker-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#colorpickerrgbcct-tile)<br><br>[Get Started](/docs/firmware/touch-panel-esp32/#colorpickerrgb-tile)<br><br>[Get Started](/docs/firmware/touch-panel-esp32/#colorpickercct-tile) |
| dropDown | ![TP32 Image Alt Text](/images/dropdown-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#dropdown-tile) |
| keyPad <br><br> keyPadBlocking  | ![TP32 Image Alt Text](/images/keypad-tile-2.png)|[Get Started](/docs/firmware/touch-panel-esp32/#keypad-tile)<br><br> [Get Started](/docs/firmware/touch-panel-esp32/#keypadblocking-tile) |
| remote | ![TP32 Image Alt Text](/images/remote-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#remote-tile) |
| link | ![TP32 Image Alt Text](/images/link-tile.png)|[Get Started](/docs/firmware/touch-panel-esp32/#link-tile) |


# Tile Payloads
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

---


# button Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,          // Screen number triggering state event  
  "tile": <number>,            // Tile number triggering state event  
  "style": "button",
  "type": "button",
  "event": "single"|"hold",
  "state": "on"|"off"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to 
  "tile": <number>,                 // Tile number sending command to
  "state": "on"|"off",
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


---


# buttonLevelUp Tile

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
  "levelStart": <number>,                  // Defaults to 0
  "levelStop": <number>                    // Defaults to 100
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,                     // Screen number e.g. 1 
  "tile": <number>,                       // Tile number e.g. 1 
  "style": "buttonLevelUp",
  "type": "button"|"level",               // Indicates if touch event was a button press of level press
  "event": "single"|"hold"|"up"|"down",
  "state": <number>                       // Indicates the current level state
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


---


# buttonLevelDown Tile

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
  "levelStart": <number>,        // Defaults to 0
  "levelStop": <number>          // Defaults to 100
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,                         // Screen number e.g. 1 
  "tile": <number>,                           // Tile number e.g. 1 
  "style": "buttonLevelDown",
  "type": "button"|"level",                   // Indicates if touch event was a button press of level press
  "event": "single"|"hold"|"up"|"down",
  "state": <number>                           // Indicates the current level state
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


---


# buttonUpDown Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,           // Screen number e.g. 1 
  "tile": <number>,             // Tile number e.g. 1 
  "style": "buttonUpDown",
  "type": "up"|"down"|"button", // Indicates if touch event was an 'up', 'down' or 'button'
  "event": "single"|"hold",
  "state": "on"|"off"           // 'on' / 'off' state shown only with type 'button' press
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


---


# buttonLeftRight Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,                 // Screen number e.g. 1 
  "tile": <number>,                   // Tile number e.g. 1 
  "style": "buttonLeftRight",
  "type": "left"|"right"|"button",    // Indicates if touch event was an 'left', 'right' or 'button'
  "event": "single"|"hold",
  "state": "on"|"off"                 // 'on' / 'off' state shown only with type 'button' press
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


---


# buttonPrevNext Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style": "buttonPrevNext",
  "type": "prev"|"next"|"button",   // Indicates if touch event was an 'prev', 'next' or 'button'
  "event": "single"|"hold",
  "state": "on"|"off"               // 'on' / 'off' state shown only with type 'button' press
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


---


# indicator Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "example": "State"
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,             // Screen number e.g. 1     
  "tile": <number>,               // Tile number e.g. 1 
  "number": "<number-text>",      // String indicating the number e.g. "22.9"
  "units": "<unit-text>",         // String showing the suffix unit e.g. "%"
  "subLabel": "<subLabel_text>"   // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


---


# colorPickerRgbCct Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style":"colorPickerRgbCct",
  "type": "button"|"colorPicker",   // Indicates if touch event was 'button'
  "event": "single"|"change",
  "state": "on"|"off"| {            // "on"|"off" state only used when type is "button" otherwise colorRgb Object 
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

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,                     // Screen number sending command to 
  "tile": <number>,                       // Tile number sending command to  
  "state": "on"|"off",
  "subLabel": "<subLabel_text>"           // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press and hold the tile button the controls screen will appear. The controls screen has two tabs to choose from ``Color`` and ``Temperature``. The color tab gives you the ability to adjust the ``RGB Color`` via the color wheel and ``Brightness Color`` via the slider. The temperature tab gives you the ability to adjust the ``Color Temperature`` and ``Brightness White`` via the sliders.

![TP32 Image Alt Text](/images/colorPicker-both-color-tab.png) ![TP32 Image Alt Text](/images/colorPicker-both-temp-tab.png)



---


# colorPickerRgb Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style":"colorPickerRgb",
  "type": "button"|"colorPicker",   // Indicates if touch event was 'button'
  "event": "single"|"change",
  "state": "on"|"off"| {            // "on"|"off" state only used when type is "button" otherwise colorRgb Object 
    "colorRgb":{
      "r": <number>,
      "g": <number>,
      "b": <number>
    }
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to 
  "tile": <number>,                 // Tile number sending command to  
  "state": "on"|"off",
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press and hold the tile button the controls screen will appear giving you the ability to adjust the ``RGB Color`` via the color wheel and ``Brightness Color`` via the slider.

![TP32 Image Alt Text](/images/colorPicker-color-tab.png)



---


# colorPickerCct Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1 
  "tile": <number>,                 // Tile number e.g. 1 
  "style":"colorPickerRgb",
  "type": "button"|"colorPicker",   // Indicates if touch event was 'button'
  "event": "single"|"change",
  "state": "on"|"off",
  "colorKelvin": <number>,
  "brightness": <number>
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to 
  "tile": <number>,                 // Tile number sending command to  
  "state": "on"|"off",
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press and hold the tile button the controls screen will appear giving you the ability to adjust the ``Color Temperature`` and ``Brightness White`` via the sliders.

![TP32 Image Alt Text](/images/colorPicker-temp-tab.png)


---


# dropDown Tile

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

```conf/<your-device-topic>```
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

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "screen": <number>,               // Screen number sending command to  
  "tile": <number>,                 // Tile number sending command to  
  "dropDownList": <list-items>,     // List of items Strings seperated by \n
  "subLabel": "<subLabel_text>"     // String for additional tile information e.g. last updated "15 mins ago" 
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the dropdown list screen will appear giving you the ability to select from the list of items.

![TP32 Image Alt Text](/images/dropdown-list-screen.png)

---


# keyPad Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1
  "tile": <number>,                 // Tile number e.g. 1 
  "style": "keyPad",
  "type": "button",
  "event": "key",
  "state": "on"|"off",
  "keyCode": <code>                 // Code entered - NOTE: this is plain text
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "keyPad":{
    "state": "failed",
    "text": <label_text>,         // Keypad status label text
    "colorRgb":{                  // Keypad icon color
      "r": <number>,
      "g": <number>,
      "b": <number>
    }
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the keypad screen will appear giving you the ability to enter the code.

![TP32 Image Alt Text](/images/keypad-screen-1.png)![TP32 Image Alt Text](/images/keypad-screen-2.png)


---


# keyPadBlocking Tile

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

```conf/<your-device-topic>```
:::

::: code-group-item State
```json
{
  "screen": <number>,               // Screen number e.g. 1
  "tile": <number>,                 // Tile number e.g. 1 
  "style": "keyPadBlocking",
  "type": "button",
  "event": "key",
  "state": "on"|"off",
  "keyCode": <code>                 // Code entered - NOTE: this is plain text
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```
:::

::: code-group-item Command
```json
{
  "keyPad":{
    "state": "failed",
    "text": <label_text>,         // Keypad status label text
    "colorRgb":{                  // Keypad icon color
      "r": <number>,
      "g": <number>,
      "b": <number>
    }
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


---


# remote Tile

![TP32 Image Alt Text](/images/remote-tile.png)
 
[comment]: <> ([TODO] Tile introduction text goes here)

 The xxx tile style allows you to simply...

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

```conf/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)

### Control Screen:

When you press the tile button the remote screen will appear giving you the ability to interact with the remote controls.

![TP32 Image Alt Text](/images/remote-screen.png)


---


# link Tile

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

```conf/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)



# Global Command Payloads
[comment]: <> ([TODO] Commands explanation)
Commands explanation text goes here...

<Badge type="warning" text="MQTT Command Topic" vertical="middle" />

```cmnd/<your-device-topic>```



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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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
      "bgImage":{
        "base64":"<encodeBase64(.png)>",
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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)



## Set a number and units to replace the icon
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
      "number": "<text>",
      "units": "<text>"          //Optional
    }
  ]
}   
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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
      "dropDownList": "<list-item>"
    }
  ]
} 
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
``<list>`` list of items separated with ``\n``
:::



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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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
      "selectorList": "<list-item>"
    }
  ]
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)


::: tip
``<list-item>`` list items separated with ``\n``

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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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
    "image": "<encodeBase64(.png)>"
  }
}
```
<Badge type="warning" text="MQTT Topic" vertical="middle" />

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
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

```cmnd/<your-device-topic>```
:::
::::
[comment]: <> (END of JSON Example)



# State and Event Payloads
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

<Badge type="warning" text="MQTT Topic" vertical="middle" />

```stat/<your-device-topic>```

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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
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

```stat/<your-device-topic>```
:::

::::
[comment]: <> (END of JSON Example)



## Best practice
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
* Icon download is performed via [“addIcon” command](/docs/firmware/tp32.html#add-a-custom-icon)
* The added icons appear in alphabetical order after the built-in icons (which are preceded with "_")
* Custom icons are not persistent, they need to be reloaded after restart, and (stored) config needs to be resent to allow the custom icons to be used


## API
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

## Custom APIs
[comment]: <> ([TODO] Explanation)
Explanation text goes here...

HTTP <Badge type="tip" text="GET" vertical="middle" /> 

``/api/snapshot.bmp``
download a raw 1:1 snapshot (approx. 450kB) of the current display to your computer
in the bitmap format.

## Downloads
Download the latest version of the firmware on [Github](https://github.com/OXRS-IO/OXRS-IO-TouchPanel-ESP32-FW/releases).

- OXRS Web UI Admin - [Github](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP)
- WT32-SC01 Touch Screen Display - [Read more](/add-ons/touch-displays/WT32-SC01-display).
- Node Red - [Read more](https://nodered.org).
- MQTT Broker - e.g. Mosquitto, Mosca - [Wiki](https://en.wikipedia.org/wiki/MQTT).


## Supported Hardware
- WT32-SC01 Display [Check it out](/add-ons/touch-displays/WT32-SC01-display)


### Credits
 - Moin [Github](https://github.com/moinmoin-sh)
 - Ben Jones [Github](https://github.com/sumnerboy12)
 - Austin's Creations [Maker Website](https://www.austinscreations.ca/)

 ---


#### License
Copyright 2020-2022 SuperHouse Automation Pty Ltd www.superhouse.tv

The software portion of this project is licensed under the Simplified BSD License. The "licence" folder within this project contains a copy of this license in plain text format.