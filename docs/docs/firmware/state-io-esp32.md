---
tags: ["OXRS-SHA-StateIO-ESP32", "URC", "RACK32"]
---
# State IO ESP32
<p class="maker">by <b>moin</b></p>

> SKU: OXRS-SHA-StateIO-ESP32-FW

## Introduction
This FW combines the functionality of [OXRS-SHA-StateMonitor-ESP32](/docs/firmware/state-monitor-esp32.md) and [OXRS-SHA-StateController-ESP32](/docs/firmware/state-controller-esp32.md).

To perform this combined functionality the available number of 128x I/O lines is split into input and output partitions. The split can be configured at runtime.

---

### How does it work?
The maximum number of 128x I/O lines can be achieved by connecting up to 8x I/O expander chips (MCP23017 with 16x I/Os each) via the I2C bus to the Rack32 controller. The FW refers to these I/O lines with index numbers (1 .. 128). In the standard configuration all 128x I/O lines are configured as input (StateMonitor) or output (StateController). This FW allows you to split the 128x I/O lines into a lower partition of inputs and an upper partition of outputs. With this configurations a single Rack32 controller can monitor inputs as well as control outputs which could be useful for small scale or distributed applications. 

Currently there are 5 supported configurations, with different partition sizes.


The [AdminUI-WEB-APP](https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP) is the ideal tool to set your desired configuration. 


![IO split configurations](/images/io-config.png)


In the example above the FW is configured for 32x inputs and 96x outputs. The user has to make sure that the connected MCPs are configured properly (correct MCP address). Not all output MCPs need to be populated. The FW will automatically scan for installed MCPs and only allows configuration of existing MCPs.


## Configuration
This FW is fully compatible with [OXRS](https://oxrs.io) eco-system and is built using the standard OXRS [Libraries](/docs/libraries/README.md)

All the functionality of the [StateMonitor](/docs/firmware/state-monitor-esp32.md) applies to the input partition and [StateController](/docs/firmware/state-controller-esp32.md) functionality applies to the output partition. Please see their documentation for further details.


## Downloads
Download the latest version of the firmware on [Github](https://github.com/SuperHouse/OXRS-SHA-StateIO-ESP32-FW).

## Supported Hardware
Input devices 
* [I2CRJ45 / Light Switch Controller](/docs/hardware/input-devices/I2CRJ45.md) by SuperHouse

Output devices
* [8 Channel Relay Driver Shield](https://www.superhouse.tv/product/8-channel-relay-driver-shield/) by SuperHouse
* [128 Channel Relay Driver](https://bmdesigns.com.au/shop/relay128-128-channel-relay-driver/) by Bedrock Media Designs
* [16 Channel Relay Driver](https://bmdesigns.com.au/shop/relay16-16-channel-relay-driver/) by Bedrock Media Designs

And is designed to run on the [RACK32](/docs/hardware/controllers/rack32.md) as part of the [OXRS](https://oxrs.io) eco-system.



---

#### Credits
 * Jonathan Oxer <jon@oxer.com.au>
 * Ben Jones <https://github.com/sumnerboy12>
 * Moin <https://github.com/moinmoin-sh>

 ---


#### License
Copyright 2020-2022 SuperHouse Automation Pty Ltd [www.superhouse.tv](www.superhouse.tv)

The software portion of this project is licensed under the Simplified
BSD License. The "licence" folder within this project contains a
copy of this license in plain text format.

