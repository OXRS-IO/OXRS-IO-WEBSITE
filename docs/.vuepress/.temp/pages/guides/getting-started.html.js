export const data = {
  "key": "v-49b36c60",
  "path": "/guides/getting-started.html",
  "title": "Getting Started",
  "lang": "en-US",
  "frontmatter": {
    "tags": [
      ""
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guides/getting-started.md",
  "git": {
    "updatedTime": 1630732364000,
    "contributors": [
      {
        "name": "Aaron Knox",
        "email": "aaron_knox@me.com",
        "commits": 1
      }
    ]
  }
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
