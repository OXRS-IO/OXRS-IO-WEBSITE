const {
  path
} = require('@vuepress/utils')

module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'OXRS Docs',
      description: 'The Open eXtensible Rack System',
    },
  },
  plugins: [
    [
      '@vuepress/register-components', {
        componentsDir: path.resolve(__dirname, './components'),
      },
      '@vuepress/plugin-search',
      {
        // allow searching the `tags` frontmatter
        getExtraFields: (page) => page.frontmatter.tags || [],
      },
    ],
  ],
  themeConfig: {
    lastUpdated: true,
    contributors: true,
    docsRepo: 'https://github.com/OXRS-IO/OXRS-IO-WEBSITE',
    docsBranch: 'main',
    docsDir: 'docs',
    //editLinkPattern: ':repo/-/edit/:branch/:path',
    logo: '/images/hero.png',
    sidebarDepth: 2,
    navbar: [{
        text: 'Docs',
        children: [{
            text: 'Hardware',
            link: '/docs/hardware',
          },
          {
            text: 'Firmware',
            link: '/docs/firmware',
          },
          {
            text: 'Libraries',
            link: '/docs/libraries',
          },
          {
            text: 'Cases',
            link: '/docs/cases',
          },
        ],
      },
      {
        text: 'Add-ons',
        children: [{
            text: 'Accessibility',
            link: '/add-ons/accessibility',
          },
          {
            text: 'Displays',
            link: '/add-ons/displays',
          },
          //           {
          //             text: 'Relays',
          //             link: '/add-ons/relays',
          //           },
          //           {
          //             text: 'Sensors',
          //             link: '/add-ons/sensors',
          //           },
          {
            text: 'Switches',
            link: '/add-ons/switches',
          },
        ],
      },
      {
        text: 'Guides',
        children: [{
            text: 'Getting started',
            link: '/guides/start'
          },
          {
            text: 'Advanced',
            link: '/guides/advanced'
          },
          {
            text: 'Standards',
            link: '/guides/standards'
          },
          {
            text: 'Writing Docs',
            link: '/guides/writing-docs/getting-started'
          },
        ],
      },
      {
        text: 'Glossary',
        children: [{
            text: 'SKU\'s',
            link: '/glossary/skus.md',
          },
          {
            text: 'Makers',
            link: '/glossary/makers.md',
          },
          {
            text: 'Acronyms',
            link: '/glossary/acronyms.md',
          },
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/OXRS-IO/',
      },
    ],
    sidebar: {
      '/guides': [{
          text: 'Getting Started',
          link: '/guides/start',
        },
        {
          text: 'Advanced',
          link: '/guides/advanced',
          children: [{
              text: 'Home Assistant',
              link: '/guides/advanced/home_assistant.md',
            },
            {
              text: 'Node-RED',
              link: '/guides/advanced/node_red.md',
            }
          ],
        },
        {
          text: 'Standards',
          link: '/guides/standards/README.md',
          children: [{
              text: 'IDC',
              link: '/guides/standards/IDC.md',
            },
            {
              text: 'IO Ethernet',
              link: '/guides/standards/IO-ethernet.md',
            },
            {
              text: 'Versioning',
              link: '/guides/standards/versioning.md',
            },
          ],
        },
        {
          text: 'Writing Docs',
          link: '/guides/writing-docs/getting-started.md'
        },
      ],
      '/add-ons': [{
          text: 'Accessibility',
          link: '/add-ons/accessibility/README.md',
          children: [
            '/add-ons/Accessibility/ac-tower-controller.md',
          ],
        },
        {
          text: 'Displays',
          link: '/add-ons/displays',
          children: [
            '/add-ons/displays/IPS-display.md',
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
          text: 'Switches',
          link: '/add-ons/switches',
          children: [
            '/add-ons/switches/ac-smart-switch.md',
          ],
        },
      ],
      '/docs': [{
        text: 'Hardware',
        link: '/docs/hardware/README.md',
        children: [{
            text: 'Controllers',
            children: [
              '/docs/hardware/controllers/rack32.md',
              '/docs/hardware/controllers/room8266.md',
            ],
          },
          {
            text: 'Input Devices',
            children: [
              '/docs/hardware/input-devices/I2CRJ45.md',
              '/docs/hardware/input-devices/CBUS-to-RJ45.md',
              '/docs/hardware/input-devices/rotary-encode-to-rj45.md',
              '/docs/hardware/input-devices/rotary-encode.md',
              //                   '/docs/hardware/input-devices/hardware-template.md',
            ],
          },
          {
            text: 'Output Devices',
            children: [
              '/docs/hardware/output-devices/pwm-controller.md',
              '/docs/hardware/output-devices/DIN-Relay-Driver-4ch.md',
              //                   '/docs/hardware/output-devices/hardware-template.md',
            ],
          },
          {
            text: 'Input & Output Devices',
            children: [
              '/docs/hardware/input-output-devices/smoke-detector-sd-16port.md',
              '/docs/hardware/input-output-devices/SenseRJ45.md',
            ],
          },
          {
            text: 'Shields',
            children: [
              '/docs/hardware/shields/rack32-knx-shield.md',
            ],
          }
        ],
      }, {
        text: 'Firmware',
        link: '/docs/firmware/README.md',
        children: [{
          text: 'ESP32',
          children: [
            '/docs/firmware/state-monitor-esp32.md',
            '/docs/firmware/state-controller-esp32.md',
            '/docs/firmware/state-io-esp32.md',
            '/docs/firmware/smoke-detector-esp32.md',
            '/docs/firmware/led-controller-esp32.md',
          ],
        }, ],
      }, {
        text: 'Libraries',
        link: '/docs/libraries/README.md',
        children: [{
          text: 'ESP32',
          children: [
            '/docs/libraries/esp32-mqtt-library.md',
            '/docs/libraries/esp32-api-library.md',
            '/docs/libraries/esp32-lcd-library.md',
            '/docs/libraries/esp32-io-handler-library.md',
          ],
        }, ],
      }, {
        text: 'Cases',
        link: '/docs/cases/README.md',
        children: [{
            text: 'Rack Mount',
            children: [
              '/docs/cases/rack-mount/rack-mount.md',
            ],
          },
          {
            text: '3D Printed',
            children: [
              '/docs/cases/3D-printed/README.md',
            ],
          },
        ],
      }, ],
      '/glossary': [{
          text: 'SKU\'s',
          link: '/glossary/skus.md',
        },
        {
          text: 'Makers',
          link: '/glossary/makers.md',
        },
        {
          text: 'Acronyms',
          link: '/glossary/acronyms.md',
        },
      ],
    },
  }
}