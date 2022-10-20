---
tags: [""]
---
# Getting Started Guide
 A great adventure awaits those using the OXRS platform, and with the help of this guide you'll be able to pick your adventure.
 
::: tip Notice
These docs are work in progress, if you have any issues getting things setup drop us a message on the SuperHouse [Discord](https://discord.gg/H6bbrAtS)
:::

## Choose Your Adventure
 Pick Your 
 - IO options
 - Controller(s)
 - Display(s)
 - Cases --- rack mount or 3D printed?
 - Firmware, the basic flashing / updating guide

## IO Options

## Controllers

## Displays

## Touch Screen Displays
A tutorial guiding intial [firmware installation](/docs/firmware/touch-panel-esp32.html#firmware-installation)on the [OXRS Touch Panel ESP32](/docs/firmware/touch-panel-esp32.html) device can be found [here](/docs/firmware/touch-panel-esp32.html#firmware-installation).

## Cases

## Firmware
*WIP - to be updated soon*

For basic loading of firmware, it's recomended that if firmwware is already loaded to use OTA. 
otherwise it's recomended to use esptooy.py or espflasher and with those 2 programs you can flash teh required bin file. for editing and uploading the raw firmware with arduino or platformIO check out the advanced guide

with esptool.py the cmd line is listed below: (this is an example for esp32)

The last item in the cmd is the name of the bin file to load.
```cmd
esptool.py --chip esp32 --port "COM9" --baud 921600 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 40m --flash_size detect 0x10000 OXRS-SHA-StateMonitor-ESP32-FW.ino.esp32.bin
```
