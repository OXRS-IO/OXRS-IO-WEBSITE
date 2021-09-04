module.exports = {
  base: '/OXRS/',
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
        ],
      },
      {
        text: 'Glossary',
        children: [
          {
            text: 'Boards',
            link: '/glossary/boards.md',
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
            {
              text: 'Input Devices',
              children: [
                  '/docs/hardware/input-devices/hardware-template.md',
              ],
            },
            {
              text: 'Output Devices',
              children: [
                  '/docs/hardware/output-devices/hardware-template.md',
              ],
            },
            {
              text: 'Input & Output Devices',
              children: [
                  '/docs/hardware/input-output-devices/universal-input-output-uio-16port.md',
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
              '/docs/firmware/uio-fw.md',
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