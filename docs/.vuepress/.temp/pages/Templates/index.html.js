export const data = {
  "key": "v-1dcff3cf",
  "path": "/templates/",
  "title": "Structure Guide for Creating & Editing Documents",
  "lang": "en-US",
  "frontmatter": {
    "tags": [
      "tag1",
      "tag2"
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "templates/README.md",
  "git": {
    "updatedTime": 1630798596000,
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
