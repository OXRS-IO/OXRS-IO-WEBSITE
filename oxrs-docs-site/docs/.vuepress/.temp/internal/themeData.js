export const themeData = {
  "logo": "/images/hero.png",
  "sidebarDepth": 3,
  "navbar": [
    {
      "text": "Docs",
      "children": [
        {
          "text": "Hardware",
          "link": "/docs/hardware"
        },
        {
          "text": "Firmware",
          "link": "/docs/firmware"
        },
        {
          "text": "Libraries",
          "link": "/docs/libraries"
        }
      ]
    },
    {
      "text": "Guides",
      "children": [
        {
          "text": "Getting started",
          "link": "/guides/getting-started.md"
        },
        {
          "text": "Advanced",
          "link": "/guides/advanced.md"
        }
      ]
    },
    {
      "text": "Glossary",
      "children": [
        {
          "text": "Boards",
          "link": "/glossary/boards.md"
        },
        {
          "text": "Makers",
          "link": "/glossary/makers.md"
        },
        {
          "text": "Acronyms",
          "link": "/glossary/acronyms.md"
        }
      ]
    }
  ],
  "sidebar": {
    "/docs/hardware": [
      {
        "text": "Hardware",
        "link": "/docs/hardware/README.md",
        "children": [
          {
            "text": "Controllers",
            "children": [
              "/docs/hardware/controllers/rack32.md"
            ]
          },
          {
            "text": "Input Devices",
            "children": [
              "/docs/hardware/input-devices/hardware-template.md"
            ]
          },
          {
            "text": "Output Devices",
            "children": [
              "/docs/hardware/output-devices/hardware-template.md"
            ]
          },
          {
            "text": "Input & Output Devices",
            "children": [
              "/docs/hardware/input-output-devices/universal-input-output-uio-16port.md"
            ]
          }
        ]
      }
    ],
    "/docs/firmware": [
      {
        "text": "Firmware",
        "link": "/docs/firmware/README.md",
        "children": [
          "/docs/firmware/uio-fw.md"
        ]
      }
    ],
    "/docs/libraries/": [
      {
        "text": "Libraries",
        "link": "/docs/libraries/README.md",
        "children": [
          "/docs/libraries/uio.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
