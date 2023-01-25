"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[24842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:9020,slug:"2019-09-16",title:"Working with SQL Dumps",authors:"mpolinowski",tags:["SQL","Windows"]},i=void 0,s={unversionedId:"Development/Magento/2019-09-16--working-with-sql-dumps/index",id:"Development/Magento/2019-09-16--working-with-sql-dumps/index",title:"Working with SQL Dumps",description:"Harbin, China",source:"@site/docs/Development/Magento/2019-09-16--working-with-sql-dumps/index.mdx",sourceDirName:"Development/Magento/2019-09-16--working-with-sql-dumps",slug:"/Development/Magento/2019-09-16--working-with-sql-dumps/2019-09-16",permalink:"/docs/Development/Magento/2019-09-16--working-with-sql-dumps/2019-09-16",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-16--working-with-sql-dumps/index.mdx",tags:[{label:"SQL",permalink:"/docs/tags/sql"},{label:"Windows",permalink:"/docs/tags/windows"}],version:"current",sidebarPosition:9020,frontMatter:{sidebar_position:9020,slug:"2019-09-16",title:"Working with SQL Dumps",authors:"mpolinowski",tags:["SQL","Windows"]},sidebar:"tutorialSidebar",previous:{title:"Creating Magento 2 Modules",permalink:"/docs/Development/Magento/2019-09-17--magento2-modules/2019-09-17"},next:{title:"Updating a Magento Project from PHP v7.0 to v7.3",permalink:"/docs/Development/Magento/2019-09-15--updating-from-php70-to-php72/2019-09-15"}},l={},p=[{value:"Exporting/Importing SQL files",id:"exportingimporting-sql-files",level:2},{value:"MySQL Docker Container",id:"mysql-docker-container",level:2},{value:"HeidiSQL",id:"heidisql",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Harbin, China",src:n(24093).Z,width:"1500",height:"588"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#exportingimporting-sql-files"},"Exporting/Importing SQL files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mysql-docker-container"},"MySQL Docker Container")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#heidisql"},"HeidiSQL"))),(0,a.kt)("h2",{id:"exportingimporting-sql-files"},"Exporting/Importing SQL files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump -u username -p database_name > file.sql\nmysql -u username -p database_name < file.sql\n")),(0,a.kt)("h2",{id:"mysql-docker-container"},"MySQL Docker Container"),(0,a.kt)("p",null,"We can start the MySQL database on our system using Docker. ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/mysql"},"Download the MySQL Container")," by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"docker pull mysql")," into your Terminal / Powershell. To start the container run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create crv_mysql\n\ndocker run \\\n    -e MYSQL_ROOT_PASSWORD=my-secret-pw \\\n    -e MYSQL_DATABASE=devdb \\\n    -e MYSQL_USER=dbuser \\\n    -e MYSQL_PASSWORD=dbpassword \\\n    --mount type=volume,src=crv_mysql,dst=/var/lib/mysql \\\n    -p 3306:3306 \\\n    -d \\\n    mysql:latest\n")),(0,a.kt)("p",null,"This will create a volume to store your data in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/mysql")," and also create a non-root user and a database that can be accessed with this user. If you just need a quick look at an SQL dump, simplify this command to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    -e MYSQL_ROOT_PASSWORD=my-secret-pw \\\n    -e MYSQL_PASSWORD=dbpassword \\\n    -p 3306:3306 \\\n    -d \\\n    mysql:latest\n")),(0,a.kt)("p",null,"You can no connect to the database with ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dbpassword")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:3306"),"."),(0,a.kt)("h2",{id:"heidisql"},"HeidiSQL"),(0,a.kt)("p",null,"Under Windows we can use ",(0,a.kt)("a",{parentName:"p",href:"https://www.heidisql.com/download.php"},"HeidiSQL")," to work with our database. Once you downloaded and installed the software connect the software with the database service:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HeidiSQL",src:n(672).Z,width:"695",height:"418"})),(0,a.kt)("p",null,"Now right-click to add a new database. Once created select the database and click on the folder icon to add your SQL file:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HeidiSQL",src:n(61911).Z,width:"1069",height:"641"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HeidiSQL",src:n(64315).Z,width:"1003",height:"621"})))}c.isMDXComponent=!0},672:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HeidiSQL_01-6e903a0b532dcb839f997c7ace7d7123.png"},61911:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HeidiSQL_02-9578cbbf2752914b0b991a87c35b30ef.png"},64315:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HeidiSQL_03-64fdac62b0eebc219edd219080f5179f.png"},24093:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-282d67bebbf2cfbbfda0c81703b401b7.jpg"}}]);