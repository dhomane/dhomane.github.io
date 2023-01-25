"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[19999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=s.createContext({}),o=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(n),h=a,v=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?s.createElement(v,i(i({ref:t},p),{},{components:n})):s.createElement(v,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<r;o++)i[o]=n[o];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=n(87462),a=(n(67294),n(3905));const r={sidebar_position:8010,slug:"2021-08-09",title:"Hashicorp Consul Refresher - Services",authors:"mpolinowski",tags:["Consul","Linux"]},i=void 0,l={unversionedId:"DevOps/Hashicorp/2021-08-09--hashicorp-consul-services/index",id:"DevOps/Hashicorp/2021-08-09--hashicorp-consul-services/index",title:"Hashicorp Consul Refresher - Services",description:"Guangzhou, China",source:"@site/docs/DevOps/Hashicorp/2021-08-09--hashicorp-consul-services/index.md",sourceDirName:"DevOps/Hashicorp/2021-08-09--hashicorp-consul-services",slug:"/DevOps/Hashicorp/2021-08-09--hashicorp-consul-services/2021-08-09",permalink:"/docs/DevOps/Hashicorp/2021-08-09--hashicorp-consul-services/2021-08-09",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2021-08-09--hashicorp-consul-services/index.md",tags:[{label:"Consul",permalink:"/docs/tags/consul"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8010,frontMatter:{sidebar_position:8010,slug:"2021-08-09",title:"Hashicorp Consul Refresher - Services",authors:"mpolinowski",tags:["Consul","Linux"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Consul Refresher - Key Value Store",permalink:"/docs/DevOps/Hashicorp/2021-08-10--hashicorp-consul-key-value-store/2021-08-10"},next:{title:"Nomad Access Control Lists",permalink:"/docs/DevOps/Hashicorp/2021-08-08--hashicorp-nomad-access-control-lists/2021-08-08"}},c={},o=[{value:"Registering a Service",id:"registering-a-service",level:2},{value:"Service Definition",id:"service-definition",level:3},{value:"Health Checks",id:"health-checks",level:2},{value:"Types of Health Checks",id:"types-of-health-checks",level:3},{value:"Check Service Status",id:"check-service-status",level:2},{value:"DNS Request",id:"dns-request",level:3},{value:"Consul REST API",id:"consul-rest-api",level:3},{value:"Prepared Queries",id:"prepared-queries",level:4}],p={toc:o};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Guangzhou, China",src:n(3265).Z,width:"1500",height:"464"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#registering-a-service"},"Registering a Service"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#service-definition"},"Service Definition")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#health-checks"},"Health Checks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#types-of-health-checks"},"Types of Health Checks")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#check-service-status"},"Check Service Status"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#dns-request"},"DNS Request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#consul-rest-api"},"Consul REST API"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prepared-queries"},"Prepared Queries"))))))),(0,a.kt)("h2",{id:"registering-a-service"},"Registering a Service"),(0,a.kt)("p",null,"Services can registered with Consul as part of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2021-08-05--hashicorp-consul-service-discovery/2021-08-05"},"Nomand Job")," that sets them up. But you can also directly register a service with Consul using the REST API ",(0,a.kt)("inlineCode",{parentName:"p"},"consul services register")," with inline parameters or sending a separate service file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-config-file")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-config-dir")," flag. It can also be placed inside the Consul agent configuration directory and be read on start-up."),(0,a.kt)("h3",{id:"service-definition"},"Service Definition"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://www.consul.io/docs/discovery/services"},"service definition")," contains a set of parameters that specify various aspects of the service, including how it is discovered by other services in the network:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id"),": Name of the node. If not specified, the value of the name field will be used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),": Name of the service - use valid DNS labels for service definition names for compatibility with external DNSs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tags"),": List of string values that can be used to add service-level labels. Use valid DNS labels for service definition IDs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"address"),": \tString value that specifies a service-specific IP address or hostname. If no value is specified, the IP address of the agent node is used by default."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"port"),": Integer value that specifies a service-specific port number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"checks"),": Array of objects that define ",(0,a.kt)("a",{parentName:"li",href:"https://www.consul.io/docs/discovery/services#health-checks"},"health checks")," for the service.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/consul_services/test_service.hcl\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    "id": "webservice01",\n    "name": "webservice-test",\n    "tags": ["this", "is", "a", "test"],\n    "address": "192.168.2.111",\n    "port": 9200\n  }\n}\n')),(0,a.kt)("p",null,"This definition registers a web service running on port ",(0,a.kt)("inlineCode",{parentName:"p"},"9200"),". I am going to create this with Node.js module ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install httpster")," that allows me to quickly spin up a web service from my command line ",(0,a.kt)("strong",{parentName:"p"},"on the minion server 192.168.2.111"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"httpster -p 9200\n")),(0,a.kt)("p",null,"Back on my Consul master I can now register this service with Consul:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"consul services register ~/consul_services/test_service.hcl\n")),(0,a.kt)("p",null,"The new service immediately shows up as healthy in the nomad UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hashicorp Consul Services",src:n(55727).Z,width:"995",height:"262"})),(0,a.kt)("h2",{id:"health-checks"},"Health Checks"),(0,a.kt)("p",null,'But the consul is not yet keeping a eye on the service - even if you shut down the web server it will remain "green" since we don\'t have a health check configured:'),(0,a.kt)("h3",{id:"types-of-health-checks"},"Types of Health Checks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Application Level"),": Check if the service is still running."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"System Level"),": Check if the Node and Port is available.")),(0,a.kt)("p",null,"There are several different ",(0,a.kt)("a",{parentName:"p",href:"https://www.consul.io/docs/discovery/checks"},"kinds of checks"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scripts"),": These checks depend on invoking an external application that performs the health check, exits with an appropriate exit code, and potentially generates some output. A script is paired with an invocation interval"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"HTTP Status"),": These checks curl HTTP GET request to the specified URL, waiting the specified interval amount of time between requests. The status of the service depends on the HTTP response code: any ",(0,a.kt)("inlineCode",{parentName:"li"},"2xx")," code is considered passing, a ",(0,a.kt)("inlineCode",{parentName:"li"},"429")," ",(0,a.kt)("strong",{parentName:"li"},"Too ManyRequests")," is a warning, and anything else is a failure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TCP Connection"),': These checks make a TCP connection attempt to the specified IP/hostname and port, waiting interval amount of time between attempts. If no hostname is specified, it defaults to "localhost". '),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker"),": These checks depend on invoking an external application which is packaged within a Docker Container. The application is triggered within the running container via the Docker Exec API.")),(0,a.kt)("p",null,"So let's deregister the service and actually add a check to the service declaration that periodically checks if the web service is still online:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"consul services deregister ~/consul_services/test_service.hcl\nnano ~/consul_services/test_service.hcl\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    "id": "webservice01",\n    "name": "webservice-test",\n    "tags": ["this", "is", "a", "test"],\n    "address": "192.168.2.111",\n    "port": 9200,\n    "check": {\n      "id": "web",\n      "name": "check web service on port 9200",\n      "tcp": "192.168.2.111:9200",\n      "interval": "10s",\n      "timeout": "1s"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"And run the service again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"consul services register ~/consul_services/test_service.hcl\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hashicorp Consul Services",src:n(77905).Z,width:"999",height:"747"})),(0,a.kt)("p",null,"And this time we have both the verification that the Consul agent on our minion is running and the TCP Health Check telling us the web service is online. The latter will alert us within ",(0,a.kt)("inlineCode",{parentName:"p"},"10s")," when we shut down our web service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dial tcp 192.168.2.111:9200: connect: connection refused\n")),(0,a.kt)("h2",{id:"check-service-status"},"Check Service Status"),(0,a.kt)("h3",{id:"dns-request"},"DNS Request"),(0,a.kt)("p",null,"Consul provides an DNS Service that allows you to query for services, e.g. our ",(0,a.kt)("inlineCode",{parentName:"p"},"webservice-test.service.consul"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dig @192.168.2.110 -p 8600 webservice-test.service.consul\n\n; <<>> DiG 9.11.26-RedHat-9.11.26-4.el8_4 <<>> @192.168.2.110 -p 8600 webservice-test.service.consul\n\n;; ANSWER SECTION:\nwebservice-test.service.consul. 0 IN    A       192.168.2.111\n")),(0,a.kt)("p",null,"The response tells us that there was one server found on IP ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.2.111")," that provides the service ",(0,a.kt)("inlineCode",{parentName:"p"},"webservice-test"),"."),(0,a.kt)("h3",{id:"consul-rest-api"},"Consul REST API"),(0,a.kt)("p",null,"Alternatively, you can send a GET request to the Consul API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request GET http://192.168.2.110:8500/v1/catalog/service/webservice-test\n\n[{"ID":"d561f8d4-9606-8c9c-40d4-a5350857801e","Node":"consul-master","Address":"192.168.2.110","Datacenter":"instaryun","TaggedAddresses":{"lan":"192.168.2.110","lan_ipv4":"192.168.2.110","wan":"192.168.2.110","wan_ipv4":"192.168.2.110"},"NodeMeta":{"consul-network-segment":""},"ServiceKind":"","ServiceID":"webservice01","ServiceName":"webservice-test","ServiceTags":["this","is","a","test"],"ServiceAddress":"192.168.2.111","ServiceTaggedAddresses":{"lan_ipv4":{"Address":"192.168.2.111","Port":9200},"wan_ipv4":{"Address":"192.168.2.111","Port":9200}},"ServiceWeights":{"Passing":1,"Warning":1},"ServiceMeta":{},"ServicePort":9200,"ServiceSocketPath":"","ServiceEnableTagOverride":false,"ServiceProxy":{"Mode":"","MeshGateway":{},"Expose":{}},"ServiceConnect":{},"CreateIndex":10150,"ModifyIndex":10150}]%\n')),(0,a.kt)("h4",{id:"prepared-queries"},"Prepared Queries"),(0,a.kt)("p",null,"You can also write common queries down into files as ",(0,a.kt)("a",{parentName:"p",href:"https://www.consul.io/api-docs/query"},"Prepared Queries")," and run them from there - ",(0,a.kt)("inlineCode",{parentName:"p"},"nano ~/consul_services/prepared-query.hcl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Name": "thisisatest",\n  "Service": {\n    "Service": "webservice-test",\n    "Tags": ["this","is","a","test"]\n  }\n}\n')),(0,a.kt)("p",null,"You can register this query through the Consul REST API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST --data @prepared-query.hcl http://192.168.2.110:8500/v1/query\n\n{"ID":"d3b2063d-df45-7649-c0ec-e3d671deced3"}% \n')),(0,a.kt)("p",null,"And the query was saved under the ",(0,a.kt)("strong",{parentName:"p"},"ID")," ",(0,a.kt)("inlineCode",{parentName:"p"},"d3b2063d-df45-7649-c0ec-e3d671deced3"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'curl --request GET http://192.168.2.110:8500/v1/query/d3b2063d-df45-7649-c0ec-e3d671deced3 | jq\n\n[\n  {\n    "ID": "d3b2063d-df45-7649-c0ec-e3d671deced3",\n    "Name": "thisisatest",\n    "Session": "",\n    "Token": "",\n    "Template": {\n      "Type": "",\n      "Regexp": "",\n      "RemoveEmptyTags": false\n    },\n    "Service": {\n      "Service": "webservice-test",\n      "Failover": {\n        "NearestN": 0,\n        "Datacenters": null\n      },\n      "OnlyPassing": false,\n      "IgnoreCheckIDs": null,\n      "Near": "",\n      "Tags": [\n        "this",\n        "is",\n        "a",\n        "test"\n      ],\n      "NodeMeta": null,\n      "ServiceMeta": null,\n      "Connect": false\n    },\n    "DNS": {\n      "TTL": ""\n    },\n    "CreateIndex": 10622,\n    "ModifyIndex": 10622\n  }\n]\n')),(0,a.kt)("p",null,"We can now use this query, under it's registered name ",(0,a.kt)("inlineCode",{parentName:"p"},"thisisatest"),", in our applications to find an address where the service ",(0,a.kt)("inlineCode",{parentName:"p"},"webservice-test")," is hosted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dig @192.168.2.110 -p 8600 thisisatest.query.consul\n\n;; ANSWER SECTION:\nthisisatest.query.consul. 0     IN      A       192.168.2.111\n")),(0,a.kt)("p",null,"And the server that is a best match is ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.2.111"),"."),(0,a.kt)("p",null,"To update the query - e.g. if we want our application to start using the version 2 of our webservice - we just have to update the prepared query file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Name": "thisisatest",\n  "Service": {\n    "Service": "webservice-test",\n    "Tags": ["this","is","a","test", "v2"]\n  }\n}\n')),(0,a.kt)("p",null,"and then use PUT to upload the update to Consul:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request PUT --data @prepared-query.hcl http://192.168.2.110:8500/v1/query/d3b2063d-df45-7649-c0ec-e3d671deced3\n")))}u.isMDXComponent=!0},55727:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Hashicorp_Consul_Services_01-0c3cd6732325b63b8df4b3c2709bbc94.png"},77905:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Hashicorp_Consul_Services_02-d221e0d037fd15fb81ff283507dd718e.png"},3265:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-93003c28ff7bc4ddb754375440d588dd.jpg"}}]);