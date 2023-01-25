"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[8965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:5030,slug:"2022-05-27",title:"Hashicorp Nomad to set up an Elasticsearch Cluster",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","Elasticsearch"]},o=void 0,i={unversionedId:"DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/index",id:"DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/index",title:"Hashicorp Nomad to set up an Elasticsearch Cluster",description:"Shen Zhen, China",source:"@site/docs/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/index.md",sourceDirName:"DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic",slug:"/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/2022-05-27",permalink:"/docs/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/2022-05-27",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:5030,frontMatter:{sidebar_position:5030,slug:"2022-05-27",title:"Hashicorp Nomad to set up an Elasticsearch Cluster",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad to set up an Elasticsearch Cluster Part II",permalink:"/docs/DevOps/Hashicorp/2022-05-28-hashicorp-nomad-for-elastic-part-2/2022-05-28"},next:{title:"App Deployment with Hashicorp Nomad from Gitlab Part Deux",permalink:"/docs/DevOps/Hashicorp/2022-05-26-hashicorp-nomad-with-gitlab-part-2/2022-05-26"}},l={},c=[{value:"Data Persistence",id:"data-persistence",level:2},{value:"Client Configuration",id:"client-configuration",level:3},{value:"Job Specification",id:"job-specification",level:3},{value:"Nomad Job",id:"nomad-job",level:2},{value:"Docker-Compose",id:"docker-compose",level:3},{value:"Job Specification",id:"job-specification-1",level:3},{value:"Run the Job File",id:"run-the-job-file",level:3},{value:"Elasticsearch Error Messages",id:"elasticsearch-error-messages",level:4},{value:"Adding Update Parameter",id:"adding-update-parameter",level:3},{value:"Adding Consul Service Discovery",id:"adding-consul-service-discovery",level:3},{value:"Complete Job File",id:"complete-job-file",level:3}],p={toc:c};function h(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shen Zhen, China",src:n(90851).Z,width:"2230",height:"839"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#elasticsearch"},"Elasticsearch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#data-persistence"},"Data Persistence"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-configuration"},"Client Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#job-specification"},"Job Specification")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nomad-job"},"Nomad Job"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-compose"},"Docker-Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#job-specification-1"},"Job Specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-the-job-file"},"Run the Job File"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#elasticsearch-error-messages"},"Elasticsearch Error Messages")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-update-parameter"},"Adding Update Parameter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-consul-service-discovery"},"Adding Consul Service Discovery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#complete-job-file"},"Complete Job File"))))))),(0,r.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,r.kt)("h2",{id:"data-persistence"},"Data Persistence"),(0,r.kt)("h3",{id:"client-configuration"},"Client Configuration"),(0,r.kt)("p",null,"First we need to create a volume that allows us to persist the data ingested by Elasticsearch. Add the following configs in your ",(0,r.kt)("inlineCode",{parentName:"p"},"client.hcl")," file [",(0,r.kt)("a",{parentName:"p",href:"https://www.nomadproject.io/docs/drivers/docker#client-requirements"},"Plugin Stanza")," | ",(0,r.kt)("a",{parentName:"p",href:"https://www.nomadproject.io/docs/configuration/client#host_volume-stanza"},"Host Volume Stanza"),"]:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"nano /etc/nomad.d/client.hcl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\nclient {\n  enabled = true\n  servers = ["myhost:port"]\n  host_volume "letsencrypt" {\n    path = "/etc/letsencrypt"\n    read_only = true\n  }\n  host_volume "es_data" {\n    path = "/opt/es_data"\n    read_only = false\n  }\n}\n\n# Docker Configuration\nplugin "docker" {\n    volumes {\n      enabled = true\n    }\n}\n')),(0,r.kt)("p",null,"Restart the service ",(0,r.kt)("inlineCode",{parentName:"p"},"service nomad restart")," and verify that the volume was picked up (I already created the directory before restarting the service - I am not sure if this is necessary):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Nomad for Elasticsearch",src:n(5281).Z,width:"1049",height:"100"})),(0,r.kt)("h3",{id:"job-specification"},"Job Specification"),(0,r.kt)("p",null,"And then in the job specifications, inside the ",(0,r.kt)("strong",{parentName:"p"},"Group Stanza")," define the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nomadproject.io/docs/job-specification/volume#volume-interpolation"},"volume"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'volume "es_data" {\n     type      = "host"\n     read_only = false\n     source    = "es_data"\n}\n')),(0,r.kt)("p",null,"and then finally add following in the ",(0,r.kt)("strong",{parentName:"p"},"Task Stanza")," use the defined volume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'volume_mount {\n      volume      = "es_data"\n      destination = "/usr/share/elasticsearch/data" #<-- in the container\n      read_only   = false\n}\n')),(0,r.kt)("h2",{id:"nomad-job"},"Nomad Job"),(0,r.kt)("h3",{id:"docker-compose"},"Docker-Compose"),(0,r.kt)("p",null,"I have been using a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file before to set up a ELK cluster. The Elasticsearch part of looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'services:\n  elasticsearch:\n    container_name: elasticsearch\n    restart: always\n    build:\n      context: elasticsearch/\n      args:\n        ELK_VERSION: $ELK_VERSION\n    volumes:\n      - type: bind\n        source: ./elasticsearch/config/elasticsearch.yml\n        target: /usr/share/elasticsearch/config/elasticsearch.yml\n        read_only: true\n      - type: volume\n        source: elasticsearch\n        target: /usr/share/elasticsearch/data\n      - type: bind\n        source: /opt/wiki_elk/snapshots\n        target: /snapshots\n    # ports:\n    #   - "9200:9200"\n    #   - "9300:9300"\n    environment:\n      # ES_JAVA_OPTS: "-Xmx256m -Xms256m"\n      ES_JAVA_OPTS: \'-Xms2g -Xmx2g\'\n      ELASTIC_PASSWORD: \'supersecretpassword\'\n      # Use single node discovery in order to disable production mode and avoid bootstrap checks\n      # see https://www.elastic.co/guide/en/elasticsearch/reference/current/bootstrap-checks.html\n      discovery.type: single-node\n    networks:\n      - wikinet\n')),(0,r.kt)("p",null,"And the ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch.yml")," that is included in the image during the build process is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'---\n## Default Elasticsearch configuration from Elasticsearch base image.\n## https://github.com/elastic/elasticsearch/blob/master/distribution/docker/src/docker/config/elasticsearch.yml\n#\ncluster.name: "docker-cluster"\n# network.host: _site_\nnetwork.host: 0.0.0.0\n\n## X-Pack settings\n## see https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-xpack.html\n#\n# xpack.license.self_generated.type: trial\nxpack.license.self_generated.type: basic\nxpack.security.enabled: true\nxpack.monitoring.collection.enabled: true\nxpack.security.authc:\n    anonymous:\n      username: anonymous_user \n      roles: search_agent\n      authz_exception: true \n\n\n## CORS\nhttp.cors.enabled : true\nhttp.cors.allow-origin: "*"\nhttp.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE\nhttp.cors.allow-credentials: true\nhttp.cors.allow-headers: X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept\n\n## Snapshots\npath.repo: ["/snapshots"]\n')),(0,r.kt)("h3",{id:"job-specification-1"},"Job Specification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'job "wiki_elastic" {\n  datacenters = ["wiki_search"]\n\n  group "elasticsearch" {\n    count = 1\n\n    network {\n        port "http" {\n              static = 9200\n          }\n          port "tcp" {\n              static = 9300\n          }\n    }\n\n    service {\n      name = "elasticsearch"\n    }\n\n    volume "es_data" {\n      type      = "host"\n      read_only = false\n      source    = "es_data"\n    }\n\n    task "elastic_container" {\n      driver = "docker"\n      kill_timeout = "600s"\n      kill_signal = "SIGTERM"\n\n      env {\n        ES_JAVA_OPTS = "-Xms2g -Xmx2g"\n        ELASTIC_PASSWORD = "mysecretpassword"\n        discovery.type=single-node\n      }\n\n      template {\n          data = <<EOH\nnetwork.host: 0.0.0.0\nxpack.license.self_generated.type: basic\nxpack.security.enabled: true\nxpack.monitoring.collection.enabled: true\nxpack.security.authc:\n    anonymous:\n      username: anonymous_user \n      roles: search_agent\n      authz_exception: true \n      \nhttp.cors.enabled : true\nhttp.cors.allow-origin: "*"\nhttp.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE\nhttp.cors.allow-credentials: true\nhttp.cors.allow-headers: X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept\n\npath.repo: ["/snapshots"]\n          EOH\n  \n          destination = "local/elastic/elasticsearch.yml"\n        }\n\n      volume_mount {\n        volume      = "es_data"\n        destination = "/usr/share/elasticsearch/data" #<-- in the container\n        read_only   = false\n      }\n\n      config {\n        network_mode = "host"\n        image = "docker.elastic.co/elasticsearch/elasticsearch:8.3.2"\n        command = "elasticsearch"\n        ports = ["http","tcp"]\n        volumes = [\n          "local/elastic/snapshots:/snapshots",\n          "local/elastic/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml",\n        ]\n        args = [\n            "-Ecluster.name=wiki_elastic",\n            "-Ediscovery.type=single-node"\n        ]\n\n        ulimit {\n          memlock = "-1"\n          nofile = "65536"\n          nproc = "8192"\n        }\n      }\n\n      resources {\n        cpu    = 1000\n        memory = 4096\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"run-the-job-file"},"Run the Job File"),(0,r.kt)("h4",{id:"elasticsearch-error-messages"},"Elasticsearch Error Messages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java.lang.IllegalStateException: failed to obtain node locks, tried [/usr/share/elasticsearch/data]; maybe these locations are not writable\n")),(0,r.kt)("p",null,"Adjust write permission on volume mount:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod -R 775 /opt/es_data\nchown 1000:1000 -R /opt/es_data\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bootstrap check failure [1] of [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]\n")),(0,r.kt)("p",null,"Insert the new entry into the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," file with the required parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vm.max_map_count = 262144\n")),(0,r.kt)("p",null,"And run the following command to change the current state of kernel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sysctl -w vm.max_map_count=262144\n")),(0,r.kt)("p",null,"Restart Docker to take note:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart docker\n")),(0,r.kt)("p",null,"Restarting the job and this time it looks good! The container is running and the Elasticsearch ERROR log is quiet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\ndocker.elastic.co/elasticsearch/elasticsearch:8.3.2 Up 2 minutes elastic_container-ea01e380-f381-2ac6-d88d-84e6cdf223a2\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Nomad for Elasticsearch",src:n(22810).Z,width:"1209",height:"464"})),(0,r.kt)("h3",{id:"adding-update-parameter"},"Adding Update Parameter"),(0,r.kt)("p",null,"I want to add the Update Stanza:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'update {\n  max_parallel     = 1\n  health_check     = "checks"\n  min_healthy_time = "180s"\n  healthy_deadline = "5m"\n  progress_deadline = "10m"\n}\n')),(0,r.kt)("p",null,"But this time I am not going to add the force-pull parameter to the docker service. As I am only going to update this service when a new version of Elasticsearch is being released."),(0,r.kt)("h3",{id:"adding-consul-service-discovery"},"Adding Consul Service Discovery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'service {\n  \n  check {\n      name     = "rest-http"\n      type     = "http"\n      port     = "http"\n      path     = "/"\n      interval = "30s"\n      timeout  = "4s"\n      header {\n        Authorization = ["Basic ZWxhc3RpYzpjaGFuZ2VtZQ=="]\n      }\n    }\n}\n')),(0,r.kt)("p",null,"Here I am getting an error message for the HTTP Rest health check in Consul:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'HTTP GET http://my.elasticsearch:9200/: 403 Forbidden Output: {"error":{"root_cause":[{"type":"security_exception","reason":"action [cluster:monitor/main] is unauthorized for user [anonymous_user] with roles [search_agent], this action is granted by the cluster privileges [monitor,manage,all]"}],"type":"security_exception","reason":"action [cluster:monitor/main] is unauthorized for user [anonymous_user] with roles [search_agent], this action is granted by the cluster privileges [monitor,manage,all]"},"status":403}\n')),(0,r.kt)("p",null,"But why do I have to provide a user authentication? Is being turned down because of an invalid login not proof that the HTTP service is running? You can add the authentication headers like (s. below) But I think I will change the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," to an index that can be read without authentication later:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'service {\n  \n  check {\n      name     = "rest-http"\n      type     = "http"\n      port     = "http"\n      path     = "/"\n      interval = "30s"\n      timeout  = "4s"\n      header {\n        Authorization = ["Basic ZWxhc3RpYzpjaGFuZ2VtZQ=="]\n      }\n    }\n}\n')),(0,r.kt)("p",null,"You can also combine the HTTP with an TCP Check:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'service {\n  name = "elasticsearch"\n  check {\n    name     = "transport-tcp"\n    port     = "tcp"\n    type     = "tcp"\n    interval = "30s"\n    timeout  = "4s"\n  }\n  \n  # check {\n  #     name     = "rest-http"\n  #     type     = "http"\n  #     port     = "http"\n  #     path     = "/"\n  #     interval = "30s"\n  #     timeout  = "4s"\n  #   }\n}\n')),(0,r.kt)("h3",{id:"complete-job-file"},"Complete Job File"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'job "wiki_elastic" {\n  type        = "service"\n  datacenters = ["wiki_search"]\n\n  update {\n    max_parallel     = 1\n    health_check     = "checks"\n    min_healthy_time = "180s"\n    healthy_deadline = "5m"\n    progress_deadline = "10m"\n    auto_revert = true\n    auto_promote = true\n    canary = 1\n  }\n\n  group "elasticsearch" {\n    count = 1\n\n    network {\n        port "http" {\n              static = 9200\n          }\n          port "tcp" {\n              static = 9300\n          }\n    }\n\n    volume "es_data" {\n      type      = "host"\n      read_only = false\n      source    = "es_data"\n    }\n\n    task "elastic_container" {\n      driver = "docker"\n      kill_timeout = "600s"\n      kill_signal = "SIGTERM"\n\n      env {\n        ES_JAVA_OPTS = "-Xms2g -Xmx2g"\n        ELASTIC_PASSWORD = "mysecretpassword"\n      }\n\n      template {\n          data = <<EOH\nnetwork.host: 0.0.0.0\ncluster.name: wiki_elastic\ndiscovery.type: single-node\nxpack.license.self_generated.type: basic\nxpack.security.enabled: true\nxpack.monitoring.collection.enabled: true\nxpack.security.authc:\n    anonymous:\n      username: anonymous_user \n      roles: search_agent\n      authz_exception: true \n      \nhttp.cors.enabled : true\nhttp.cors.allow-origin: "*"\nhttp.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE\nhttp.cors.allow-credentials: true\nhttp.cors.allow-headers: X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept\n\npath.repo: ["/snapshots"]\n          EOH\n  \n          destination = "local/elastic/elasticsearch.yml"\n        }\n\n      volume_mount {\n        volume      = "es_data"\n        destination = "/usr/share/elasticsearch/data" #<-- in the container\n        read_only   = false\n      }\n\n      config {\n        network_mode = "host"\n        image = "docker.elastic.co/elasticsearch/elasticsearch:8.3.2"\n        command = "elasticsearch"\n        ports = ["http","tcp"]\n        volumes = [\n          "local/elastic/snapshots:/snapshots",\n          "local/elastic/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml",\n        ]\n        args = [\n            "-Ecluster.name=wiki_elastic",\n            "-Ediscovery.type=single-node"\n        ]\n\n        ulimit {\n          memlock = "-1"\n          nofile = "65536"\n          nproc = "8192"\n        }\n      }\n\n      service {\n        name = "elasticsearch"\n        check {\n          name     = "transport-tcp"\n          port     = "tcp"\n          type     = "tcp"\n          interval = "30s"\n          timeout  = "4s"\n        }\n        \n        # check {\n        #     name     = "rest-http"\n        #     type     = "http"\n        #     port     = "http"\n        #     path     = "/"\n        #     interval = "30s"\n        #     timeout  = "4s"\n        #     header {\n        #       Authorization = ["Basic ZWxhc3RpYzpjaGFuZ2VtZQ=="]\n        #     }\n        #   }\n      }\n\n      resources {\n        cpu    = 1000\n        memory = 4096\n      }\n    }\n  }\n}\n')))}h.isMDXComponent=!0},5281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Nomad_for_Elasticsearch_01-039c200b4288ebc02245f76087d2b12e.png"},22810:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Nomad_for_Elasticsearch_02-f6d84cf2653ff4ec3301e6ebaa4642e8.png"},90851:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);