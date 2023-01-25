"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[54818],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(i),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return i?r.createElement(f,o(o({ref:t},u),{},{components:i})):r.createElement(f,o({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},80891:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=i(87462),n=(i(67294),i(3905)),a=i(54720);const o={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["mpolinowski"],tags:["Markdown"]},l=void 0,c={permalink:"/blog/mdx-blog-post",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2017-08-01-mdx-blog-post/index.mdx",source:"@site/blog/2017-08-01-mdx-blog-post/index.mdx",title:"MDX Blog Post",description:"Flip Cards",date:"2017-08-01T00:00:00.000Z",formattedDate:"August 1, 2017",tags:[{label:"Markdown",permalink:"/blog/tags/markdown"}],readingTime:.88,hasTruncateMarker:!1,authors:[{name:"Mike Polinowski",title:"CTO INSTAR Deutschland GmbH",url:"https://github.com/mpolinowski",imageURL:"https://github.com/mpolinowski.png",key:"mpolinowski"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["mpolinowski"],tags:["Markdown"]},prevItem:{title:"The Modern Web",permalink:"/blog/the-modern-web"}},s={authorsImageUrls:[void 0]},u=[{value:"Flip Cards",id:"flip-cards",level:3}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"flip-cards"},"Flip Cards"),(0,n.kt)(a.Z,{mdxType:"FlipCards"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,n.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Sed suscipit dictum odio ultrices mollis. Donec in pellentesque lectus. Ut congue vitae urna id sollicitudin. Curabitur tempus elit odio, ut condimentum est ullamcorper a. Duis nisi dolor, commodo eget scelerisque et, sollicitudin ut lacus. Vivamus fringilla consequat auctor. Duis ornare vel leo lobortis sagittis. Etiam dignissim dui eget velit fringilla.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Maecenas pellentesque leo eget neque aliquam, eget faucibus ipsum pharetra. Donec sed luctus risus. Nullam porta magna nulla, ut aliquet risus malesuada ac. Vestibulum semper, nisl accumsan accumsan maximus, tortor mauris dictum massa.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Sed suscipit dictum odio ultrices mollis. Donec in pellentesque lectus. Ut congue vitae urna id sollicitudin. Curabitur tempus elit odio, ut condimentum est ullamcorper a. Duis nisi dolor, commodo eget scelerisque et, sollicitudin ut lacus. Vivamus fringilla consequat auctor. Duis ornare vel leo lobortis sagittis. Etiam dignissim dui eget velit fringilla.")))}d.isMDXComponent=!0},54720:(e,t,i)=>{i.d(t,{Z:()=>u});var r=i(67294),n=i(23941),a=i.n(n);const o=JSON.parse('[{"title":"A Flip Card","link":"","html":"Some shocking information","css":"Some filler content with product placements","javascript":"And now the evidence","img":"/img/worldmap_hk.png","description":"Curabitur tempus elit odio, ut commodo eget scelerisque et."},{"title":"This is another Flip Card","link":"","html":"HTML","css":"CSS","javascript":"JavaScript","img":"/img/worldmap_hk.png","description":"Nullam porta magna nulla, ut aliquet Vestibulum semper tortor."}]'),l={padding:"20px",marginBottom:"20px",width:"300px",height:"300px",borderRadius:"15px",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.54), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"},c={display:"flex",flexFlow:"row wrap",justifyContent:"space-between",alignContent:"flex-start",marginBottom:"15px",width:"100%"},s=e=>{let{project:t}=e;const[i,n]=r.useState(!1);return r.createElement(a(),{isFlipped:i,flipDirection:"horizontal"},r.createElement("div",{style:l,onMouseEnter:()=>n((e=>!e)),className:"CardFront"},r.createElement("div",null,r.createElement("h3",null,t.title),r.createElement("ul",null,r.createElement("li",null,t.html),r.createElement("li",null,t.css),r.createElement("li",null,t.javascript)))),r.createElement("div",{style:l,onMouseLeave:()=>n((e=>!e)),className:"CardBack"},r.createElement("h3",null,t.title),r.createElement("img",{width:"250",src:t.img,alt:"image"}),r.createElement("p",null,t.description)))},u=()=>r.createElement("div",{style:c},o.map(((e,t)=>r.createElement(s,{project:e,key:`card-${t}`}))))},23941:function(e,t,i){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var l=o(i(67294)),c=i(67294),s=function(e){var t=e.cardStyles,i=t.back,n=t.front,a=e.cardZIndex,o=e.containerStyle,s=e.containerClassName,u=e.flipDirection,p=e.flipSpeedFrontToBack,d=e.flipSpeedBackToFront,m=e.infinite,f=(0,c.useState)(e.isFlipped),g=f[0],b=f[1],h=(0,c.useState)(0),v=h[0],k=h[1];(0,c.useEffect)((function(){e.isFlipped!==g&&(b(e.isFlipped),k((function(e){return e+180})))}),[e.isFlipped]);var y=(0,c.useMemo)((function(){var e="react-card-flip";return s&&(e+=" ".concat(s)),e}),[s]),w=function(t){if(2!==e.children.length)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[t]},x="rotateY(".concat(m?v:g?180:0,"deg)"),O="rotateY(".concat(m?v+180:g?0:-180,"deg)"),E="rotateX(".concat(m?v:g?180:0,"deg)"),j="rotateX(".concat(m?v+180:g?0:-180,"deg)"),C={back:r({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:g?"relative":"absolute",top:"0",transform:"horizontal"===u?O:j,transformStyle:"preserve-3d",transition:"".concat(p,"s"),width:"100%"},i),container:{perspective:"1000px",zIndex:"".concat(a)},flipper:{height:"100%",position:"relative",width:"100%"},front:r({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:g?"absolute":"relative",top:"0",transform:"horizontal"===u?x:E,transformStyle:"preserve-3d",transition:"".concat(d,"s"),width:"100%",zIndex:"2"},n)};return l.createElement("div",{className:y,style:r(r({},C.container),o)},l.createElement("div",{className:"react-card-flipper",style:C.flipper},l.createElement("div",{className:"react-card-front",style:C.front},w(0)),l.createElement("div",{className:"react-card-back",style:C.back},w(1))))};s.defaultProps={cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t.default=s}}]);