"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[95137],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),A=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=A(t.components);return a.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=A(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||l[u]||o;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var A=2;A<o;A++)i[A]=n[A];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82178:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>A});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:7010,slug:"2021-06-01",title:"MQTT Webfrontend with React.js",authors:"mpolinowski",tags:["React","MQTT"]},i=void 0,s={unversionedId:"Development/Javascript/2021-06-01--mqtt-with-reactjs/index",id:"Development/Javascript/2021-06-01--mqtt-with-reactjs/index",title:"MQTT Webfrontend with React.js",description:"Shenzhen, China",source:"@site/docs/Development/Javascript/2021-06-01--mqtt-with-reactjs/index.md",sourceDirName:"Development/Javascript/2021-06-01--mqtt-with-reactjs",slug:"/Development/Javascript/2021-06-01--mqtt-with-reactjs/2021-06-01",permalink:"/docs/Development/Javascript/2021-06-01--mqtt-with-reactjs/2021-06-01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2021-06-01--mqtt-with-reactjs/index.md",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"MQTT",permalink:"/docs/tags/mqtt"}],version:"current",sidebarPosition:7010,frontMatter:{sidebar_position:7010,slug:"2021-06-01",title:"MQTT Webfrontend with React.js",authors:"mpolinowski",tags:["React","MQTT"]},sidebar:"tutorialSidebar",previous:{title:"Mosquitto MQTT Cheat Sheet",permalink:"/docs/Development/Javascript/2021-06-02--mqtt-cheat-sheet/2021-06-02"},next:{title:"Carbon Design System in React.js - Part III",permalink:"/docs/Development/Javascript/2021-05-12-carbon-design-react-part3/2021-05-12"}},c={},A=[{value:"Setup your Project",id:"setup-your-project",level:2},{value:"Adding an MQTT Starter",id:"adding-an-mqtt-starter",level:3},{value:"Configuring the MQTT Components",id:"configuring-the-mqtt-components",level:3},{value:"Setting up the MQTT Broker",id:"setting-up-the-mqtt-broker",level:2},{value:"Activating Websockets",id:"activating-websockets",level:3},{value:"Testing",id:"testing",level:4},{value:"Testing the Webfrontend",id:"testing-the-webfrontend",level:2}],p={toc:A};function l(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shenzhen, China",src:n(16497).Z,width:"1500",height:"398"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-your-project"},"Setup your Project"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-an-mqtt-starter"},"Adding an MQTT Starter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuring-the-mqtt-components"},"Configuring the MQTT Components")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-the-mqtt-broker"},"Setting up the MQTT Broker"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#activating-websockets"},"Activating Websockets"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing"},"Testing")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing-the-webfrontend"},"Testing the Webfrontend"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/mqtt-frontend"},"Github Repository")),(0,r.kt)("h2",{id:"setup-your-project"},"Setup your Project"),(0,r.kt)("p",null,"Creating new React applications with ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/create-a-new-react-app.html"},"Create React App"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app mqtt-frontend\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mqttjs/MQTT.js/"},"MQTT.js")," to your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd mqtt-frontend\nnpm install mqtt\n")),(0,r.kt)("p",null,"I am going to work with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/emqx/MQTT-Client-Examples"},"React Sample by EMQX")," that is using the AntD Design system - so I will install it as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install antd\n")),(0,r.kt)("h3",{id:"adding-an-mqtt-starter"},"Adding an MQTT Starter"),(0,r.kt)("p",null,"I added the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/component")," folder from the EMQX example repository to my ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder and linked those MQTT components into ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport './App.css'\nimport HookMqtt from './components/MQTT_Hook/'\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <HookMqtt />\n    </div>\n  )\n}\n\nexport default App\n")),(0,r.kt)("p",null,"And changed the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.css")," file to use the AntD Design system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@import '~antd/dist/antd.css';\n\n.App {\n  background-color: #282c34;\n  min-height: 100vh;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App .ant-card {\n  width: 100%;\n  max-width: 850px;\n  margin-bottom: 20px;\n}\n\n.ant-form-inline .ant-form-item {\n  margin-bottom: 20px;\n}\n")),(0,r.kt)("h3",{id:"configuring-the-mqtt-components"},"Configuring the MQTT Components"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Connection")," component has some lines in it that allow you to hard code a default MQTT broker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Connection = ({ connect, disconnect, connectBtn }) => {\n  const [form] = Form.useForm();\n  const record = {\n    host: '192.168.2.77',\n    clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,\n    port: 1883,\n    username: 'admin',\n    password: 'instar'\n  };\n\n  ...\n\n}\n")),(0,r.kt)("p",null,"But once you start up the application you will have input fields to change those values on the fly. So nothing much to do here."),(0,r.kt)("h2",{id:"setting-up-the-mqtt-broker"},"Setting up the MQTT Broker"),(0,r.kt)("p",null,"First I will try out using the ",(0,r.kt)("a",{parentName:"p",href:"https://mosquitto.org/download/"},"Mosquitto Broker")," on Debian:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt-cache search mosquitto\napt install mosquitto\n")),(0,r.kt)("p",null,"And Mosquitto was successfully installed and is listening on the default port ",(0,r.kt)("inlineCode",{parentName:"p"},"1883"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"netstat -tlnp\n\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      464/sshd: /usr/sbin\ntcp        0      0 127.0.0.1:1883          0.0.0.0:*               LISTEN      1692/mosquitto\ntcp6       0      0 :::22                   :::*                    LISTEN      464/sshd: /usr/sbin\ntcp6       0      0 ::1:1883                :::*                    LISTEN      1692/mosquitto\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For the basic configuration of the Mosquitto Broker see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Development/Javascript/2021-06-02--mqtt-cheat-sheet/2021-06-02"},"Mosquitto MQTT Cheat Sheet"))),(0,r.kt)("h3",{id:"activating-websockets"},"Activating Websockets"),(0,r.kt)("p",null,"To be able to connect to our broker with a web client, we will have to activate the Websocket support first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/mosquitto/conf.d/custom.conf\n")),(0,r.kt)("p",null,"Here I already changed the default MQTT listener to port ",(0,r.kt)("inlineCode",{parentName:"p"},"1885"),". Now we need to add an additional port for the websocket listener:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"# Port to use for the default listener\nlistener 1885\n\nlistener 8885\nprotocol websockets\n")),(0,r.kt)("p",null,"Restart the service and check if the listener is in place:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"service mosquitto restart\n\nservice mosquitto status\nActive: active (running)\n\nnetstat -tlnp\n\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      581/sshd: /usr/sbin\ntcp        0      0 0.0.0.0:1885            0.0.0.0:*               LISTEN      30592/mosquitto\ntcp6       0      0 :::8885                 :::*                    LISTEN      30592/mosquitto\ntcp6       0      0 :::22                   :::*                    LISTEN      581/sshd: /usr/sbin\ntcp6       0      0 :::1885                 :::*                    LISTEN      30592/mosquitto\n")),(0,r.kt)("h4",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Before trying to connect make sure that the port can be accessed from an external client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ufw allow 8885/tcp\nufw allow 1885/tcp\n\nufw status\n\nTo                         Action      From\n--                         ------      ----\n1885/tcp                   ALLOW       Anywhere\n8885/tcp                   ALLOW       Anywhere\n")),(0,r.kt)("p",null,"Now you can use any client to connect to both the MQTT and Websocket interface and see if you can subscribe to topics:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mosquitto MQTT",src:n(33443).Z,width:"1763",height:"619"})),(0,r.kt)("h2",{id:"testing-the-webfrontend"},"Testing the Webfrontend"),(0,r.kt)("p",null,"Run the React code with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,r.kt)("p",null,"And open the web frontend inside your web browser ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mosquitto MQTT",src:n(82386).Z,width:"925",height:"387"})),(0,r.kt)("p",null,"Type in your broker address and login and click on ",(0,r.kt)("strong",{parentName:"p"},"Connect"),". Now :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Subscribe")," to a test topic."),(0,r.kt)("li",{parentName:"ol"},"Write a ",(0,r.kt)("strong",{parentName:"li"},"Message Payload")," for this topic"),(0,r.kt)("li",{parentName:"ol"},"And hit ",(0,r.kt)("strong",{parentName:"li"},"Publish")," to update the topic.")),(0,r.kt)("p",null,"Now you should receive the update in the ",(0,r.kt)("strong",{parentName:"p"},"Receiver")," box on the web frontend as well as in any other client you have connected - via MQTT or Websocket!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mosquitto MQTT",src:n(12829).Z,width:"869",height:"979"})))}l.isMDXComponent=!0},33443:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/MQTT_01-560d6267db86432462a0c2bf1bb0b42c.png"},82386:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},12829:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/MQTT_03-4b14227e563787da01a6eda377141b14.png"},16497:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4fe16a40417fdee099e3bb0f7fdc8ac6.jpg"}}]);