"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[61567],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return a?t.createElement(b,r(r({ref:n},d),{},{components:a})):t.createElement(b,r({ref:n},d))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22812:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=a(87462),i=(a(67294),a(3905));const l={sidebar_position:8020,slug:"2021-03-30",title:"Elasticsearch 7 and Filebeats",authors:"mpolinowski",tags:["LINUX","Elasticsearch","Docker"]},r=void 0,s={unversionedId:"DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/index",id:"DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/index",title:"Elasticsearch 7 and Filebeats",description:"Harbin, China",source:"@site/docs/DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/index.md",sourceDirName:"DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats",slug:"/DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/2021-03-30",permalink:"/docs/DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/2021-03-30",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8020,frontMatter:{sidebar_position:8020,slug:"2021-03-30",title:"Elasticsearch 7 and Filebeats",authors:"mpolinowski",tags:["LINUX","Elasticsearch","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Elastic Filebeat and Apache Access Logs",permalink:"/docs/DevOps/Elasticsearch/2021-03-31-elastic-filebeats-for-apache-logs/2021-03-31"},next:{title:"Elasticsearch 7 Data Transformation",permalink:"/docs/DevOps/Elasticsearch/2021-03-29-elasticsearch7-data-transformations/2021-03-29"}},o={},c=[{value:"Installation",id:"installation",level:2},{value:"Setting Up Elasticsearch",id:"setting-up-elasticsearch",level:3},{value:"Setting Up Kibana",id:"setting-up-kibana",level:3},{value:"Setting Up Filebeat",id:"setting-up-filebeat",level:3},{value:"Using Filebeats Modules",id:"using-filebeats-modules",level:2}],d={toc:c};function p(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Harbin, China",src:a(81438).Z,width:"1500",height:"597"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-elasticsearch"},"Setting Up Elasticsearch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-kibana"},"Setting Up Kibana")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-filebeat"},"Setting Up Filebeat")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-filebeats-modules"},"Using Filebeats Modules"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Start by pulling the a fresh version of Elasticsearch, Kibana, (Logstash) and Filebeat:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://www.docker.elastic.co/r/elasticsearch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://www.docker.elastic.co/r/kibana")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://www.docker.elastic.co/r/logstash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://www.docker.elastic.co/r/beats")," ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull docker.elastic.co/elasticsearch/elasticsearch:7.14.0-amd64\ndocker pull docker.elastic.co/kibana/kibana:7.14.0-amd64\ndocker pull docker.elastic.co/logstash/logstash-oss:7.14.0-arm64\ndocker pull docker.elastic.co/beats/filebeat-oss:7.14.0-amd64\n")),(0,i.kt)("p",null,"I will create a folder ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir -p /opt/beats/config/")," and continue working from there."),(0,i.kt)("h3",{id:"setting-up-elasticsearch"},"Setting Up Elasticsearch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/beats/config/elasticsearch.yml\n")),(0,i.kt)("p",null,"I will use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/elastic/dockerfiles/blob/7.14/elasticsearch/config/elasticsearch.yml"},"default Elasticsearch config")," and might edit it later on:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'cluster.name: "elastic-cluster"\nnetwork.host: 0.0.0.0\nxpack.security.enabled: false\nxpack.monitoring.enabled: false\nxpack.enrich.enabled: false\ndiscovery.type: "single-node"\nbootstrap.memory_lock: true\n')),(0,i.kt)("p",null,"I will run the docker container on my host network:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  --name elasticsearch \\\n  --net=host \\\n  -v /opt/beats/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \\\n  docker.elastic.co/elasticsearch/elasticsearch:7.14.0-amd64\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To persist your Elasticsearch data add another volume: ",(0,i.kt)("inlineCode",{parentName:"p"},"-v /opt/beats/esdata:/usr/share/elasticsearch/data"))),(0,i.kt)("p",null,"Wait a few second and verify that Elasticsearch is running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:9200                   \n{\n  "name" : "debian11",\n  "cluster_name" : "elastic-cluster",\n  "cluster_uuid" : "JJ4wNCADSmq8_xT_BKhMdw",\n  "version" : {\n    "number" : "7.14.0",\n    "build_flavor" : "default",\n    "build_type" : "docker",\n    "build_hash" : "dd5a0a2acaa2045ff9624f3729fc8a6f40835aa1",\n    "build_date" : "2021-07-29T20:49:32.864135063Z",\n    "build_snapshot" : false,\n    "lucene_version" : "8.9.0",\n    "minimum_wire_compatibility_version" : "6.8.0",\n    "minimum_index_compatibility_version" : "6.0.0-beta1"\n  },\n  "tagline" : "You Know, for Search"\n}\n')),(0,i.kt)("h3",{id:"setting-up-kibana"},"Setting Up Kibana"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/beats/config/kibana.yml\n")),(0,i.kt)("p",null,"I will use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/elastic/dockerfiles/blob/7.14/kibana/config/kibana.yml"},"default Kibana config")," and might edit it later on:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'server.host: "0"\nserver.shutdownTimeout: "5s"\nelasticsearch.hosts: [ "http://localhost:9200" ]\n# elasticsearch.username: "elastic"\n# elasticsearch.password: "changeme"\nxpack.monitoring.elasticsearch.username: "elastic"\nxpack.monitoring.elasticsearch.password: "changeme"\nmonitoring.ui.container.elasticsearch.enabled: true\n')),(0,i.kt)("p",null,"I will run the docker container on my host network:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  --name kibana \\\n  --net=host \\\n  -v /opt/beats/config/kibana.yml:/usr/share/kibana/config/kibana.yml \\\n  docker.elastic.co/kibana/kibana:7.14.0-amd64\n")),(0,i.kt)("p",null,"Check if everything is connecting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker logs kibana\n\n...\n\n{"type":"log","@timestamp":"2021-08-09T06:44:07+00:00","tags":["info","status"],"pid":1213,"message":"Kibana is now available (was unavailable)"}\n')),(0,i.kt)("p",null,"Make sure that you can access your Elastic Cluster from another system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ufw allow 9200/tcp\nufw allow 5601/tcp\n")),(0,i.kt)("p",null,"And open the Kibana frontend inside your web browser:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"http://","[my-cluster-ip]",":5601/app/home#/")),(0,i.kt)("h3",{id:"setting-up-filebeat"},"Setting Up Filebeat"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/beats/config/filebeat.yml\n")),(0,i.kt)("p",null,"I will use the ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/elastic/beats/7.8/deploy/docker/filebeat.docker.yml"},"default Filebeat config")," and might edit it later on:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"filebeat.config:\n  modules:\n    path: ${path.config}/modules.d/*.yml # enable all modules (nginx, kafka, redis, etc)\n    reload.enabled: false\n\nfilebeat.autodiscover: # auto-discover tagged docker container\n  providers:\n    - type: docker\n      hints.enabled: true\n\nprocessors:\n# - add_cloud_metadata: ~ # for AWS, GCO, Azure etc.\n- add_docker_metadata: ~ # add docker metadata (container id, name, image and labels)\n\noutput.elasticsearch:\n  hosts: 'localhost:9200'\n  username: 'elastic'\n  password: 'changeme'\n")),(0,i.kt)("p",null,"The beat configuration file must belong to the root user and all write permissions for other users must be revoked:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chown root:root /opt/beats/config/filebeat.yml\nchmod go-w /opt/beats/config/filebeat.yml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"-rw-r--r-- 1 root root  202 14:36 elasticsearch.yml\n-rw-r--r-- 1 root root  511 15:04 filebeat.yml\n-rw-r--r-- 1 root root  250 14:43 kibana.yml\n")),(0,i.kt)("p",null,"We need tp bind the location of docker container directory ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/containers")," and our docker socket ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/run/docker.sock")," to the container (",(0,i.kt)("strong",{parentName:"p"},"Why? EDIT: For the Docker auto-discovery - remember to run container as ",(0,i.kt)("inlineCode",{parentName:"strong"},"root")," user!"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  --name filebeat \\\n  --user root \\\n  --net=host \\\n  -v /opt/beats/config/filebeat.yml:/usr/share/filebeat/filebeat.yml \\\n  -v /var/lib/docker/containers:/var/lib/docker/containers:ro \\\n  -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n  docker.elastic.co/beats/filebeat-oss:7.14.0-amd64\n")),(0,i.kt)("p",null,"Check if everything started  up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs filebeat\n\n...\n\n2021-08-09T07:15:53.744Z INFO Index Alias filebeat-7.14.0 successfully created.\n2021-08-09T07:15:53.745Z INFO Connection to backoff(elasticsearch(http://localhost:9200)) established\n")),(0,i.kt)("p",null,"Switch over to ",(0,i.kt)("strong",{parentName:"p"},"Kibana")," and you should see that new indices were created:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Elastic Stack Filebeat",src:a(69671).Z,width:"1262",height:"177"})),(0,i.kt)("p",null,"The created index hauls plenty of information about your docker cluster:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Elastic Stack Filebeat",src:a(96422).Z,width:"1527",height:"765"})),(0,i.kt)("h2",{id:"using-filebeats-modules"},"Using Filebeats Modules"),(0,i.kt)("p",null,"As mentioned before, Filebeat comes with a bunch ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules.html"},"Filebeat Modules")," that we can use to keep an eye on running containers. All that is needed to, e.g. feeding the webserver log of an ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-module-nginx.html"},"NGINX Container into Elasticsearch"),", is to tag the container with ",(0,i.kt)("inlineCode",{parentName:"p"},"co.elastic.logs/module=nginx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --label co.elastic.logs/module=nginx --name ingress -d -p 8080:80 nginx:1.21.1-alpine\n")),(0,i.kt)("p",null,"You can test that the container is running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps --filter 'label=co.elastic.logs/module=nginx'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'curl localhost:8080\n\n<!DOCTYPE html>\n<html>\n<head>\n<title>Welcome to nginx!</title>\n<style>\n    body {\n        width: 35em;\n        margin: 0 auto;\n        font-family: Tahoma, Verdana, Arial, sans-serif;\n    }\n</style>\n</head>\n<body>\n<h1>Welcome to nginx!</h1>\n<p>If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required.</p>\n\n<p>For online documentation and support please refer to\n<a href="http://nginx.org/">nginx.org</a>.<br/>\nCommercial support is available at\n<a href="http://nginx.com/">nginx.com</a>.</p>\n\n<p><em>Thank you for using nginx.</em></p>\n</body>\n</html>\n')),(0,i.kt)("p",null,'I could not find the "Refresh Button" that should be in the ',(0,i.kt)("strong",{parentName:"p"},"Index Pattern")," menu in Kibana - so I rebuild the pattern and filtered for my ingress:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Elastic Stack Filebeat",src:a(96422).Z,width:"1527",height:"765"})),(0,i.kt)("p",null,"A typical NGINX event looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_index": "filebeat-7.14.0-2021.08.09-000001",\n  "_type": "_doc",\n  "_id": "Wx4gKnsBSe-TBw4pQoBr",\n  "_score": 1,\n  "_source": {\n    "container": {\n      "image": {\n        "name": "nginx:1.21.1-alpine"\n      },\n      "name": "ingress",\n      "id": "0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a",\n      "labels": {\n        "co_elastic_logs/module": "nginx",\n        "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"\n      }\n    },\n    "agent": {\n      "hostname": "debian11",\n      "name": "debian11",\n      "id": "c73ef337-3347-4bf7-a753-9b11c3d48c3c",\n      "type": "filebeat",\n      "ephemeral_id": "6bfa1f1f-917c-4bc6-9aa5-3b447362fab6",\n      "version": "7.14.0"\n    },\n    "log": {\n      "file": {\n        "path": "/var/lib/docker/containers/0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a/0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a-json.log"\n      },\n      "offset": 3343\n    },\n    "fileset": {\n      "name": "ingress_controller"\n    },\n    "error": {\n      "message": "Provided Grok expressions do not match field value: [192.168.2.110 - - [09/Aug/2021:08:55:58 +0000] \\\\\\"GET /favicon.ico HTTP/1.1\\\\\\" 404 555 \\\\\\"http://192.168.2.111:8080/\\\\\\" \\\\\\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36\\\\\\" \\\\\\"-\\\\\\"]"\n    },\n    "docker": {\n      "container": {\n        "labels": {\n          "co_elastic_logs/module": "nginx",\n          "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"\n        }\n      }\n    },\n    "input": {\n      "type": "container"\n    },\n    "@timestamp": "2021-08-09T08:55:58.767Z",\n    "ecs": {\n      "version": "1.10.0"\n    },\n    "stream": "stdout",\n    "service": {\n      "type": "nginx"\n    },\n    "host": {\n      "name": "debian11"\n    },\n    "event": {\n      "ingested": "2021-08-09T08:56:02.398057609Z",\n      "original": "192.168.2.110 - - [09/Aug/2021:08:55:58 +0000] \\"GET /favicon.ico HTTP/1.1\\" 404 555 \\"http://192.168.2.111:8080/\\" \\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36\\" \\"-\\"",\n      "timezone": "+00:00",\n      "module": "nginx",\n      "dataset": "nginx.ingress_controller"\n    }\n  },\n  "fields": {\n    "container.id": [\n      "0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a"\n    ],\n    "service.type": [\n      "nginx"\n    ],\n    "agent.type": [\n      "filebeat"\n    ],\n    "container.name": [\n      "ingress"\n    ],\n    "container.image.name": [\n      "nginx:1.21.1-alpine"\n    ],\n    "event.module": [\n      "nginx"\n    ],\n    "stream": [\n      "stdout"\n    ],\n    "kubernetes.container.image": [\n      "nginx:1.21.1-alpine"\n    ],\n    "agent.name": [\n      "debian11"\n    ],\n    "host.name": [\n      "debian11"\n    ],\n    "event.timezone": [\n      "+00:00"\n    ],\n    "docker.container.labels.maintainer": [\n      "NGINX Docker Maintainers <docker-maint@nginx.com>"\n    ],\n    "event.original": [\n      "192.168.2.110 - - [09/Aug/2021:08:55:58 +0000] \\"GET /favicon.ico HTTP/1.1\\" 404 555 \\"http://192.168.2.111:8080/\\" \\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36\\" \\"-\\""\n    ],\n    "fileset.name": [\n      "ingress_controller"\n    ],\n    "input.type": [\n      "container"\n    ],\n    "log.offset": [\n      3343\n    ],\n    "agent.hostname": [\n      "debian11"\n    ],\n    "docker.container.labels.co_elastic_logs/module": [\n      "nginx"\n    ],\n    "container.labels.maintainer": [\n      "NGINX Docker Maintainers <docker-maint@nginx.com>"\n    ],\n    "container.labels.co_elastic_logs/module": [\n      "nginx"\n    ],\n    "event.ingested": [\n      "2021-08-09T08:56:02.398Z"\n    ],\n    "@timestamp": [\n      "2021-08-09T08:55:58.767Z"\n    ],\n    "agent.id": [\n      "c73ef337-3347-4bf7-a753-9b11c3d48c3c"\n    ],\n    "ecs.version": [\n      "1.10.0"\n    ],\n    "error.message": [\n      "Provided Grok expressions do not match field value: [192.168.2.110 - - [09/Aug/2021:08:55:58 +0000] \\\\\\"GET /favicon.ico HTTP/1.1\\\\\\" 404 555 \\\\\\"http://192.168.2.111:8080/\\\\\\" \\\\\\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36\\\\\\" \\\\\\"-\\\\\\"]"\n    ],\n    "log.file.path": [\n      "/var/lib/docker/containers/0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a/0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a-json.log"\n    ],\n    "agent.ephemeral_id": [\n      "6bfa1f1f-917c-4bc6-9aa5-3b447362fab6"\n    ],\n    "agent.version": [\n      "7.14.0"\n    ],\n    "event.dataset": [\n      "nginx.ingress_controller"\n    ]\n  }\n}\n')))}p.isMDXComponent=!0},69671:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Elastic_Filebeat_01-c6f4cad33b73846096825b0d6d34c170.png"},96422:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Elastic_Filebeat_02-69c06419130d3d0b996848d1094a574c.png"},81438:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-7ac1ba107242c2ede8e267aedc6dfc19.jpg"}}]);