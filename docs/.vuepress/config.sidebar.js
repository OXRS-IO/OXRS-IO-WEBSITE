module.exports = {
  "/guides/": [
    {
      text: "Getting Started",
      link: "/guides/getting-started/",
      // children: [{
      //     text: 'Getting Started 2',
      //     // link: '/guides/getting-started/getting-started',
      //   },
    },
    {
      text: "Advanced",
      link: "/guides/advanced/",
      children: [
        {
          text: "Home Assistant",
          link: "/guides/advanced/home_assistant/",
        },
        {
          text: "Node-RED",
          link: "/guides/advanced/node_red/",
        },
        {
          text: "Backup/Restore",
          link: "/guides/advanced/backup-restore/",
        },
      ],
    },
    {
      text: "Standards",
      link: "/guides/standards/",
      children: [
        {
          text: "IDC",
          link: "/guides/standards/IDC/",
        },
        {
          text: "IO Ethernet",
          link: "/guides/standards/IO-ethernet/",
        },
        {
          text: "Versioning",
          link: "/guides/standards/versioning/",
        },
      ],
    },
    {
      text: "Writing Docs",
      link: "/guides/writing-docs/",
    },
  ],
  "/add-ons/": [
    {
      text: "Accessibility",
      link: "/add-ons/accessibility/",
      children: ["/add-ons/accessibility/ac-tower-controller/"],
    },
    {
      text: "Displays",
      link: "/add-ons/displays/",
      children: [
        "/add-ons/displays/IPS-display/",
        "/add-ons/displays/128x32-OLED-display/",
      ],
    },
        {
          text: "Touch Displays",
          link: "/add-ons/touch-displays/",
          children: [
            "/add-ons/touch-displays/WT32-SC01-display/",
          ],
        },
    // {
    //   text: 'Relays',
    //   link: '/add-ons/relays',
    // },
    // {
    //   text: 'Sensors',
    //   link: '/add-ons/sensors',
    // },
    {
      text: "Switches",
      link: "/add-ons/switches/",
      children: ["/add-ons/switches/ac-smart-switch/"],
    },
  ],
  "/docs/": [
    {
      text: "Hardware",
      link: "/docs/hardware/",
      children: [
        {
          text: "Controllers",
          children: [
            "/docs/hardware/controllers/rack32/",
            "/docs/hardware/controllers/room8266/",
            "/docs/hardware/controllers/rack-fan-controller/",
          ],
        },
        {
          text: "Input Devices",
          children: [
            "/docs/hardware/input-devices/I2CRJ45/",
            "/docs/hardware/input-devices/CBUS-to-RJ45/",
            "/docs/hardware/input-devices/rotary-encode-to-rj45/",
            "/docs/hardware/input-devices/rotary-encode/",
            //'/docs/hardware/input-devices/hardware-template',
          ],
        },
        {
          text: "Output Devices",
          children: [
            "/docs/hardware/output-devices/pwm-controllers/",
            "/docs/hardware/output-devices/DIN-Relay-Driver-4ch/",
            //'/docs/hardware/output-devices/hardware-template',
          ],
        },
        {
          text: "Input & Output Devices",
          children: [
            "/docs/hardware/input-output-devices/smoke-detector-sd-16port/",
            "/docs/hardware/input-output-devices/SenseRJ45/",
          ],
        },
        {
          text: "Shields",
          children: ["/docs/hardware/shields/rack32-knx-shield/"],
        },
      ],
    },
    {
      text: "Firmware",
      link: "/docs/firmware/",
      children: [
        {
          text: "ESP32",
          children: [
            "/docs/firmware/state-monitor-esp32/",
            "/docs/firmware/state-controller-esp32/",
            "/docs/firmware/state-io-esp32/",
            "/docs/firmware/security-monitor-esp32/",
            "/docs/firmware/smoke-detector-esp32/",
            //"/docs/firmware/tp32/", // Will be added once docs are completed
            //'/docs/firmware/led-controller-esp32',
          ],
        },
      ],
    },
    {
      text: "Libraries",
      link: "/docs/libraries/",
      children: [
        {
          text: "ESP32",
          children: [
            "/docs/libraries/esp32-mqtt-library/",
            "/docs/libraries/esp32-api-library/",
            "/docs/libraries/esp32-lcd-library/",
            "/docs/libraries/esp32-io-handler-library/",
          ],
        },
        {
          text: "ESP",
          children: ["/docs/libraries/esp-sensor-library/"],
        },
      ],
    },
    {
      text: "Cases",
      link: "/docs/cases/",
      children: [
        {
          text: "Rack Mount",
          children: ["/docs/cases/rack-mount/rack-mount/"],
        },
        {
          text: "3D Printed",
          children: ["/docs/cases/3D-printed/"],
        },
      ],
    },
  ],
  "/glossary/": [
    {
      text: "SKU's",
      link: "/glossary/skus/",
    },
    {
      text: "Makers",
      link: "/glossary/makers/",
    },
    {
      text: "Acronyms",
      link: "/glossary/acronyms/",
    },
  ],
};
