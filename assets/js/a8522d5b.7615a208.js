"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[70668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5960,slug:"2022-11-29",title:"TypeScript 2.0 in React 19 (2023)",authors:"mpolinowski",tags:["Javascript"],description:"Typescript Workshop"},s=void 0,p={unversionedId:"Development/Javascript/2022-11-29-react-typescript-intro-2023/index",id:"Development/Javascript/2022-11-29-react-typescript-intro-2023/index",title:"TypeScript 2.0 in React 19 (2023)",description:"Typescript Workshop",source:"@site/docs/Development/Javascript/2022-11-29-react-typescript-intro-2023/index.md",sourceDirName:"Development/Javascript/2022-11-29-react-typescript-intro-2023",slug:"/Development/Javascript/2022-11-29-react-typescript-intro-2023/2022-11-29",permalink:"/docs/Development/Javascript/2022-11-29-react-typescript-intro-2023/2022-11-29",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2022-11-29-react-typescript-intro-2023/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:5960,frontMatter:{sidebar_position:5960,slug:"2022-11-29",title:"TypeScript 2.0 in React 19 (2023)",authors:"mpolinowski",tags:["Javascript"],description:"Typescript Workshop"},sidebar:"tutorialSidebar",previous:{title:"11ty Static Site Generator",permalink:"/docs/Development/Javascript/2022-12-11-11ty-starter/2022-12-11"},next:{title:"Web3.js Blockchain Application",permalink:"/docs/Development/Javascript/2022-11-19-web3-javascript-app/2022-11-19"}},i={},l=[{value:"App Scaffolding",id:"app-scaffolding",level:2},{value:"React vs Typed React",id:"react-vs-typed-react",level:2},{value:"jsx",id:"jsx",level:3},{value:"tsx",id:"tsx",level:3},{value:"Children Types",id:"children-types",level:2},{value:"State Type",id:"state-type",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shenzhen, China",src:n(87485).Z,width:"2208",height:"757"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#app-scaffolding"},"App Scaffolding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#react-vs-typed-react"},"React vs Typed React"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#jsx"},"jsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tsx"},"tsx")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#children-types"},"Children Types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#state-type"},"State Type"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://fem-react-typescript.vercel.app/"},"see Workshop fem-react-typescript")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WiP")),(0,r.kt)("h2",{id:"app-scaffolding"},"App Scaffolding"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-typescript/"},"Create-React-App")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app typescript2-intro --template typescript\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"tsconfig.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "es6",\n    "lib": [\n      "dom",\n      "dom.iterable",\n      "esnext"\n    ],\n    "allowJs": true,\n    "skipLibCheck": true,\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true,\n    "strict": true,\n    "forceConsistentCasingInFileNames": true,\n    "noFallthroughCasesInSwitch": true,\n    "module": "esnext",\n    "moduleResolution": "node",\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "noEmit": true,\n    "jsx": "react-jsx"\n  },\n  "include": [\n    "src"\n  ]\n}\n')),(0,r.kt)("h2",{id:"react-vs-typed-react"},"React vs Typed React"),(0,r.kt)("h3",{id:"jsx"},"jsx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\'\n\nconst NameBadge = ({name}) => {\n    return (\n      <section className="badge">\n        <header className="badge-header">\n            <h1 className="text-5xl">Hello</h1>\n            <p>My name is ...</p>\n        </header>\n        <div className="badge-body">\n            <p className="badge-name">{name}</p>\n        </div>\n        <footer className="badge-footer" />\n      </section>\n    )\n}\n\nconst NameCard = () => {\n  return (\n    <NameBadge name="Gironimo" />\n    )\n}\n\nexport default NameCard\n')),(0,r.kt)("h3",{id:"tsx"},"tsx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\'\n\ninterface NameBadgeProps {\n  name: string\n  surname?: string // optional\n}\n\nconst NameBadge = ({ name }: NameBadgeProps): JSX.Element => {\n    return (\n      <section className="badge">\n        <header className="badge-header">\n            <h1 className="text-5xl">Hello</h1>\n            <p>My name is ...</p>\n        </header>\n        <div className="badge-body">\n            <p className="badge-name">{name}</p>\n        </div>\n        <footer className="badge-footer" />\n      </section>\n    )\n  }\n\nconst NameCard = () => {\n  return (\n    <NameBadge name="Gironimo" />\n    )\n}\n  \nexport default NameCard\n')),(0,r.kt)("h2",{id:"children-types"},"Children Types"),(0,r.kt)("p",null,"Before we used a string prop and it was easy to assign the correct type to it. But what about ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," e.g. :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type BoxProps = { children: any /* \ud83d\udc48 Get rid of this! */ };\n\n const Box = ({ children }: BoxProps) => {\n   return (\n     <section\n       className="m-4"\n       style={{ padding: \'1em\', border: \'5px solid purple\' }}\n     >\n       {children}\n     </section>\n   );\n };\n \n const Application = () => {\n   return (\n     <main className="m-8">\n       <Box>\n         Just a string.\n         <p>Some HTML that is not nested.</p>\n         <Box>\n           <h2>Another React component with one child.</h2>\n         </Box>\n         <Box>\n           <h2 className="mb-4">A nested React component with two children.</h2>\n           <p>The second child.</p>\n         </Box>\n       </Box>\n     </main>\n   );\n };\n \n export default Application;\n')),(0,r.kt)("p",null,"Typescript prompts us to use one of the following to get rid of the ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," type:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TypeScript 2.0 in React 19 (2023)",src:n(50357).Z,width:"1095",height:"179"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JSX.Element;"),": Only works if there is a single JSX element"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JSX.Element | JSX.Element[];")," For more then one element we can use the array type - but this does not cover the strings we have in our children element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"React.ReactNode;"),": The correct answer that covers us.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type BoxProps = { children: React.ReactNode };\n")),(0,r.kt)("p",null,"A better more specific alternative is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type BoxProps = React.PropsWithChildren<{}>\n\n const Box = ({ children }: BoxProps) => {\n\n  ...\n")),(0,r.kt)("p",null,"Which also allows us to use style types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type BoxProps = React.PropsWithChildren<{\n  style: React.CSSProperties\n}>\n\n const Box = ({ children, style }: BoxProps) => {\n   return (\n     <section\n       className=\"m-4\"\n       style={{ padding: '1em', border: '5px solid purple', ...style }}\n     >\n\n  ...\n")),(0,r.kt)("p",null,"To handle specific JSX components we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentPropsWithoutRef"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type ButtonProps = React.ComponentPropsWithoutRef<'button>\n\nconst Button = ({ children, onclick, type }: ButtonProps) => {\n  return (\n    <button onClick={onClick} type={type}>\n      {children}\n    </button>\n  )\n}\n")),(0,r.kt)("h2",{id:"state-type"},"State Type"),(0,r.kt)("p",null,"input ",(0,r.kt)("inlineCode",{parentName:"p"},'type="number"')," => ",(0,r.kt)("inlineCode",{parentName:"p"},"setDraftCount(e.target.valueAsNumber)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react"\n\nconst Counter = () => {\n  const [count, setCount] = useState(0)\n  const [draftCount, setDraftCount] = useState(count)\n    \n  return (\n    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">\n      <h1>Days Since the Last Accident</h1>\n      <p className="text-6xl">{count}</p>\n      <div className="flex gap-2">\n        <button onClick={() => setCount((count) => count -1)}>\u2796 Decrement</button>\n        <button onClick={() => setCount(0)}>\ud83d\udd01 Reset</button>\n        <button onClick={() => setCount((count) => count +1)}>\u2795 Increment</button>\n      </div>\n      <div>\n        <form onSubmit={(e) => {\n          e.preventDefault()\n          setCount(count + draftCount)\n        }}>\n          <input\n            type="number"\n            value={draftCount}\n            onChange={(e) => setDraftCount(e.target.valueAsNumber)}/>\n          <button type="submit">Add to Counter</button>\n        </form>\n      </div>\n    </section>\n  );\n};\n\nexport default Counter;\n')))}u.isMDXComponent=!0},50357:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/TypeScript_2.0_in_React_19_01-99cb7be445ec631e54b3646ced8a2090.png"},87485:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e38404fdf0e14587f660e537829bfab5.jpg"}}]);