"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[82608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||o;return n?i.createElement(f,s(s({ref:t},p),{},{components:n})):i.createElement(f,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:8090,slug:"2021-04-30",title:"Slack Notifications for Ansible Tower (AWX)",authors:"mpolinowski",tags:["LINUX"]},s=void 0,r={unversionedId:"DevOps/Ansible/2021-04-30-ansible-tower-slack-notifications/index",id:"DevOps/Ansible/2021-04-30-ansible-tower-slack-notifications/index",title:"Slack Notifications for Ansible Tower (AWX)",description:"Guangzhou, China",source:"@site/docs/DevOps/Ansible/2021-04-30-ansible-tower-slack-notifications/index.md",sourceDirName:"DevOps/Ansible/2021-04-30-ansible-tower-slack-notifications",slug:"/DevOps/Ansible/2021-04-30-ansible-tower-slack-notifications/2021-04-30",permalink:"/docs/DevOps/Ansible/2021-04-30-ansible-tower-slack-notifications/2021-04-30",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Ansible/2021-04-30-ansible-tower-slack-notifications/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8090,frontMatter:{sidebar_position:8090,slug:"2021-04-30",title:"Slack Notifications for Ansible Tower (AWX)",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Ansible Tower Workflow Templates",permalink:"/docs/DevOps/Ansible/2021-05-01-ansible-tower-workflow-templates/2021-05-01"},next:{title:"Setting up Ansible Tower (AWX)",permalink:"/docs/DevOps/Ansible/2021-04-29-ansible-tower-setup/2021-04-29"}},l={},c=[{value:"Slack App",id:"slack-app",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Guangzhou, China",src:n(64656).Z,width:"1500",height:"548"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#slack-app"},"Slack App"))),(0,a.kt)("h2",{id:"slack-app"},"Slack App"),(0,a.kt)("p",null,"I will set up a Slack Bot to handle the Ansible Tower notifications for me. First we have to ",(0,a.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"create a new Slack App"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(41223).Z,width:"960",height:"247"})),(0,a.kt)("p",null,"Enter a name for your App and assign it to a workspace:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(64045).Z,width:"960",height:"572"})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth and Permissions")," on the left:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(93873).Z,width:"960",height:"429"})),(0,a.kt)("p",null,"Scroll down to Scopes and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add an OAuth Scope")," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"chat:write"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(29019).Z,width:"945",height:"584"})),(0,a.kt)("p",null,"Scroll to the top and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Install App to Workspace"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(43501).Z,width:"960",height:"553"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Allow"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(52529).Z,width:"960",height:"520"})),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Bot User OAuth Access Token")," click ",(0,a.kt)("strong",{parentName:"p"},"copy"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(3820).Z,width:"960",height:"385"})),(0,a.kt)("p",null,"Paste the token in AWX Slack Notification Token box:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(86527).Z,width:"930",height:"472"})),(0,a.kt)("p",null,"And back in the Slack UI you will now see your new bot - add it to the channel you created for Ansible Tower:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(58360).Z,width:"806",height:"353"})),(0,a.kt)("p",null,"And back in the Slack UI you will now see your new bot - add it to the channel you created for Ansible Tower:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(15305).Z,width:"960",height:"266"})),(0,a.kt)("p",null,"Back in the Ansible Tower settings you are now able to send your first test notification!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Ansible Tower (AWX)",src:n(75413).Z,width:"1017",height:"724"})))}u.isMDXComponent=!0},41223:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_04-6b71796aaa77e2f9431ff5eae4610fb3.png"},64045:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_05-ae7d099f26a444b2afd95a2027f5f87c.png"},93873:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_06-a551d99f183bf13e182737e4528c3f1c.png"},29019:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_07-c45ec3f8ba49f3306b4eb09fd3bb1c86.png"},43501:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_08-b56cc9640ffcca3050033555632db724.png"},52529:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_09-7a9bcf29e8e628c2f3c8f649266c77a2.png"},3820:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_10-c8f76e9638c601566ebad4c411b22468.png"},86527:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_11-311518e28f3f70afcbc6ac560c7821c1.png"},58360:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_12-7c8bd40d31dac04ea37085c2568e5e22.png"},15305:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_13-a4ac3637251f47c0a6d00621e84201fc.png"},75413:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Ansible_Tower_14-ee8c1288aa01e149974cdd28405d58a0.png"},64656:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-d37bc443f3bf639e3410fefe86c7dd5e.jpg"}}]);