export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "heroImage": "/images/hero.png",
    "actions": [
      {
        "text": "Read Docs",
        "link": "/docs/hardware/readme.md",
        "type": "primary"
      },
      {
        "text": "Guides",
        "link": "/guides/getting-started.md",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Who",
        "details": "The OXRS community is made up of ambitious fellow makers and professionals brought together with a single vision to make home IoT control and automation accessible."
      },
      {
        "title": "What",
        "details": "The Open eXtensible Rack System (OXRS) is a convention for building rack-mount devices using standardised chassis designs and modules."
      },
      {
        "title": "Why",
        "details": "The IoT marketplace can oftern be fragmented and difficult to traverse. Devices created under OXRS convention by the community will be standardised to assist in compatibility."
      }
    ],
    "footer": "Created by 🐿 | Maintained by SuperHouse.tv"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Whats the aim of OXRS?",
      "slug": "whats-the-aim-of-oxrs",
      "children": []
    },
    {
      "level": 3,
      "title": "Mechanical and Electrical Compatibility",
      "slug": "mechanical-and-electrical-compatibility",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
