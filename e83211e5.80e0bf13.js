(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{245:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return o}));var n=t(3),r=t(7),s=(t(0),t(270)),i=(t(275),t(276),t(271),t(272),{id:"index-hackernews",title:"How to build a HackerNews Clone using Redis",sidebar_label:"How to build a HackerNews Clone using Redis",slug:"/howtos/hackernews",authors:["ajeet"]}),c={unversionedId:"howtos/hackernews/index-hackernews",id:"howtos/hackernews/index-hackernews",isDocsHomePage:!1,title:"How to build a HackerNews Clone using Redis",description:"Hacker News (sometimes abbreviated as HN) is a social news website focusing on computer science and entrepreneurship.",source:"@site/docs/howtos/hackernews/index-hackernews.mdx",slug:"/howtos/hackernews",permalink:"/howtos/hackernews",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/hackernews/index-hackernews.mdx",version:"current",sidebar_label:"How to build a HackerNews Clone using Redis",sidebar:"docs",previous:{title:"Building a Pipeline for Natural Language Processing using RedisGears",permalink:"/howtos/nlp"},next:{title:"Redis Anti-Patterns Every Developer Should Avoid",permalink:"/howtos/antipatterns/"}},l=[{value:"Step 1. Install the prerequisites",id:"step-1-install-the-prerequisites",children:[]},{value:"Step 2. Create Redis Enterprise Cloud database",id:"step-2-create-redis-enterprise-cloud-database",children:[]},{value:"Step 3. Clone the repository",id:"step-3-clone-the-repository",children:[]},{value:"Step 4. Setting up environmental variable",id:"step-4-setting-up-environmental-variable",children:[]},{value:"Step 5. Run the developer environment",id:"step-5-run-the-developer-environment",children:[]},{value:"Step 6.  Pull Hacker News API to seed database",id:"step-6--pull-hacker-news-api-to-seed-database",children:[]},{value:"Step 7. Access the HackerNews URL",id:"step-7-access-the-hackernews-url",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Example commands",id:"example-commands",children:[{value:"References",id:"references",children:[]}]}],b={toc:l};function o(e){var a=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,i,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Hacker News (sometimes abbreviated as HN) is a social news website focusing on computer science and entrepreneurship.\nThis is a HackerNews clone built upon React, NextJS as a frontend and NodeJS, ExpressJS & Redis as a backend.\nThis application uses RedisJSON module for storing the data and RediSearch module for searching."),Object(s.b)("p",null,Object(s.b)("img",{alt:"hackernews",src:t(870).default})),Object(s.b)("h3",{id:"step-1-install-the-prerequisites"},"Step 1. Install the prerequisites"),Object(s.b)("h4",{id:"install-the-below-packages"},"Install the below packages"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"NPM v7.8.0"),Object(s.b)("li",{parentName:"ul"},"NODE v15.10.0")),Object(s.b)("h3",{id:"step-2-create-redis-enterprise-cloud-database"},"Step 2. Create Redis Enterprise Cloud database"),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"../create/rediscloud"}),"Follow this link")," to create Redis Enterprise Cloud account with 2 databases - one with RedisJSON module and other with RediSearch module enabled. Please note that under Free subscription, only one module can be enabled. If you want to create 2 databases, then you might need to create 2 different subscriptions."),Object(s.b)("p",null,"Save the database endpoint URL and password for our future reference"),Object(s.b)("h3",{id:"step-3-clone-the-repository"},"Step 3. Clone the repository"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-hacker-news-demo\n cd redis-hacker-news-demo\n")),Object(s.b)("h3",{id:"step-4-setting-up-environmental-variable"},"Step 4. Setting up environmental variable"),Object(s.b)("p",null,"Copy .env.sample to .env and provide the values as shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," MAILGUN_API_KEY=YOUR_VALUE_HERE\n SEARCH_REDIS_SERVER_URL=redis://redis-XXXXX.c10.us-east-1-2.ec2.cloud.redislabs.com:10292\n SEARCH_REDIS_PASSWORD=ABCDXYZbPXHWsC\n JSON_REDIS_SERVER_URL=redis://redis-XXXXX.c14.us-east-1-2.ec2.cloud.redislabs.com:14054\n JSON_REDIS_PASSWORD=ABCDXYZA3tzw2XYMPi2P8UPm19D\n LOG_LEVEL=1\n USE_REDIS=1\n REDIS_REINDEX=\n PRODUCTION_WEBSITE_URL=i\n")),Object(s.b)("h3",{id:"step-5-run-the-developer-environment"},"Step 5. Run the developer environment"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm install\n npm run dev\n")),Object(s.b)("h3",{id:"step-6--pull-hacker-news-api-to-seed-database"},"Step 6.  Pull Hacker News API to seed database"),Object(s.b)("p",null,"Using ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/HackerNews/API"}),"API"),", it pulls the latest hackernews data.\nNext, you need to seed top stories from hacker news. First create a moderator with moderator:password123"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," node ./backend/scripts/seed.js\n")),Object(s.b)("h3",{id:"step-7-access-the-hackernews-url"},"Step 7. Access the HackerNews URL"),Object(s.b)("p",null,"Open https://localhost:3001 and you should be able to access the HackerNews login screen as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"hackernews",src:t(339).default})),Object(s.b)("h3",{id:"how-it-works"},"How it works"),Object(s.b)("h4",{id:"by-screens"},"By Screens"),Object(s.b)("h4",{id:"signup"},"Signup"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Signup Screen",src:t(339).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Make sure user(where username is andy1) does not exist."),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user @username:"andy1" NOCONTENT LIMIT 0 1 SORTBY _id DESC\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Get and increase the next id in users collection."),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," GET user:id-indicator // 63\n INCR user:id-indicator  // 64 will be next user id, 63 is current user id\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Create user:63 hash and json.(json also collects authToken and password hash etc)"))),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  HSET user:63 username andy1 email  created 1615569194 karma 0 about  showDead false isModerator false shadowBanned false banned false _id 63\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  JSON.SET user:63 . \n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' \'{"username":"andy1","password":"$2a$10$zy8tsCske8MfmDX5CcWMce5S1U7PJbPI7CfaqQ7Bo1PORDeqJxqhe","authToken":"AAV07FIwTiEkNrPj0x1yj6BPJQSGIPzV0sICw2u0","  authTokenExpiration":1647105194,"email":"","created":1615569194,"karma":0,"showDead":false,"isModerator":false,"shadowBanned":false,"banned":false,"_id":63}\'\n')),Object(s.b)("h4",{id:"login"},"Login"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Login Screen",src:t(871).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find user"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user  @username:"andy1" NOCONTENT LIMIT 0 1 SORTBY _id DESC\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Make sure password is correct"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," JSON.MGET user:63 .\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Compare password and new password hash and create cookie if it's successful"))),Object(s.b)("h4",{id:"item-list-page"},"Item list page"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Newest Screen",src:t(872).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Check if user has toggled hidden attribute on a specific item."),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user-hidden  @username:"andy1" NOCONTENT LIMIT 0 10000 SORTBY _id DESC\n // Result - [0, "item:4"]\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If that is not null"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:item  (-(@id:"item:4")) (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY _id ASC\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If it's empty array"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:item (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY _id ASC\n // Result - [3,"item:1","item:2","item:3"]\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Get all items from RedisJSON"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' JSON.MGET item:1 item:2 item:3 .\n // Result - [{"id":"bkWCjcyJu5WT","by":"todsacerdoti","title":"Total Cookie  \n Protection","type":"news","url":"https://blog.mozilla.org/security/2021/02/23/total-cookie-\n protection/","domain":"mozilla.org","points":1,"score":1514,"commentCount":0,"created":1614089461,"dead":false,"_id":3}]]\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Get items posted within last 1 week"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:item  (@created:[(1615652598 +inf]) (@dead:"false") NOCONTENT LIMIT 0 0 SORTBY _id DESC\n // Result - [13,"item:19","item:17","item:16","item:15","item:14","item:13","item:12","item:11","item:8","item:5","item:4","item:3","item:1"]\n')))),Object(s.b)("p",null,"Note that 1615652598 is timestamp of 1 week ealier than current timestamp"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," JSON.MGET item:19 item:17 item:16 item:15 item:14 item:13 item:12 item:11 item:8 item:5 item:4 item:3 item:1 .\n // Result - the JSON of selected items\n")),Object(s.b)("h4",{id:"item-detail"},"Item Detail"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Item Detail Screen",src:t(873).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Get the item object first"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," JSON.MGET item:1 .\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find item:1 's root comments"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:comment  (@parentItemId:"kDiN0RhTivmJ") (@isParent:"true") (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY points ASC\n // Result - [3,"comment:1","comment:2","comment:12"]\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Get those comments"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' JSON.MGET comment:1 comment:2 comment:12 .\n // one comment example result - {"id":"jnGWS8TTOecC","by":"ploxiln","parentItemId":"kDiN0RhTivmJ","parentItemTitle":"The Framework  \n Laptop","isParent":true,"parentCommentId":"","children":[13,17,20],"text":"I don&#x27;t see any mention of the firmware and drivers efforts for this. \n Firmware and drivers always end up more difficult to deal with than expected.<p>The Fairphone company was surprised by difficulties upgrading and \n patching android without support from their BSP vendor, causing many months delays of updates _and_ years shorter support life than they were \n planning for their earlier models.<p>I purchased the Purism Librem 13 laptop from their kickstarter, and they had great plans for firmware and \n drivers, but also great difficulty following through. The trackpad chosen for the first models took much longer than expected to get upstream linux \n support, and it was never great (it turned out to be impossible to reliably detect their variant automatically). They finally hired someone with \n sufficient skill to do the coreboot port _months_ after initial units were delivered, and delivered polished coreboot firmware for their initial \n laptops _years_ after they started the kickstarter.<p>So, why should we have confidence in the firmware and drivers that Framework will deliver \n :)","points":1,"created":1614274058,"dead":false,"_id":12}\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Using children of each comment, fetch children comments"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:comment  (@dead:"false") (@_id:("3"|"7"|"11")) NOCONTENT LIMIT 0 10000 SORTBY _id DESC\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Iterate this over until all comments are resolved"))),Object(s.b)("h4",{id:"submit"},"Submit"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Submit Screen",src:t(874).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Get next item's id and increase it"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," GET item:id-indicator\n // Result - 4\n SET item:id-indicator 5\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Create hash and RedisJSON index"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," HSET item:4 id iBi8sU4HRcZ2 by andy1 title Firebase trends type ask url  domain  text Firebase Performance Monitoring is a service that helps you to \n gain insight into the performance characteristics of your iOS, Android, and web apps. points 1 score 0 created 1615571392 dead false _id 4\n")))),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' JSON.SET item:4 . \'{"id":"iBi8sU4HRcZ2","by":"andy1","title":"Firebase trends","type":"ask","url":"","domain":"","text":"Firebase Performance \n Monitoring is a service that helps you to gain insight into the performance characteristics of your iOS, Android, and web \n apps.","points":1,"score":0,"commentCount":0,"created":1615571392,"dead":false,"_id":4}\'\n')),Object(s.b)("h4",{id:"update-profile"},"Update Profile"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Update Profile Screen",src:t(875).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Get the user")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user  (@username:"andy1") NOCONTENT LIMIT 0 1 SORTBY _id DESC\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," JSON.MGET user:63 .\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Update new user")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," HSET user:63 username andy1 email  created 1615569194 karma 1 about I am a software engineer. showDead false isModerator false shadowBanned false \n banned false _id 63\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' JSON.SET user:63 .  \n\'{"username":"andy1","password":"$2a$10$zy8tsCske8MfmDX5CcWMce5S1U7PJbPI7CfaqQ7Bo1PORDeqJxqhe","authToken":"KJwPLN1idyQrMp5qEY5hR3VhoPFTKRcC8Npxxoju","   authTokenExpiration":1647106257,"email":"","created":1615569194,"karma":1,"about":"I am a software  \n engineer.","showDead":false,"isModerator":false,"shadowBanned":false,"banned":false,"_id":63}\'\n')),Object(s.b)("h4",{id:"moderation-logs-screen"},"Moderation Logs screen"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Moderation Logs",src:t(876).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Find all moderation logs")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:moderation-log * NOCONTENT LIMIT 0 0 SORTBY _id DESC\n  // Result - [1,"moderation-log:1"]\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Get that moderation logs")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," JSON.MGET moderation-log:1 .\n")),Object(s.b)("h4",{id:"search"},"Search"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Search Screen",src:t(877).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'Get items that contains "fa"')),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:item  (@title:fa*) (-(@id:"aaaaaaaaa")) (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY score ASC\n  // Result - [2,"item:18","item:16"]\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Get those items via json")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," JSON.MGET item:18 item:16 .\n")),Object(s.b)("h2",{id:"example-commands"},"Example commands"),Object(s.b)("h4",{id:"there-are-2-type-of-fields-indexed-and-non-indexed"},"There are 2 type of fields, indexed and non-indexed."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Indexed fields will be stored in hash using HSET/HGET."),Object(s.b)("li",{parentName:"ol"},"Non-indexed fields will be stored in RedisJSON.")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Create RediSearch Index")),Object(s.b)("p",null,"When schema is created, it should created index."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.CREATE idx:user ON hash PREFIX 1 "user:" SCHEMA username TEXT SORTABLE email TEXT SORTABLE karma NUMERIC SORTABLE\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Drop RediSearch Index")),Object(s.b)("p",null,"Should drop/update index if the schema has changed"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," FT.DROPINDEX idx:user\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Get RediSearch Info")),Object(s.b)("p",null,"Validate if the fields are indexed properly. If not, it will update the index fields or drop/recreate."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," FT.INFO idx:user\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Create a new user")),Object(s.b)("p",null,"It will require new hash and new JSON record"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' HSET user:andy username "andy" email "andy@gmail.com" karma 0\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' JSON.SET user:andy \'{"passoword": "hashed_password", "settings": "{ \\"showDead\\": true }" }\'\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Update a user"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' HSET user:1 username "newusername"\n')),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' JSON.SET user:andy username "newusername"\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find user with username 'andy'"))),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Find  the user's hash first"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{})," FT.SEARCH idx:user '@username:{andy}'\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Fetch the JSON object to get the related JSON object"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{})," JSON.GET user:andy\n")))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find user whose id is andy1 or andy2"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user \'@id:("andy1"|"andy2")\'\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find user whose id is not andy1 or andy2"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user \'(-(@id:("andy1"|"andy2")))\'\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find user whose id is andy1 or username is andy"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user \'(@id:"andy1") | (@username:"andy")\'\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find user whose id is andy1 and username is andy"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' FT.SEARCH idx:user \'(@id:"andy1") (@username:"andy")\'\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find first 10 users order by username"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," FT.SEARCH idx:user '*' LIMIT 0 10 SORTBY username ASC\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Find next 10 users"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," FT.SEARCH idx:user '*' LIMIT 10 20 SORTBY username ASC\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Get from RedisJson from multiple keys"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' JSON.MGET idx:user "andy1" "andy2" "andy3"\n')))),Object(s.b)("h3",{id:"references"},"References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/redisjson/using-python"}),"RedisJSON and Python")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/redisjson/storing-complex-json-document"}),"How to store and retrieve nested JSON document")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/redisjson/using-nodejs"}),"Importing JSON data into Redis using NodeJS")," "),Object(s.b)("li",{parentName:"ul"},"Learn more about ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redis.com/redisjson/"}),"RedisJSON")," in the Quickstart tutorial."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/shoppingcart"}),"How to build shopping cart app using NodeJS and RedisJSON")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.com/blog/index-and-query-json-docs-with-redis/"}),"Indexing, Querying, and Full-Text Search of JSON Documents with Redis")," ")))}o.isMDXComponent=!0},272:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(270),i=t(278);t(271),t(55);a.a=function(e){var a=r.a.useState(!1),t=a[0],n=a[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!t)}})))),t&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(s.a,{components:i.a},e.children)))}},273:function(e,a,t){"use strict";var n=t(0),r=t(274);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},274:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},275:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(273),i=t(277),c=t(56),l=t.n(c),b=37,o=39;a.a=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(s.a)(),O=m.tabGroupChoices,h=m.setTabGroupChoices,j=Object(n.useState)(c),N=j[0],f=j[1],g=n.Children.toArray(e.children);if(null!=p){var w=O[p];null!=w&&w!==N&&d.some((function(e){return e.value===w}))&&f(w)}var S=function(e){f(e),null!=p&&h(p,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===a,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":N===a}),key:a,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case o:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case b:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(T,e.target,e)},onFocus:function(){return S(a)},onClick:function(){S(a)}},t)}))),a?Object(n.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==N})}))))}},276:function(e,a,t){"use strict";var n=t(3),r=t(0),s=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}},339:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/screenshot-signup-8caa71d43eb218ac98130e6e5114b1bd.png"},870:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/hackernews-974e3026a35651a1790714fa7f947184.png"},871:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/screenshot-login-2b5a07f61355ab0dfc9a8d3f1dcec528.png"},872:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/screenshot-newest-776786b42d1ae7703a3fde07205bb331.png"},873:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/screenshot-item-detail-a9ebbf8ae72d8af6b48c45163f524ce8.png"},874:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/screenshot-submit-12e6b9a754af39610ac2d543d20eb095.png"},875:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/screenshot-update-profile-1e16d2b9d87668fac47f2bf8f621fba0.png"},876:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/moderation-logs-0c7f3ba0bdde08ee517b934ba044a8d9.png"},877:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/screenshot-search-e782083909b3aa74751ef1e8976e20ce.png"}}]);