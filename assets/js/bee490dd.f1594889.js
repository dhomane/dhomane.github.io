"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[23399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:9040,slug:"2019-01-12",title:"Centos Network Configuration",authors:"mpolinowski",tags:["LINUX"]},i=void 0,l={unversionedId:"DevOps/Linux/2019-01-12--centos-network-configuration/index",id:"DevOps/Linux/2019-01-12--centos-network-configuration/index",title:"Centos Network Configuration",description:"Battambang, Cambodia",source:"@site/docs/DevOps/Linux/2019-01-12--centos-network-configuration/index.mdx",sourceDirName:"DevOps/Linux/2019-01-12--centos-network-configuration",slug:"/DevOps/Linux/2019-01-12--centos-network-configuration/2019-01-12",permalink:"/docs/DevOps/Linux/2019-01-12--centos-network-configuration/2019-01-12",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-01-12--centos-network-configuration/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2019-01-12",title:"Centos Network Configuration",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Centos Administration",permalink:"/docs/DevOps/Linux/2019-01-13--centos-administration/2019-01-13"},next:{title:"Ubuntu Server Cannot Stop Docker Container",permalink:"/docs/DevOps/Linux/2019-01-11--ubuntu-server-app-armour/2019-01-11"}},s={},c=[{value:"Change DNS Server Manually",id:"change-dns-server-manually",level:2},{value:"DNS Settings using the NetworkManager",id:"dns-settings-using-the-networkmanager",level:2},{value:"Default gateway on CentOS",id:"default-gateway-on-centos",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Battambang, Cambodia",src:n(65389).Z,width:"1500",height:"640"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#change-dns-server-manually"},"Change DNS Server Manually")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dns-settings-using-the-networkmanager"},"DNS Settings using the NetworkManager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-gateway-on-centos"},"Default gateway on CentOS"))),(0,r.kt)("h2",{id:"change-dns-server-manually"},"Change DNS Server Manually"),(0,r.kt)("p",null,"Check current DNS Server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/resolv.conf\n")),(0,r.kt)("p",null,"You can change the nameserver IP address by editing this file. ",(0,r.kt)("strong",{parentName:"p"},"Note")," that your edit is going to be overwritten by the ",(0,r.kt)("strong",{parentName:"p"},"NetworkManager")," again once you restart your server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano  /etc/resolv.conf\n")),(0,r.kt)("p",null,"Edit/update nameserver entry as follows (you can set maximum 3 nameserver IP address):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Generated by NetworkManager\nsearch fritz.box\nnameserver 192.168.2.1\nnameserver 192.168.2.5\n")),(0,r.kt)("h2",{id:"dns-settings-using-the-networkmanager"},"DNS Settings using the NetworkManager"),(0,r.kt)("p",null,"Run the following nmcli command to view your network interfaces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@CentOS8 ~]# nmcli connection\n\nNAME     UUID                                  TYPE      DEVICE  \ndocker0  09eef622-55b4-4d6e-9ee1-a05c1e8d5e69  bridge    docker0 \nenp2s0   280ed14d-7c8b-4586-853d-420df9f65412  ethernet  enp2s0  \n")),(0,r.kt)("p",null,"To set up DNS IP address to ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.2.1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.2.5"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmcli con mod {interfaceNameHere} ipv4.dns '192.168.2.254 192.168.2.18'\n")),(0,r.kt)("p",null,"For the case above this would be ",(0,r.kt)("inlineCode",{parentName:"p"},"nmcli con mod enp2s0 ipv4.dns '192.168.2.1 192.168.2.5'")),(0,r.kt)("p",null,"Reload new DNS settings by running any one of the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl restart NetworkManager.service\n")),(0,r.kt)("h2",{id:"default-gateway-on-centos"},"Default gateway on CentOS"),(0,r.kt)("p",null,"On CentOS you can check the routing table with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@CentOS8 ~]# route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         192.168.2.5     0.0.0.0         UG    100    0        0 enp2s0\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0\n192.168.2.0     0.0.0.0         255.255.255.0   U     100    0        0 enp2s0\n")),(0,r.kt)("p",null,"The last line of the table indicates the default gateway of the machine. In this case the default gateway for the ",(0,r.kt)("strong",{parentName:"p"},"enp2s0")," interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.2.5"),". Or alternatively use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@CentOS8 ~]# ip route show\ndefault via 192.168.2.5 dev enp2s0 proto static metric 100 \n172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 \n192.168.2.0/24 dev enp2s0 proto kernel scope link src 192.168.2.111 metric 100\n")),(0,r.kt)("p",null,"You can control default gateway using route command - temporarely (will default back on your next rebood):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"route del default gw <default_gateway_ip>\nroute add default gw <default_gateway_ip>\n")),(0,r.kt)("p",null,"Or you can use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ip route replace default via <default_gateway_ip> dev enp2s0\n")),(0,r.kt)("p",null,"To change default gateway permanently update ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/ifcfg-{interfaceNameHere}")," accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@CentOS8 ~]# nano /etc/sysconfig/network-scripts/ifcfg-enp2s0\nGATEWAY=192.168.2.5\n")))}p.isMDXComponent=!0},65389:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-19196703263_69f9f0df5f_o-14170a50fbe2ab4a9cbd78f18092a158.jpg"}}]);