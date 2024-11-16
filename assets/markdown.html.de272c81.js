import{_ as r}from"./product-image.503c7b82.js";import{_ as c,r as t,o as p,c as u,a as n,b as s,w as o,e,d as a}from"./app.f95394c5.js";const m={},v=n("h1",{id:"markdown-guide",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-guide","aria-hidden":"true"},"#"),e(" Markdown Guide")],-1),h={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"Support",-1),b=e("Below shows all the supported markdown for the OXRS Docs, if you have any issues or need support please raise an issue on the "),k={href:"https://github.com/SuperHouse/OXRS/issues",target:"_blank",rel:"noopener noreferrer"},x=e("OXRS Github"),f=a(`<h2 id="header-anchors" tabindex="-1"><a class="header-anchor" href="#header-anchors" aria-hidden="true">#</a> Header Anchors</h2><p>Headers automatically get anchor links applied. You can link to them like this:</p><p><strong>Example Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url">[<span class="token content">Anchor link to the Links section below</span>](<span class="token url">./markdown.md#links</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example Ouput</strong></p>`,5),w=e("Anchor link to the Links section below"),_=a(`<h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h2><h3 id="internal-links" tabindex="-1"><a class="header-anchor" href="#internal-links" aria-hidden="true">#</a> Internal Links</h3><p>Every <code>README.md</code> or <code>index.md</code> contained in each sub-directory will automatically be converted to <code>index.html</code>, with corresponding URL <code>/</code>.</p><p>For example, given the following directory structure:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500 README.md
\u251C\u2500 hardware
\u2502  \u251C\u2500 README.md
\u2502  \u251C\u2500 controllers.md
\u2502  \u2514\u2500 input-devices.md
\u2514\u2500 firmware
   \u251C\u2500 README.md
   \u251C\u2500 software.md
   \u2514\u2500 libraries.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And providing you are in <code>hardware/controllers.md</code>:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url">[<span class="token content">Home</span>](<span class="token url">/</span>)</span> <span class="token comment">&lt;!-- Sends the user to the root README.md --&gt;</span>
<span class="token url">[<span class="token content">hardware</span>](<span class="token url">/hardware/</span>)</span> <span class="token comment">&lt;!-- Sends the user to index.html of directory hardware --&gt;</span>
<span class="token url">[<span class="token content">hardware heading</span>](<span class="token url">./#heading</span>)</span> <span class="token comment">&lt;!-- Anchors user to a heading in the hardware README file --&gt;</span>
<span class="token url">[<span class="token content">firmware - software</span>](<span class="token url">../firmware/software.md</span>)</span> <span class="token comment">&lt;!-- You can append .md (recommended) --&gt;</span>
<span class="token url">[<span class="token content">firmware - libraries</span>](<span class="token url">../firmware/libraries</span>)</span> <span class="token comment">&lt;!-- Or you can leave the file extension blank and it will rewrite the url accordingly --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redirection-for-urls" tabindex="-1"><a class="header-anchor" href="#redirection-for-urls" aria-hidden="true">#</a> Redirection for URLs</h3><p>OXRS Docs supports redirecting to clean links. If a link <code>/foo</code> is not found, OXRS Docs will look for a existing <code>/foo/</code> or <code>/foo.html</code>. Conversely, when one of <code>/foo/</code> or <code>/foo.html</code> is not found, OXRS Docs will try the other.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Your relative path should be defined by the current file structure. In the above example, even though you set the path of <code>/foo/one.md</code> to <code>/foo/one/</code>, you should still access <code>/foo/two.md</code> via <code>./two.md</code>.</p></div><h3 id="page-suffix" tabindex="-1"><a class="header-anchor" href="#page-suffix" aria-hidden="true">#</a> Page Suffix</h3><p>Pages and internal links get generated with the <code>.html</code> suffix by default. However referencing within the site itself should rather be done either with <code>.md</code> or without the extension defined.</p><h3 id="external-links" tabindex="-1"><a class="header-anchor" href="#external-links" aria-hidden="true">#</a> External Links</h3><p>Outbound links automatically get <code>target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code>:</p><p>This data will be available to the rest of the page, along with all custom and theming components.</p>`,15),y=e("For more details, see "),E=e("Frontmatter"),j=e("."),I=a(`<h2 id="github-style-tables" tabindex="-1"><a class="header-anchor" href="#github-style-tables" aria-hidden="true">#</a> GitHub-Style Tables</h2><p><strong>Example Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example Output</strong></p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji \u{1F389}</h2><p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>:tada: :100: or \u{1F43F} (use with caution!)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Output</strong></p><p>\u{1F389} \u{1F4AF} \u{1F43F}</p>`,10),T=e("A "),O={href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"},R=e("list of all emojis"),A=e(" is available."),D={id:"custom-containers",tabindex:"-1"},H=n("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#",-1),S=e(" Custom Containers "),C=a(`<p>Custom containers can be defined by their types, titles, and contents.</p><h3 id="default-title" tabindex="-1"><a class="header-anchor" href="#default-title" aria-hidden="true">#</a> Default Title</h3><p><strong>Example Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge but who uses those? \u{1F602}
<span class="token list punctuation">-</span> Firefox - <span class="token url">[<span class="token content">Download Here</span>](<span class="token url">https://www.mozilla.org/en-GB/firefox/new/</span>)</span>
<span class="token list punctuation">-</span> Chrome - <span class="token url">[<span class="token content">Download Here</span>](<span class="token url">https://www.google.co.uk/chrome</span>)</span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example Output</strong></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is a tip</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This is a warning</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is a dangerous warning</p></div>`,8),q={class:"custom-container details"},L=n("p",null,"This is a details block, which does not work in IE / Edge but who uses those? \u{1F602}",-1),M=e("Firefox - "),P={href:"https://www.mozilla.org/en-GB/firefox/new/",target:"_blank",rel:"noopener noreferrer"},B=e("Download Here"),z=e("Chrome - "),X={href:"https://www.google.co.uk/chrome",target:"_blank",rel:"noopener noreferrer"},G=e("Download Here"),N=a(`<h3 id="custom-title" tabindex="-1"><a class="header-anchor" href="#custom-title" aria-hidden="true">#</a> Custom Title</h3><p><strong>Example Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, OXRS Docs!&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example Output</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="custom-container details"><summary>Click me to view the code</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, OXRS Docs!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="syntax-highlighting-in-code-blocks" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting-in-code-blocks" aria-hidden="true">#</a> Syntax Highlighting in Code Blocks</h2><p>There is highlighted language syntax in Markdown code blocks, using coloured text (powered by Prism). This supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:</p><p><strong>Example Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\` js
export default {
  name: &#39;MyComponent&#39;,
  // ...
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example Output</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\` html
&lt;ul&gt;
  &lt;li
    v-for=&quot;todo in todos&quot;
    :key=&quot;todo.id&quot;
  &gt;
    {{ todo.text }}
  &lt;/li&gt;
&lt;/ul&gt;
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example Output</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),V=e("A "),$={href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"},F=e("list of valid languages"),Y=e(" is available on Prism\u2019s site."),U=a(`<h2 id="line-highlighting-in-code-blocks" tabindex="-1"><a class="header-anchor" href="#line-highlighting-in-code-blocks" aria-hidden="true">#</a> Line Highlighting in Code Blocks</h2><p><strong>Example Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\` js{4}
export default {
  data () {
    return {
      msg: &#39;Highlighted!&#39;
    }
  }
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example Output</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition to a single line, you can also specify multiple single lines, ranges, or both:</p><ul><li>Line ranges: for example <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li><li>Multiple single lines: for example <code>{4,7,9}</code></li><li>Line ranges and single lines: for example <code>{4,7-13,16,23-27,40}</code></li></ul><p><strong>Example Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: \`Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.\`,
      motd: &#39;VuePress is awesome&#39;,
      lorem: &#39;ipsum&#39;,
    }
  }
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example Output</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">motd</span><span class="token operator">:</span> <span class="token string">&#39;VuePress is awesome&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lorem</span><span class="token operator">:</span> <span class="token string">&#39;ipsum&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2><p>All images are to be located in the <code>.vuepress/public/images</code> directory. Images can be referenced like this <code>/images/product-image.jpg</code> using the following markdown sytax.</p><p><strong>Example Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Image Alt Text</span>](<span class="token url">/images/product-image.jpg</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example Output</strong></p><p><img src="`+r+'" alt="Image Alt Text"></p><blockquote><p>Example image is 1024px wide</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Image Resizing</p><p>Please ensure you resize your images to ensure they are a maximum of <strong>1024px wide</strong> and a sensible file size. Support image extension <strong>.png</strong>, <strong>.jpg</strong>, <strong>.webp</strong></p></div>',19);function W(J,K){const i=t("ExternalLinkIcon"),l=t("RouterLink"),d=t("Badge");return p(),u("div",null,[v,n("div",h,[g,n("p",null,[b,n("a",k,[x,s(i)])])]),f,n("p",null,[s(l,{to:"/guides/writing-docs/markdown.html#links"},{default:o(()=>[w]),_:1})]),_,n("p",null,[y,s(l,{to:"/guides/writing-docs/frontmatter.html"},{default:o(()=>[E]),_:1}),j]),I,n("p",null,[T,n("a",O,[R,s(i)]),A]),n("h2",D,[H,S,s(d,{text:"default theme"})]),C,n("details",q,[L,n("ul",null,[n("li",null,[M,n("a",P,[B,s(i)])]),n("li",null,[z,n("a",X,[G,s(i)])])])]),N,n("p",null,[V,n("a",$,[F,s(i)]),Y]),U])}var nn=c(m,[["render",W],["__file","markdown.html.vue"]]);export{nn as default};
