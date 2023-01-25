"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[29161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=l,k=d["".concat(o,".").concat(h)]||d[h]||c[h]||s;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const s={sidebar_position:3930,slug:"2022-12-03",title:"Hashicorp Vault - Installation 2023",authors:"mpolinowski",tags:["Vault","LINUX"],description:"Getting started with Hashicorp Vault"},r=void 0,i={unversionedId:"DevOps/Hashicorp/2022-12-03-hashicorp-vault-installation/index",id:"DevOps/Hashicorp/2022-12-03-hashicorp-vault-installation/index",title:"Hashicorp Vault - Installation 2023",description:"Getting started with Hashicorp Vault",source:"@site/docs/DevOps/Hashicorp/2022-12-03-hashicorp-vault-installation/index.md",sourceDirName:"DevOps/Hashicorp/2022-12-03-hashicorp-vault-installation",slug:"/DevOps/Hashicorp/2022-12-03-hashicorp-vault-installation/2022-12-03",permalink:"/docs/DevOps/Hashicorp/2022-12-03-hashicorp-vault-installation/2022-12-03",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-12-03-hashicorp-vault-installation/index.md",tags:[{label:"Vault",permalink:"/docs/tags/vault"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:3930,frontMatter:{sidebar_position:3930,slug:"2022-12-03",title:"Hashicorp Vault - Installation 2023",authors:"mpolinowski",tags:["Vault","LINUX"],description:"Getting started with Hashicorp Vault"},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Consul - Vault Cert Management Part 1",permalink:"/docs/DevOps/Hashicorp/2022-12-04-hashicorp-consul-vault-certificates-part1/2022-12-04"},next:{title:"Hashicorp Nomad - Working with Consul Connect",permalink:"/docs/DevOps/Hashicorp/2022-11-24-hashicorp-consul-connect/2022-11-24"}},o={},u=[{value:"Installation",id:"installation",level:2},{value:"Configuring Vault Storage",id:"configuring-vault-storage",level:3},{value:"Configuring HTTP Access",id:"configuring-http-access",level:3},{value:"Initialize Vault server",id:"initialize-vault-server",level:3},{value:"Seal/Unseal",id:"sealunseal",level:3},{value:"Vault Login",id:"vault-login",level:3},{value:"Start using Vault",id:"start-using-vault",level:2},{value:"Advanced Use-cases",id:"advanced-use-cases",level:3}],p={toc:u};function c(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Shen Zhen, China",src:a(99262).Z,width:"2230",height:"839"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#installation"},"Installation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#configuring-vault-storage"},"Configuring Vault Storage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#configuring-http-access"},"Configuring HTTP Access")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#initialize-vault-server"},"Initialize Vault server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#sealunseal"},"Seal/Unseal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#vault-login"},"Vault Login")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#start-using-vault"},"Start using Vault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#advanced-use-cases"},"Advanced Use-cases"))))),(0,l.kt)("p",null,"Vault takes the security burden away from developers by providing a secure, centralized secret store for an application\u2019s sensitive data: credentials, certificates, encryption keys, and more."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Add PGP for the package signing key (can be skipped if you already installed other Hashicorp products):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install gpg\n")),(0,l.kt)("p",null,"Add the HashiCorp GPG key (can be skipped if you already installed other Hashicorp products):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg >/dev/null\n")),(0,l.kt)("p",null,"Add the official HashiCorp Linux repository (can be skipped if you already installed other Hashicorp products):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list\n')),(0,l.kt)("p",null,"Update and install:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install vault\n\nvault -v                                                                                                                   \nVault v1.12.2 (415e1fe3118eebd5df6cb60d13defdc01aa17b03), built 2022-11-23T12:53:46Z\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls -la /etc/vault.d\n-rw-r--r--  1 vault vault    0 Nov 23 21:55 vault.env\n-rw-r--r--  1 vault vault  975 Nov 23 21:55 vault.hcl\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls -la /opt/vault/tls\n-rw------- 1 vault vault 1850 Dec  4 05:37 tls.crt\n-rw------- 1 vault vault 3272 Dec  4 05:37 tls.key\n")),(0,l.kt)("h3",{id:"configuring-vault-storage"},"Configuring Vault Storage"),(0,l.kt)("p",null,"Vault can either store it's data internally:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"/etc/vault.d/vault.hcl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'storage "raft" {\n  path    = "./vault/data"\n  node_id = "node1"\n}\n\nstorage "file" {\n  path = "/opt/vault/data"\n}\n')),(0,l.kt)("p",null,"Or use Consul:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"/etc/vault.d/vault.hcl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'storage "consul" {\n address = "127.0.0.1:8500"\n path    = "vault"\n}\n')),(0,l.kt)("p",null,"If you want to use Consul make sure that the ",(0,l.kt)("strong",{parentName:"p"},"HTTP port")," is configured in accordingly:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"/etc/consul.d/server.hcl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ports {\n  grpc  = 8503\n  grpc_tls = 8502\n  dns = -1\n  http = 8500\n  https = 8501\n  serf_lan = 8301\n  serf_wan = 8302\n  server = 8300\n}\n")),(0,l.kt)("h3",{id:"configuring-http-access"},"Configuring HTTP Access"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"/etc/vault.d/vault.hcl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# HTTP listener\nlistener "tcp" {\n address = "127.0.0.1:8200"\n tls_disable = 1\n}\n')),(0,l.kt)("p",null,"One or more listeners determine how Vault listens for API requests. The example above listens on localhost port ",(0,l.kt)("inlineCode",{parentName:"p"},"8200")," without TLS. We can add another listener for the HTTPS connection "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"/etc/vault.d/vault.hcl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# HTTPS listener\nlistener "tcp" {\n  address       = "my.server.ip.or.domain:8201"\n  tls_cert_file = "/opt/vault/tls/tls.crt"\n  tls_key_file  = "/opt/vault/tls/tls.key"\n}\n')),(0,l.kt)("p",null,"Enable the Vault service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable vault\nsystemctl start vault\n")),(0,l.kt)("h3",{id:"initialize-vault-server"},"Initialize Vault server"),(0,l.kt)("p",null,"Run the following command to initialize Vault server and receive an ",(0,l.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault/docs/concepts/seal"},"unseal key")," and initial ",(0,l.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault/docs/concepts/tokens"},"root token"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault operator init\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Error Message"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"http: server gave HTTP response to HTTPS client"))),(0,l.kt)("p",null,"In your environment set the Vault address so the Vault client will connect without TLS. Add the following to your shell config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export VAULT_ADDR=http://127.0.0.1:8200\n")),(0,l.kt)("p",null,"Now it works:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'vault operator init                                                                                                        \nUnseal Key 1: 4jYbl2CBIv6SpkKj6Hos9iD32k5RfGkLzlosrrq/JgOm\nUnseal Key 2: B05G1DRtfYckFV5BbdBvXq0wkK5HFqB9g2jcDmNfTQiS\nUnseal Key 3: Arig0N9rN9ezkTRo7qTB7gsIZDaonOcc53EHo83F5chA\nUnseal Key 4: 0cZE0C/gEk3YHaKjIWxhyyfs8REhqkRW/CSXTnmTilv+\nUnseal Key 5: fYhZOseRgzxmJCmIqUdxEm9C3jB5Q27AowER9w4FC2Ck\n\nInitial Root Token: s.KkNJYWF5g0pomcCLEmDdOVCW\n\nVault initialized with 5 key shares and a key threshold of 3. Please securely\ndistribute the key shares printed above. When the Vault is re-sealed,\nrestarted, or stopped, you must supply at least 3 of these keys to unseal it\nbefore it can start servicing requests.\n\nVault does not store the generated root key. Without at least 3 keys to\nreconstruct the root key, Vault will remain permanently sealed!\n\nIt is possible to generate new unseal keys, provided you have a quorum of\nexisting unseal keys shares. See "vault operator rekey" for more information.\n')),(0,l.kt)("h3",{id:"sealunseal"},"Seal/Unseal"),(0,l.kt)("p",null,"Every initialized Vault server starts in the sealed state. From the configuration, Vault can access the physical storage, but it can't read any of it because it doesn't know how to decrypt it. Unsealing has to happen ",(0,l.kt)("strong",{parentName:"p"},"every time")," Vault starts. It can be done via the API and via the command line. To unseal the Vault, you must have ",(0,l.kt)("strong",{parentName:"p"},"3 unseal keys"),". Run the following command 3 times with different keys until the ",(0,l.kt)("strong",{parentName:"p"},"Unseal Progress")," reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"3/3"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault operator unseal                                                                                                      \nUnseal Key (will be hidden): \nKey                    Value\n---                    -----\nSeal Type              shamir\nInitialized            true\nSealed                 false\nTotal Shares           5\nThreshold              3\nVersion                1.12.2\nBuild Date             2022-11-23T12:53:46Z\nStorage Type           consul\nCluster Name           vault-cluster-0ba62cae\nCluster ID             7d49e5fd-a1a4-c1d1-55e2-7962e43006a1\nHA Enabled             true\nHA Cluster             n/a\nHA Mode                standby\nActive Node Address    <none>\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Storage Type")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"consul")," and I am able to see the K/V entries in Consul:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hashicorp Vault - Installation 2023",src:a(17020).Z,width:"1361",height:"450"})),(0,l.kt)("h3",{id:"vault-login"},"Vault Login"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Initial Root Token: s.KkNJYWF5g0pomcCLEmDdOVCW")," you were given to log into Vault:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'vault login\n\nSuccess! You are now authenticated. The token information displayed below\nis already stored in the token helper. You do NOT need to run "vault login"\nagain. Future Vault requests will automatically use this token.\n\nKey                  Value\n---                  -----\ntoken                s.spAZOi7SlpdFTNed50sYYCIU\ntoken_accessor       OevFmMXjbmOCQ8rSubY84vVp\ntoken_duration       \u221e\ntoken_renewable      false\ntoken_policies       ["root"]\nidentity_policies    []\npolicies             ["root"]\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The token can also be set as a global variable during development ",(0,l.kt)("inlineCode",{parentName:"p"},'export VAULT_TOKEN="s.KkNJYWF5g0pomcCLEmDdOVCW"'))),(0,l.kt)("p",null,"You can check the Vault status and should now see that the service is active and ready for operation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault status                                                                                                               \nKey             Value\n---             -----\nSeal Type       shamir\nInitialized     true\nSealed          false\nTotal Shares    5\nThreshold       3\nVersion         1.12.2\nBuild Date      2022-11-23T12:53:46Z\nStorage Type    consul\nCluster Name    vault-cluster-0ba62cae\nCluster ID      7d49e5fd-a1a4-c1d1-55e2-7962e43006a1\nHA Enabled      true\nHA Cluster      https://127.0.0.1:8201\nHA Mode         active\nActive Since    2022-12-04T06:37:54.871984008Z\n")),(0,l.kt)("p",null,"As a root user, you can reseal the Vault with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault operator seal\nSuccess! Vault is sealed.\n")),(0,l.kt)("p",null,"A single operator is allowed to do this. This lets a single operator lock down the Vault in an emergency without consulting other operators."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault status                                                                                                               \nKey                Value\n---                -----\nSeal Type          shamir\nInitialized        true\nSealed             true\nTotal Shares       5\nThreshold          3\nUnseal Progress    0/3\nUnseal Nonce       n/a\nVersion            1.12.2\nBuild Date         2022-11-23T12:53:46Z\nStorage Type       consul\nHA Enabled         true\n")),(0,l.kt)("h2",{id:"start-using-vault"},"Start using Vault"),(0,l.kt)("p",null,"Adding information to the Vault key-value store:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'vault kv put -mount=secret hello foo=world\n\nError making API request.\n* preflight capability check returned 403, please ensure client\'s policies grant access to path "secret/"\n')),(0,l.kt)("p",null,"Sorting out the missing permissions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /etc/vault.d/policies && nano /etc/vault.d/policies/admin-policy.hcl\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"/etc/vault.d/policies/admin-policy.hcl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Read system health check\npath "sys/health"\n{\n  capabilities = ["read", "sudo"]\n}\n\n# Create and manage ACL policies broadly across Vault\n\n# List existing policies\npath "sys/policies/acl"\n{\n  capabilities = ["list"]\n}\n\n# Create and manage ACL policies\npath "sys/policies/acl/*"\n{\n  capabilities = ["create", "read", "update", "delete", "list", "sudo"]\n}\n\n# Enable and manage authentication methods broadly across Vault\n\n# Manage auth methods broadly across Vault\npath "auth/*"\n{\n  capabilities = ["create", "read", "update", "delete", "list", "sudo"]\n}\n\n# Create, update, and delete auth methods\npath "sys/auth/*"\n{\n  capabilities = ["create", "update", "delete", "sudo"]\n}\n\n# List auth methods\npath "sys/auth"\n{\n  capabilities = ["read"]\n}\n\n# Enable and manage the key/value secrets engine at `secret/` path\n\n# List, create, update, and delete key/value secrets\npath "secret/*"\n{\n  capabilities = ["create", "read", "update", "delete", "list", "sudo"]\n}\n\n# List, create, update, and delete key/value pki entries\npath "pki/*"\n{\n  capabilities = ["create", "read", "update", "delete", "list", "sudo"]\n}\n\n# List, create, update, and delete key/value intermediate pki entries\npath "pki_int/*"\n{\n  capabilities = ["create", "read", "update", "delete", "list", "sudo"]\n}\n\n# Manage secrets engines\npath "sys/mounts/*"\n{\n  capabilities = ["create", "read", "update", "delete", "list", "sudo"]\n}\n\n# List existing secrets engines.\npath "sys/mounts"\n{\n  capabilities = ["read"]\n}\n')),(0,l.kt)("p",null,"Create a policy named admin with the policy defined in admin-policy.hcl."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault policy write admin /etc/vault.d/policies/admin-policy.hcl\nSuccess! Uploaded policy: admin\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hashicorp Vault - Installation 2023",src:a(1822).Z,width:"989",height:"565"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault policy list\nvault policy read admin\n")),(0,l.kt)("p",null,"Create a token with the admin policy attached and store the token in the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"ADMIN_TOKEN"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ADMIN_TOKEN=$(vault token create -format=json -policy="admin" | jq -r ".auth.client_token")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo $ADMIN_TOKEN\ns.MdNlboI0nff3Xpo97d1TfIxd\n")),(0,l.kt)("p",null,"Check if we actually have the rights now:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault token capabilities $ADMIN_TOKEN secret/                                                                              \ncreate, delete, list, read, sudo, update\n")),(0,l.kt)("p",null,"\ud83d\udc4d"),(0,l.kt)("p",null,"Hmm but I was still running into ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/vault/issues/6616"},"issues")," here. It seems that I first had to activate the secrets engine:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault secrets enable -path=secret/ kv\n")),(0,l.kt)("p",null,"And now it works!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'vault kv put secret/hello val=world\nvault kv get -format=json secret/hello                                                                                     \n{\n  "request_id": "e13372c4-9026-44c5-c912-d25469b8d7e8",\n  "lease_id": "",\n  "lease_duration": 2764800,\n  "renewable": false,\n  "data": {\n    "val": "world"\n  },\n  "warnings": null\n}\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hashicorp Vault - Installation 2023",src:a(69031).Z,width:"991",height:"353"})),(0,l.kt)("h3",{id:"advanced-use-cases"},"Advanced Use-cases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/DevOps/Hashicorp/2022-12-04-hashicorp-consul-vault-certificates-part1/2022-12-04"},"Generate mTLS Certificates for Nomad using Vault Part1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part2/2022-12-05"},"Generate mTLS Certificates for Consul with Vault Part2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part3/2022-12-05"},"Generate mTLS Certificates for Consul with Vault Part3")),(0,l.kt)("li",{parentName:"ul"},"Generate mTLS Certificates for Nomad with Vault"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/DevOps/Hashicorp/2022-12-07-hashicorp-vault-ca-certificates/2022-12-07"},"Build Your Own Certificate Authority (CA)"))))}c.isMDXComponent=!0},17020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Hashicorp_Vault_01-bafcbbcc27d3a8ca08b0f8155964e528.png"},1822:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Hashicorp_Vault_02-260bde6775efbf1fd477d72848d99927.png"},69031:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Hashicorp_Vault_03-d30adb244c645ea09f39ab1d84905640.png"},99262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);