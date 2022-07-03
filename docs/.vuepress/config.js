const { path } = require("@vuepress/utils");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const { searchPlugin } = require("@vuepress/plugin-search");
const { defaultTheme } = require("@vuepress/theme-default");
const navbar = require("./config.nav");
const sidebar = require("./config.sidebar");

module.exports = {
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "OXRS Docs",
      description: "The Open eXtensible Rack System",
    },
  },
  plugins: [
    [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, "./components"),
      }),
      searchPlugin({
        // allow searching the `tags` frontmatter
        getExtraFields: (page) => page.frontmatter.tags || [],
      }),
    ],
  ],
  theme: defaultTheme({
    lastUpdated: true,
    contributors: true,
    docsRepo: "https://github.com/OXRS-IO/OXRS-IO-WEBSITE",
    docsBranch: "main",
    docsDir: "docs",
    //editLinkPattern: ':repo/-/edit/:branch/:path',
    logo: "/images/hero.png",
    sidebarDepth: 2,
    navbar: navbar,
    sidebar: sidebar,
  }),
};
