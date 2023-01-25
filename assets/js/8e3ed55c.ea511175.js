"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[74738],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const s={sidebar_position:8040,slug:"2021-03-28",title:"Elasticsearch 7 Timeseries",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},o=void 0,i={unversionedId:"DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/index",id:"DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/index",title:"Elasticsearch 7 Timeseries",description:"Kathmandu, Nepal",source:"@site/docs/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/index.md",sourceDirName:"DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries",slug:"/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/2021-03-28",permalink:"/docs/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/2021-03-28",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:8040,frontMatter:{sidebar_position:8040,slug:"2021-03-28",title:"Elasticsearch 7 Timeseries",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch 7 Data Transformation",permalink:"/docs/DevOps/Elasticsearch/2021-03-29-elasticsearch7-data-transformations/2021-03-29"},next:{title:"Elasticsearch 7 Aggregations",permalink:"/docs/DevOps/Elasticsearch/2021-03-27-elasticsearch7-aggregations/2021-03-27"}},c={},l=[{value:"How many Events Happend?",id:"how-many-events-happend",level:2},{value:"How many Events had the User Agent Firefox?",id:"how-many-events-had-the-user-agent-firefox",level:2}],p={toc:l};function u(e){let{components:n,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kathmandu, Nepal",src:t(75984).Z,width:"1500",height:"645"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-many-events-happend"},"How many Events Happend?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-many-events-had-the-user-agent-firefox"},"How many Events had the User Agent Firefox?"))),(0,r.kt)("h2",{id:"how-many-events-happend"},"How many Events Happend?"),(0,r.kt)("p",null,"We already worked with Timeseries when we created histograms from our server logs in Kinbana. The query that was run in the background to create those visualisations looks something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'curl -H "Content-Type: application/json" -XGET \'localhost:9200/apache-access-log/_search?size=0&pretty\' -d\'\n{\n  "aggs": {\n    "timestamp": {\n      "date_histogram": {\n        "field": "@timestamp",\n        "interval": "day"\n      }\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"This will run the query on my ",(0,r.kt)("a",{parentName:"p",href:"#apache-access-logs"},"Apache Access Log")," and result in a list of how many events (documents) happened each day:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"aggregations" : {\n    "timestamp" : {\n      "buckets" : [\n        {\n          "key_as_string" : "2017-04-30T00:00:00.000Z",\n          "key" : 1493510400000,\n          "doc_count" : 14166\n        },\n        {\n          "key_as_string" : "2017-05-01T00:00:00.000Z",\n          "key" : 1493596800000,\n          "doc_count" : 15948\n        },\n        {\n          "key_as_string" : "2017-05-02T00:00:00.000Z",\n          "key" : 1493683200000,\n          "doc_count" : 16278\n        },\n        {\n          "key_as_string" : "2017-05-03T00:00:00.000Z",\n          "key" : 1493769600000,\n          "doc_count" : 21172\n        },\n        {\n          "key_as_string" : "2017-05-04T00:00:00.000Z",\n          "key" : 1493856000000,\n          "doc_count" : 16762\n        },\n        {\n          "key_as_string" : "2017-05-05T00:00:00.000Z",\n          "key" : 1493942400000,\n          "doc_count" : 18646\n        }\n      ]\n    }\n  }\n')),(0,r.kt)("h2",{id:"how-many-events-had-the-user-agent-firefox"},"How many Events had the User Agent Firefox?"),(0,r.kt)("p",null,"Just as before we are now able to combine our aggregation with a filter query that narrows down our results. For example, how many user that interacted with our web service used Firefox as their browser:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'curl -H "Content-Type: application/json" -XGET \'localhost:9200/apache-access-log/_search?size=0&pretty\' -d\'\n{\n  "query" : {\n    "match": {\n      "agent.name": "Firefox"\n    }\n  },\n  "aggs": {\n    "timestamp": {\n      "date_histogram": {\n        "field": "@timestamp",\n        "interval": "day"\n      }\n    }\n  }\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"aggregations" : {\n    "timestamp" : {\n      "buckets" : [\n        {\n          "key_as_string" : "2017-04-30T00:00:00.000Z",\n          "key" : 1493510400000,\n          "doc_count" : 1532\n        },\n        {\n          "key_as_string" : "2017-05-01T00:00:00.000Z",\n          "key" : 1493596800000,\n          "doc_count" : 2551\n        },\n        {\n          "key_as_string" : "2017-05-02T00:00:00.000Z",\n          "key" : 1493683200000,\n          "doc_count" : 2861\n        },\n        {\n          "key_as_string" : "2017-05-03T00:00:00.000Z",\n          "key" : 1493769600000,\n          "doc_count" : 2615\n        },\n        {\n          "key_as_string" : "2017-05-04T00:00:00.000Z",\n          "key" : 1493856000000,\n          "doc_count" : 1099\n        },\n        {\n          "key_as_string" : "2017-05-05T00:00:00.000Z",\n          "key" : 1493942400000,\n          "doc_count" : 1264\n        }\n      ]\n    }\n  }\n')))}u.isMDXComponent=!0},75984:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-fbd4676f624c629e309228fcc970b82b.jpg"}}]);