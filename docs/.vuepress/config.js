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
            link: '/addons/accessibility',
          },
          {
            text: 'Displays',
            link: '/addons/displays',
          },
//           {
//             text: 'Relays',
//             link: '/addons/relays',
//           },
//           {
//             text: 'Sensors',
//             link: '/addons/sensors',
//           },
          {
            text: 'Switches',
            link: '/addons/switches',
          },
        ],
      },
      {
        text: 'Guides',
        children: [
          {
            text: 'Getting started',
            link: '/guides',
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
      '/guides': [
        {
          text: 'Getting Started',
          link: '/guides/getting-started.md',
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
          link: '/guides/',
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
          link: '/guides/',
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
      '/addons/accessibility': [
        {
           text: 'Accessibility',
           link: '/addons/accessibility/README.md',
           children: [
            {
              '/addons/accessibility/ac-tower-controller.md',
            },
          ],
        },
      ],
      '/addons/displays': [
        {
           text: 'Displays',
           link: '/addons/displays/README.md',
           children: [
             {
               '/addons/displays/IPS-display.md',
             },
           ],
        },
      ],
      '/addons/switches': [
         {
           text: 'Switches',
           link: '/addons/switches/README.md',
           children: [
             {
               '/addons/switches/ac-smart-switch.md',
             },
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
//                   '/docs/hardware/input-devices/hardware-template.md',
              ],
            },
            {
              text: 'Output Devices',
              children: [
                  '/docs/hardware/output-devices/pwm-controller.md',
//                   '/docs/hardware/output-devices/hardware-template.md',
              ],
            },
            {
              text: 'Input & Output Devices',
              children: [
                  '/docs/hardware/input-output-devices/smoke-detector-sd-16port.md',
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
