"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[40633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return n?i.createElement(u,o(o({ref:t},d),{},{components:n})):i.createElement(u,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:9050,slug:"2022-10-05",title:"Python - Text Processing with",authors:"mpolinowski",tags:["Python"],description:"Processing text using Python"},o=void 0,l={unversionedId:"Development/Python/2022-10-05-python-text-processing/index",id:"Development/Python/2022-10-05-python-text-processing/index",title:"Python - Text Processing with",description:"Processing text using Python",source:"@site/docs/Development/Python/2022-10-05-python-text-processing/index.md",sourceDirName:"Development/Python/2022-10-05-python-text-processing",slug:"/Development/Python/2022-10-05-python-text-processing/2022-10-05",permalink:"/docs/Development/Python/2022-10-05-python-text-processing/2022-10-05",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-05-python-text-processing/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9050,frontMatter:{sidebar_position:9050,slug:"2022-10-05",title:"Python - Text Processing with",authors:"mpolinowski",tags:["Python"],description:"Processing text using Python"},sidebar:"tutorialSidebar",previous:{title:"Python - Minify Text for Elasticsearch",permalink:"/docs/Development/Python/2022-10-06-python-minify-text/2022-10-06"},next:{title:"Python - Video Processing with OpenCV",permalink:"/docs/Development/Python/2022-09-17-python-video-processing/2022-09-17"}},s={},p=[{value:"Write Text Files",id:"write-text-files",level:2},{value:"Read Text Files",id:"read-text-files",level:2},{value:"Edit Text Files",id:"edit-text-files",level:2},{value:"Remove Trailing",id:"remove-trailing",level:3},{value:"Edit &amp; Merge multiple",id:"edit--merge-multiple",level:3},{value:"Replace Strings",id:"replace-strings",level:3},{value:"Remove Header before Merging",id:"remove-header-before-merging",level:3},{value:"Replace Header after Merging",id:"replace-header-after-merging",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sham Sui Po, Hong Kong",src:n(76094).Z,width:"1500",height:"548"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#write-text-files"},"Write Text Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#read-text-files"},"Read Text Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#edit-text-files"},"Edit Text Files"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#remove-trailing"},"Remove Trailing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#edit--merge-multiple"},"Edit \\& Merge multiple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replace-strings"},"Replace Strings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#remove-header-before-merging"},"Remove Header before Merging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replace-header-after-merging"},"Replace Header after Merging"))))),(0,r.kt)("h2",{id:"write-text-files"},"Write Text Files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"content = \"\"\"\nSpicy jalapeno bacon ipsum dolor amet pancetta labore ribeye sirloin buffalo adipisicing pig short ribs ipsum aliquip pork excepteur ullamco minim. Ipsum officia beef ribs chuck pork chop picanha salami bacon. Hamburger shoulder biltong irure. Laborum nulla ut chuck ball tip rump chislic burgdoggen jerky pork belly irure short loin tri-tip leberkas. Chicken commodo salami swine in laborum corned beef picanha rump in labore.\n\n> Labore fugiat pork ea ball tip. In laboris venison nulla turducken, short loin short ribs ullamco beef culpa incididunt minim proident. Kielbasa dolore eu aliquip sausage kevin picanha magna id lorem. Adipisicing pastrami chuck salami minim meatloaf, ribeye duis turducken shoulder et ham hock. Alcatra tempor enim burgdoggen pastrami adipisicing dolore swine chuck id cupidatat tenderloin meatloaf cow eu.\n\"\"\"\n\n\nwith open('write2file.md', 'w') as file:\n    file.write('# Bacon Ipsum\\n')\n    file.write(content)\n")),(0,r.kt)("h2",{id:"read-text-files"},"Read Text Files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"with open('write2file.md', 'r') as file:\n    content = file.read()\n\nprint(content)\n")),(0,r.kt)("h2",{id:"edit-text-files"},"Edit Text Files"),(0,r.kt)("h3",{id:"remove-trailing"},"Remove Trailing"),(0,r.kt)("p",null,"Remove content from a text file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"with open('editfile.csv', 'r') as file:\n    content = file.read()\n\n# print(content)\n# slice off trailing ;END\nprint(content[:-4])\n\ncleaned_content = content[:-4]\n\nwith open('editfile_cleaned.csv', 'w') as file:\n    file.write(cleaned_content)\n")),(0,r.kt)("h3",{id:"edit--merge-multiple"},"Edit & Merge multiple"),(0,r.kt)("p",null,"Remove content from multiple text files and merge into a single file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from pathlib import Path\n\nsource = Path('editfiles/raw')\ndestination = 'editfiles/edited/editfile_merged.csv'\nheader = 'Login email;Identifier;One-time password;Recovery code;First name;Last name;Department;Location'\n\n# create merge file and add header\nwith open(destination, 'w') as file:\n    file.write(header + \"\\n\")\n\n# get file path of raw files\nfor filepath in source.iterdir():\n    with open(filepath, 'r') as file:\n        # read files in source one by one\n        content = file.read()\n        # remove ;END\n        cleaned_content = content[:-4]\n        print(cleaned_content)\n    with open(destination, 'a') as file:\n        # append read content to destination file\n        file.write(cleaned_content + \"\\n\")\n")),(0,r.kt)("h3",{id:"replace-strings"},"Replace Strings"),(0,r.kt)("p",null,"Replacing all instances of a word within multiple files and merge them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"from pathlib import Path\n\nsource = Path('editfiles/raw')\ndestination = 'editfiles/edited/editfile_replace.csv'\nheader = 'Login email;Identifier;One-time password;Recovery code;First name;Last name;Department;Location'\n\n# create merge file and add header\nwith open(destination, 'w') as file:\n    file.write(header + \"\\n\")\n\n# get file path of raw files\nfor filepath in source.iterdir():\n    with open(filepath, 'r') as file:\n        # read files in source one by one\n        content = file.read()\n        # remove ;END\n        cleaned_content = content[:-4]\n        # replace a string\n        replaced_content = content.replace('mary@example.com', 'maryj@example.br')\n    with open(destination, 'a') as file:\n        # append read content to destination file\n        file.write(replaced_content + \"\\n\")\n")),(0,r.kt)("h3",{id:"remove-header-before-merging"},"Remove Header before Merging"),(0,r.kt)("p",null,"When merging multiple CSV files we need to remove the from all but the first file. The ",(0,r.kt)("inlineCode",{parentName:"p"},"readline()")," function breaks up text with line breaks and appends every line into a list in which the item at position zero is our header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from pathlib import Path\n\nsource = Path('editfiles/raw_header')\ndestination = 'editfiles/edited/editfile_merged_wHeader.csv'\nmerged = ''\n\n# loop over file path of raw files\nfor index, filepath in enumerate(source.iterdir()):\n    with open(filepath, 'r') as file:\n        # read lines and write to list\n        content = file.readlines()\n        # remove line containing header\n        content_woHeader = content[1:]\n        # but keep the first header\n        if index == 0:\n            # use join to turn list into string\n            merged = merged + ''.join(content) + '\\n'\n        else:\n            merged = merged + ''.join(content_woHeader) + '\\n'\n\n    with open(destination, 'w') as file:\n        # write read content to destination file\n        file.write(merged)\n")),(0,r.kt)("h3",{id:"replace-header-after-merging"},"Replace Header after Merging"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"source = 'editfiles/edited/editfile_merged_wHeader.csv'\ndestination = 'editfiles/edited/editfile_merged_modified_Header.csv'\n\n# read lines into list\nwith open(source, 'r') as file:\n    content = file.readlines()\n\n# take first list item and replace\ncontent[0] = 'Email;ID;Password;Recovery;Name;Family;Department;Location' + '\\n'\n\n# write to file\nwith open(destination, 'w') as file:\n    file.writelines(content)\n")))}c.isMDXComponent=!0},76094:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"}}]);