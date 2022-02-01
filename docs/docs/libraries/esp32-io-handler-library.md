---
tags: ["OXRS-SHA-IOHandler-ESP32-LIB", "TAG2", "TAG3"]
---
# ESP32 I/O handler library
<p class="maker">by <b>SuperHouse Automation</b></p>

> SKU: OXRS-SHA-IOHandler-ESP32-LIB

## Introduction
This library serves two functions, for input monitoring and output control. It can monitor buttons, switches, contacts, or any binary sensor, and report events back to the caller. It can also listen for binary commands and passes control events back to the caller.

Typically used with MCP23017 I2C I/O buffers to detect digital signals being pulled to GND (inputs) and to control relays (outputs).

---

### How does it work?
The library contains two classes which can be used independently or together, depending on what your firmware is trying to do.

### `USM_Input.h`
Monitors and maintains state for up to 16 inputs. Takes 16 bits of binary data and checks each value against an internal state machine to determine if any input events have occurred.

### `USM_Output.h`
Waits for commands and generates control events for up to 16 outputs. Keeps track of output state and handles interlocking and timers.

## Configuration
### `USM_Input.h`
Each of the 16 inputs can be configured as either `BUTTON`, `CONTACT`, `PRESS`, `ROTARY`, `SECURITY`, `SWITCH` or `TOGGLE`. Different events will be generated depending on the configured type, and the sequence of state changes.

Each of the 16 inputs can also be inverted, so events are generated on `LOW` -> `HIGH` transitions instead of `HIGH` -> `LOW`.

#### Rotary Encoders
A pair of inputs can be set as `ROTARY` inputs, and connected to an [incremental rotary encoder](https://lastminuteengineers.com/rotary-encoder-arduino-tutorial/). The library will decode the signals from the encoder and generate `LOW_EVENT` (clockwise) or `HIGH_EVENT` (counter clockwise) events, depending which way the encoder is turned. 

|Encoder Direction|I/O Event|
|:----------------|:--------|
|Clockwise        |`LOW_EVENT`|
|Counter Clockwise|`HIGH_EVENT`|

#### Security Sensors
A set of 4 inputs can be set as `SECURITY` inputs, and connected to a module capable of reading the EOL resistance of your sensor and detecting the 4 possible states; `normal`, `alarm`, `tamper` or `short`. The library will decode the signals from the sense module and generate `HIGH_EVENT` (normal), `LOW_EVENT` (alarm), `DEBOUNCE_LOW` (tamper), or `DEBOUNCE_HIGH` (short) events, depending on what state the sensor is in. 

The table below shows the state of the 4 channels from the security sense module for each sensor state, and what I/O event is generated as a result. We re-purpose the `DEBOUNCE_XXX` events as signals for the `tamper` and `short` states so your firmware needs to apply the appropriate mappings.

|Sensor State|CH1 |CH2 |CH3 |CH4 |I/O Event|
|:-----------|:---|:---|:---|:---|:--------|
|Normal      |OFF |ON  |OFF |ON  |`HIGH_EVENT`|
|Alarm       |OFF |ON  |ON  |ON  |`LOW_EVENT`|
|Tamper      |ON  |OFF |ON  |ON  |`DEBOUNCE_LOW`|
|Short       |OFF |ON  |OFF |OFF |`DEBOUNCE_HIGH`|

#### Functions
- `setType(input, type)`: Set the input type
- `setInvert(input, invert)`: Invert input handling

#### Code Example
```cpp
#include <Adafruit_MCP23X17.h>        // For MCP23017 I/O buffers
#include <OXRS_Input.h>               // For input handling

// I/O buffers
Adafruit_MCP23X17 mcp23017;

// Input handlers
OXRS_Input oxrsInput;

void setup() {
  // Initialise the MCP chip (assume at address 0x20)
  mcp23017.begin_I2C(0x20);

  // Set every pin to be INPUT with internal PULLUPs enabled
  for (uint8_t pin = 0; pin < 16; pin++) {
    mcp23017.pinMode(pin, INPUT_PULLUP);
  }
  
  // Initialise the input handler
  oxrsInput.begin(inputEvent);

  // Configurate types and invert state here
  //oxrsInput.setType(0, BUTTON);
  //oxrsInput.setInvert(0, 1);
}

void loop() {
  // Read the values for all 16 inputs on this MCP in one hit
  uint16_t io_value = mcp23017.readGPIOAB();

  // Check for any input events
  oxrsInput.process(0, io_value);
}

void inputEvent(uint8_t id, uint8_t input, uint8_t type, uint8_t state) {
  // Code to handle the event goes in here!
}
```

### `USM_Output.h`
Each of the 16 outputs can be configured as either `MOTOR`, `RELAY`, or `TIMER`. Different control signals will be generated depending on the configured type.

#### Interlocking
Interlocking two outputs allows them to control equipment such as roller blinds, garage doors, louvre roofing etc.

If two outputs are interlocked it means they can't be `on` at the same time. E.g. if output A and B are interlocked, and an `on` command is sent to output B while output A is `on`, output A will automatically turn `off` and after a short delay output B will then turn `on`. 

#### Timers
Timers allow an output to automatically turn `off` a set number of seconds after being turned `on` (configurable but defaults to 60 seconds).

If another `on` command is sent while the timer is running, it will reset to zero and begin counting down again. If an `off` command is sent the timer will be cancelled and the output turned `off` immediately.

#### Functions
- `setType(output, type)`: Set the output type
- `setInterlock(output, interlock)`: Interlock an output with another
- `setTimer(output, seconds)`: Set the timer duration (in seconds)

::: tip
The only difference between `MOTOR` and `RELAY` outputs is the interlock delay. For `MOTOR` outputs the delay is 2000ms, for `RELAY` outputs it is only 500ms.
:::

#### Code Example
```cpp
#include <Adafruit_MCP23X17.h>        // For MCP23017 I/O buffers
#include <OXRS_Output.h>              // For output handling

// I/O buffers
Adafruit_MCP23X17 mcp23017;

// Input handlers
OXRS_Output oxrsOutput;

void setup() {
  // Initialise the MCP chip (assume at address 0x20)
  mcp23017.begin_I2C(0x20);

  // Set every pin to OUTPUT
  for (uint8_t pin = 0; pin < 16; pin++) {
    mcp23017.pinMode(pin, OUTPUT);
  }
  
  // Initialise the output handler
  oxrsOutput.begin(outputEvent);

  // Configurate types, interlocks and timers here
  //oxrsOutput.setInterlock(0, 1);
  //oxrsOutput.setInterlock(1, 0);
}

void loop() {
  // Check for any output events
  oxrsOutput.process();

  // Need a way to receive commands - e.g. serial input or MQTT messages
  //oxrsOutput.handleCommand(0, output, RELAY_ON);
}

void outputEvent(uint8_t id, uint8_t output, uint8_t type, uint8_t state) {
  // Code to handle the event goes in here!
}
```

## Downloads
Download the latest version of the firmware on [Github](https://github.com/SuperHouse/OXRS-SHA-IOHandler-ESP32-LIB).

## Supported Hardware
Designed to run on ESP32 based devices.
- [Rack32](/docs/hardware/controllers/rack32.html)

---

#### Credits
 - [OXRS](https://oxrs.io/) Core Team

---

#### License
Found [here](https://github.com/SuperHouse/OXRS-SHA-IOHandler-ESP32-LIB/blob/main/LICENSE).
