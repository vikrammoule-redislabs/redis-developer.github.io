(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{272:function(e,t,o){"use strict";var a=o(0),n=o.n(a),i=o(270),r=o(278);o(271),o(55);t.a=function(e){var t=n.a.useState(!1),o=t[0],a=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!o)}})))),o&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(i.a,{components:r.a},e.children)))}},358:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/rediscloud-d61184b5afea31c7297d7eeba25a71ec.png"},359:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},360:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},361:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"},65:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var a=o(3),n=o(7),i=(o(0),o(270)),r=(o(272),{id:"index-herokunodejs",title:"How to build a NodeJS based application on Heroku using Redis",sidebar_label:"How to build a NodeJS based application on Heroku using Redis",slug:"/howtos/herokunodejs",authors:["ajeet"]}),s={unversionedId:"howtos/herokunodejs/index-herokunodejs",id:"howtos/herokunodejs/index-herokunodejs",isDocsHomePage:!1,title:"How to build a NodeJS based application on Heroku using Redis",description:"Step 1. Create Redis Enterprise Cloud",source:"@site/docs/howtos/herokunodejs/index-herokunodejs.mdx",slug:"/howtos/herokunodejs",permalink:"/howtos/herokunodejs",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/herokunodejs/index-herokunodejs.mdx",version:"current",sidebar_label:"How to build a NodeJS based application on Heroku using Redis",sidebar:"docs",previous:{title:"Building a Popup Store  application using Redis",permalink:"/howtos/popupstore"},next:{title:"How to build a Python based application on Heroku using Redis",permalink:"/howtos/herokupython"}},c=[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",children:[]},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",children:[]},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",children:[]},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",children:[]},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",children:[]},{value:"Step 6. Setting up Environmental variable",id:"step-6-setting-up-environmental-variable",children:[]},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",children:[]},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),Object(i.b)("p",null,"Create your free Redis Enterprise Cloud account. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/create/rediscloud"}),"Follow this link to create Redis Enterprise Cloud")," subscription and database as shown below:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:o(358).default})),Object(i.b)("p",null,"Save the database endpoint URL and password for future reference."),Object(i.b)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),Object(i.b)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://signup.heroku.com/login"}),"through this link")),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:o(359).default})),Object(i.b)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-macos"})," brew install heroku\n")),Object(i.b)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),Object(i.b)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),Object(i.b)("p",null,"For this demonstration, we will be using a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redis-developer/basic-rate-limiting-demo-nodejs"}),"Sample Rate Limiting application")),Object(i.b)("h4",{id:"clone-the-repository"},"Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs\n")),Object(i.b)("p",null,"Run the below CLI to have a functioning Git repository that contains a simple application as well as a package.json file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku create\nCreating app... done, \u2b22 rocky-lowlands-06306\nhttps://rocky-lowlands-06306.herokuapp.com/ | https://git.heroku.com/rocky-lowlands-06306.git\n")),Object(i.b)("h3",{id:"step-6-setting-up-environmental-variable"},"Step 6. Setting up Environmental variable"),Object(i.b)("p",null,'Go to Heroku dashboard, click "Settings" and set REDIS_ENDPOINT_URI and REDIS_PASSWORD under the Config Vars.\nRefer to Step 1 for the reference.'),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:o(360).default})),Object(i.b)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),Object(i.b)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ git push heroku\n")),Object(i.b)("p",null,"Wait for few seconds and you will see the below messages being displayed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"remote: -----\x3e Launching...\nremote:        Released v3\nremote:        https://rocky-lowlands-06306.herokuapp.com/ deployed to Heroku\nremote: \nremote: Verifying deploy... done.\nTo https://git.heroku.com/rocky-lowlands-06306.git\n * [new branch]      main -> main\n\n")),Object(i.b)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),Object(i.b)("p",null,"Open ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://rocky-lowlands-06306.herokuapp.com/"}),"https://rocky-lowlands-06306.herokuapp.com/"),"   to see your application"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:o(361).default})),Object(i.b)("h3",{id:"next-step"},"Next Step"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started/"}),"How to list & search Movies database using Redisearch"))))}p.isMDXComponent=!0}}]);