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
    sidebarDepth: 3,
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
        ],
      },
      {
        text: 'Guides',
        children: [
          {
            text: 'Getting started',
            link: '/guides/getting-started.md',
          },
          {
            text: 'Advanced',
            link: '/guides/advanced.md',
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
      '/docs/hardware': [
        {
          text: 'Hardware',
          link: '/docs/hardware/README.md',
          children: [
            {
              text: 'Controllers',
              children: [
                  '/docs/hardware/controllers/rack32.md',
              ],
            },
            // {
            //   text: 'Input Devices',
            //   children: [
            //       '/docs/hardware/input-devices/hardware-template.md',
            //   ],
            // },
            // {
            //   text: 'Output Devices',
            //   children: [
            //       '/docs/hardware/output-devices/hardware-template.md',
            //   ],
            // },
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
              ],
            },
          ],
        }
      ],
      '/docs/libraries/': [
        {
          text: 'Libraries',
          link: '/docs/libraries/README.md',
          children: [
            '/docs/libraries/uio.md',
          ],
        },
      ],
    },
  }
}