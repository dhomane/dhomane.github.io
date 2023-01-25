"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[30513],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(t),u=r,d=g["".concat(l,".").concat(u)]||g[u]||m[u]||a;return t?o.createElement(d,s(s({ref:n},p),{},{components:t})):o.createElement(d,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},67580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={sidebar_position:8070,slug:"2022-03-28",title:"MQTT Message Server and Angular Frontend",authors:"mpolinowski",tags:["MQTT","Javascript","Databases"]},s=void 0,i={unversionedId:"IoT-and-Machine-Learning/MQTT/2022-03-28--mqtt-message-server/index",id:"IoT-and-Machine-Learning/MQTT/2022-03-28--mqtt-message-server/index",title:"MQTT Message Server and Angular Frontend",description:"Guangzhou, China",source:"@site/docs/IoT-and-Machine-Learning/MQTT/2022-03-28--mqtt-message-server/index.md",sourceDirName:"IoT-and-Machine-Learning/MQTT/2022-03-28--mqtt-message-server",slug:"/IoT-and-Machine-Learning/MQTT/2022-03-28--mqtt-message-server/2022-03-28",permalink:"/docs/IoT-and-Machine-Learning/MQTT/2022-03-28--mqtt-message-server/2022-03-28",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/MQTT/2022-03-28--mqtt-message-server/index.md",tags:[{label:"MQTT",permalink:"/docs/tags/mqtt"},{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Databases",permalink:"/docs/tags/databases"}],version:"current",sidebarPosition:8070,frontMatter:{sidebar_position:8070,slug:"2022-03-28",title:"MQTT Message Server and Angular Frontend",authors:"mpolinowski",tags:["MQTT","Javascript","Databases"]},sidebar:"tutorialSidebar",previous:{title:"MQTT with RabbitMQ",permalink:"/docs/IoT-and-Machine-Learning/MQTT/2022-03-30--mqtt-with-rabbit-mq/2022-03-30"},next:{title:"Building Eclipse Mosquitto v2 from Source",permalink:"/docs/IoT-and-Machine-Learning/MQTT/2022-03-27--build-mosquitto-from-source/2022-03-27"}},l={},c=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"Msg Server",id:"msg-server",level:3},{value:"Database",id:"database",level:3},{value:"Connections",id:"connections",level:2},{value:"Connecting to your MQTT Broker",id:"connecting-to-your-mqtt-broker",level:3},{value:"Connecting to your MongoDB Instance",id:"connecting-to-your-mongodb-instance",level:3},{value:"Spinning up the Webserver",id:"spinning-up-the-webserver",level:3},{value:"Test",id:"test",level:3},{value:"Writing Incoming Messages to Database",id:"writing-incoming-messages-to-database",level:2},{value:"API &amp; Frontend",id:"api--frontend",level:2},{value:"Generating Channel IDs",id:"generating-channel-ids",level:2},{value:"Angular Frontend",id:"angular-frontend",level:2},{value:"Connecting the Frontend",id:"connecting-the-frontend",level:2},{value:"Addendum",id:"addendum",level:2},{value:"Establishing Connections",id:"establishing-connections",level:3},{value:"Writing Messages to Database",id:"writing-messages-to-database",level:3}],p={toc:c};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guangzhou, China",src:t(50780).Z,width:"1500",height:"583"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic-setup"},"Basic Setup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#msg-server"},"Msg Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#database"},"Database")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connections"},"Connections"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connecting-to-your-mqtt-broker"},"Connecting to your MQTT Broker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connecting-to-your-mongodb-instance"},"Connecting to your MongoDB Instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#spinning-up-the-webserver"},"Spinning up the Webserver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#test"},"Test")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#writing-incoming-messages-to-database"},"Writing Incoming Messages to Database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api--frontend"},"API \\& Frontend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generating-channel-ids"},"Generating Channel IDs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#angular-frontend"},"Angular Frontend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connecting-the-frontend"},"Connecting the Frontend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#addendum"},"Addendum"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#establishing-connections"},"Establishing Connections")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#writing-messages-to-database"},"Writing Messages to Database"))))),(0,r.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,r.kt)("h3",{id:"msg-server"},"Msg Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mpolinowski/mqtt-msg\ncd mqtt-msg\nnpm install\n")),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull mongo:4.4.14\ndocker pull mongo-express:1.0.0-alpha.4\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"docker-compose.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.8'\n\nservices:\n\n  mongodb:\n    image: mongo:4.4.14\n    container_name: mongodb\n    restart: unless-stopped\n    ports:\n      - 27017:27017\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: root\n      MONGO_INITDB_ROOT_PASSWORD: example\n    volumes:\n      - type: bind\n        source: /opt/mongo/db\n        target: /data/db\n    healthcheck:\n      test: echo 'db.runCommand(\"ping\").ok' | mongo mongodb:27017/test --quiet\n      interval: 30s\n      timeout: 10s\n      retries: 3\n    networks:\n      - mongodb_network\n\n  mongo-express:\n    image: mongo-express:1.0.0-alpha.4\n    container_name: mongo-express\n    restart: unless-stopped\n    ports:\n      - 8081:8081\n    environment:\n      ME_CONFIG_MONGODB_ADMINUSERNAME: root\n      ME_CONFIG_MONGODB_ADMINPASSWORD: example\n      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongodb:27017/\n      ME_CONFIG_BASICAUTH_USERNAME: admin\n      ME_CONFIG_BASICAUTH_PASSWORD: example\n    depends_on:\n      - mongodb\n    networks:\n      - mongodb_network\n\nnetworks:\n  mongodb_network:\n    name: mongodb_network\n")),(0,r.kt)("p",null,"Create directories for data storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/mongo/{db,configdb}\n")),(0,r.kt)("p",null,"Open ports if application runs on a different server and start database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ufw allow 8081/tcp\nufw allow 27017/tcp\nufw reload\nufw status\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\ndocker ps -a\n")),(0,r.kt)("p",null,"And login to the Mongo-Express web frontend on your server IP and port ",(0,r.kt)("inlineCode",{parentName:"p"},"8081")," with your basicAuth password (s. ",(0,r.kt)("em",{parentName:"p"},"docker-compose.yml"),")."),(0,r.kt)("h2",{id:"connections"},"Connections"),(0,r.kt)("h3",{id:"connecting-to-your-mqtt-broker"},"Connecting to your MQTT Broker"),(0,r.kt)("p",null,"We will use the ",(0,r.kt)("strong",{parentName:"p"},"mqtt")," NPM package (",(0,r.kt)("inlineCode",{parentName:"p"},"npm install mqtt"),") to connect to the MQTT broker running on an INSTAR WQHD Camera with the following options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// INSTAR MQTT Broker setup\nconst {connect} = require('mqtt')\nconst brokerURL = 'mqtt://192.168.2.115:1883'\nconst topicPrefix = 'msg/'\nconst options = {\n  // Clean session\n  clean: true,\n  connectTimeout: 4000,\n  // Auth\n  clientId: 'mqtt_msg',\n  username: 'admin',\n  password: 'admin',\n}\nconst client  = connect(brokerURL, options)\n")),(0,r.kt)("p",null,"We can test the connection by publishing a heartbeat from our Msg client (see ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ts"),") and reading the message using an MQTT subscription:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"initMqttListener() {\n        console.log('[INFO] :: Msg server connecting to MQTT broker')\n\n        // MQTT Subscription\n        client.on('connect', function() {\n            console.log('[INFO] :: Connected to MQTT Broker ' + brokerURL)\n            client.subscribe(topicPrefix + '#', function(err: any) {\n                if (err) {\n                    console.log('[ERROR] :: MQTT error', err)\n                } else {\n                    client.publish(topicPrefix + 'heartbeat', 'Msg Service is online')\n                    console.log('[INFO] :: Topic', topicPrefix + 'heartbeat', 'was updated')\n                }\n            })\n        })\n\n        // Read MQTT Messages\n        client.on('message', function(topic: any, message: any) {\n            // Read topic/message from buffer\n            console.log('[MQTT] ::', topic.toString(), '\"' + message.toString() + '\"')\n            client.end()\n        })\n    }\n")),(0,r.kt)("h3",{id:"connecting-to-your-mongodb-instance"},"Connecting to your MongoDB Instance"),(0,r.kt)("p",null,"We will use the ",(0,r.kt)("strong",{parentName:"p"},"mongoose")," NPM package (",(0,r.kt)("inlineCode",{parentName:"p"},"npm install mongoose"),") to connect to the database with the following options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// MongoDB setup\nconst mongoose = require(\'mongoose\')\nconst mongoAuth = {\n    "auth": {\n        "authSource": "admin"\n    },\n    "user": "root",\n    "pass": "example"\n}\nconst mongoURL = \'mongodb://root:example@192.168.2.111:27017/?retryWrites=true&w=majority\'\n')),(0,r.kt)("p",null,"The following code connects to our MongoDB instances and creates a collection ",(0,r.kt)("inlineCode",{parentName:"p"},"mqtt-msg")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"initDB() {\n        connect_db().catch(err => console.log('[ERROR] :: Database error', err));\n        async function connect_db() {\n            await mongoose.connect(mongoURL, mongoAuth);\n          }\n\n        const createCollection = mongoose.model('mqtt-msg', { name: String})\n\n        const test = new createCollection({ name: 'Msg Client'})\n        test.save().then(() => console.log('[INFO] :: Msg server connected to database'))\n    }\n")),(0,r.kt)("h3",{id:"spinning-up-the-webserver"},"Spinning up the Webserver"),(0,r.kt)("p",null,"We will use the ",(0,r.kt)("strong",{parentName:"p"},"express")," NPM package (",(0,r.kt)("inlineCode",{parentName:"p"},"npm install express"),") to create a webserver with the following options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Express setup\nconst express = require('express')\nconst app = express()\nconst port = process.env.PORT || 8888\n")),(0,r.kt)("p",null,"To get started we will simply return a timestamp on the webroot ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," and use the function to trigger our msg client, that so far only establishes connections to our broker and database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Run Webfront\napp.get('/', (req: any, res: any) => {\n    res.json({ server: \"running\", timestamp: new Date().getTime() })\n})\n\n\n// Webserver\napp.listen(port, () => {\n    console.log('[INFO] :: Webserver running on Port', port)\n\n    new MsgBot()\n})\n")),(0,r.kt)("h3",{id:"test"},"Test"),(0,r.kt)("p",null,"Run the app with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," and check your console output. If everything works you will see the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[INFO] :: Webserver running on Port 8888\n[INFO] :: Msg service is online\n[INFO] :: Msg server connecting to MQTT broker\n[INFO] :: Connected to MQTT Broker mqtt://192.168.2.115:1883\n[INFO] :: Topic msg/heartbeat was updated\n[MQTT] :: msg/heartbeat "Msg Service is online"\n[INFO] :: Msg server connected to database\n')),(0,r.kt)("p",null,"You can find the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ts")," file from this stage below: ",(0,r.kt)("a",{parentName:"p",href:"#establishing-connections"},"Establishing Connections"),"."),(0,r.kt)("h2",{id:"writing-incoming-messages-to-database"},"Writing Incoming Messages to Database"),(0,r.kt)("p",null,"We can now remove the test from our database initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"initDB() {\n        connect_db().catch(err => console.log('[ERROR] :: Database error', err));\n        async function connect_db() {\n            await mongoose.connect(mongoURL, mongoAuth);\n          }\n    }\n")),(0,r.kt)("p",null,"And instead move it down into the MQTT function to handle incoming (JSON formatted) MQTT messages and write them into our database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"initMqttListener() {\n    console.log('[INFO] :: Msg server connecting to MQTT broker')\n\n    // MQTT Subscription\n    client.on('connect', function() {\n        console.log('[INFO] :: Connected to MQTT Broker ' + brokerURL)\n        client.subscribe(topicPrefix + '#', function(err: any) {\n            if (err) {\n                console.log('[ERROR] :: MQTT error', err)\n            } else {\n                client.publish(topicPrefix + 'server', JSON.stringify({ msg: 'Msg Service is online' }))\n                console.log('[INFO] :: Topic', topicPrefix + 'server', 'was updated')\n            }\n        })\n    })\n\n    // Read MQTT Messages\n    client.on('message', function(topic: any, message: any) {\n        // Read topic/message from buffer\n        const msg = message.toString()\n        console.log('[MQTT] ::', topic.toString(), '\"' + msg + '\"')\n        // Write message to database\n        // Define Collection model\n        const msgModel = mongoose.model('mqtt-msg', { msg: String, createdOn: Date, topicId: String })\n        // Use JSON for messages\n        const msgObject = JSON.parse(msg)\n        // Add date to each message object\n        msgObject.createdOn = new Date()\n        // Add ID to each message object\n        msgObject.topicId = topic\n\n        new msgModel(msgObject).save().then(() => console.log('[INFO] :: Msg saved to database'))\n\n        client.end()\n    })\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#writing-messages-to-database"},"Writing Messages to Database")," for full application code."),(0,r.kt)("h2",{id:"api--frontend"},"API & Frontend"),(0,r.kt)("h2",{id:"generating-channel-ids"},"Generating Channel IDs"),(0,r.kt)("p",null,"To be able to add those messages to an user interface we will have to provide an API. We can start by creating random session IDs for communication channels:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Return random channel ID\napp.get('/channelId', (req: any, res: any) => {\n    const {client1, client2} = req.query\n    const channelId = topicPrefix + btoa(client1 + '_' + client2 + '_' + new Date().getTime)\n    res.json({ channelId })\n})\n")),(0,r.kt)("p",null,"This creates an Express route that returns a unique, randomly generated, ID for each pair of clients:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \'http://localhost:8888/channelId?client1=me&client2=you\'\n\n{"channelId":"msg/bWVfeW91X2Z1bmN0aW9uIGdldFRpbWUoKSB7IFtuYXRpdmUgY29kZV0gfQ=="}\n')),(0,r.kt)("h2",{id:"angular-frontend"},"Angular Frontend"),(0,r.kt)("p",null,"Scaffold the Angular app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @angular/cli\nng new frontend\ncd frontend\nng generate library msg-server\n")),(0,r.kt)("p",null,"This will create a library for our message server in ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend/projects/msg-server/src/lib")," that we need to import as ",(0,r.kt)("strong",{parentName:"p"},"MsgServer")," module in ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend/src/app/app.module.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { MsgServerModule } from 'projects/msg-server/src/public-api';\n\nimport { AppRoutingModule } from './app-routing.module';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    AppRoutingModule,\n    MsgServerModule\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n")),(0,r.kt)("p",null,"Now remove all the placeholder HTML from ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend/src/app/app.component.html")," and replace it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<lib-msg-server></lib-msg-server>\n\n<router-outlet></router-outlet>\n")),(0,r.kt)("p",null,"Run the app ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," and verify that it is running on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4200/")," - you should see a simple ",(0,r.kt)("strong",{parentName:"p"},"msg-server works! "),"."),(0,r.kt)("p",null,"We can now replace this HTML with a code snippit from ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/virgilpana/pen/ZYZXgP"},"codepen.io"),". The line we saw above is generated in ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend/projects/msg-server/src/lib/msg-server.component.ts")," which we can replace with our template code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'lib-msg-server',\n  templateUrl: './msg-server.component.html',\n  styleUrls: [\n    './msg-server.component.html'\n  ]\n})\nexport class MsgServerComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit(): void {\n  }\n\n}\n")),(0,r.kt)("p",null,"And copy&paste the code from ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/virgilpana/pen/ZYZXgP"},"codepen.io"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTML into ",(0,r.kt)("inlineCode",{parentName:"li"},"frontend/projects/msg-server/src/lib/msg-server.component.html")),(0,r.kt)("li",{parentName:"ul"},"CSS into ",(0,r.kt)("inlineCode",{parentName:"li"},"frontend/projects/msg-server/src/lib/msg-server.component.css"))),(0,r.kt)("p",null,"And make changes as you see fit to the HTL and CSS."),(0,r.kt)("h2",{id:"connecting-the-frontend"},"Connecting the Frontend"),(0,r.kt)("p",null,"Install the following library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install ngx-mqtt\nnpm install ngx-mqtt-chat\n")),(0,r.kt)("p",null,"Import it into ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend/projects/msg-server/src/lib/msg-server.module.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonModule } from '@angular/common';\nimport { NgModule } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\n\nimport { NgxMqttChatModule } from 'ngx-mqtt-chat';\nimport { MsgServerComponent } from './msg-server.component';\n\n\n\n@NgModule({\n  declarations: [\n    MsgServerComponent\n  ],\n  imports: [\n    CommonModule,\n    NgxMqttChatModule,\n    FormsModule\n  ],\n  exports: [\n    MsgServerComponent\n  ]\n})\n\nexport class MsgServerModule { }\n")),(0,r.kt)("p",null,"And provide the connection data for your MQTT Broker (the module only seems to support websockets and no authentication ?) in ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend/projects/msg-server/src/lib/msg-server.component.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Component, OnInit } from '@angular/core';\nimport { NgxMqttChatService } from 'ngx-mqtt-chat';\n\n@Component({\n  selector: 'lib-msg-server',\n  templateUrl: './msg-server.component.html',\n  styleUrls: [\n    './msg-server.component.css'\n  ]\n})\nexport class MsgServerComponent implements OnInit {\n  chatView=false;\n  constructor(\n      private messagingService: NgxMqttChatService\n    ) { }\n\n  ngOnInit(): void {\n    let mqtt = {\n      manageConnectionManually: false,\n      hostname: '192.168.2.111',\n      port: 1885,\n      path: ''\n    } as any\n    this.messagingService.connect(mqtt),\n      this.messagingService.publishToTopic(\n        'msg/bWVfeW91X2Z1bmN0aW9uIGdldFRpbWUoKSB7IFtuYXRpdmUgY29kZV0gfQ==',\n        { msg:\"Client connected...\" }\n    )\n  }\n\n}\n")),(0,r.kt)("p",null,"Here the messaging service is using the channel ID ",(0,r.kt)("inlineCode",{parentName:"p"},"msg/bWVfeW91X2Z1bmN0aW9uIGdldFRpbWUoKSB7IFtuYXRpdmUgY29kZV0gfQ==")," created earlier to publish a status message."),(0,r.kt)("h2",{id:"addendum"},"Addendum"),(0,r.kt)("h3",{id:"establishing-connections"},"Establishing Connections"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Express setup\nconst express = require('express')\nconst app = express()\nconst port = process.env.PORT || 8888\n\n// MongoDB setup\nconst mongoose = require('mongoose')\nconst mongoAuth = {\n    \"auth\": {\n        \"authSource\": \"admin\"\n    },\n    \"user\": \"root\",\n    \"pass\": \"example\"\n}\nconst mongoURL = 'mongodb://root:example@192.168.2.111:27017/?retryWrites=true&w=majority'\n\n\n// INSTAR MQTT Broker setup\nconst {connect} = require('mqtt')\nconst brokerURL = 'mqtt://192.168.2.115:1883'\nconst topicPrefix = 'msg/'\nconst options = {\n  // Clean session\n  clean: true,\n  connectTimeout: 4000,\n  // Auth\n  clientId: 'mqtt_msg',\n  username: 'admin',\n  password: 'admin',\n}\nconst client  = connect(brokerURL, options)\n\n\n// Msg Bot\nexport class MsgBot {\n    constructor() {\n        console.log('[INFO] :: Msg service is online')\n        this.initMqttListener()\n        this.initDB()\n    }\n\n    initDB() {\n        connect_db().catch(err => console.log('[ERROR] :: Database error', err));\n        async function connect_db() {\n            await mongoose.connect(mongoURL, mongoAuth);\n          }\n\n        const createCollection = mongoose.model('mqtt-msg', { name: String})\n\n        const test = new createCollection({ name: 'Msg Client'})\n        test.save().then(() => console.log('[INFO] :: Msg server connected to database'))\n    }\n\n    initMqttListener() {\n        console.log('[INFO] :: Msg server connecting to MQTT broker')\n\n        // MQTT Subscription\n        client.on('connect', function() {\n            console.log('[INFO] :: Connected to MQTT Broker ' + brokerURL)\n            client.subscribe(topicPrefix + '#', function(err: any) {\n                if (err) {\n                    console.log('[ERROR] :: MQTT error', err)\n                } else {\n                    client.publish(topicPrefix + 'heartbeat', 'Msg Service is online')\n                    console.log('[INFO] :: Topic', topicPrefix + 'heartbeat', 'was updated')\n                }\n            })\n        })\n\n        // Read MQTT Messages\n        client.on('message', function(topic: any, message: any) {\n            // Read topic/message from buffer\n            console.log('[MQTT] ::', topic.toString(), '\"' + message.toString() + '\"')\n            client.end()\n        })\n    }\n}\n\n\n// Run Webfront\napp.get('/', (req: any, res: any) => {\n    res.json({ server: \"running\", timestamp: new Date().getTime() })\n})\n\n\n// Webserver\napp.listen(port, () => {\n    console.log('[INFO] :: Webserver running on Port', port)\n\n    new MsgBot()\n})\n")),(0,r.kt)("h3",{id:"writing-messages-to-database"},"Writing Messages to Database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Express setup\nconst express = require('express')\nconst app = express()\nconst port = process.env.PORT || 8888\n\n// MongoDB setup\nconst mongoose = require('mongoose')\nconst mongoAuth = {\n    \"auth\": {\n        \"authSource\": \"admin\"\n    },\n    \"user\": \"root\",\n    \"pass\": \"example\"\n}\nconst mongoURL = 'mongodb://root:example@192.168.2.111:27017/?retryWrites=true&w=majority'\n\n\n// INSTAR MQTT Broker setup\nconst {connect} = require('mqtt')\nconst brokerURL = 'mqtt://192.168.2.115:1883'\nconst topicPrefix = 'msg/'\nconst options = {\n  // Clean session\n  clean: true,\n  connectTimeout: 4000,\n  // Auth\n  clientId: 'msg_server',\n  username: 'admin',\n  password: 'admin',\n}\nconst client  = connect(brokerURL, options)\n\n\n// Msg Bot\nexport class MsgBot {\n\n    constructor() {\n        console.log('[INFO] :: Msg service is online')\n        this.initMqttListener()\n        this.initDB()\n    }\n\n    initDB() {\n        connect_db().catch(err => console.log('[ERROR] :: Database error', err));\n        async function connect_db() {\n            await mongoose.connect(mongoURL, mongoAuth);\n          }\n    }\n\n    initMqttListener() {\n        console.log('[INFO] :: Msg server connecting to MQTT broker')\n\n        // MQTT Subscription\n        client.on('connect', function() {\n            console.log('[INFO] :: Connected to MQTT Broker ' + brokerURL)\n            client.subscribe(topicPrefix + '#', function(err: any) {\n                if (err) {\n                    console.log('[ERROR] :: MQTT error', err)\n                } else {\n                    client.publish(topicPrefix + 'server', JSON.stringify({ msg: 'Msg Service is online' }))\n                    console.log('[INFO] :: Topic', topicPrefix + 'server', 'was updated')\n                }\n            })\n        })\n\n        // Read MQTT Messages\n        client.on('message', function(topic: any, message: any) {\n            // Read topic/message from buffer\n            const msg = message.toString()\n            console.log('[MQTT] ::', topic.toString(), '\"' + msg + '\"')\n            // Write message to database\n            // Define Collection model\n            const msgModel = mongoose.model('mqtt-msg', { msg: String, createdOn: Date, topicId: String })\n            // Use JSON for messages\n            const msgObject = JSON.parse(msg)\n            // Add date to each message object\n            msgObject.createdOn = new Date()\n            // Add ID to each message object\n            msgObject.topicId = topic\n\n            new msgModel(msgObject).save().then(() => console.log('[INFO] :: Msg saved to database'))\n\n            client.end()\n        })\n    }\n}\n\n\n// Run Webfront\napp.get('/', (req: any, res: any) => {\n    res.json({ server: \"running\", timestamp: new Date().getTime() })\n})\n\n\n// Webserver\napp.listen(port, () => {\n    console.log('[INFO] :: Webserver running on Port', port)\n\n    new MsgBot()\n})\n")))}m.isMDXComponent=!0},50780:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-8ced3c54d38a6194434c5e7d8e5c77ba.jpg"}}]);