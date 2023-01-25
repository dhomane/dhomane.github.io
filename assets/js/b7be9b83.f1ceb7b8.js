"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[21479],{3905:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>u});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},m=function(e){var o=p(e.components);return n.createElement(s.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return t?n.createElement(k,i(i({ref:o},m),{},{components:t})):n.createElement(k,i({ref:o},m))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8187:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const a={sidebar_position:8030,slug:"2019-09-24",title:"Installing ioBroker on CentOS8 with Podman",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT","Docker"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2019-09-24--iobroker-podman-centos8/index",id:"IoT-and-Machine-Learning/Home_Automation/2019-09-24--iobroker-podman-centos8/index",title:"Installing ioBroker on CentOS8 with Podman",description:"Shanghai, China",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2019-09-24--iobroker-podman-centos8/index.mdx",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2019-09-24--iobroker-podman-centos8",slug:"/IoT-and-Machine-Learning/Home_Automation/2019-09-24--iobroker-podman-centos8/2019-09-24",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2019-09-24--iobroker-podman-centos8/2019-09-24",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2019-09-24--iobroker-podman-centos8/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8030,frontMatter:{sidebar_position:8030,slug:"2019-09-24",title:"Installing ioBroker on CentOS8 with Podman",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Zigbee Sensors in FHEM",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2019-01-05--zigbee2mqtt-xiaomi-fhem/2019-01-05"},next:{title:"OpenHAB2 and MQTT",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2018-12-01--openhab2-on-debian/2018-12-01"}},s={},p=[{value:"Installation through Podman on CentOS8",id:"installation-through-podman-on-centos8",level:2},{value:"Persist your Configuration",id:"persist-your-configuration",level:3}],m={toc:p};function c(e){let{components:o,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shanghai, China",src:t(9099).Z,width:"1500",height:"783"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation-through-podman-on-centos8"},"Installation through Podman on CentOS8"))),(0,r.kt)("h2",{id:"installation-through-podman-on-centos8"},"Installation through Podman on CentOS8"),(0,r.kt)("p",null,"IoBroker for Docker is an Dockerimage for ",(0,r.kt)("a",{parentName:"p",href:"http://www.iobroker.net"},"ioBroker IoT platform"),"."),(0,r.kt)("p",null,"The automatically built images are available on ",(0,r.kt)("a",{parentName:"p",href:"hhttps://github.com/buanet/docker-iobroker"},"Docker Hub"),". Download the image with one of the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull buanet/iobroker:latest\n")),(0,r.kt)("p",null,"And and run it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman run -p 8081:8081 --name iobroker buanet/iobroker:latest\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ioBroker CentOS8 Podman",src:t(7903).Z,width:"825",height:"572"})),(0,r.kt)("h3",{id:"persist-your-configuration"},"Persist your Configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find out your container ID (or just use the name you have assigned when running the image)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman ps \nCONTAINER ID  IMAGE                                     COMMAND               CREATED         STATUS             PORTS                             NAMES\n5582e69da175  localhost/buanet/iobroker:latest          /opt/scripts/iobr...  13 minutes ago  Up 13 minutes ago  0.0.0.0:8081->8081/tcp            iobroker\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Get into the container and find the ioBroker location")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@CentOS8 ~]# podman exec -ti 5582e69da175 /bin/bash\nroot@5582e69da175:/opt/iobroker# find / -name iobroker\n/etc/sudoers.d/iobroker\n/home/iobroker\n/opt/iobroker\n/opt/iobroker/iobroker\n/usr/bin/iobroker\n/iobroker\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Stop and delete the container and change to runscript to mount the folder onto your host system:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman stop iobroker\npodman rm iobroker\npodman run -p 8081:8081 \\\n  -p 8082:8082 \\\n  -p 8087:8087 \\\n  -p 1883:1883 \\\n  --name iobroker \\\n   -v /opt/iobroker:/opt/iobroker \\\n   -v /opt/iobroker/home:/home/iobroker \\\n  --detach=true \\\n  --restart='always' \\\n  buanet/iobroker:latest\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Port ",(0,r.kt)("inlineCode",{parentName:"p"},"8082")," added for ioBroker visualization, port ",(0,r.kt)("inlineCode",{parentName:"p"},"8087")," for the REST API and port ",(0,r.kt)("inlineCode",{parentName:"p"},"1883")," for MQTT.")),(0,r.kt)("p",null,"Make sure that the folders ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/iobroker/home")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/iobroker")," exist on your host system (",(0,r.kt)("inlineCode",{parentName:"p"},"chmod -R 777 /opt/iobroker")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"755")," to give Podman all necessary permissions and ",(0,r.kt)("inlineCode",{parentName:"p"},"chcon -Rt svirt_sandbox_file_t /opt/motioneye"),")."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I noticed a problem that podman changes the owner:group of those folders on my host system to iobroker:iobroker. But it sets the permission wrong and ioBroker no longer loads - you can check it with ",(0,r.kt)("inlineCode",{parentName:"p"},"podman logs iobroker"),". Rerunning ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod -R 777 /opt/iobroker")," solves the issue.")))}c.isMDXComponent=!0},7903:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/ioBroker_CentOS8_Podman_01-45a7e6bb2e723f100e3b4fa82d93f02f.png"},9099:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-02e8518ad61483adf50687ea006a1f17.jpg"}}]);