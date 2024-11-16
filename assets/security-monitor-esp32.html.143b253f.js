import{_ as l}from"./security-circuit-diagram.6e054121.js";import{_ as d,r as i,o as c,c as p,a as t,b as s,w as a,d as r,e}from"./app.f95394c5.js";const h={},u=r('<h1 id="security-monitor-esp32" tabindex="-1"><a class="header-anchor" href="#security-monitor-esp32" aria-hidden="true">#</a> Security Monitor ESP32</h1><p class="maker">by <b>Ben Jones</b></p><blockquote><p>SKU: OXRS-AC-SECURITYMONITOR-ESP32-FW</p></blockquote><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>A security sensor monitor for DIY home automation projects.</p><p>This system uses UTP cable (typically Cat-5e because it&#39;s cheap) to connect sensors to a central controller. The sensors can be reed sensors attached to doors or windows, PIR sensors for motion detection, or anything else that reports a digital state.</p><hr><h3 id="how-does-it-work" tabindex="-1"><a class="header-anchor" href="#how-does-it-work" aria-hidden="true">#</a> How does it work?</h3><p>When a sensor state change is detected an MQTT message is published to the configured MQTT broker for further processing by your home automation system.</p><p>Devices such as PIR sensors or door/window reed switches can be connected to provide a high level of security and ensure you are alerted if there is any tampering to the sensor or wiring (whether intentional or not), as well as reporting the sensor state.</p><p>The security monitor will report one of 5 states for each connected device. It achieves this by using two end-of-line (EOL) resistors connected to each security sensor.</p><p><img src="'+l+'" alt="State Monitor Security Sensor circuit diagram"></p><p>Resistor 1 (10K) is connected in series with the security alarm wiring, and resistor 2 (4K7) is connected across the alarm contact.</p><p>The firmware will detect and report the following states for a security sensor wired up with EOL resistors;</p><table><thead><tr><th style="text-align:left;">State</th><th style="text-align:left;">LCD Display</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Normal</td><td style="text-align:left;">Green</td><td style="text-align:left;">The sensor is in a safe state, e.g. no movement detected or door/window is closed</td></tr><tr><td style="text-align:left;">Alarm</td><td style="text-align:left;">Red</td><td style="text-align:left;">The sensor has been tripped, e.g. movement detected or door/window is opened</td></tr><tr><td style="text-align:left;">Tamper</td><td style="text-align:left;">Magenta (flashing)</td><td style="text-align:left;">The sensor wiring has been compromised (open circuited), e.g. a sensor cover has been removed or a cable has been cut</td></tr><tr><td style="text-align:left;">Short</td><td style="text-align:left;">Magenta (flashing)</td><td style="text-align:left;">The sensor wiring has been compromised (shorted), e.g. intentional attempt to bypass the sensor, or a nail/screw through the cable</td></tr><tr><td style="text-align:left;">Fault</td><td style="text-align:left;">Cyan (flashing)</td><td style="text-align:left;">The sensor has been unplugged or a system fault has been detected</td></tr></tbody></table>',15),f=e("The firmware is designed to run on hardware using MCP23017 I/O buffer chips via I2C, e.g. the "),g={href:"https://github.com/austinscreations/oxrs-security-module",target:"_blank",rel:"noopener noreferrer"},m=e("Security Module"),_=e("."),y=r(`<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>The firmware can be configured by publishing an MQTT message to this topic;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[PREFIX/]conf/CLIENTID[/SUFFIX]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where:</p><ul><li><code>PREFIX</code>: Optional topic prefix if required</li><li><code>CLIENTID</code>: Client id of device, defaults to <code>&lt;MACADDRESS&gt;</code></li><li><code>SUFFIX</code>: Optional topic suffix if required</li></ul><p>The message payload should be JSON and it&#39;s format is defined in a JSON schema document included in the adoption payload published here;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[PREFIX/]stat/CLIENTID[/SUFFIX]/adopt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>See the <code>config</code> value in the <code>/adopt</code> payload.</p>`,8),b={class:"custom-container tip"},x=t("p",{class:"custom-container-title"},"TIP",-1),v=e("This firmware works in a similar way to the "),w=e("State Monitor"),k=e(', but with all ports set to type "security".'),S=r(`<h3 id="port-config" tabindex="-1"><a class="header-anchor" href="#port-config" aria-hidden="true">#</a> Port Config</h3><p>Each PORT can be configured via the following properties;</p><table><thead><tr><th style="text-align:left;">Key</th><th style="text-align:left;">Mandatory</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>port</code></td><td style="text-align:left;">Mandatory</td><td style="text-align:left;">Index of the port to configure</td></tr><tr><td style="text-align:left;"><code>invert</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Either <code>true</code> or <code>false</code></td></tr><tr><td style="text-align:left;"><code>disabled</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Either <code>true</code> or <code>false</code></td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Disabling a port will stop any events being emitted!</p></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><p>To configure port 4 to be inverted, and port 8 to be disabled;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> 
  <span class="token property">&quot;ports&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token property">&quot;invert&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token property">&quot;disabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A retained message will ensure the device auto-configures on startup.</p></div><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>A port EVENT is reported to a topic of the form:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[PREFIX/]stat/CLIENTID[/SUFFIX]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where;</p><ul><li><code>PREFIX</code>: Optional topic prefix if required</li><li><code>CLIENTID</code>: Client id of device, defaults to <code>&lt;MACADDRESS&gt;</code></li><li><code>SUFFIX</code>: Optional topic suffix if required</li></ul><p>The message payload is JSON and contains:</p><table><thead><tr><th style="text-align:left;">Key</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>port</code></td><td style="text-align:left;">Port this event occured on (1-32)</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">Event type (always <code>security</code>)</td></tr><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;">Event (see below)</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">Event Type</th><th style="text-align:left;">Event</th></tr></thead><tbody><tr><td style="text-align:left;"><code>security</code></td><td style="text-align:left;"><code>normal</code>, <code>alarm</code>, <code>tamper</code>, <code>short</code> or <code>fault</code></td></tr></tbody></table><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h3><p>A contact sensor opening on port 2;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> 
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;security&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alarm&quot;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A short detected on port 4;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> 
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;security&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;short&quot;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supported-hardware" tabindex="-1"><a class="header-anchor" href="#supported-hardware" aria-hidden="true">#</a> Supported Hardware</h2>`,22),E=e("This firmware is compatible with the "),I={href:"https://github.com/austinscreations/oxrs-security-module",target:"_blank",rel:"noopener noreferrer"},T=e("Security Module"),q=e(" and is designed to run on the "),R=e("RACK32"),C=e(" as part of the "),N={href:"https://oxrs.io",target:"_blank",rel:"noopener noreferrer"},M=e("OXRS"),O=e(" eco-system."),D=t("p",null,"The Security Module hardware provides 12V power down the cable, which can be used for powering sensors (e.g. PIRs).",-1),P=e("The sensor needs to have EOL resistors installed, or alternatively you can use an "),A={href:"https://www.bmdesigns.com.au/shop/eolsense-to-rj45/",target:"_blank",rel:"noopener noreferrer"},F=e("EOL Sense"),L=e(" RJ45 breakout from Bedrock Media Designs, which has the EOL resistors built-in and provides easy-to-use screw terminals for connecting your sensor to."),X=r('<p>The RJ45 pinout for each port is;</p><table><thead><tr><th style="text-align:left;">PIN</th><th style="text-align:left;">DESCRIPTION</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">SENSOR</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">SENSOR CMN</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">SPARE</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">VIN</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">VIN</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">SPARE CMN</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">GND</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">GND</td></tr></tbody></table><h2 id="further-information" tabindex="-1"><a class="header-anchor" href="#further-information" aria-hidden="true">#</a> Further Information</h2><h3 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h3>',4),j=e("Download the "),V={href:"https://github.com/austinscreations/OXRS-AC-SecurityMonitor-ESP32-FW/releases",target:"_blank",rel:"noopener noreferrer"},B=e("latest binary"),U=e(" of the firmware from GitHub."),J=e("Download the "),G={href:"https://github.com/austinscreations/OXRS-AC-SecurityMonitor-ESP32-FW",target:"_blank",rel:"noopener noreferrer"},H=e("source code"),K=e(" of the firmware from GitHub."),W=t("h3",{id:"home-automation-integration",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#home-automation-integration","aria-hidden":"true"},"#"),e(" Home Automation Integration")],-1),Q=t("p",null,"Below are some examples of how you could integrate with various home automation systems.",-1),Y={href:"https://www.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},z=e("Home Assistant"),Z=e(" integration "),$=e("examples"),ee=e("."),te={href:"https://nodered.org/",target:"_blank",rel:"noopener noreferrer"},se=e("Node-RED"),ne=e(" integration "),oe=e("examples"),ae=e("."),re=t("h4",{id:"credits",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#credits","aria-hidden":"true"},"#"),e(" Credits")],-1),ie=t("li",null,[e("Frank McAlinden "),t("a",{href:"mailto:frankmc@internode.on.net"},"frankmc@internode.on.net")],-1),le=e("Austin's Creations "),de={href:"https://www.austinscreations.ca",target:"_blank",rel:"noopener noreferrer"},ce=e("https://www.austinscreations.ca"),pe=e("Ben Jones "),he={href:"https://github.com/sumnerboy12",target:"_blank",rel:"noopener noreferrer"},ue=e("https://github.com/sumnerboy12"),fe=e("Moin "),ge={href:"https://github.com/moinmoin-sh",target:"_blank",rel:"noopener noreferrer"},me=e("https://github.com/moinmoin-sh"),_e=t("h4",{id:"license",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#"),e(" License")],-1),ye=e("Copyright 2020-present Austin's Creations "),be={href:"https://www.austinscreations.ca",target:"_blank",rel:"noopener noreferrer"},xe=e("https://www.austinscreations.ca"),ve=t("p",null,'The software portion of this project is licensed under the Simplified BSD License. The "licence" folder within this project contains a copy of this license in plain text format.',-1);function we(ke,Se){const n=i("ExternalLinkIcon"),o=i("RouterLink");return c(),p("div",null,[u,t("p",null,[f,t("a",g,[m,s(n)]),_]),y,t("div",b,[x,t("p",null,[v,s(o,{to:"/docs/firmware/state-monitor-esp32.html"},{default:a(()=>[w]),_:1}),k])]),S,t("p",null,[E,t("a",I,[T,s(n)]),q,s(o,{to:"/docs/hardware/controllers/rack32.html"},{default:a(()=>[R]),_:1}),C,t("a",N,[M,s(n)]),O]),D,t("p",null,[P,t("a",A,[F,s(n)]),L]),X,t("p",null,[j,t("a",V,[B,s(n)]),U]),t("p",null,[J,t("a",G,[H,s(n)]),K]),W,Q,t("p",null,[t("a",Y,[z,s(n)]),Z,s(o,{to:"/guides/advanced/home_assistant.html"},{default:a(()=>[$]),_:1}),ee]),t("p",null,[t("a",te,[se,s(n)]),ne,s(o,{to:"/guides/advanced/node_red.html"},{default:a(()=>[oe]),_:1}),ae]),re,t("ul",null,[ie,t("li",null,[le,t("a",de,[ce,s(n)])]),t("li",null,[pe,t("a",he,[ue,s(n)])]),t("li",null,[fe,t("a",ge,[me,s(n)])])]),_e,t("p",null,[ye,t("a",be,[xe,s(n)])]),ve])}var Te=d(h,[["render",we],["__file","security-monitor-esp32.html.vue"]]);export{Te as default};
