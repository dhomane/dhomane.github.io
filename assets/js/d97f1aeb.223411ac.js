"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[75196],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=l,k=m["".concat(o,".").concat(h)]||m[h]||u[h]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={sidebar_position:8060,slug:"2019-09-22",title:"Installing Oh-My-Zsh on Ubuntu 20.04",authors:"mpolinowski",tags:["LINUX"]},i=void 0,s={unversionedId:"DevOps/Linux/2019-09-22--zsh-on-ubuntu20/index",id:"DevOps/Linux/2019-09-22--zsh-on-ubuntu20/index",title:"Installing Oh-My-Zsh on Ubuntu 20.04",description:"Central, Hong Kong",source:"@site/docs/DevOps/Linux/2019-09-22--zsh-on-ubuntu20/index.md",sourceDirName:"DevOps/Linux/2019-09-22--zsh-on-ubuntu20",slug:"/DevOps/Linux/2019-09-22--zsh-on-ubuntu20/2019-09-22",permalink:"/docs/DevOps/Linux/2019-09-22--zsh-on-ubuntu20/2019-09-22",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-09-22--zsh-on-ubuntu20/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8060,frontMatter:{sidebar_position:8060,slug:"2019-09-22",title:"Installing Oh-My-Zsh on Ubuntu 20.04",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Podman Cheat Sheet",permalink:"/docs/DevOps/Linux/2019-09-25--podman-cheat-sheet/2019-09-25"},next:{title:"Installing Oh-My-Zsh on CentOS8",permalink:"/docs/DevOps/Linux/2019-09-22--zsh-on-centos8/2019-09-22"}},o={},p=[{value:"Install ZSH",id:"install-zsh",level:2},{value:"Install Oh-my-Zsh",id:"install-oh-my-zsh",level:2},{value:"Theming",id:"theming",level:3},{value:"Enable Oh-My-Zsh Plugins",id:"enable-oh-my-zsh-plugins",level:3},{value:"External Plugins",id:"external-plugins",level:3},{value:"Adding EXA",id:"adding-exa",level:2},{value:"Command-line options",id:"command-line-options",level:3},{value:"Manual Update Oh-My-ZSH",id:"manual-update-oh-my-zsh",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Central, Hong Kong",src:a(18293).Z,width:"1500",height:"574"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-zsh"},"Install ZSH")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-oh-my-zsh"},"Install Oh-my-Zsh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#theming"},"Theming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enable-oh-my-zsh-plugins"},"Enable Oh-My-Zsh Plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#external-plugins"},"External Plugins")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#adding-exa"},"Adding EXA"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#command-line-options"},"Command-line options"))))),(0,l.kt)("p",null,"In order for ",(0,l.kt)("a",{parentName:"p",href:"https://ohmyz.sh"},"Oh-My-Zsh")," to work on the system ,",(0,l.kt)("inlineCode",{parentName:"p"},"zsh")," need to be installed."),(0,l.kt)("h2",{id:"install-zsh"},"Install ZSH"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install wget curl git -y\napt install zsh\n")),(0,l.kt)("p",null,"To check installed version of ZSH:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"zsh --version\nzsh 5.8 (x86_64-ubuntu-linux-gnu)\n")),(0,l.kt)("p",null,"Changing your default shell to zsh:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -s $(which zsh) root\nchsh -s $(which zsh)\n")),(0,l.kt)("h2",{id:"install-oh-my-zsh"},"Install Oh-my-Zsh"),(0,l.kt)("p",null,"Clone the repo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n')),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"\n')),(0,l.kt)("p",null,"The Oh-my-Zsh configuration files are located under ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.oh-my-zsh/")," directory. Note that ZSH config file is ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc"),"."),(0,l.kt)("h3",{id:"theming"},"Theming"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano $HOME/.zshrc\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"robbyrussel")," is the default theme for ZSH:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfg"},'# Set name of the theme to load --- if set to "random", it will\n# load a random theme each time oh-my-zsh is loaded, in which case,\n# to know which specific one was loaded, run: echo $RANDOM_THEME\n# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes\nZSH_THEME="robbyrussell"\n...\n')),(0,l.kt)("p",null,"To change the theme, simply get the name of the theme from ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.oh-my-zsh/themes/")," and replace it. For example, to change the themes to bureau theme, ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.oh-my-zsh/themes/bureau.zsh-theme"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ZSH_THEME="bureau"\n')),(0,l.kt)("p",null,"Reload the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," to effect the changes everytime you make changes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\n")),(0,l.kt)("h3",{id:"enable-oh-my-zsh-plugins"},"Enable Oh-My-Zsh Plugins"),(0,l.kt)("p",null,"Plugins are stored under ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.oh-my-zsh/plugins"),". Plugins can be enabled by defining them under the plugins section on ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," config file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfg"},"plugins=(git docker-compose docker ansible vagrant sudo)\n")),(0,l.kt)("p",null,"Save and exit the shell. Then source ~/.zshrc for the changes to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\n")),(0,l.kt)("h3",{id:"external-plugins"},"External Plugins"),(0,l.kt)("p",null,"Clone the desired plugin - e.g. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/marlonrichert/zsh-autocomplete#installation"},"zsh-autocomplete")," and add it to your ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/ubuntu\ngit clone https://github.com/marlonrichert/zsh-autocomplete.git\nnano .zshrc\n")),(0,l.kt)("p",null,"Add the following to your .zshrc file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfg"},"source /home/ubuntu/zsh-autocomplete/zsh-autocomplete.zsh\n")),(0,l.kt)("h2",{id:"adding-exa"},"Adding EXA"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ogham/exa"},"exa")," is a modern replacement for the venerable file-listing command-line program ls that ships with Unix and Linux operating systems, giving it more features and better defaults. It uses colours to distinguish file types and metadata. It knows about symlinks, extended attributes, and Git. And it\u2019s small, fast, and just one single binary."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install exa\n")),(0,l.kt)("p",null,"Adding a shortcut in ",(0,l.kt)("inlineCode",{parentName:"p"},"nano .bashrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfg"},"alias dir='exa -abghHlS --tree'\n")),(0,l.kt)("h3",{id:"command-line-options"},"Command-line options"),(0,l.kt)("p",null,"exa\u2019s options are almost, but not quite, entirely unlike ls\u2019s."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Display options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-1, --oneline"),(0,l.kt)("td",{parentName:"tr",align:null},"display one entry per line")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-G, --grid"),(0,l.kt)("td",{parentName:"tr",align:null},"display entries as a grid (default)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-l, --long"),(0,l.kt)("td",{parentName:"tr",align:null},"display extended details and attributes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-R, --recurse"),(0,l.kt)("td",{parentName:"tr",align:null},"recurse into directories")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-T, --tree"),(0,l.kt)("td",{parentName:"tr",align:null},"recurse into directories as a tree")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-x, --across"),(0,l.kt)("td",{parentName:"tr",align:null},"sort the grid across, rather than downwards")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-F, --classify"),(0,l.kt)("td",{parentName:"tr",align:null},"display type indicator by file names")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--colo","[u]","r"),(0,l.kt)("td",{parentName:"tr",align:null},"when to use terminal colours")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--colo","[u]","r-scale"),(0,l.kt)("td",{parentName:"tr",align:null},"highlight levels of file sizes distinctly")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--icons"),(0,l.kt)("td",{parentName:"tr",align:null},"display icons")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Filtering options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-a, --all"),(0,l.kt)("td",{parentName:"tr",align:null},"show hidden and 'dot' files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-d, --list-dirs"),(0,l.kt)("td",{parentName:"tr",align:null},"list directories like regular files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-L, --level=(depth)"),(0,l.kt)("td",{parentName:"tr",align:null},"limit the depth of recursion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-r, --reverse"),(0,l.kt)("td",{parentName:"tr",align:null},"reverse the sort order")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-s, --sort=(field)"),(0,l.kt)("td",{parentName:"tr",align:null},"which field to sort by")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--group-directories-first"),(0,l.kt)("td",{parentName:"tr",align:null},"list directories before other files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-D, --only-dirs"),(0,l.kt)("td",{parentName:"tr",align:null},"list only directories")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--git-ignore"),(0,l.kt)("td",{parentName:"tr",align:null},"ignore files mentioned in .gitignore")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-I, --ignore-glob=(globs)"),(0,l.kt)("td",{parentName:"tr",align:null},"glob patterns (pipe-separated) of files to ignore")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Pass the --all option twice to also show the . and .. directories.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Long view options")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"These options are available when running with --long (-l)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-b, --binary"),(0,l.kt)("td",{parentName:"tr",align:null},"list file sizes with binary prefixes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-B, --bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"list file sizes in bytes, without any prefixes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-g, --group"),(0,l.kt)("td",{parentName:"tr",align:null},"list each file\u2019s group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-h, --header"),(0,l.kt)("td",{parentName:"tr",align:null},"add a header row to each column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-H, --links"),(0,l.kt)("td",{parentName:"tr",align:null},"list each file\u2019s number of hard links")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-i, --inode"),(0,l.kt)("td",{parentName:"tr",align:null},"list each file\u2019s inode number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-m, --modified"),(0,l.kt)("td",{parentName:"tr",align:null},"use the modified timestamp field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-S, --blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"list each file\u2019s number of file system blocks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-t, --time=(field)"),(0,l.kt)("td",{parentName:"tr",align:null},"which timestamp field to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-u, --accessed"),(0,l.kt)("td",{parentName:"tr",align:null},"use the accessed timestamp field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-U, --created"),(0,l.kt)("td",{parentName:"tr",align:null},"use the created timestamp field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-@, --extended"),(0,l.kt)("td",{parentName:"tr",align:null},"list each file\u2019s extended attributes and sizes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--changed"),(0,l.kt)("td",{parentName:"tr",align:null},"use the changed timestamp field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--git"),(0,l.kt)("td",{parentName:"tr",align:null},"list each file\u2019s Git status, if tracked or ignored")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--time-style"),(0,l.kt)("td",{parentName:"tr",align:null},"how to format timestamps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--no-permissions"),(0,l.kt)("td",{parentName:"tr",align:null},"suppress the permissions field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--no-filesize"),(0,l.kt)("td",{parentName:"tr",align:null},"suppress the filesize field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--no-user"),(0,l.kt)("td",{parentName:"tr",align:null},"suppress the user field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--no-time"),(0,l.kt)("td",{parentName:"tr",align:null},"suppress the time field")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Some of the options accept parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Valid --color options are always, automatic, and never."),(0,l.kt)("li",{parentName:"ul"},"Valid sort fields are accessed, changed, created, extension, Extension, inode, modified, name, Name, size, type, and none. Fields starting with a capital letter sort uppercase before lowercase. The modified field has the aliases date, time, and newest, while its reverse has the aliases age and oldest."),(0,l.kt)("li",{parentName:"ul"},"Valid time fields are modified, changed, accessed, and created."),(0,l.kt)("li",{parentName:"ul"},"Valid time styles are default, iso, long-iso, and full-iso.")),(0,l.kt)("h2",{id:"manual-update-oh-my-zsh"},"Manual Update Oh-My-ZSH"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/.oh-my-zsh && git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh\n")))}u.isMDXComponent=!0},18293:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-bb1cb7969c492d0795741dc686f072b6.jpg"}}]);