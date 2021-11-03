(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(270)),s={id:"index-redisearch",title:"RediSearch Tutorial",sidebar_label:"RediSearch Tutorial",slug:"/howtos/redisearch",authors:["ajeet"]},o={unversionedId:"howtos/redisearch/index-redisearch",id:"howtos/redisearch/index-redisearch",isDocsHomePage:!1,title:"RediSearch Tutorial",description:"RediSearch is a powerful text search and secondary indexing engine, built on top of Redis as a Redis module. Written in C, RediSearch is extremely fast compared to other open-source search engines. It implements multiple data types and commands that fundamentally change what you can do with Redis. RediSearch supports capabilities for search and filtering such as geo-spatial queries, retrieving only IDs (instead of whole documents), and custom document scoring. Aggregations can combine map, filter, and reduce/group-by operations in custom pipelines that run across millions of elements in an instant.",source:"@site/docs/howtos/redisearch/index-redisearch.mdx",slug:"/howtos/redisearch",permalink:"/howtos/redisearch",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisearch/index-redisearch.mdx",version:"current",sidebar_label:"RediSearch Tutorial",sidebar:"docs",previous:{title:"HowTos & Tutorials",permalink:"/howtos"},next:{title:"RedisJSON Tutorial",permalink:"/howtos/redisjson/"}},c=[{value:"Step 1. Create free cloud account",id:"step-1-create-free-cloud-account",children:[]},{value:"Step 2. Create Your subscription",id:"step-2-create-your-subscription",children:[]},{value:"Step 3. Select the right Subscription Plan",id:"step-3-select-the-right-subscription-plan",children:[]},{value:"Step 4.  Select cloud vendor",id:"step-4--select-cloud-vendor",children:[]},{value:"Step 5. Click &quot;Create Subscription&quot;",id:"step-5-click-create-subscription",children:[]},{value:"Step 6. Create database",id:"step-6-create-database",children:[]},{value:"Step 7. Connect to a database",id:"step-7-connect-to-a-database",children:[]},{value:"Step 8. Getting Started with Redisearch",id:"step-8-getting-started-with-redisearch",children:[]},{value:"Next Step",id:"next-step",children:[]}],l={toc:c};function d(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RediSearch is a powerful text search and secondary indexing engine, built on top of Redis as a Redis module. Written in C, RediSearch is extremely fast compared to other open-source search engines. It implements multiple data types and commands that fundamentally change what you can do with Redis. RediSearch supports capabilities for search and filtering such as geo-spatial queries, retrieving only IDs (instead of whole documents), and custom document scoring. Aggregations can combine map, filter, and reduce/group-by operations in custom pipelines that run across millions of elements in an instant. "),Object(i.b)("p",null,"RediSearch also supports auto-completion with fuzzy prefix matching, and atomic real-time insertion of new documents to a search index.With the latest RediSearch 2.0 release, it\u2019s now easier than ever to create a secondary index on top of your existing data. You can just add RediSearch to your existing Redis database, create an index, and start querying it, without having to migrate your data or use new commands for adding data to the index. This drastically lowers the learning curve for new RediSearch users and lets you create indexes on your existing Redis databases\u2014without even having to restart them."),Object(i.b)("h3",{id:"step-1-create-free-cloud-account"},"Step 1. Create free cloud account"),Object(i.b)("p",null,"Create your free ",Object(i.b)("a",{href:"https://redislabs.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(674).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"image",src:a(675).default})),Object(i.b)("h3",{id:"step-2-create-your-subscription"},"Step 2. Create Your subscription"),Object(i.b)("p",null,'Next, you will have to create  Redis Enterprise Cloud subscription. In the Redis Enterprise Cloud menu, click "Create your Subscription". '),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(676).default})),Object(i.b)("h3",{id:"step-3-select-the-right-subscription-plan"},"Step 3. Select the right Subscription Plan"),Object(i.b)("p",null,'Select "Fixed Plan" for low throughout application as for now.'),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(677).default})),Object(i.b)("h3",{id:"step-4--select-cloud-vendor"},"Step 4.  Select cloud vendor"),Object(i.b)("p",null,"For the cloud provider, select your preferred cloud (for demo purpose)"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(678).default})),Object(i.b)("h3",{id:"step-5-click-create-subscription"},'Step 5. Click "Create Subscription"'),Object(i.b)("p",null,'Finally, click on "Create Subscription" button.'),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(679).default})),Object(i.b)("p",null,"You can now verify the subscription as shown below:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(680).default})),Object(i.b)("h3",{id:"step-6-create-database"},"Step 6. Create database"),Object(i.b)("p",null,'Click "Create Database". Enter database name and your preferred module.'),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(681).default})),Object(i.b)("h3",{id:"step-7-connect-to-a-database"},"Step 7. Connect to a database"),Object(i.b)("p",null,"Follow ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"explore/redisinsight"}),"this")," link to know how to connect to a database"),Object(i.b)("h3",{id:"step-8-getting-started-with-redisearch"},"Step 8. Getting Started with Redisearch"),Object(i.b)("p",null,"To begin, let\u2019s create a basic dataset based on movies information, which we will use to show how to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Insert data"),Object(i.b)("li",{parentName:"ul"},"Create an index"),Object(i.b)("li",{parentName:"ul"},"Query data")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Redisearch",src:a(682).default})),Object(i.b)("h4",{id:"insert-data-into-redisearch"},"Insert data into RediSearch"),Object(i.b)("p",null,"We are now ready to insert some data. This example uses movies data stored as Redis Hashes, so let\u2019s insert a couple of movies:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'HSET movies:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "Luke Skywalker begins Jedi training with Yoda." release_year 1980 genre "Action" rating 8.7 votes 1127635\n\n(integer) 6 \n\n> HSET movies:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his empire to his son." release_year 1972 genre "Drama" rating 9.2 votes 1563839 \n\n(integer) 6\n')),Object(i.b)("p",null,"Your Redis Enterprise Cloud database now contains two Hashes. It is simple to retrieve information using the HMGET command, if you know the key of the movies (movies:11002):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'> HMGET movies:11002 title rating\n\n1) "Star Wars: Episode V - The Empire Strikes Back"\n2) "8.7"\n')),Object(i.b)("h4",{id:"create-an-index-in-redisearch"},"Create an index in RediSearch"),Object(i.b)("p",null,"To be able to query the hashes on the field for title, say, or genre, you must first create an index. To create an index, you must define a schema to list the fields and their types that are indexed, and that you can use in your queries."),Object(i.b)("p",null,"Use the FT.CREATE command to create an index, as shown here:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'> FT.CREATE idx:movies ON hash PREFIX 1 "movies:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n\nOK\n')),Object(i.b)("p",null,"In the command above, we:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an index named idx:movies"),Object(i.b)("li",{parentName:"ul"},"Used a schema made up of four fields:\ntitle\nrelease_year\nrating\ngenre")),Object(i.b)("p",null,"Before running queries on our new index, though, let\u2019s take a closer look at the elements of the FT.CREATE command:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"idx:movies: the name of the index, which you will use when doing queries"),Object(i.b)("li",{parentName:"ul"},"ON hash: the type of structure to be indexed. (Note that RediSearch 2.0 supports only the Hash structure, but this parameter will allow RediSearch to index other structures in the future.)"),Object(i.b)("li",{parentName:"ul"},"PREFIX 1 \u201cmovies:\u201d: the prefix of the keys that should be indexed. This is a list, so since we want to index only movies:* keys the number is 1. If you want to index movies and TV shows with the same fields, you could use: PREFIX 2 \u201cmovies:\u201d \u201ctv_show:\u201d"),Object(i.b)("li",{parentName:"ul"},"SCHEMA \u2026: defines the schema, the fields, and their type to index. As you can see in the command, we are using TEXT, NUMERIC, and TAG, as well as SORTABLE parameters.")),Object(i.b)("p",null,"The RediSearch 2.0 engine will scan the database using the PREFIX values, and update the index based on the schema definition. This makes it easy to add an index to an existing application that uses Hashes, there\u2019s no need to change your code."),Object(i.b)("h4",{id:"search-the-movies-in-the-redisearch-index"},"Search the movies in the RediSearch index"),Object(i.b)("p",null,"You can now use the FT.SEARCH to search your database, for example, to search all movies sorted by release year:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'>  FT.SEARCH idx:movies * SORTBY release_year ASC RETURN 2 title release_year\n1) (integer) 2\n2) "movies:1003"\n3) 1) "release_year"\n   2) "1972"\n   3) "title"\n   4) "The Godfather"\n4) "movies:1002"\n5) 1) "release_year"\n   2) "1980"\n   3) "title"\n   4) "Star Wars: Episode V - The Empire Strikes Back"\n')),Object(i.b)("p",null,"You can also search \u201caction\u201d movies that contain \u201cstar\u201d in the index (in our sample index, the term \u201cstar\u201d will occur only in the title):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'>  FT.SEARCH idx:movies "star @genre:{action}" RETURN 2 title release_year\n1) (integer) 1\n2) "movies:1002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(i.b)("p",null,"The FT.SEARCH command is the base command to search your database, it has many options and is associated with a powerful and rich query syntax that you can find in the documentation. (Note: You can also use the index to do data aggregation using the FT.AGGREGATE command.)"),Object(i.b)("h3",{id:"next-step"},"Next Step"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Learn more about RediSearch in the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/RediSearch/redisearch-getting-started/"}),"Getting Started with RediSearch 2.0"),"  tutorial on GitHub."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started"}),"How to list and search Movie database using Redisearch"))))}d.isMDXComponent=!0},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,h=u["".concat(s,".").concat(p)]||u[p]||b[p]||i;return a?r.a.createElement(h,o(o({ref:t},l),{},{components:a})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},674:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tryfree-fc4588b1c602a4ce5cdf9861bfa9fdeb.png"},675:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deployment-bbcdfc9c2f618977490875fa0f5f71bf.png"},676:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create_subscription-1f3a6e5bfb6a2dd058fcc8f69c72fcc3.png"},677:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/select_subscription-0494b7c451b547bfb8f26d7056172146.png"},678:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/select_cloud-b9a15ab9a2a178e95dd0b484f85a811b.png"},679:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/final_subscription-f323c9fd4ed3a294375211ab65225c5b.png"},680:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Verify_subscription-0cf649239213ecde4f241cbe92e94929.png"},681:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rediscloud_redisearch-aaaaf8e2e870ba399fe2038a34b1b2cc.png"},682:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisearch12-9bd265678de5cf0028ce56ae124468e1.png"}}]);