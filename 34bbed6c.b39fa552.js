(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(270)),s={id:"index-homebrew",title:"Create Redis database on Mac",sidebar_label:"Redis on Mac",slug:"/create/homebrew/",authors:["ajeet"]},c={unversionedId:"create/homebrew/index-homebrew",id:"create/homebrew/index-homebrew",isDocsHomePage:!1,title:"Create Redis database on Mac",description:"There are two ways to install Redis on Mac:",source:"@site/docs/create/homebrew/index-homebrew.mdx",slug:"/create/homebrew/",permalink:"/create/homebrew/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/homebrew/index-homebrew.mdx",version:"current",sidebar_label:"Redis on Mac",sidebar:"docs",previous:{title:"Create Redis database on Google Kubernetes Engine",permalink:"/create/kubernetes/"},next:{title:"Create Redis database on Microsoft Windows 10",permalink:"/create/windows"}},l=[{value:"Step 1: Install Homebrew",id:"step-1-install-homebrew",children:[]},{value:"Step 2: Install Redis using Homebrew",id:"step-2-install-redis-using-homebrew",children:[]},{value:"Step 3: Launch Redis service",id:"step-3-launch-redis-service",children:[]},{value:"Step 4: Test if Redis server is running.",id:"step-4-test-if-redis-server-is-running",children:[]},{value:"Step 5: Launch Redis on system boot",id:"step-5-launch-redis-on-system-boot",children:[]},{value:"Step 6: Run Redis service using a configuration file",id:"step-6-run-redis-service-using-a-configuration-file",children:[]},{value:"Step 7: Interacting with Redis Client",id:"step-7-interacting-with-redis-client",children:[]},{value:"Step 8: Stop the Redis service",id:"step-8-stop-the-redis-service",children:[]},{value:"Step 9: Uninstall Redis",id:"step-9-uninstall-redis",children:[]},{value:"Next Step",id:"next-step",children:[]}],o={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two ways to install Redis on Mac:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/create/from-source/"}),"Installing Redis from source")),Object(i.b)("li",{parentName:"ul"},"Using Homebrew")),Object(i.b)("p",null,"Homebrew is the easiest and most flexible way to install Redis on MacOS. It is a package management software for MacOS.\nIt automates Redis installation process, making it quick and easy to add Redis to your system. "),Object(i.b)("p",null,"Follow the below steps to install Redis on Mac using Homebrew:"),Object(i.b)("h3",{id:"step-1-install-homebrew"},"Step 1: Install Homebrew"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),Object(i.b)("h3",{id:"step-2-install-redis-using-homebrew"},"Step 2: Install Redis using Homebrew"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," brew update\n brew install redis\n")),Object(i.b)("h3",{id:"step-3-launch-redis-service"},"Step 3: Launch Redis service"),Object(i.b)("p",null,"To have launchd start redis now and restart at login:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," brew services start redis\n")),Object(i.b)("h3",{id:"step-4-test-if-redis-server-is-running"},"Step 4: Test if Redis server is running."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," redis-cli ping\n")),Object(i.b)("p",null,"It should return PONG. This command is often used to test if a connection is still alive."),Object(i.b)("h3",{id:"step-5-launch-redis-on-system-boot"},"Step 5: Launch Redis on system boot"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents\n")),Object(i.b)("h3",{id:"step-6-run-redis-service-using-a-configuration-file"},"Step 6: Run Redis service using a configuration file"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," redis-server /usr/local/etc/redis.conf\n")),Object(i.b)("h3",{id:"step-7-interacting-with-redis-client"},"Step 7: Interacting with Redis Client"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' redis-cli\n redis> set foo bar\n OK\n redis> get foo\n "bar"\n')),Object(i.b)("p",null,"Please note: By default, Redis has 0-15 indexes for databases, you can change that number databases NUMBER in redis.conf."),Object(i.b)("h3",{id:"step-8-stop-the-redis-service"},"Step 8: Stop the Redis service"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{})," brew services stop redis\n")),Object(i.b)("h3",{id:"step-9-uninstall-redis"},"Step 9: Uninstall Redis"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," brew uninstall redis\n")),Object(i.b)("h3",{id:"next-step"},"Next Step"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/explore/redisinsight"}),"Connect to Redis database using RedisInsight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/develop/java"}),"Develop with Java and Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/develop/python"}),"Develop with Python and Redis"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}b.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?a.a.createElement(m,c(c({ref:t},o),{},{components:n})):a.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var o=2;o<i;o++)s[o]=n[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);