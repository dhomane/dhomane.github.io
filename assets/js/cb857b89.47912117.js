"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[72810],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:4080,slug:"2022-09-22",title:"Secure Timeserver - Deploying a NTS Server using Hashicorp Nomad",authors:"mpolinowski",tags:["LINUX","Security","Nomad","Consul","NTS"],description:"In the previous step I deployed Chrony using Docker Compose. This time I try to migrate the deployment to Nomad & Consul."},i=void 0,s={unversionedId:"DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/index",id:"DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/index",title:"Secure Timeserver - Deploying a NTS Server using Hashicorp Nomad",description:"In the previous step I deployed Chrony using Docker Compose. This time I try to migrate the deployment to Nomad & Consul.",source:"@site/docs/DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/index.md",sourceDirName:"DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver",slug:"/DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/2022-09-22",permalink:"/docs/DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/2022-09-22",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Security",permalink:"/docs/tags/security"},{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"NTS",permalink:"/docs/tags/nts"}],version:"current",sidebarPosition:4080,frontMatter:{sidebar_position:4080,slug:"2022-09-22",title:"Secure Timeserver - Deploying a NTS Server using Hashicorp Nomad",authors:"mpolinowski",tags:["LINUX","Security","Nomad","Consul","NTS"],description:"In the previous step I deployed Chrony using Docker Compose. This time I try to migrate the deployment to Nomad & Consul."},sidebar:"tutorialSidebar",previous:{title:"NGINX Ingress with Nomad",permalink:"/docs/DevOps/Hashicorp/2022-09-24--nomad-nginx-ingress/2022-09-24"},next:{title:"Hashicorp Waypoint with Nomad",permalink:"/docs/DevOps/Hashicorp/2022-06-08-hashicorp-waypoint-nomad/2022-06-09"}},l={},c=[{value:"From Compose to Nomad",id:"from-compose-to-nomad",level:2},{value:"Installation",id:"installation",level:3},{value:"Hashicorp Nomad",id:"hashicorp-nomad",level:4},{value:"Hashicorp Consul",id:"hashicorp-consul",level:4},{value:"Creating the Nomad Job File",id:"creating-the-nomad-job-file",level:2},{value:"Testing",id:"testing",level:3},{value:"Debugging",id:"debugging",level:4},{value:"Solution",id:"solution",level:4},{value:"Final Nomad Job File",id:"final-nomad-job-file",level:2}],p={toc:c};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TST, Hong Kong",src:t(12790).Z,width:"1500",height:"517"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#from-compose-to-nomad"},"From Compose to Nomad"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#hashicorp-nomad"},"Hashicorp Nomad")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#hashicorp-consul"},"Hashicorp Consul")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-the-nomad-job-file"},"Creating the Nomad Job File"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#testing"},"Testing"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#debugging"},"Debugging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#solution"},"Solution")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#final-nomad-job-file"},"Final Nomad Job File"))),(0,o.kt)("h2",{id:"from-compose-to-nomad"},"From Compose to Nomad"),(0,o.kt)("p",null,"I now have a ",(0,o.kt)("a",{parentName:"p",href:"https://mpolinowski.github.io/docs/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/2022-09-21"},"timeserver with NTS support")," that I can deploy using Docker-Compose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.9'\n\nservices:\n  chrony:\n    build: .\n    image: cturra/ntp:latest\n    container_name: chrony\n    restart: unless-stopped\n    volumes:\n      - type: bind\n        source: /opt/docker-ntp/assets/startup.sh\n        target: /opt/startup.sh\n      - type: bind\n        source: /etc/letsencrypt/live/my.server.domain/fullchain.pem\n        target: /opt/fullchain.pem\n      - type: bind\n        source: /etc/letsencrypt/live/my.server.domain/privkey.pem\n        target: /opt/privkey.pem\n    ports:\n      - 123:123/udp\n      - 4460:4460/tcp\n    environment:\n      - NTP_SERVERS=0.de.pool.ntp.org,time.cloudflare.com,time1.google.com\n      - LOG_LEVEL=0\n")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"First I need to add the new Timeserver to my Nomad & Consul Cluster. So let's install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nomadproject.io/docs/install"},"Nomad")," and ",(0,o.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/consul/get-started-install"},"Consul")," Clients using the Debian package manager:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\nsudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"\nsudo apt update && sudo apt install nomad consul\n')),(0,o.kt)("h4",{id:"hashicorp-nomad"},"Hashicorp Nomad"),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"Client Configuration")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nomad.d/client.hcl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'## https://www.nomadproject.io/docs/agent/configuration\nname = "nts"\ndatacenter = "chronyNTS"\ndata_dir = "/opt/nomad/data"\nbind_addr = "0.0.0.0"\n\nadvertise {\n  http = "127.0.0.1"\n  rpc  = "my.client-server.ip"\n  serf = "my.client-server.ip"\n}\n\nports {\n  http = http.port.as.configured.in.your.cluster\n  rpc  = rpc.port.as.configured.in.your.cluster\n  serf = serf.port.as.configured.in.your.cluster \n}\n\nclient {\n  enabled = true\n  servers = ["my.nomad.master:port"]\n\n  host_volume "letsencrypt" {\n    path = "/etc/letsencrypt"\n    read_only = false\n  }\n}\n\nserver {\n  enabled = false\n}\n\nacl {\n  enabled = true\n}\n\n\n# Require TLS\ntls {\n  http = true\n  rpc  = true\n\n  ca_file   = "/etc/nomad.d/tls/nomad-ca.pem"\n  cert_file = "/etc/nomad.d/tls/client.pem"\n  key_file  = "/etc/nomad.d/tls/client-key.pem"\n\n  verify_server_hostname = true\n  verify_https_client    = true\n}\n\n# Docker Configuration\nplugin "docker" {\n\n  volumes {\n    enabled      = true\n    selinuxlabel = "z"\n  }\n\n  allow_privileged = false\n  allow_caps       = ["chown", "net_raw"]\n\n}\n\n## https://www.nomadproject.io/docs/agent/configuration/index.html#log_level\n## [WARN|INFO|DEBUG]\nlog_level = "WARN"\nlog_rotate_duration = "30d"\nlog_rotate_max_files = 12\n')),(0,o.kt)("p",null,"Make sure to copy your TLS configuration (ca-cert, client-cert and client-key) to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nomad.d/tls")," and that the data directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/nomad/data")," is available. It is very important to add the ",(0,o.kt)("strong",{parentName:"p"},"Docker Plugin")," configuration and enable volumes here. This way we can now point a ",(0,o.kt)("inlineCode",{parentName:"p"},"host_volume")," to the Let's Encrypt certificates we need to mount into our container."),(0,o.kt)("h4",{id:"hashicorp-consul"},"Hashicorp Consul"),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"Client Configuration")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/consul.d/consul.hcl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Full configuration options can be found at https://www.consul.io/docs/agent/config\ndatacenter = "consul"\ndata_dir = "/opt/consul"\nclient_addr = "127.0.0.1"\nserver = false\nbind_addr = "my.client-server.ip"\nencrypt = "mysecretencryptionkey"\nretry_join = ["my.nomad.master"]\n\n# TLS configuration\ntls {\n  defaults {\n    ca_file = "/etc/consul.d/tls/consul-agent-ca.pem"\n  }\n  internal_rpc {\n    verify_server_hostname = true\n  }\n}\n\nauto_encrypt {\n    tls = true\n }\n\n# ACL configuration\nacl {\n  enabled = true\n  default_policy = "deny"\n  enable_token_persistence = true\n}\n\n# Performance\nperformance {\n  raft_multiplier = 1\n}\n\nports {\n  grpc  = port.as.configured.in.your.cluster\n  dns = port.as.configured.in.your.cluster\n  http = port.as.configured.in.your.cluster\n  https = port.as.configured.in.your.cluster\n  serf_lan = port.as.configured.in.your.cluster\n  serf_wan = port.as.configured.in.your.cluster\n  server = port.as.configured.in.your.cluster\n}\n')),(0,o.kt)("p",null,"Make sure to copy your TLS configuration (ca_file) to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/consul.d/tls")," and that the data directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/consul")," is available."),(0,o.kt)("h2",{id:"creating-the-nomad-job-file"},"Creating the Nomad Job File"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"chrony","_","nts.nomad")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"ERROR"),': This file is still has an issue - the container is run with "network_mode=host" which causes an issue with the mounted TLS certificate. And there was another issue with the ',(0,o.kt)("inlineCode",{parentName:"p"},"mount")," configuration itself. You can find corrected job file at the end of this article!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'job "chrony_nts" {\n    datacenters = ["chronyNTS"]\n    type = "service"\n\n    group "docker" {\n        # Only start 1 instance\n        count = 1\n        # Set static ports\n        network {\n            mode = "host"\n            port "ntp" {\n                static = "123"\n            }\n            port "nts" {\n                static = "4460"\n            }\n        }\n        # Do canary updates\n        update {\n            max_parallel = 1\n            min_healthy_time = "10s"\n            healthy_deadline = "2m"\n            progress_deadline = "5m"\n            auto_revert = true\n            auto_promote = true\n            canary = 1\n        }\n        # Register the service with Consul\n        service {\n            name = "NTS"\n            port = "nts"\n\n            check {\n                name = "NTS Service"\n                type = "tcp"\n                interval = "10s"\n                timeout = "1s"\n            }\n        }\n        # Add the let\'s encrypt volume\n        # volume "letsencrypt" {\n        #     type      = "host"\n        #     read_only = false\n        #     source    = "letsencrypt"\n        # }\n\n        task "chrony_container" {\n            driver = "docker"\n            # Docker environment variables\n            env {\n                NTP_SERVERS = "0.de.pool.ntp.org,time.cloudflare.com,time1.google.com"\n                LOG_LEVEL = "1"\n            }\n            # Mount the let\'s encrypt certificates\n            # volume_mount {\n            #     volume      = "letsencrypt"\n            #     destination = "/opt/letsencrypt"\n            #     read_only   = false\n            # }\n\n            config {\n                image = "my.gitlab.com:12345/chrony-nts:latest"\n                ports = ["ntp", "nts"]\n                network_mode = "host"\n                force_pull = true\n                \n                mount {\n                  type = "bind"\n                  target = "/opt/letsencrypt"\n                  source = "/etc/letsencrypt/live"\n                  readonly = false\n                  bind_options {\n                    propagation = "rshared"\n                }\n\n                auth {\n                    username = "mygitlabuser"\n                    password = "password"\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")," that the volume is now mounted to ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/letsencrypt")," inside the container. So we have to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"startup.sh")," ",(0,o.kt)("a",{parentName:"p",href:"https://mpolinowski.github.io/docs/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/2022-09-21#enable-nts-on-the-server"},"script for Chrony")," and rebuild the container:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# final bits for the config file\n{\n  echo\n  echo "driftfile /var/lib/chrony/chrony.drift"\n  echo "makestep 0.1 3"\n  echo "rtcsync"\n  echo\n  echo "ntsserverkey /opt/letsencrypt/live/my.server.com/privkey.pem"\n  echo "ntsservercert /opt/letsencrypt/live/my.server.com/fullchain.pem"\n  echo "ntsprocesses 3"\n  echo "maxntsconnections 512"\n  echo "ntsdumpdir /var/lib/chrony"\n  echo\n  echo "allow all"\n} >> ${CHRONY_CONF_FILE}\n')),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Great so let's ",(0,o.kt)("inlineCode",{parentName:"p"},"nomad plan chrony_nts.nomad")," and run the job. It starts up but my old friend is back:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Secure Timeserver - Deploying a NTS Server using Hashicorp Nomad",src:t(25010).Z,width:"1122",height:"363"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"2022-09-22T13:18:50Z Could not set credentials : Error while reading file.\n2022-09-22T13:18:50Z Could not set credentials : Error while reading file.\n2022-09-22T13:18:50Z Could not set credentials : Error while reading file.\n")),(0,o.kt)("p",null,"The Let's Encrypt certificates cannot be read by Chrony and the NTS connection fails with a bad handshake (but NTP works fine):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chronyd -Q -t 3 'server my.server.com iburst nts maxsamples 1'\n\n2022-09-23T06:33:34Z chronyd version 4.2 starting (+CMDMON +NTP +REFCLOCK +RTC +PRIVDROP -SCFILTER +SIGND +ASYNCDNS +NTS +SECHASH +IPV6 -DEBUG)\n2022-09-23T06:33:34Z Disabled control of system clock\n2022-09-23T06:33:34Z TLS handshake with my.server.ip:4460 (my.server.domain) failed : The TLS connection was non-properly terminated.\n")),(0,o.kt)("h4",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," command returns an allocation ID that I can use to further investigate the issue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'nomad job run /etc/nomad.d/jobs/chrony_nts.nomad\n\n==> 2022-09-23T09:40:52+02:00: Monitoring evaluation "a7738da8"\n    2022-09-23T09:40:52+02:00: Evaluation triggered by job "chrony_nts"\n    2022-09-23T09:40:52+02:00: Evaluation within deployment: "da9c6ebc"\n    2022-09-23T09:40:52+02:00: Allocation "68db9b76" created: node "a68296fa", group "docker"\n    2022-09-23T09:40:52+02:00: Evaluation status changed: "pending" -> "complete"\n==> 2022-09-23T09:40:52+02:00: Evaluation "a7738da8" finished with status "complete"\n==> 2022-09-23T09:40:52+02:00: Monitoring deployment "da9c6ebc"\n')),(0,o.kt)("p",null,"Here the allocation ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"68db9b76")," that I can now use with the ",(0,o.kt)("inlineCode",{parentName:"p"},"alloc")," command - and at the end of the return I find the issue for the failing deployment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'nomad alloc status 68db9b76\n\n...\n\nRecent Events:\nTime                       Type             Description\n2022-09-23T09:40:56+02:00  Alloc Unhealthy  Unhealthy because of failed task\n2022-09-23T09:40:52+02:00  Not Restarting   Error was unrecoverable\n2022-09-23T09:40:52+02:00  Driver Failure   Failed to create container configuration for image "my.gitlab.com/chrony-nts:latest": volumes are not enabled; cannot mount volume: "letsencrypt"\n2022-09-23T09:40:52+02:00  Driver           Downloading image\n2022-09-23T09:40:52+02:00  Task Setup       Building Task Directory\n2022-09-23T09:40:52+02:00  Received         Task received by client\n')),(0,o.kt)("h4",{id:"solution"},"Solution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define ",(0,o.kt)("inlineCode",{parentName:"li"},"volume_mount")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"task"),", but outside the ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," directory."),(0,o.kt)("li",{parentName:"ul"},"Do not run container in ",(0,o.kt)("inlineCode",{parentName:"li"},"network_mode=host"))),(0,o.kt)("p",null,"Now the volume is mounted correctly, the certificate can be read and NTS is working:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti chrony_container-74e8b0ba-f7b3-b0ef-d1a7-90efe309535c /bin/ash\n\nchronyd -Q -t 3 'server my.server.com iburst nts maxsamples 1'\n2022-09-23T08:54:27Z chronyd version 4.2 starting (+CMDMON +NTP +REFCLOCK +RTC +PRIVDROP -SCFILTER +SIGND +ASYNCDNS +NTS +SECHASH +IPV6 -DEBUG)\n2022-09-23T08:54:27Z Disabled control of system clock\n2022-09-23T08:54:29Z System clock wrong by -0.000708 seconds (ignored)\n2022-09-23T08:54:29Z chronyd exiting\n")),(0,o.kt)("p",null,"I can see an accepted NTS-KE connection and an authenticated NTP packet send:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chronyc serverstats\nNTP packets received       : 1\nNTP packets dropped        : 0\nCommand packets received   : 12\nCommand packets dropped    : 0\nClient log records dropped : 0\nNTS-KE connections accepted: 36\nNTS-KE connections dropped : 0\nAuthenticated NTP packets  : 1\nInterleaved NTP packets    : 0\nNTP timestamps held        : 0\nNTP timestamp span         : 0\n")),(0,o.kt)("h2",{id:"final-nomad-job-file"},"Final Nomad Job File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'job "chrony_nts" {\n    datacenters = ["chronyNTS"]\n    type = "service"\n\n    group "docker" {\n        count = 1\n\n        network {\n            port "ntp" {\n                static = "123"\n            }\n            port "nts" {\n                static = "4460"\n            }\n        }\n\n        update {\n            max_parallel = 1\n            min_healthy_time = "10s"\n            healthy_deadline = "2m"\n            progress_deadline = "5m"\n            auto_revert = true\n            auto_promote = true\n            canary = 1\n        }\n\n        service {\n            name = "NTS"\n            port = "nts"\n\n            check {\n                name = "NTS Service"\n                type = "tcp"\n                interval = "10s"\n                timeout = "1s"\n            }\n        }\n\n        volume "letsencrypt" {\n            type      = "host"\n            read_only = false\n            source    = "letsencrypt"\n        }\n\n        task "chrony_container" {\n            driver = "docker"\n            volume_mount {\n                volume      = "letsencrypt"\n                destination = "/opt/letsencrypt"\n                read_only   = false\n           }\n\n            env {\n                NTP_SERVERS = "0.de.pool.ntp.org,time.cloudflare.com,time1.google.com"\n                LOG_LEVEL = "1"\n            }\n\n            config {\n                image = "my.gitlab.com:12345/chrony-nts:latest"\n                ports = ["ntp", "nts"]\n                network_mode = "default"\n                force_pull = true\n\n                auth {\n                    username = "mygitlabuser"\n                    password = "password"\n                }\n            }\n        }\n    }\n}\n')))}d.isMDXComponent=!0},25010:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/nomad-nts-timeserver_01-b7185fb9e55a34fedb8473a87e291441.png"},12790:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"}}]);