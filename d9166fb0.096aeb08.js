(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(124)),i={id:"index-software",title:"Using Redis Enterprise Software",sidebar_label:"Redis Enterprise",slug:"/create/resoftware"},c={unversionedId:"create/resoftware/index-software",id:"create/resoftware/index-software",isDocsHomePage:!1,title:"Using Redis Enterprise Software",description:"Create a database using Redis Enterprise Software",source:"@site/docs/create/resoftware/index-resoftware.mdx",slug:"/create/resoftware",permalink:"/create/resoftware",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/resoftware/index-resoftware.mdx",version:"current",sidebar_label:"Redis Enterprise",sidebar:"docs",previous:{title:"Using Docker",permalink:"/create/docker"},next:{title:"Explore Data",permalink:"/explore/"}},s=[{value:"Install Redis Enterprise Software",id:"install-redis-enterprise-software",children:[]},{value:"Setting up a cluster",id:"setting-up-a-cluster",children:[]},{value:"Create a database",id:"create-a-database",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"create-a-database-using-redis-enterprise-software"},"Create a database using Redis Enterprise Software"),Object(o.b)("h3",{id:"install-redis-enterprise-software"},"Install Redis Enterprise Software"),Object(o.b)("p",null,"You can download the binaries from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.redislabs.com/redis-enterprise-software/download-center/software/"}),"Redis Enterprise Download Center")," and copy the download package to machine with a Linux-based OS. To untar the image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"tar vxf <downloaded tar file name>\n")),Object(o.b)("p",null,"Once the tar command completes, install RS with the install.sh script in the current directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo ./install.sh -y\n")),Object(o.b)("h3",{id:"setting-up-a-cluster"},"Setting up a cluster"),Object(o.b)("p",null,"In the web browser on the host machine, go to https://localhost:8443 to see the Redis Enterprise Software web console."),Object(o.b)("p",null,"Note: Depending on your browser, you may see a certificate error. You can safely continue to the web console.\nIf you see an error from nginx, try again after a few minutes.\nClick Setup to start the node configuration steps."),Object(o.b)("p",null,"In the Node Configuration settings, enter a cluster FQDN such as cluster.local. Then click Next button."),Object(o.b)("p",null,"Enter your license key, if you have one. If not, click the Next button to use the trial version."),Object(o.b)("p",null,"Enter an email and password for the admin account for the web console."),Object(o.b)("p",null,"These credentials are also used for connections to the REST API."),Object(o.b)("p",null,"Click OK to confirm that you are aware of the replacement of the HTTPS SSL/TLS certificate on the node, and proceed through the browser warning."),Object(o.b)("h3",{id:"create-a-database"},"Create a database"),Object(o.b)("p",null,"Select \u201credis database\u201d and the \u201csingle region\u201d deployment, and click Next."),Object(o.b)("p",null,"Enter a database name such as database1 and click Activate to create your database."),Object(o.b)("p",null,"You now have a Redis database!"))}u.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);