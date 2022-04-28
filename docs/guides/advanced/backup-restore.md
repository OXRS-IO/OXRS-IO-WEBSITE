# OXRS Backup/Restore

## Introduction
This guide provides a set of Node-RED flows for taking automated daily backups of your OXRS device configuration and storing them on the file system where Node-RED is running. There is another flow for restoring your OXRS device configuration from the most recent backup.

::: warning
This backup method uses the `/api/config` REST API (GET) on an OXRS device, which only returns configuration that was also provisioned by the REST API. The web based Admin UI uses the REST API so any configuration set via that **would be included**. It will **not include** any configuration set using MQTT (via `conf/<deviceid>`), whether retained or not.
:::

This guide assumes you have Node-RED installed and have a reasonable understanding of how to install nodes and import flows.

## Setup
You will need to setup an MQTT broker configuration for your own MQTT broker and update the MQTT node at the start of the backup flow to use this. 

You can also (optionally) adjust the variables in the `BACKUP VARS` node (in both the backup and restore flows). These have sensible defaults and are pretty self-explanatory.

|Variable|Description|Default|
|:-------|:----------|:------|
|`backupFolder`|The absolute path (with trailing forward slash) where you want your backups to be written|`/data/oxrs/backups/`|
|`backupCount`|How many backups to keep (most recent), any others will be automatically deleted|10|
 
::: tip
If you are running Node-RED in a docker container then it is recommended to ensure you are writing your backups to a volume that is mounted outside the container. Otherwise when the container restarts you will lose all your backups!
:::

## Backup
The backup flow will run at 1am every night by default. You can adjust this schedule by editing the injection node (named `stat/+/adopt`). You can also manually trigger a backup by clicking the button on that inject node.

The flow will automatically create a sub-folder under `backupFolder` for each device, using the device IP address as the sub-folder name. It will then create a backup with a filename in the form `config_<YYYY-MM-DDTHH:mm:ss>.json`.

So the full path for a backup will look something like this (assuming default `backupFolder`);

```
/data/oxrs/backups/192.168.1.99/config_2022-01-01T12:34:56.json
```

The flow will automatically delete any backups (oldest first) when there are more than `backupCount` found.

## Restore
The restore flow is manually triggered only. You need to set the IP address of the device you wish to restore in the node at the start of the flow (named `DEVICE IP`). Once set you can trigger the flow by clicking the button on that inject node.

This will check the device is online, retrieve the most recent configuration backup, and push that config to the device using the `/api/config` REST API (POST). There is no confirmation or feedback to indicate if it was successful or not (feel free to build upon and improve this if you want!).

## The Flow!
Import the flow (below) into your Node-RED instance and give it a try!

::: details Click me to view the Node-RED flow!
``` json
[
    {
        "id": "fce939553f15dc79",
        "type": "mqtt in",
        "z": "df151d7fdd900632",
        "name": "",
        "topic": "",
        "qos": "2",
        "datatype": "json",
        "broker": "1480b452.05e9ac",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 1,
        "x": 170,
        "y": 860,
        "wires": [
            [
                "cc23751093fa7e87"
            ]
        ]
    },
    {
        "id": "69b501fa856af3ba",
        "type": "inject",
        "z": "df151d7fdd900632",
        "name": "",
        "props": [
            {
                "p": "action",
                "v": "subscribe",
                "vt": "str"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "00 01 * * *",
        "once": false,
        "onceDelay": 0.1,
        "topic": "stat/+/adopt",
        "x": 140,
        "y": 820,
        "wires": [
            [
                "fce939553f15dc79"
            ]
        ]
    },
    {
        "id": "00147244902ff136",
        "type": "http request",
        "z": "df151d7fdd900632",
        "name": "api/config",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://{{ topic }}/api/config",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 560,
        "y": 820,
        "wires": [
            [
                "910f2850b3b9718c"
            ]
        ]
    },
    {
        "id": "e70e470d434eb214",
        "type": "file",
        "z": "df151d7fdd900632",
        "name": "",
        "filename": "",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 760,
        "y": 980,
        "wires": [
            [
                "38657f615b11b12c"
            ]
        ]
    },
    {
        "id": "cc23751093fa7e87",
        "type": "change",
        "z": "df151d7fdd900632",
        "name": "get ip",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.network.ip",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 350,
        "y": 820,
        "wires": [
            [
                "4f8edc44858e327c"
            ]
        ]
    },
    {
        "id": "7d7010b6c7749b52",
        "type": "change",
        "z": "df151d7fdd900632",
        "name": "filename",
        "rules": [
            {
                "t": "set",
                "p": "filename",
                "pt": "msg",
                "to": "$.backupPath & \"/config_\" & $.backupDttm & \".json\"",
                "tot": "jsonata"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 760,
        "y": 940,
        "wires": [
            [
                "e70e470d434eb214"
            ]
        ]
    },
    {
        "id": "38657f615b11b12c",
        "type": "fs-ops-dir",
        "z": "df151d7fdd900632",
        "name": "get old config",
        "path": "backupPath",
        "pathType": "msg",
        "filter": "config_*.json",
        "filterType": "str",
        "dir": "payload",
        "dirType": "msg",
        "x": 990,
        "y": 820,
        "wires": [
            [
                "454744722ac8f10d"
            ]
        ]
    },
    {
        "id": "454744722ac8f10d",
        "type": "sort",
        "z": "df151d7fdd900632",
        "name": "sort",
        "order": "descending",
        "as_num": false,
        "target": "payload",
        "targetType": "msg",
        "msgKey": "payload",
        "msgKeyType": "elem",
        "seqKey": "payload",
        "seqKeyType": "msg",
        "x": 970,
        "y": 860,
        "wires": [
            [
                "3bb36c43ed6bd4d9"
            ]
        ]
    },
    {
        "id": "910f2850b3b9718c",
        "type": "switch",
        "z": "df151d7fdd900632",
        "name": "api ok?",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 560,
        "y": 860,
        "wires": [
            [
                "0db41b5ec94cf901"
            ]
        ]
    },
    {
        "id": "4f8edc44858e327c",
        "type": "ping",
        "z": "df151d7fdd900632",
        "protocol": "Automatic",
        "mode": "triggered",
        "name": "ping",
        "host": "",
        "timer": "20",
        "inputs": 1,
        "x": 350,
        "y": 860,
        "wires": [
            [
                "1892633c9ccaf2a7"
            ]
        ]
    },
    {
        "id": "1892633c9ccaf2a7",
        "type": "switch",
        "z": "df151d7fdd900632",
        "name": "ping ok?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "false"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 360,
        "y": 900,
        "wires": [
            [],
            [
                "00147244902ff136"
            ]
        ]
    },
    {
        "id": "0db41b5ec94cf901",
        "type": "json",
        "z": "df151d7fdd900632",
        "name": "json",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 550,
        "y": 900,
        "wires": [
            [
                "b6a3e5d9af021021"
            ]
        ]
    },
    {
        "id": "7be663eaa364d51f",
        "type": "change",
        "z": "df151d7fdd900632",
        "name": "backup path",
        "rules": [
            {
                "t": "set",
                "p": "backupPath",
                "pt": "msg",
                "to": "$.backupFolder & $.topic",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "timestamp",
                "pt": "msg",
                "to": "",
                "tot": "date"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 770,
        "y": 860,
        "wires": [
            [
                "5a3f8779d2f45553"
            ]
        ]
    },
    {
        "id": "5a3f8779d2f45553",
        "type": "moment",
        "z": "df151d7fdd900632",
        "name": "backup dttm",
        "topic": "",
        "input": "timestamp",
        "inputType": "msg",
        "inTz": "Pacific/Auckland",
        "adjAmount": 0,
        "adjType": "days",
        "adjDir": "add",
        "format": "YYYY-MM-DDTHH:mm:ss",
        "locale": "en-US",
        "output": "backupDttm",
        "outputType": "msg",
        "outTz": "Pacific/Auckland",
        "x": 770,
        "y": 900,
        "wires": [
            [
                "7d7010b6c7749b52"
            ]
        ]
    },
    {
        "id": "3bb36c43ed6bd4d9",
        "type": "split",
        "z": "df151d7fdd900632",
        "name": "",
        "splt": "\\n",
        "spltType": "str",
        "arraySplt": 1,
        "arraySpltType": "len",
        "stream": false,
        "addname": "",
        "x": 970,
        "y": 900,
        "wires": [
            [
                "edda83c9ec6583b7"
            ]
        ]
    },
    {
        "id": "edda83c9ec6583b7",
        "type": "switch",
        "z": "df151d7fdd900632",
        "name": "is old backup?",
        "property": "parts.index",
        "propertyType": "msg",
        "rules": [
            {
                "t": "gte",
                "v": "backupCount",
                "vt": "msg"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1000,
        "y": 940,
        "wires": [
            [
                "a71bd55291de40b2"
            ]
        ]
    },
    {
        "id": "a71bd55291de40b2",
        "type": "fs-ops-delete",
        "z": "df151d7fdd900632",
        "name": "delete",
        "path": "backupPath",
        "pathType": "msg",
        "filename": "payload",
        "filenameType": "msg",
        "x": 970,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "adb515c44f5a6bfd",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "backup oxrs config",
        "info": "",
        "x": 130,
        "y": 780,
        "wires": []
    },
    {
        "id": "4e1aab146bdee027",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "device online?",
        "info": "",
        "x": 370,
        "y": 780,
        "wires": []
    },
    {
        "id": "aa2b06c40d2e8869",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "get device config",
        "info": "",
        "x": 580,
        "y": 780,
        "wires": []
    },
    {
        "id": "74dd8a36d220117e",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "backup config",
        "info": "",
        "x": 770,
        "y": 780,
        "wires": []
    },
    {
        "id": "a2c6ca2f8cb7ccf0",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "delete old backups",
        "info": "",
        "x": 1010,
        "y": 780,
        "wires": []
    },
    {
        "id": "b6a3e5d9af021021",
        "type": "change",
        "z": "df151d7fdd900632",
        "name": "BACKUP VARS",
        "rules": [
            {
                "t": "set",
                "p": "backupFolder",
                "pt": "msg",
                "to": "/data/oxrs/backups/",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "backupCount",
                "pt": "msg",
                "to": "10",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 780,
        "y": 820,
        "wires": [
            [
                "7be663eaa364d51f"
            ]
        ],
        "icon": "node-red/cog.svg"
    },
    {
        "id": "6d4cc7c66695df98",
        "type": "inject",
        "z": "df151d7fdd900632",
        "name": "DEVICE IP",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "192.168.40.50",
        "payloadType": "str",
        "x": 120,
        "y": 1100,
        "wires": [
            [
                "af6561e21c8b49af"
            ]
        ]
    },
    {
        "id": "f6977fbce689135d",
        "type": "http request",
        "z": "df151d7fdd900632",
        "name": "api/config",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://{{ topic }}/api/config",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 980,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "530cfc93f2729102",
        "type": "fs-ops-dir",
        "z": "df151d7fdd900632",
        "name": "get old config",
        "path": "backupPath",
        "pathType": "msg",
        "filter": "config_*.json",
        "filterType": "str",
        "dir": "payload",
        "dirType": "msg",
        "x": 770,
        "y": 1100,
        "wires": [
            [
                "02acb5e523642677"
            ]
        ]
    },
    {
        "id": "02acb5e523642677",
        "type": "sort",
        "z": "df151d7fdd900632",
        "name": "sort",
        "order": "descending",
        "as_num": false,
        "target": "payload",
        "targetType": "msg",
        "msgKey": "payload",
        "msgKeyType": "elem",
        "seqKey": "payload",
        "seqKeyType": "msg",
        "x": 750,
        "y": 1140,
        "wires": [
            [
                "9319428c5ed4571e"
            ]
        ]
    },
    {
        "id": "af6561e21c8b49af",
        "type": "ping",
        "z": "df151d7fdd900632",
        "protocol": "Automatic",
        "mode": "triggered",
        "name": "ping",
        "host": "",
        "timer": "20",
        "inputs": 1,
        "x": 350,
        "y": 1100,
        "wires": [
            [
                "2d63a45ffe44b2be"
            ]
        ]
    },
    {
        "id": "2d63a45ffe44b2be",
        "type": "switch",
        "z": "df151d7fdd900632",
        "name": "ping ok?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "false"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 360,
        "y": 1140,
        "wires": [
            [],
            [
                "268f57024ffe9efb"
            ]
        ]
    },
    {
        "id": "e1c3be1bec9f22b5",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "restore oxrs config",
        "info": "",
        "x": 130,
        "y": 1060,
        "wires": []
    },
    {
        "id": "2dff68ec5d4b3478",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "device online?",
        "info": "",
        "x": 370,
        "y": 1060,
        "wires": []
    },
    {
        "id": "b87fd9ed4e414549",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "post device config",
        "info": "",
        "x": 1010,
        "y": 1060,
        "wires": []
    },
    {
        "id": "c42f4e2ec2e3a3f0",
        "type": "change",
        "z": "df151d7fdd900632",
        "name": "backup path",
        "rules": [
            {
                "t": "set",
                "p": "backupPath",
                "pt": "msg",
                "to": "$.backupFolder & $.topic",
                "tot": "jsonata"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 570,
        "y": 1140,
        "wires": [
            [
                "530cfc93f2729102"
            ]
        ]
    },
    {
        "id": "da0e011c30df93e3",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "backup config",
        "info": "",
        "x": 570,
        "y": 1060,
        "wires": []
    },
    {
        "id": "268f57024ffe9efb",
        "type": "change",
        "z": "df151d7fdd900632",
        "name": "BACKUP VARS",
        "rules": [
            {
                "t": "set",
                "p": "backupFolder",
                "pt": "msg",
                "to": "/data/oxrs/backups/",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 1100,
        "wires": [
            [
                "c42f4e2ec2e3a3f0"
            ]
        ],
        "icon": "node-red/cog.svg"
    },
    {
        "id": "9319428c5ed4571e",
        "type": "change",
        "z": "df151d7fdd900632",
        "name": "filename",
        "rules": [
            {
                "t": "set",
                "p": "filename",
                "pt": "msg",
                "to": "$.backupPath & \"/\" & $.payload[0]",
                "tot": "jsonata"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 760,
        "y": 1180,
        "wires": [
            [
                "bfac555331543e30"
            ]
        ]
    },
    {
        "id": "bfac555331543e30",
        "type": "file in",
        "z": "df151d7fdd900632",
        "name": "",
        "filename": "",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 760,
        "y": 1220,
        "wires": [
            [
                "f6977fbce689135d"
            ]
        ]
    },
    {
        "id": "fbe3d89aafa99e81",
        "type": "comment",
        "z": "df151d7fdd900632",
        "name": "get latest config",
        "info": "",
        "x": 780,
        "y": 1060,
        "wires": []
    },
    {
        "id": "1480b452.05e9ac",
        "type": "mqtt-broker",
        "name": "mosquitto",
        "broker": "mosquitto_app",
        "port": "1883",
        "clientid": "nodered",
        "autoConnect": true,
        "usetls": false,
        "compatmode": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "stat/nodered/lwt",
        "birthQos": "0",
        "birthRetain": "true",
        "birthPayload": "{\"online\":true}",
        "birthMsg": {},
        "closeTopic": "stat/nodered/lwt",
        "closeQos": "0",
        "closeRetain": "true",
        "closePayload": "{\"online\":false}",
        "closeMsg": {},
        "willTopic": "stat/nodered/lwt",
        "willQos": "0",
        "willRetain": "true",
        "willPayload": "{\"online\":false}",
        "willMsg": {},
        "sessionExpiry": ""
    }
]
```