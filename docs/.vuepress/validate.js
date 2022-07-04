const Tools = require("@bettercorp/tools").Tools;
const navbar = require("./config.nav");
const sidebar = require("./config.sidebar");
const fs = require("fs");
const path = require("path");

const validateNavItemLink = (nav, baseBath = "") => {
  let text = "Unknown",
    pathUi = "Unknown";
  if (typeof nav === "string") {
    text = nav;
    pathUi = nav;
  } else if (Tools.isNullOrUndefined(nav.link)) {
    return "Nav link is null or undefined.... this is weird...";
  } else {
    text = nav.text;
    pathUi = nav.link;
  }
  console.log(` ⤤ Validate: ${text} -> ${pathUi}`);

  if (pathUi.indexOf("/") !== 0) {
    if (pathUi.indexOf("https://") === 0) return true;
    return `Nav ${text} has an invalid link url, only https://* are supported`;
  }

  if (pathUi.toLowerCase().endsWith("/README")) {
    return `Link ${pathUi} should not end with README`;
  }
  if (pathUi.toLowerCase().endsWith(".md")) {
    return `Link ${pathUi} should not end with .md`;
  }
  if (!pathUi.toLowerCase().endsWith("/")) {
    if (pathUi.toLowerCase().indexOf("/#") > 0) {
      return true;
    }
    return `Link ${pathUi} should end with /`;
  }

  const corePath = path.join(__dirname, `..${baseBath}${pathUi}`);
  const defaultMdPath = path.join(corePath, "./README.md");
  const directFilePath = `${corePath.substring(0, corePath.length - 1)}.md`;
  if (fs.existsSync(defaultMdPath)) {
    console.log(`   -> ${defaultMdPath} : Folder path`);
    return true;
  }
  if (fs.existsSync(directFilePath)) {
    console.log(`   -> ${directFilePath} : Direct path`);
    return true;
  }
  if (fs.existsSync(corePath)) {
    console.log(`   -> ${directFilePath} : Base path`);
    return true;
  }
  return `${pathUi} doesn't exist on the file system. test(${corePath})`;
};
const validateNavItem = (nav) => {
  if (typeof nav === "string") {
    console.log(`| Validate: ${nav} : Path`);
    return validateNavItemLink(nav);
  }
  if (typeof nav.text !== "string") {
    return "There is a nav item without a text property... please add one.";
  }
  console.log(`| Validate: ${nav.text}`);
  if (nav.text.length < 2) {
    return "The nav text length needs to be longer than 2 characters";
  }
  if (nav.text.length > 30) {
    return "The nav text length needs to be shorter than 30 characters";
  }
  const whatItShouldLookLike = Tools.autoCapitalizeWords(nav.text);
  if (nav.text !== whatItShouldLookLike) {
    return `The nav text needs to be formatted correctly: ${whatItShouldLookLike}`;
  }

  if (
    Tools.isNullOrUndefined(nav.link) &&
    Tools.isNullOrUndefined(nav.children)
  )
    return `${nav.text} does not have link or children`;

  if (!Tools.isNullOrUndefined(nav.link)) {
    let linkVal = validateNavItemLink(nav);
    if (linkVal !== true) return linkVal;
  }

  if (!Tools.isNullOrUndefined(nav.children)) {
    let failedList = [];
    for (let navChild of nav.children) {
      const validationResult = validateNavItem(navChild);
      if (validationResult !== true) {
        if (Tools.isArray(validationResult))
          failedList = failedList.concat(validationResult);
        else failedList.push(validationResult);
      }
    }
    return failedList.length === 0 ? true : failedList;
  }

  return true;
};

let validationFailed = [];
console.log("--------------------------------");
console.log("NAV : Running validation");
for (let nav of navbar) {
  const validationResult = validateNavItem(nav);
  if (validationResult !== true) {
    validationFailed.push({ type: "nav", data: validationResult });
  }
}
console.log("NAV : Running validation : OKAY");
console.log("--------------------------------");

console.log("--------------------------------");
console.log("SIDEBAR : Running validation");
for (let nav of Object.keys(sidebar)) {
  const validationResult = validateNavItemLink(nav);
  if (validationResult !== true) {
    validationFailed.push({ type: "sidebar-link", data: validationResult });
  }
  for (let inav of sidebar[nav]) {
    const ivalidationResult = validateNavItem(inav);
    if (ivalidationResult !== true) {
      validationFailed.push({ type: "sidebar", data: ivalidationResult });
    }
  }
}
console.log("SIDEBAR : Running validation : OKAY");
console.log("--------------------------------");

if (validationFailed.length > 0) {
  console.error("");
  console.error("");
  console.error("++++++++++++++++++++++++++++++++++");
  console.error("");
  console.error("THE FOLLOWING FAILED VALIDATION:");
  console.error("");
  for (let failure of validationFailed) {
    for (let failureItem of Tools.isArray(failure.data)
      ? failure.data
      : [failure.data])
      console.error(`${failure.type}: ${failureItem}`);
  }
  console.error("");
  console.error("++++++++++++++++++++++++++++++++++");
  console.error("");
  console.error("");
  process.exit(10);
} else {
  console.error("");
  console.error("");
  console.error("VALIDATION SUCCESSFUL, NO ISSUES FOUND");
  console.error("");
  console.error("");
}
