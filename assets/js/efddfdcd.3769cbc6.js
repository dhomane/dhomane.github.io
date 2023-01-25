"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[87279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5020,slug:"2022-10-27",title:"OSticket REST API Calls",authors:"mpolinowski",tags:["LINUX","Docker","osTicket"],description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service"},s=void 0,i={unversionedId:"DevOps/Provisioning/2022-10-27--os-ticket-rest-api/index",id:"DevOps/Provisioning/2022-10-27--os-ticket-rest-api/index",title:"OSticket REST API Calls",description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service",source:"@site/docs/DevOps/Provisioning/2022-10-27--os-ticket-rest-api/index.md",sourceDirName:"DevOps/Provisioning/2022-10-27--os-ticket-rest-api",slug:"/DevOps/Provisioning/2022-10-27--os-ticket-rest-api/2022-10-27",permalink:"/docs/DevOps/Provisioning/2022-10-27--os-ticket-rest-api/2022-10-27",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2022-10-27--os-ticket-rest-api/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"osTicket",permalink:"/docs/tags/os-ticket"}],version:"current",sidebarPosition:5020,frontMatter:{sidebar_position:5020,slug:"2022-10-27",title:"OSticket REST API Calls",authors:"mpolinowski",tags:["LINUX","Docker","osTicket"],description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service"},sidebar:"tutorialSidebar",previous:{title:"Deploy a cPhalcon App with Docker",permalink:"/docs/DevOps/Provisioning/2022-11-07--cphalcon-docker/2022-11-07"},next:{title:"Provision OSticket with Docker",permalink:"/docs/DevOps/Provisioning/2022-10-16--os-ticket-docker/2022-10-16"}},c={},p=[{value:"Generate an API Key",id:"generate-an-api-key",level:2},{value:"GET Request",id:"get-request",level:2},{value:"POST Request",id:"post-request",level:2},{value:"Run Cron Job",id:"run-cron-job",level:3},{value:"Post a Ticket",id:"post-a-ticket",level:3},{value:"Use Python to Post Tickets",id:"use-python-to-post-tickets",level:2}],l={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shenzhen, China",src:n(71687).Z,width:"1500",height:"567"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#generate-an-api-key"},"Generate an API Key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#get-request"},"GET Request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#post-request"},"POST Request"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-cron-job"},"Run Cron Job")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#post-a-ticket"},"Post a Ticket")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-python-to-post-tickets"},"Use Python to Post Tickets"))),(0,a.kt)("h2",{id:"generate-an-api-key"},"Generate an API Key"),(0,a.kt)("p",null,"Access to the HTTP API is restricted to valid API keys. An X-API-Key HTTP header must be sent to indicate which API key is to be used with the request. The API key must match the remote IP of the connected HTTP client. The remote IP is checked as usual. If the osTicket server is sitting behind a reverse proxy, the original IP of the client will be retrieved from the X-Forwarded-For header, if provided by your proxy."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Admin Panel / Manage / API / Add new API key")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OSticket REST API Calls",src:n(15443).Z,width:"957",height:"188"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OSticket REST API Calls",src:n(24486).Z,width:"958",height:"388"})),(0,a.kt)("h2",{id:"get-request"},"GET Request"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"X-API-Key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BA00B76BAA30F62E1940B46CC1C3C73C"))),(0,a.kt)("p",null,"Make an empty GET request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -d "{}" -H "X-API-Key: BA00B76BAA30F62E1940B46CC1C3C73C" "https://support.you.tld/api/tickets.json"\nNo errors\n')),(0,a.kt)("h2",{id:"post-request"},"POST Request"),(0,a.kt)("h3",{id:"run-cron-job"},"Run Cron Job"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "X-API-Key: BA00B76BAA30F62E1940B46CC1C3C73C" "https://support.you.tld/api/tasks/cron" \nAPI key not authorized\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OSticket REST API Calls",src:n(63203).Z,width:"955",height:"96"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "X-API-Key: BA00B76BAA30F62E1940B46CC1C3C73C" "https://support.you.tld/api/tasks/cron"\nCompleted\n')),(0,a.kt)("h3",{id:"post-a-ticket"},"Post a Ticket"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "X-API-KEY: BA00B76BAA30F62E1940B46CC1C3C73C" -d \'{"alert": true, "autorespond": true, "source": "API", "topicId": 1, "name": "User Name", "email": "user@noemail.com", "subject": "Testing API", "message": "data:text/html,<h2>Good day!</h2><br/><p>My device is broken.<b>AGAIN!</b></p><p>I did not change anything!</p><br/><p>But after the last firmware update I am no longer able to start it.</p><p><b>Are you testing your firmware AT ALL before releasing it?????</b></p>", "attachments": [{"filename.txt": "data:text/plain;charset=utf-8,content of attachment"}]}\' https://support.you.tld/api/tickets.json\n602343\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OSticket REST API Calls",src:n(98185).Z,width:"959",height:"286"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UTF-8")," Encoding:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "X-API-KEY: 3DE660A1A575EBD6D17F4517B5378C90" -v -d \'{"alert": true, "autorespond": true, "source": "API", "topicId": 1, "name": "Very Angry User", "email": "me@noemail.com", "phone": "123456768", "subject": "T\xe4sting s\xed API", "message": "data:text/html;charset=utf-8,<h2>G\xf3od d\xe4y!</h2><br/><p>My device is br\xf6ken.<b>\xc4GAIN!</b></p><p>I did not ch\xe4nge \xe4nything!</p><br/><p>B\xfct \xe4fter the last firmware \xfcpdate I am n\xf6 l\xf6nger \xe4ble to st\xe4rt it.</p><p><b>\xc4re y\xf3u testing y\xf6\xfcr firmw\xe4re AT ALL bef\xf6re rele\xe4sing it?????</b></p>", "attachments": [{"feilen\xe4m.txt": "data:text/plain;charset=utf-8,c\xf6nt\xe4nt \xfcf att\xe4chm\xe4nt"}]}\' https://time.instar.com/api/tickets.json\n')),(0,a.kt)("h2",{id:"use-python-to-post-tickets"},"Use Python to Post Tickets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nurl = "https://support.you.tld/api/tickets.json"\nkey = "BA00B76BAA30F62E1940B46CC1C3C73C"\n\nheaders = {\n        "Accept":"application/json",\n        "X-API-KEY":key\n    }\n\ndata = {"name":"Angry User",\n"email":"api@osticket.com",\n"phone":"3185558634X123",\n"subject": "Testing API",\n"ip": "123.211.233.122",\n"message":"data:text/html,<h2>Good day!</h2><br/><p>My device is broken.<b>AGAIN!</b></p><p>I did not change anything!</p><br/><p>But after the last firmware update I am no longer able to start it.</p><p><b>Are you testing your firmware AT ALL before releasing it?????</b></p>",\n"attachments": [{"attachment.txt": "data:text/plain;charset=utf-8,content of attachment"}],\n"topicId": 1,\n"autorepsond":True,\n"alert": True,\n"source": "API"}\n\n\ndef createTicket():\n\n    r = requests.post(url=url,json=data,headers=headers)\n\n    print(\'INFO :: Request Status Code: \', r.status_code)\n\n    if (r.status_code < 200 or r.status_code >= 300):\n        return False\n\n    print(\'INFO :: Ticket Number: \', r.json())\n    return True\n\n\ncreateTicket()\n')),(0,a.kt)("p",null,"Run the script on localhost:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python ./main.py\nINFO :: Request Status Code:  201\nINFO :: Ticket Number:  208979\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OSticket REST API Calls",src:n(65605).Z,width:"954",height:"695"})))}u.isMDXComponent=!0},15443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OSTicket_REST_API_01-6c54351dc1a2d58ff3ab34c0e58940b1.png"},24486:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OSTicket_REST_API_02-0dbc233dbab928abf6727a29c86ce1de.png"},63203:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OSTicket_REST_API_03-1cffd4dd0da183872bd317a0c6836c8a.png"},98185:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OSTicket_REST_API_04-74c0e8e96f7daf3394bb64385eb480a5.png"},65605:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OSTicket_REST_API_05-ccad64948dd2dc6c41dd6487d98dbb99.png"},71687:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-983e9af3d84f5fb9ebad02646e63767d.jpg"}}]);