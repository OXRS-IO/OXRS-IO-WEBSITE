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
      '@vuepress/plugin-search',
      {
        // allow searching the `tags` frontmatter
        getExtraFields: (page) => page.frontmatter.tags ?? [],
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
    navbar: [
      {
        text: 'Docs',
        children: [
          {
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
        children: [
          {
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
        children: [
          {
            text: 'Getting started',
            link: '/guides/start',
          },
          {
            text: 'Advanced',
            link: '/guides/advanced',
          },
          {
            text: 'Standards',
            link: '/guides/standards',
          },
          {
            text: 'Writing Docs',
            children: [
              {
                text: 'Getting Started',
                link: '/guides/writing-docs/getting-started.md'
              },
              {
                text: 'Markdown Guide',
                link: '/guides/writing-docs/markdown.md'
              },
              {
                text: 'Doc Templates',
                link: '/guides/writing-docs/templates/README.md'
              }
            ]
          },
        ],
      },
      {
        text: 'Glossary',
        children: [
          {
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
      '/guides/start': [
        {
          text: 'Getting Started',
          link: '/guides/start/README.md',
        },
        {
          text: 'Advanced',
          link: '/guides/advanced',
        },
        {
          text: 'Standards',
          link: '/guides/standards',
        },
      ],
      '/guides/advanced': [
        {
          text: 'Getting Started',
          link: '/guides/start',
        },
        {
          text: 'Advanced',
          link: '/guides/advanced/README.md',
        },
        {
          text: 'Standards',
          link: '/guides/standards',
        },
      ],
      '/guides/standards': [
        {
          text: 'Getting Started',
          link: '/guides/start',
        },
        {
          text: 'Advanced',
          link: '/guides/advanced',
        },
        {
           text: 'Standards',
           link: '/guides/standards/README.md',
           children: [
             {
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
      ],
      '/add-ons/accessibility': [
        {
          text: 'Accessibility',
          link: '/add-ons/accessibility/README.md',
          children: [
            '/add-ons/Accessibility/ac-tower-controller.md',
         ],
        },
        {
          text: 'Displays',
          link: '/add-ons/displays',
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
        },
      ],
      '/add-ons/displays': [
        {
          text: 'Accessibility',
          link: '/add-ons/accessibility',
        },        
        {
          text: 'Displays',
          link: '/add-ons/displays/README.md',
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
        },
      ],
      // '/add-ons/relays': [
      //   {
      //     text: 'Accessibility',
      //     link: '/add-ons/accessibility',
      //   }, 
      //   {
      //     text: 'Displays',
      //     link: '/add-ons/displays',
      //   },
      //   {
      //     text: 'Relays',
      //     link: '/add-ons/relays',
      //     children: [
      //       // '/add-ons/displays/IPS-display.md',
      //     ],
      //     {
      //       text: 'Sensors',
      //       link: '/add-ons/sensors',
      //     }, 
      //     {
      //       text: 'Switches',
      //       link: '/add-ons/switches',
      //     },
      //   },
      // ],
      // '/add-ons/sensors': [
      //   {
      //     text: 'Accessibility',
      //     link: '/add-ons/accessibility',
      //   }, 
      //   {
      //     text: 'Displays',
      //     link: '/add-ons/displays',
      //   },
      //   {
      //     text: 'Relays',
      //     link: '/add-ons/relays',
      //   },
      //   {
      //     text: 'Sensors',
      //     link: '/add-ons/sensors',
      //     children: [
      //       // '/add-ons/sensors/some-sensor.md',
      //     ],
      //     {
      //       text: 'Switches',
      //       link: '/add-ons/switches',
      //     },
      //   },
      // ],
      '/add-ons/switches': [
         {
           text: 'Accessibility',
           link: '/add-ons/accessibility',
         }, 
         {
           text: 'Displays',
           link: '/add-ons/displays',
         },
        //  {
        //   text: 'Relays',
        //   link: '/add-ons/relays',
        // },
        // {
        //   text: 'Sensors',
        //   link: '/add-ons/sensors',
        // },
         {
           text: 'Switches',
           link: '/add-ons/switches/README.md',
           children: [
               '/add-ons/switches/ac-smart-switch.md',
            ],
          },
        ],
      '/docs/hardware': [
        {
          text: 'Hardware',
          link: '/docs/hardware/README.md',
          children: [
            {
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
        },
      ],
      '/docs/firmware': [
        {
          text: 'Firmware',
          link: '/docs/firmware/README.md',
          children: [
            {
              text: 'ESP32',
              children: [
                  '/docs/firmware/state-monitor-esp32.md',
                  '/docs/firmware/state-controller-esp32.md',
                  '/docs/firmware/state-io-esp32.md',
                  '/docs/firmware/smoke-detector-esp32.md',
                  '/docs/firmware/led-controller-esp32.md',
              ],
            },
          ],
        }
      ],
      '/docs/libraries': [
        {
          text: 'Libraries',
          link: '/docs/libraries/README.md',
          children: [
            {
              text: 'ESP32',
              children: [
                  '/docs/libraries/esp32-mqtt-library.md',
                  '/docs/libraries/esp32-api-library.md',
                  '/docs/libraries/esp32-lcd-library.md',
                  '/docs/libraries/esp32-io-handler-library.md',
              ],
            },
          ],
        },
      ],
      '/docs/cases': [
        {
          text: 'Cases',
          link: '/docs/cases/README.md',
          children: [
            {
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
        },
      ],
    },
  }
}
