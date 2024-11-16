import{_ as a,r as i,o as d,c as l,a as e,b as o,w as s,e as t}from"./app.f95394c5.js";var h="/images/rack32-knx-shield-side.jpg";const c={},_=e("h1",{id:"rack32-knx-shield",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rack32-knx-shield","aria-hidden":"true"},"#"),t(" Rack32 KNX Shield")],-1),u=e("p",{class:"maker"},[t("by "),e("b",null,"Frank McAlinden")],-1),p=e("blockquote",null,[e("p",null,"SKU: OXRS-FMA-RACK32KNXSHIELD")],-1),f=e("p",null,[e("img",{src:h,alt:"Rack32 KNX Shield"})],-1),k=t("Provides direct control and monitoring of "),m={href:"https://www.knx.org/",target:"_blank",rel:"noopener noreferrer"},b=t("KNX"),g=t(" devices over the KNX bus. Requires a KNX Bus Coupling Unit (BCU) similar to "),w={href:"https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/",target:"_blank",rel:"noopener noreferrer"},x=t("this"),K=t("."),N=t("By using this shield and a KNX BCU you can program your "),X=t("Rack32"),B=t(" to communicate directly with the KNX bus. This allows direct control of actuators without the need for any infrastructure (i.e. TCP/IP network, MQTT broker, automation rules engine)."),v=e("p",null,"The original intent for this was to provide a failover system in the case of network or MQTT failure.",-1),y=e("h2",{id:"features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),t(" Features")],-1),A=e("li",null,"Pass through for Rack32 I2C and SPI breakouts",-1),C=e("li",null,"I/O breakout for second I2C bus",-1),S=e("li",null,"Optocoupler to provide galvanic separation between the Rack32 and KNX BCU",-1),R=t("5x2 pin header for direct fixing of "),I={href:"https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/",target:"_blank",rel:"noopener noreferrer"},T=t("Siemens KNX BCU"),F=e("h2",{id:"supported-firmware",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#supported-firmware","aria-hidden":"true"},"#"),t(" Supported Firmware")],-1),M=t("There is a fork of the "),U=t("State Monitor"),L=t(" firmware "),E={href:"https://github.com/sumnerboy12/OXRS-SHA-StateMonitor-ESP32-FW",target:"_blank",rel:"noopener noreferrer"},P=t("here"),z=t(" which includes support for this shield."),O=e("p",null,"This branch adds the option to set a KNX group address in config for each input. If the device enters failover mode it will publish KNX telegrams to the configured KNX group address directly on the KNX bus. This has been tested and works well.",-1),q=e("h2",{id:"additional-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-resources","aria-hidden":"true"},"#"),t(" Additional Resources")],-1),H=t("Blog - "),W={href:"https://intranet-of-things.com/smarthome/infrastructure/knx/arduino/",target:"_blank",rel:"noopener noreferrer"},D=t("Arduino and KNX"),Q=t("Arduino library - "),V={href:"https://github.com/thorsten-gehrig/arduino-tpuart-knx-user-forum",target:"_blank",rel:"noopener noreferrer"},j=t("Arduino EIB/KNX Interface via TP-UART"),Z=t("Arduino library - "),G={href:"http://liwan.fr/KnxWithArduino/",target:"_blank",rel:"noopener noreferrer"},J=t("KNX Device Library for Arduino"),Y=e("h2",{id:"where-to-buy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-buy","aria-hidden":"true"},"#"),t(" Where to Buy")],-1),$=e("li",null,[t("Rack32 KNX Shield - contact "),e("a",{href:"mailto:frankmc@internode.on.net"},"frankmc@internode.on.net")],-1),ee=t("KNX BCU - "),te={href:"https://knxtra.co.nz/product/siemens-5wg1117-2ab12-busankopplerknx-up117-12-mit-schraubbefestigung/",target:"_blank",rel:"noopener noreferrer"},oe=t("www.knxtra.co.nz"),ne=t("KNX BCU - "),re={href:"https://www.amazon.de/-/en/Siemens-Coupler-Fixing-Hanging-Bracket/dp/B00B7ZI5FO",target:"_blank",rel:"noopener noreferrer"},se=t("Amazon DE"),ie=e("h2",{id:"faqs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faqs","aria-hidden":"true"},"#"),t(" FAQs")],-1),ae=e("details",{class:"custom-container details"},[e("p",null,"How is the KNX BCU powered? Answer: It is powered directly from the KNX bus")],-1),de={class:"custom-container tip"},le=e("p",{class:"custom-container-title"},"Maker Info",-1),he=e("p",null,[e("strong",null,"Maker:"),t(" Frank McAlinden")],-1),ce=e("strong",null,"Link:",-1),_e=t(),ue=t("Frank McAlinden"),pe=e("h2",{id:"compatible-with",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compatible-with","aria-hidden":"true"},"#"),t(" Compatible With")],-1),fe=t("Rack32 "),ke=t("Link");function me(be,ge){const n=i("ExternalLinkIcon"),r=i("RouterLink");return d(),l("div",null,[_,u,p,f,e("p",null,[k,e("a",m,[b,o(n)]),g,e("a",w,[x,o(n)]),K]),e("p",null,[N,o(r,{to:"/docs/hardware/controllers/rack32.html"},{default:s(()=>[X]),_:1}),B]),v,y,e("ul",null,[A,C,S,e("li",null,[R,e("a",I,[T,o(n)])])]),F,e("p",null,[M,o(r,{to:"/docs/firmware/state-monitor-esp32.html"},{default:s(()=>[U]),_:1}),L,e("a",E,[P,o(n)]),z]),O,q,e("ul",null,[e("li",null,[H,e("a",W,[D,o(n)])]),e("li",null,[Q,e("a",V,[j,o(n)])]),e("li",null,[Z,e("a",G,[J,o(n)])])]),Y,e("ul",null,[$,e("li",null,[ee,e("a",te,[oe,o(n)])]),e("li",null,[ne,e("a",re,[se,o(n)])])]),ie,ae,e("div",de,[le,he,e("p",null,[ce,_e,o(r,{to:"/glossary/makers.html"},{default:s(()=>[ue]),_:1})])]),pe,e("ul",null,[e("li",null,[fe,o(r,{to:"/docs/hardware/controllers/rack32.html"},{default:s(()=>[ke]),_:1})])])])}var xe=a(c,[["render",me],["__file","rack32-knx-shield.html.vue"]]);export{xe as default};