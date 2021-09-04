<template><h1 id="markdown-extensions" tabindex="-1"><a class="header-anchor" href="#markdown-extensions" aria-hidden="true">#</a> Markdown Extensions</h1>
<h2 id="header-anchors" tabindex="-1"><a class="header-anchor" href="#header-anchors" aria-hidden="true">#</a> Header Anchors</h2>
<p>Headers automatically get anchor links applied. Rendering of anchors can be configured using the <RouterLink to="/config/#markdown-anchor"><code>markdown.anchor</code></RouterLink> option.</p>
<h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h2>
<h3 id="internal-links" tabindex="-1"><a class="header-anchor" href="#internal-links" aria-hidden="true">#</a> Internal Links</h3>
<p>Internal links are converted to <code>&lt;router-link&gt;</code> for SPA navigation. Also, every <code>README.md</code> or <code>index.md</code> contained in each sub-directory will automatically be converted to <code>index.html</code>, with corresponding URL <code>/</code>.</p>
<p>For example, given the following directory structure:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>And providing you are in <code>foo/one.md</code>:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">Home</span>](<span class="token url">/</span>)</span> <span class="token comment">&lt;!-- Sends the user to the root README.md --></span>
<span class="token url">[<span class="token content">foo</span>](<span class="token url">/foo/</span>)</span> <span class="token comment">&lt;!-- Sends the user to index.html of directory foo --></span>
<span class="token url">[<span class="token content">foo heading</span>](<span class="token url">./#heading</span>)</span> <span class="token comment">&lt;!-- Anchors user to a heading in the foo README file --></span>
<span class="token url">[<span class="token content">bar - three</span>](<span class="token url">../bar/three.md</span>)</span> <span class="token comment">&lt;!-- You can append .md (recommended) --></span>
<span class="token url">[<span class="token content">bar - four</span>](<span class="token url">../bar/four.html</span>)</span> <span class="token comment">&lt;!-- Or you can append .html --></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="redirection-for-urls" tabindex="-1"><a class="header-anchor" href="#redirection-for-urls" aria-hidden="true">#</a> Redirection for URLs</h3>
<p>VuePress supports redirecting to clean links. If a link <code>/foo</code> is not found, VuePress will look for a existing <code>/foo/</code> or <code>/foo.html</code>. Conversely, when one of <code>/foo/</code> or <code>/foo.html</code> is not found, VuePress will try the other. With this feature, we can customize your website’s URLs with the official plugin <a href="https://vuepress.github.io/plugins/clean-urls/" target="_blank" rel="noopener noreferrer">vuepress-plugin-clean-urls<OutboundLink/></a>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Regardless of whether the permalink and clean-urls plugins are used, your relative path should be defined by the current file structure. In the above example, even though you set the path of <code>/foo/one.md</code> to <code>/foo/one/</code>, you should still access <code>/foo/two.md</code> via <code>./two.md</code>.</p>
</div>
<h3 id="page-suffix" tabindex="-1"><a class="header-anchor" href="#page-suffix" aria-hidden="true">#</a> Page Suffix</h3>
<p>Pages and internal links get generated with the <code>.html</code> suffix by default.</p>
<p>You can customize this by setting <RouterLink to="/config/#markdown-pagesuffix">config.markdown.pageSuffix</RouterLink>.</p>
<h3 id="external-links" tabindex="-1"><a class="header-anchor" href="#external-links" aria-hidden="true">#</a> External Links</h3>
<p>Outbound links automatically get <code>target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code>:</p>
<ul>
<li><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">vuejs.org<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/vuepress" target="_blank" rel="noopener noreferrer">VuePress on GitHub<OutboundLink/></a></li>
</ul>
<p>You can customize the attributes added to external links by setting <RouterLink to="/config/#markdown-externallinks">config.markdown.externalLinks</RouterLink>.</p>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>
<p><a href="https://jekyllrb.com/docs/frontmatter/" target="_blank" rel="noopener noreferrer">YAML frontmatter<OutboundLink/></a> is supported out of the box:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> Blogging Like a Hacker
<span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>This data will be available to the rest of the page, along with all custom and theming components.</p>
<p>For more details, see <RouterLink to="/templates/frontmatter.html">Frontmatter</RouterLink>.</p>
<h2 id="github-style-tables" tabindex="-1"><a class="header-anchor" href="#github-style-tables" aria-hidden="true">#</a> GitHub-Style Tables</h2>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Output</strong></p>
<table>
<thead>
<tr>
<th>Tables</th>
<th style="text-align:center">Are</th>
<th style="text-align:right">Cool</th>
</tr>
</thead>
<tbody>
<tr>
<td>col 3 is</td>
<td style="text-align:center">right-aligned</td>
<td style="text-align:right">$1600</td>
</tr>
<tr>
<td>col 2 is</td>
<td style="text-align:center">centered</td>
<td style="text-align:right">$12</td>
</tr>
<tr>
<td>zebra stripes</td>
<td style="text-align:center">are neat</td>
<td style="text-align:right">$1</td>
</tr>
</tbody>
</table>
<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji 🎉</h2>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>:tada: :100:
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Output</strong></p>
<p>🎉 💯</p>
<p>A <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noopener noreferrer">list of all emojis<OutboundLink/></a> is available.</p>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of Contents</h2>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[[toc]]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Output</strong></p>
<!--lint disable no-shortcut-reference-link no-undefined-references-->
<nav class="table-of-contents"><ul><li><RouterLink to="#header-anchors">Header Anchors</RouterLink></li><li><RouterLink to="#links">Links</RouterLink><ul><li><RouterLink to="#internal-links">Internal Links</RouterLink></li><li><RouterLink to="#redirection-for-urls">Redirection for URLs</RouterLink></li><li><RouterLink to="#page-suffix">Page Suffix</RouterLink></li><li><RouterLink to="#external-links">External Links</RouterLink></li></ul></li><li><RouterLink to="#frontmatter">Frontmatter</RouterLink></li><li><RouterLink to="#github-style-tables">GitHub-Style Tables</RouterLink></li><li><RouterLink to="#emoji">Emoji 🎉</RouterLink></li><li><RouterLink to="#table-of-contents">Table of Contents</RouterLink></li><li><RouterLink to="#custom-containers">Custom Containers <Badge text="default theme"/></RouterLink><ul><li><RouterLink to="#default-title">Default Title</RouterLink></li><li><RouterLink to="#custom-title">Custom Title</RouterLink></li></ul></li><li><RouterLink to="#syntax-highlighting-in-code-blocks">Syntax Highlighting in Code Blocks</RouterLink></li><li><RouterLink to="#line-highlighting-in-code-blocks">Line Highlighting in Code Blocks</RouterLink></li><li><RouterLink to="#line-numbers">Line Numbers</RouterLink></li><li><RouterLink to="#import-code-snippets">Import Code Snippets <Badge text="beta" type="warning"/></RouterLink></li><li><RouterLink to="#advanced-configuration">Advanced Configuration</RouterLink></li></ul></nav>
<!--lint enable no-shortcut-reference-link no-undefined-references-->
<p>Rendering of the TOC can be configured using the <RouterLink to="/config/#markdown-toc"><code>markdown.toc</code></RouterLink> option.</p>
<h2 id="custom-containers" tabindex="-1"><a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a> Custom Containers <Badge text="default theme"/></h2>
<p>Custom containers can be defined by their types, titles, and contents.</p>
<h3 id="default-title" tabindex="-1"><a class="header-anchor" href="#default-title" aria-hidden="true">#</a> Default Title</h3>
<p><strong>Input</strong></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>Output</strong></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is a tip</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This is a warning</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>This is a dangerous warning</p>
</div>
<details class="custom-container details">
<p>This is a details block, which does not work in Internet Explorer or Edge.</p>
</details>
<h3 id="custom-title" tabindex="-1"><a class="header-anchor" href="#custom-title" aria-hidden="true">#</a> Custom Title</h3>
<p><strong>Input</strong></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span></span>
<span class="token punctuation">```</span></span>
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Output</strong></p>
<div class="custom-container danger"><p class="custom-container-title">STOP</p>
<p>Danger zone, do not proceed</p>
</div>
<details class="custom-container details"><summary>Click me to view the code</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>
<p><strong>Also see:</strong></p>
<ul>
<li><a href="https://vuepress.github.io/plugins/container/" target="_blank" rel="noopener noreferrer">vuepress-plugin-container<OutboundLink/></a></li>
</ul>
<h2 id="syntax-highlighting-in-code-blocks" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting-in-code-blocks" aria-hidden="true">#</a> Syntax Highlighting in Code Blocks</h2>
<p>VuePress uses <a href="https://prismjs.com/" target="_blank" rel="noopener noreferrer">Prism<OutboundLink/></a> to highlight language syntax in Markdown code blocks, using coloured text. Prism supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:</p>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>``` js
export default {
  name: 'MyComponent',
  // ...
}
```
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>Output</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>``` html
&lt;ul>
  &lt;li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  &lt;/li>
&lt;/ul>
```
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>Output</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo in todos<span class="token punctuation">"</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.id<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>A <a href="https://prismjs.com/#languages-list" target="_blank" rel="noopener noreferrer">list of valid languages<OutboundLink/></a> is available on Prism’s site.</p>
<h2 id="line-highlighting-in-code-blocks" tabindex="-1"><a class="header-anchor" href="#line-highlighting-in-code-blocks" aria-hidden="true">#</a> Line Highlighting in Code Blocks</h2>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Output</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token operator">:</span> <span class="token string">'Highlighted!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>In addition to a single line, you can also specify multiple single lines, ranges, or both:</p>
<ul>
<li>Line ranges: for example <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li>
<li>Multiple single lines: for example <code>{4,7,9}</code></li>
<li>Line ranges and single lines: for example <code>{4,7-13,16,23-27,40}</code></li>
</ul>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>``` js{1,4,6-7}
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>Output</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      motd<span class="token operator">:</span> <span class="token string">'VuePress is awesome'</span><span class="token punctuation">,</span>
      lorem<span class="token operator">:</span> <span class="token string">'ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="line-numbers" tabindex="-1"><a class="header-anchor" href="#line-numbers" aria-hidden="true">#</a> Line Numbers</h2>
<p>You can enable line numbers for each code blocks via config:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    lineNumbers<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!-- TODO Support line numbers for specific fence block -->
<ul>
<li>Demo:</li>
</ul>
<picture>
  <source srcset="/line-numbers-desktop.png" media="(min-width: 719px)">
  <img src="/line-numbers-desktop.png" class="line-numbers-desktop-snap" alt="Image">
</picture>
<picture>
  <source srcset="/line-numbers-mobile.gif" media="(max-width: 719px)">
  <img src="/line-numbers-mobile.gif" class="line-numbers-mobile-snap" alt="Image">
</picture>
<h2 id="import-code-snippets" tabindex="-1"><a class="header-anchor" href="#import-code-snippets" aria-hidden="true">#</a> Import Code Snippets <Badge text="beta" type="warning"/></h2>
<p>You can import code snippets from existing files via following syntax:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>&lt;&lt;&lt; @/filepath
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>It also supports <a href="#line-highlighting-in-code-blocks">line highlighting</a>:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>&lt;&lt;&lt; @/filepath{highlightLines}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Input</strong></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>&lt;&lt;&lt; @/../@vuepress/markdown/<span class="token bold"><span class="token punctuation">__</span><span class="token content">tests</span><span class="token punctuation">__</span></span>/fragments/snippet.js{2}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Output</strong></p>
<!--lint disable strong-marker-->
<p>&lt;&lt;&lt; @/../@vuepress/markdown/<strong>tests</strong>/fragments/snippet.js{2}</p>
<!--lint enable strong-marker-->
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Since the import of the code snippets will be executed before webpack compilation, you can’t use the path alias in webpack. The default value of <code>@</code> is <code>process.cwd()</code>.</p>
</div>
<p>You can also use a <a href="https://code.visualstudio.com/docs/editor/codebasics#_folding" target="_blank" rel="noopener noreferrer">VS Code region<OutboundLink/></a> to only include the corresponding part of the code file. You can provide a custom region name after a <code>#</code> following the filepath (<code>snippet</code> by default):</p>
<p><strong>Input</strong></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>&lt;&lt;&lt; @/../@vuepress/markdown/<span class="token bold"><span class="token punctuation">__</span><span class="token content">tests</span><span class="token punctuation">__</span></span>/fragments/snippet-with-region.js#snippet{1}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Code file</strong></p>
<!--lint disable strong-marker-->
<p>&lt;&lt;&lt; @/../@vuepress/markdown/<strong>tests</strong>/fragments/snippet-with-region.js</p>
<!--lint enable strong-marker-->
<p><strong>Output</strong></p>
<!--lint disable strong-marker-->
<p>&lt;&lt;&lt; @/../@vuepress/markdown/<strong>tests</strong>/fragments/snippet-with-region.js#snippet{1}</p>
<!--lint enable strong-marker-->
<h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration" aria-hidden="true">#</a> Advanced Configuration</h2>
<p>VuePress uses <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it<OutboundLink/></a> as the Markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the <code>markdown-it</code> instance using the <code>markdown</code> option in <code>.vuepress/config.js</code>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// options for markdown-it-anchor</span>
    anchor<span class="token operator">:</span> <span class="token punctuation">{</span> permalink<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// options for markdown-it-toc</span>
    toc<span class="token operator">:</span> <span class="token punctuation">{</span> includeLevel<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">extendMarkdown</span><span class="token operator">:</span> <span class="token parameter">md</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// use more markdown-it plugins!</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'markdown-it-xxx'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>

<style>
  @media screen and (min-width:  719px) {
    .line-numbers-mobile-snap {
       display: none;
    }
  }
  @media screen and (max-width:  719px) {
    .line-numbers-desktop-snap {
       display: none;
    }
    .line-numbers-mobile-snap {
      max-width: none!important;
      margin: 0 -1.5rem;
      width: 100vw;
    }
  }
</style>
