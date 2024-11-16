import{_ as n,o as s,c as a,d as t}from"./app.f95394c5.js";const p={},o=t(`<h1 id="oxrs-backup-restore" tabindex="-1"><a class="header-anchor" href="#oxrs-backup-restore" aria-hidden="true">#</a> OXRS Backup/Restore</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>This guide provides a set of Node-RED flows for taking automated daily backups of your OXRS device configuration and storing them on the file system where Node-RED is running. There is another flow for restoring your OXRS device configuration from the most recent backup.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This backup method uses the <code>/api/config</code> REST API (GET) on an OXRS device, which only returns configuration that was also provisioned by the REST API. The web based Admin UI uses the REST API so any configuration set via that <strong>would be included</strong>. It will <strong>not include</strong> any configuration set using MQTT (via <code>conf/&lt;deviceid&gt;</code>), whether retained or not.</p></div><p>This guide assumes you have Node-RED installed and have a reasonable understanding of how to install nodes and import flows.</p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>You will need to setup an MQTT broker configuration for your own MQTT broker and update the MQTT node at the start of the backup flow to use this.</p><p>You can also (optionally) adjust the variables in the <code>BACKUP VARS</code> node (in both the backup and restore flows). These have sensible defaults and are pretty self-explanatory.</p><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Description</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>backupFolder</code></td><td style="text-align:left;">The absolute path (with trailing forward slash) where you want your backups to be written</td><td style="text-align:left;"><code>/data/oxrs/backups/</code></td></tr><tr><td style="text-align:left;"><code>backupCount</code></td><td style="text-align:left;">How many backups to keep (most recent), any others will be automatically deleted</td><td style="text-align:left;">10</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you are running Node-RED in a docker container then it is recommended to ensure you are writing your backups to a volume that is mounted outside the container. Otherwise when the container restarts you will lose all your backups!</p></div><h2 id="backup" tabindex="-1"><a class="header-anchor" href="#backup" aria-hidden="true">#</a> Backup</h2><p>The backup flow will run at 1am every night by default. You can adjust this schedule by editing the injection node (named <code>stat/+/adopt</code>). You can also manually trigger a backup by clicking the button on that inject node.</p><p>The flow will automatically create a sub-folder under <code>backupFolder</code> for each device, using the device IP address as the sub-folder name. It will then create a backup with a filename in the form <code>config_&lt;YYYY-MM-DDTHH:mm:ss&gt;.json</code>.</p><p>So the full path for a backup will look something like this (assuming default <code>backupFolder</code>);</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/data/oxrs/backups/192.168.1.99/config_2022-01-01T12:34:56.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The flow will automatically delete any backups (oldest first) when there are more than <code>backupCount</code> found.</p><h2 id="restore" tabindex="-1"><a class="header-anchor" href="#restore" aria-hidden="true">#</a> Restore</h2><p>The restore flow is manually triggered only. You need to set the IP address of the device you wish to restore in the node at the start of the flow (named <code>DEVICE IP</code>). Once set you can trigger the flow by clicking the button on that inject node.</p><p>This will check the device is online, retrieve the most recent configuration backup, and push that config to the device using the <code>/api/config</code> REST API (POST). There is no confirmation or feedback to indicate if it was successful or not (feel free to build upon and improve this if you want!).</p><h2 id="the-flow" tabindex="-1"><a class="header-anchor" href="#the-flow" aria-hidden="true">#</a> The Flow!</h2><p>Import the flow (below) into your Node-RED instance and give it a try!</p><details class="custom-container details"><summary>Click me to view the Node-RED flow!</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fce939553f15dc79&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mqtt in&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;topic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;qos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;datatype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;broker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1480b452.05e9ac&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;nl&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rh&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;cc23751093fa7e87&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;12c6c6cc42879632&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;69b501fa856af3ba&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inject&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subscribe&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;props&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;action&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subscribe&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;repeat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;crontab&quot;</span><span class="token operator">:</span> <span class="token string">&quot;00 01 * * *&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;once&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;onceDelay&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;topic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">820</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;ecce5d52223e71bc&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;00147244902ff136&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http request&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api/config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;txt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;paytoqs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://{{ topic }}/api/config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tls&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;persist&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;proxy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;authType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;senderr&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">560</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">820</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;910f2850b3b9718c&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;e70e470d434eb214&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;appendNewline&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createDir&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;overwriteFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">760</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">980</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;38657f615b11b12c&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cc23751093fa7e87&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get ip&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload.network.ip&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">820</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;4f8edc44858e327c&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7d7010b6c7749b52&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filename&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filename&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$.backupPath &amp; \\&quot;/config_\\&quot; &amp; $.backupDttm &amp; \\&quot;.json\\&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonata&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">760</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">940</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;e70e470d434eb214&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;38657f615b11b12c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fs-ops-dir&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get old config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupPath&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pathType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;config_*.json&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filterType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dirType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">990</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">820</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;454744722ac8f10d&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;454744722ac8f10d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sort&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sort&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;descending&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;as_num&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;targetType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msgKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msgKeyType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;elem&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;seqKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;seqKeyType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">970</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">860</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;3bb36c43ed6bd4d9&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;910f2850b3b9718c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;switch&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api ok?&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;statusCode&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;num&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;checkall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;repair&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">560</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">860</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;0db41b5ec94cf901&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4f8edc44858e327c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Automatic&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;triggered&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;timer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">860</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;1892633c9ccaf2a7&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1892633c9ccaf2a7&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;switch&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ping ok?&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;else&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;checkall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;repair&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;00147244902ff136&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0db41b5ec94cf901&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pretty&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">550</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;b6a3e5d9af021021&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7be663eaa364d51f&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup path&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupPath&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$.backupFolder &amp; $.topic&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonata&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;timestamp&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">770</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">860</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;5a3f8779d2f45553&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5a3f8779d2f45553&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;moment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup dttm&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;topic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;timestamp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inputType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inTz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pacific/Auckland&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;adjAmount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;adjType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;days&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;adjDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DDTHH:mm:ss&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;locale&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupDttm&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outputType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outTz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pacific/Auckland&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">770</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;7d7010b6c7749b52&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3bb36c43ed6bd4d9&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;split&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;splt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\\\n&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spltType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;arraySplt&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;arraySpltType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;len&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stream&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;addname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">970</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;edda83c9ec6583b7&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;edda83c9ec6583b7&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;switch&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is old backup?&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parts.index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gte&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupCount&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;checkall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;repair&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">940</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;a71bd55291de40b2&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a71bd55291de40b2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fs-ops-delete&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupPath&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pathType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filenameType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">970</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">980</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;adb515c44f5a6bfd&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup oxrs config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">780</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4e1aab146bdee027&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;device online?&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">370</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">780</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aa2b06c40d2e8869&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get device config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">780</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;74dd8a36d220117e&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">770</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">780</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a2c6ca2f8cb7ccf0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;delete old backups&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">1010</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">780</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b6a3e5d9af021021&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BACKUP VARS&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupFolder&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/data/oxrs/backups/&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupCount&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;num&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">780</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">820</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;7be663eaa364d51f&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node-red/cog.svg&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6d4cc7c66695df98&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inject&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DEVICE IP&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;props&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;repeat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;crontab&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;once&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;onceDelay&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;topic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;payload&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.40.50&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;payloadType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;af6561e21c8b49af&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f6977fbce689135d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http request&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api/config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;txt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;paytoqs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://{{ topic }}/api/config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tls&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;persist&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;proxy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;authType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;senderr&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">980</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;530cfc93f2729102&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fs-ops-dir&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get old config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupPath&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pathType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;config_*.json&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filterType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dirType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">770</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;02acb5e523642677&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;02acb5e523642677&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sort&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sort&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;descending&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;as_num&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;targetType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msgKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msgKeyType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;elem&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;seqKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;seqKeyType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">750</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1140</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;9319428c5ed4571e&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;af6561e21c8b49af&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Automatic&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;triggered&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;timer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;2d63a45ffe44b2be&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2d63a45ffe44b2be&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;switch&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ping ok?&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;propertyType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;else&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;checkall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;repair&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1140</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;268f57024ffe9efb&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;e1c3be1bec9f22b5&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;restore oxrs config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1060</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2dff68ec5d4b3478&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;device online?&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">370</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1060</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b87fd9ed4e414549&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post device config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">1010</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1060</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c42f4e2ec2e3a3f0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup path&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupPath&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$.backupFolder &amp; $.topic&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonata&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">570</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1140</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;530cfc93f2729102&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;da0e011c30df93e3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backup config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">570</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1060</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;268f57024ffe9efb&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BACKUP VARS&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backupFolder&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/data/oxrs/backups/&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;c42f4e2ec2e3a3f0&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node-red/cog.svg&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9319428c5ed4571e&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filename&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filename&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$.backupPath &amp; \\&quot;/\\&quot; &amp; $.payload[0]&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonata&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">760</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1180</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;bfac555331543e30&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bfac555331543e30&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file in&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;chunk&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sendError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;allProps&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">760</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1220</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;f6977fbce689135d&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fbe3d89aafa99e81&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get latest config&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">780</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">1060</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12c6c6cc42879632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unsubscribe&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;action&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unsubscribe&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">960</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;ecce5d52223e71bc&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ecce5d52223e71bc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token string">&quot;df151d7fdd900632&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stat/+/adopt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;t&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;p&quot;</span><span class="token operator">:</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stat/+/adopt&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;str&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reg&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">860</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wires&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&quot;fce939553f15dc79&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1480b452.05e9ac&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mqtt-broker&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mosquitto&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;broker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mqtt.home&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1883&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;clientid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodered&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;autoConnect&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;usetls&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;compatmode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocolVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;keepalive&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cleansession&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;birthTopic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stat/nodered/lwt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;birthQos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;birthRetain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;birthPayload&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;online\\&quot;:true}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;birthMsg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;closeTopic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stat/nodered/lwt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;closeQos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;closeRetain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;closePayload&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;online\\&quot;:false}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;closeMsg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;willTopic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stat/nodered/lwt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;willQos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;willRetain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;willPayload&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;online\\&quot;:false}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;willMsg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sessionExpiry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,22),e=[o];function u(c,l){return s(),a("div",null,e)}var r=n(p,[["render",u],["__file","backup-restore.html.vue"]]);export{r as default};
