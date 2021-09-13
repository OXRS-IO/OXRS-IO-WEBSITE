# Markdown Guide

::: tip Support
Below shows all the supported markdown for the OXRS Docs, if you have any issues or need support please raise an issue on the [OXRS Github](https://github.com/SuperHouse/OXRS/issues)
:::

## Header Anchors

Headers automatically get anchor links applied. You can link to them like this:

**Example Input**
```md
[Anchor link to the Links section below](./markdown.md#links)
```

**Example Ouput**

[Anchor link to the Links section below](./markdown.md#links)


## Links

### Internal Links

Every `README.md` or `index.md` contained in each sub-directory will automatically be converted to `index.html`, with corresponding URL `/`.

For example, given the following directory structure:

```
.
├─ README.md
├─ hardware
│  ├─ README.md
│  ├─ controllers.md
│  └─ input-devices.md
└─ firmware
   ├─ README.md
   ├─ software.md
   └─ libraries.md
```

And providing you are in `hardware/controllers.md`:

```md
[Home](/) <!-- Sends the user to the root README.md -->
[hardware](/hardware/) <!-- Sends the user to index.html of directory hardware -->
[hardware heading](./#heading) <!-- Anchors user to a heading in the hardware README file -->
[firmware - software](../firmware/software.md) <!-- You can append .md (recommended) -->
[firmware - libraries](../firmware/libraries.html) <!-- Or you can append .html -->
```

### Redirection for URLs

OXRS Docs supports redirecting to clean links. If a link `/foo` is not found, OXRS Docs will look for a existing `/foo/` or `/foo.html`. Conversely, when one of `/foo/` or `/foo.html` is not found, OXRS Docs will try the other.

::: tip
Your relative path should be defined by the current file structure. In the above example, even though you set the path of `/foo/one.md` to `/foo/one/`, you should still access `/foo/two.md` via `./two.md`.
:::

### Page Suffix

Pages and internal links get generated with the `.html` suffix by default.


### External Links

Outbound links automatically get `target="_blank" rel="noopener noreferrer"`:


This data will be available to the rest of the page, along with all custom and theming components.

For more details, see [Frontmatter](./frontmatter.md).

## GitHub-Style Tables

**Example Input**

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**Example Output**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji :tada:

**Input**

```
:tada: :100: or 🐿 (use with caution!)
```

**Output**

:tada: :100: 🐿 

A [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) is available.

## Custom Containers <Badge text="default theme"/>

Custom containers can be defined by their types, titles, and contents.

### Default Title
**Example Input**

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge but who uses those? 😂
- Firefox - [Download Here](https://www.mozilla.org/en-GB/firefox/new/)
- Chrome - [Download Here](https://www.google.co.uk/chrome)
:::
```

**Example Output**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge but who uses those? 😂
- Firefox - [Download Here](https://www.mozilla.org/en-GB/firefox/new/)
- Chrome - [Download Here](https://www.google.co.uk/chrome)
:::

### Custom Title
**Example Input**

````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, OXRS Docs!')
```
:::
````

**Example Output**

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, OXRS Docs!')
```
:::

## Syntax Highlighting in Code Blocks

There is highlighted language syntax in Markdown code blocks, using coloured text (powered by Prism). This supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:

**Example Input**

````
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

**Example Output**

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

**Example Input**

````
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

**Example Output**

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

A [list of valid languages](https://prismjs.com/#languages-list) is available on Prism’s site.

## Line Highlighting in Code Blocks

**Example Input**

````
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Example Output**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

In addition to a single line, you can also specify multiple single lines, ranges, or both:

- Line ranges: for example `{5-8}`, `{3-10}`, `{10-17}`
- Multiple single lines: for example `{4,7,9}`
- Line ranges and single lines: for example `{4,7-13,16,23-27,40}`

**Example Input**

````
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
````

**Example Output**

``` js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## Images
All images are to be located in the `.vuepress/public/images` directory. Images can be referenced like this `/images/product-image.jpg` using the following markdown sytax.

**Example Input**

```md
![Image Alt Text](/images/product-image.jpg)
```

**Example Output**

![Image Alt Text](/images/product-image.jpg)
> Example image is 1024px wide

:::warning Image Resizing
Please ensure you resize your images to ensure they are a maximum of **1024px wide** and a sensible file size. Support image extension **.png**, **.jpg**, **.webp**
:::