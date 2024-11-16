import{_ as c,r as i,o as d,c as r,a as e,b as n,w as l,d as a,e as t}from"./app.f95394c5.js";const p={},u=a('<h1 id="esp32-mqtt-library" tabindex="-1"><a class="header-anchor" href="#esp32-mqtt-library" aria-hidden="true">#</a> ESP32 MQTT library</h1><p class="maker">by <b>OXRS Core Team</b></p><blockquote><p>SKU: OXRS-IO-MQTT-ESP32-LIB</p></blockquote><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>This library wraps up all MQTT related functions in an easy-to-use API, ensuring OXRS compatible events and config/command handlers. It includes the following;</p><ul><li>MQTT broker connection and re-connection attempts</li><li>Callbacks for connect/disconnect events</li><li>Callbacks for JSON messages received on the config/command topics</li><li>Simple API for publishing JSON-based status and telemetry data</li></ul><p>By using this library you can be sure your firmware will adhere to the OXRS standards and be compatible with other parts of the OXRS eco-system.</p><hr><h3 id="how-does-it-work" tabindex="-1"><a class="header-anchor" href="#how-does-it-work" aria-hidden="true">#</a> How does it work?</h3>',9),h=t("This library is a wrapper around the Arduino "),b={href:"https://github.com/knolleary/pubsubclient",target:"_blank",rel:"noopener noreferrer"},f=t("PubSubClient"),m=t(" library by Nick O'Leary. It forms the cornerstone of OXRS compatibility since MQTT is the protocol used for configuration, commands and status/telemetry reporting."),g=a(`<p>The library will automatically publish and subscribe to various topics, depending on how you use it;</p><table><thead><tr><th style="text-align:left;">Topic</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>stat/&lt;clientid&gt;/lwt</code></td><td style="text-align:left;">Publishes <code>{&quot;online&quot;:true|false}</code> to this topic when connected/disconnected from the MQTT broker</td></tr><tr><td style="text-align:left;"><code>stat/&lt;clientid&gt;</code></td><td style="text-align:left;">Publishes JSON status messages to this topic via <code>publishStatus()</code></td></tr><tr><td style="text-align:left;"><code>tele/&lt;clientid&gt;</code></td><td style="text-align:left;">Publishes JSON telemetry messages to this topic via <code>publishTelemetry()</code></td></tr><tr><td style="text-align:left;"><code>stat/&lt;clientid&gt;/adopt</code></td><td style="text-align:left;">Publishes JSON adoption messages to this topic via <code>publishAdopt()</code></td></tr><tr><td style="text-align:left;"><code>stat/&lt;clientid&gt;/log</code></td><td style="text-align:left;">Log messages can be published to this topic (get topic via <code>getLogTopic()</code>)</td></tr><tr><td style="text-align:left;"><code>conf/&lt;clientid&gt;</code></td><td style="text-align:left;">Subscribes to this topic for JSON config messages and passes them on to your <code>onConfig</code> callback</td></tr><tr><td style="text-align:left;"><code>cmnd/&lt;clientid&gt;</code></td><td style="text-align:left;">Subscribes to this topic for JSON command messages and passes them on to your <code>onCommand</code> callback</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>These topics will be different if you set a topic prefix or suffix. E.g. a topic prefix of <code>home</code> and suffix of <code>oxrs</code> would result in a LWT topic of <code>home/stat/&lt;clientid&gt;/oxrs/lwt</code></p></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h3><p>The library needs to be initialised with an instance of <code>PubSubClient</code>, which can be created for either WiFi or Ethernet connections. You also need to register a callback on your <code>PubSubClient</code> for incoming MQTT messages, and pass these events down to the MQTT library;</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// MQTT client</span>
PubSubClient <span class="token function">_mqttClient</span><span class="token punctuation">(</span>_client<span class="token punctuation">)</span><span class="token punctuation">;</span>
OXRS_MQTT <span class="token function">_mqtt</span><span class="token punctuation">(</span>_mqttClient<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">_mqttCallback</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> topic<span class="token punctuation">,</span> byte <span class="token operator">*</span> payload<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token comment">// Pass down to our MQTT handler and check it was processed ok</span>
  <span class="token keyword">int</span> state <span class="token operator">=</span> _mqtt<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">case</span> MQTT_RECEIVE_ZERO_LENGTH<span class="token operator">:</span>
      Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">F</span><span class="token punctuation">(</span><span class="token string">&quot;Empty MQTT payload received&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> MQTT_RECEIVE_JSON_ERROR<span class="token operator">:</span>
      Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">F</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to deserialise MQTT JSON payload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> MQTT_RECEIVE_NO_CONFIG_HANDLER<span class="token operator">:</span>
      Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">F</span><span class="token punctuation">(</span><span class="token string">&quot;No MQTT config handler&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> MQTT_RECEIVE_NO_COMMAND_HANDLER<span class="token operator">:</span>
      Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">F</span><span class="token punctuation">(</span><span class="token string">&quot;No MQTT command handler&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),y=t("The library will return a status code from "),k=e("code",null,".receive()",-1),_=t(" indicating if it was able to successfully process the message. See "),T={href:"https://github.com/OXRS-IO/OXRS-IO-MQTT-ESP32-LIB/blob/main/src/OXRS_MQTT.h",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"OXRS_MQTT.h",-1),v=t(" for the full list of return codes."),w=e("h3",{id:"client-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#client-id","aria-hidden":"true"},"#"),t(" Client ID")],-1),S=t("A unique client id for the MQTT connection must be specified. Typically we use the last 6 bytes of the device MAC address, but you can use anything you like. The client id must be unique since if another device attempts to connect with the same client id, the broker will boot any existing connections with the same id. See "),O={href:"https://www.cloudmqtt.com/blog/mqtt-what-is-client-id.html",target:"_blank",rel:"noopener noreferrer"},M=t("here"),R=t(" for more details."),C=a('<h3 id="broker-details" tabindex="-1"><a class="header-anchor" href="#broker-details" aria-hidden="true">#</a> Broker Details</h3><p>You need to tell the library where and how to connect to your MQTT broker of choice;</p><table><thead><tr><th style="text-align:left;">Broker Config</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>setBroker</code></td><td style="text-align:left;">MQTT broker IP address or hostname, and port (typically <code>1883</code>)</td></tr><tr><td style="text-align:left;"><code>setAuth</code></td><td style="text-align:left;">Optional, the username and password to authenticate with your MQTT broker</td></tr><tr><td style="text-align:left;"><code>setTopicPrefix</code></td><td style="text-align:left;">Optional, a topic prefix applied to all subscriptions and publishes</td></tr><tr><td style="text-align:left;"><code>setTopicSuffix</code></td><td style="text-align:left;">Optional, a topic suffix applied to all subscriptions and publishes</td></tr></tbody></table><p>Only <code>setBroker()</code> is mandatory, the rest are optional.</p><h3 id="callbacks" tabindex="-1"><a class="header-anchor" href="#callbacks" aria-hidden="true">#</a> Callbacks</h3><p>Next add your callbacks for the various events supported by the library and register them with the MQTT library;</p><table><thead><tr><th style="text-align:left;">Callback Register</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>onConnected</code></td><td style="text-align:left;">Successfully connected to the configured MQTT broker</td></tr><tr><td style="text-align:left;"><code>onDisconnected</code></td><td style="text-align:left;">Connection to the configured MQTT broker has dropped</td></tr><tr><td style="text-align:left;"><code>onConfig</code></td><td style="text-align:left;">JSON configuration payload received on the <code>conf/&lt;clientid&gt;</code> topic</td></tr><tr><td style="text-align:left;"><code>onCommand</code></td><td style="text-align:left;">JSON command payload received on the <code>cmnd/&lt;clientid&gt;</code> topic</td></tr></tbody></table>',7),Q=t("These are all optional, for example the "),E=t("State Monitor"),N=t(" firmware has no need for the "),I=e("code",null,"onCommand",-1),P=t(" callback."),q=a('<h3 id="program-loop" tabindex="-1"><a class="header-anchor" href="#program-loop" aria-hidden="true">#</a> Program Loop</h3><p>Finally your firmware needs to call the MQTT library <code>.loop()</code> method as often as possible, e.g. typically inside your main program <code>loop()</code> method. This allows the library to check for incoming MQTT messages, process outgoing messages, and do any other internal housekeeping.</p><h3 id="publishing" tabindex="-1"><a class="header-anchor" href="#publishing" aria-hidden="true">#</a> Publishing</h3><p>The library makes it very easy to publish JSON data by providing a set of simple APIs;</p><table><thead><tr><th style="text-align:left;">Publish API</th><th style="text-align:left;">Topic</th><th style="text-align:left;">Retained</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>publishStatus</code></td><td style="text-align:left;"><code>stat/&lt;clientid&gt;</code></td><td style="text-align:left;">false</td><td style="text-align:left;">Publish a JSON <strong>status</strong> message, e.g. when a button event is detected</td></tr><tr><td style="text-align:left;"><code>publishTelemetry</code></td><td style="text-align:left;"><code>tele/&lt;clientid&gt;</code></td><td style="text-align:left;">false</td><td style="text-align:left;">Publish a JSON <strong>telemetry</strong> message, e.g. when publishing regular sensor data</td></tr><tr><td style="text-align:left;"><code>publishAdopt</code></td><td style="text-align:left;"><code>stat/&lt;clientid&gt;/adopt</code></td><td style="text-align:left;">true</td><td style="text-align:left;">Publish a JSON <strong>adoption</strong> message, typically firmware and network details plus JSON config/command schemas</td></tr></tbody></table><p>The adoption message is optional but is used by downstream systems in the OXRS eco-system to identify the device and provide a means for building self-describing configuration and control systems/UIs.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Typically you publish your adoption message in the <code>onConnected</code> callback so anything listening is alerted to your presence as soon as you come online</p></div><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2>',8),L=t("Download the latest version of the library on "),A={href:"https://github.com/OXRS-IO/OXRS-IO-MQTT-ESP32-LIB",target:"_blank",rel:"noopener noreferrer"},X=t("Github"),J=t("."),B=t("A good place to look for an example of how to use this MQTT library is in the "),D=t("Rack32"),V=t(" library found "),F={href:"https://github.com/SuperHouse/OXRS-SHA-Rack32-ESP32-LIB",target:"_blank",rel:"noopener noreferrer"},H=t("here"),G=t("."),W=a('<h2 id="supported-hardware" tabindex="-1"><a class="header-anchor" href="#supported-hardware" aria-hidden="true">#</a> Supported Hardware</h2><p>This library is compatible with any Arduino-based hardware, including ESP32, ESP8266 and AVR microprocessors.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>When running on AVR MCUs the max MQTT message size is reduced to only 256 bytes, due to memory constraints on these devices. However for ESP32 and ESP8266 devices the max MQTT message size is 16384 bytes.</p></div><hr><h4 id="credits" tabindex="-1"><a class="header-anchor" href="#credits" aria-hidden="true">#</a> Credits</h4>',5),U={href:"https://oxrs.io/",target:"_blank",rel:"noopener noreferrer"},z=t("OXRS"),Y=t(" Core Team"),K=e("hr",null,null,-1),Z=e("h4",{id:"license",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#"),t(" License")],-1),j=t("Found "),$={href:"https://github.com/OXRS-IO/OXRS-IO-MQTT-ESP32-LIB/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer"},tt=t("here"),et=t(".");function nt(st,at){const s=i("ExternalLinkIcon"),o=i("RouterLink");return d(),r("div",null,[u,e("p",null,[h,e("a",b,[f,n(s)]),m]),g,e("p",null,[y,k,_,e("a",T,[x,n(s)]),v]),w,e("p",null,[S,e("a",O,[M,n(s)]),R]),C,e("p",null,[Q,n(o,{to:"/docs/firmware/state-monitor-esp32.html"},{default:l(()=>[E]),_:1}),N,I,P]),q,e("p",null,[L,e("a",A,[X,n(s)]),J]),e("p",null,[B,n(o,{to:"/docs/hardware/controllers/rack32.html"},{default:l(()=>[D]),_:1}),V,e("a",F,[H,n(s)]),G]),W,e("ul",null,[e("li",null,[e("a",U,[z,n(s)]),Y])]),K,Z,e("p",null,[j,e("a",$,[tt,n(s)]),et])])}var it=c(p,[["render",nt],["__file","esp32-mqtt-library.html.vue"]]);export{it as default};
