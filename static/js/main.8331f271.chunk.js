(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"projectName":"Pindrop Network","url":"Pindrop","skillsShowcased":"Front-End Development, React, Mobile-friendly design, NPM Integration, SCSS, Gulp, SVG","techUsed":"React, NPM Packages, SCSS, Gulp, SVG files","projectDescription":"This application was developed for a start-up named Pindrop Network. I learned advanced development workflows utilizing multiple SCSS files to maintain organization. Then creating a script to automatically optimize the SCSS files and create a new minimized CSS file with the help of Gulp. Gulp optimized my code by minifying the code, grouping CSS media queries and adding prefixer elements for browser support. I also mediated conversations with designers and the client.","imgName":"pindrop-png","videoName":"pindrop-video","deployedLink":"https://www.pindropnetwork.com/"},{"projectName":"E-Commerce Bakery","url":"Danielle","skillsShowcased":"Full Stack Development, React, React State & Hooks, Local Storage, Sequelize, Stripe Integration, HTTP Requests","techUsed":"React, Sequelize Database, Stripe API, Axios, Local Storage","projectDescription":"This is a full-stack React application built for San Francisco-based baker Danielle M. Estrella. The application integrates e-commerce elements to give the site full functionality as a business development tool. Guests to the site may view the complete menu, place orders, view her photo gallery, and more! Shoppers do not have to create an account to shop because cart data persistence is accomplished using local storage. Then payments are processed using the Stripe payment API. Her menu is saved in a Sequelize database and is easily editable using the admin login which allows her to update, delete and create new menu items.","imgName":"danielle-bakery-png","videoName":"danielle-bakery-video","deployedLink":"https://danielle-m-estrella.herokuapp.com/","gitHubLink":"https://github.com/Pting1995/business.builder"},{"projectName":"Employee Organizer","url":"EmployeeOrganizer","skillsShowcased":"React, React Hooks, Sorting, Searching On Change, API Calls","techUsed":"React, Sorting, API Calls","projectDescription":"This application was designed to organize an entire company\'s employee list. Right now it uses an API to generate 15 random people with images, names, phone numbers, emails, and date of births. Right now you can sort by name, phone number, email, and date. Alternatively you can search by typing in the employee\'s name in the \\"Employee Search\\" form. It will dynamically filter though your employees with the string you input into the form.","imgName":"employee-organizer-png","videoName":"employee-organizer-video","deployedLink":"https://pting1995.github.io/employee-organizer/","gitHubLink":"https://github.com/Pting1995/employee-organizer"},{"projectName":"Password Generator","url":"PasswordGenerator","skillsShowcased":"Pseudocoding, If-Else Statements, Arrays, Math.Random","techUsed":"Randomization, Immutable arrays","projectDescription":"This site was made to create random passwords! Upon clicking the \\"Generate Password\\" button prompts will appear and ask the user the desired criteria for the password. Criteria include character types, such as lower case characters, upper case characters, numeric characters, special characters, and also password length. All desired characters are added to a control array and a random number generator picks a character in the array. This is done inside of a loop that iterates until the password length is met.","imgName":"random-password-generator-png","videoName":"random-password-generator-video","deployedLink":"https://pting1995.github.io/password-generator/","gitHubLink":"https://github.com/Pting1995/password-generator"},{"projectName":"Database Crawler","url":"DBCrawler","skillsShowcased":"Full Stack Development, MySQL Relational Database, Express, HTTP Requests, User Security","techUsed":"MySQL, Express.js, HTTP Requests, Passport.js, Bcrypt.js","projectDescription":"This is a text based game with images that allows the user to play through an adventure centered around escaping a dungeon. It uses a SQL database to store all persistent data relating to users and the characters that belong to them as well as the predefined contents of the game such as player location, inventory and more! This app utilizes a complex set of tables and relations including items and characters in a many to many association through a join table. Interactions to the sql were handled through mysql and sequelize and information was passed back and forth on an express server using api-routes.","imgName":"database-crawler-png","videoName":"database-crawler-video","deployedLink":"https://ancient-wave-96254.herokuapp.com/","gitHubLink":"https://github.com/Pting1995/Database-Crawler"},{"projectName":"Memory Clicker","url":"MemoryClicker","skillsShowcased":"React, React State & Hooks & Prop-drilling, Dynamically Appending Information","techUsed":"React, prop drilling","projectDescription":"This app was designed to challenge the user with a memory test! Upon loading the app, the user will be met with a navbar presenting the current score and highest score. Try your best to click each cat picture once! If you click on a cat, your score will increment and the pictures will be randomized, but if you click on the same cat again then the score will reset and youll have to try again! Try your best to achieve a score of 12! That is a prefect score in this game! Don\'t get discracted by the cats! Good luck and have fun!","imgName":"memory-clicker-png","videoName":"memory-clicker-video","deployedLink":"https://pting1995.github.io/memory-clicker/","gitHubLink":"https://github.com/Pting1995/memory-clicker"}]')},29:function(e,a,t){"use strict";t.r(a);var r=t(1),i=t(16),s=t.n(i),o=t(8),n=t(2),c=t(0),l="/portfolio-mk5/images/",d=[{name:"itme",url:l+"purrito.png",alt:"Picture of Peter"},{name:"pindrop-png",url:l+"pindrop.png",alt:"Pindrop Landing Page Showcase"},{name:"danielle-bakery-png",url:l+"danielle-bakery.png",alt:"Danielle's bakery showcase"},{name:"database-crawler-png",url:l+"database-crawler.png",alt:"database crawler showcase"},{name:"fun-finder-png",url:l+"fun-finder.png",alt:"fun finder showcase"},{name:"memory-clicker-png",url:l+"memory-clicker.png",alt:"memory clicker showcase"},{name:"employee-organizer-png",url:l+"employee-organizer.png",alt:"employee organizer showcase"},{name:"random-password-generator-png",url:l+"random-password-generator.png",alt:"random password generator showcase"}];var p=function(e){var a=function(e){var a=null;return d.forEach((function(t){t.name===e&&(a=t)})),a}(e.imgName);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("img",{className:null===a||void 0===a?void 0:a.className,src:a.url,alt:a.alt,width:null===a||void 0===a?void 0:a.width,height:null===a||void 0===a?void 0:a.height,loading:"lazy"})})};var m=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:e.className,children:Object(c.jsx)(o.b,{to:"/project/".concat(e.url),children:Object(c.jsx)("article",{className:"project",children:Object(c.jsxs)("figure",{children:[Object(c.jsx)(p,{imgName:e.imgName}),Object(c.jsxs)("div",{className:"project-description",children:[Object(c.jsxs)("h2",{className:"appear-on-hover",children:["Project: ",e.projectName]}),Object(c.jsxs)("p",{className:"appear-on-hover hide-on-mobile",children:["Technologies: ",e.techUsed]})]})]})})})})})};var h=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"about-me-container",children:Object(c.jsxs)("section",{className:"about-me",children:[Object(c.jsxs)("nav",{children:[Object(c.jsx)("a",{href:"/portfolio-mk5",children:"My Projects"}),Object(c.jsx)("a",{href:"https://github.com/Pting1995",target:"_blank",children:"My Github"}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/pting002/",target:"_blank",children:"My LinkedIn"}),Object(c.jsx)("a",{href:"/assets/Resume.pdf",target:"_blank",children:"My Resume"})]}),Object(c.jsx)("figure",{children:Object(c.jsx)(p,{imgName:"itme"})}),Object(c.jsx)("h1",{children:"Hey there, I'm Peter!"}),Object(c.jsx)("p",{children:"I am currently seeking full-time opportunities in web development. Please contact me if any of my projects interest you!"})]})})})};var u=function(e){return Object(c.jsx)("div",{className:"overview-container",children:Object(c.jsxs)("div",{className:"App has-two-col-1-3",children:[Object(c.jsx)(h,{}),Object(c.jsx)("main",{className:"project-overview",children:Object(c.jsx)("section",{className:"has-two-col",children:e.projectList.map((function(e,a){return Object(c.jsx)(m,{projectName:e.projectName,url:e.url,skillsShowcased:e.skillsShowcased,techUsed:e.techUsed,projectDescription:e.projectDescription,imgName:e.imgName,gifName:e.gifName,deployedLink:e.deployedLink,gitHubLink:e.gitHubLink,className:e.className},a)}))})})]})})},g=t(18),j=[{name:"pindrop-video",url:"../videos/pindrop.mp4",className:"play-video",alt:"Pindrop Network Landing Page showcase"},{name:"danielle-bakery-video",url:"../videos/danielle-bakery.mp4",className:"play-video",alt:"Danielle's bakery showcase"},{name:"database-crawler-video",url:"../videos/database-crawler.mp4",className:"play-video",alt:"database crawler showcase"},{name:"fun-finder-video",url:"../videos/fun-finder.mp4",className:"play-video",alt:"fun finder showcase"},{name:"memory-clicker-video",url:"../videos/memory-clicker.mp4",className:"play-video",alt:"memory clicker showcase"},{name:"employee-organizer-video",url:"../videos/employee-organizer.mp4",className:"play-video",alt:"employee organizer showcase"},{name:"random-password-generator-video",url:"../videos/random-password-generator.mp4",className:"play-video",alt:"random password generator showcase"}];var b=function(e){var a=function(e){var a=null;return j.forEach((function(t){t.name===e&&(a=t)})),a}(e.videoName);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("video",{width:"1500",height:"800",controls:!0,autoPlay:!0,muted:!0,children:[Object(c.jsx)("source",{src:a.url,type:"video/mp4"}),"Your browser does not support the video tag."]})})};var y=function(e){var a=Object(r.useState)(0),t=Object(g.a)(a,2),i=t[0],s=t[1],o=Object(n.f)().projectName,l=e.projectList;return Object(r.useEffect)((function(){s(function(e,a){for(var t=0;t<a.length;t++)if(e==a[t].url)return t}(o,l))})),Object(c.jsx)("div",{className:"single-project-container",children:Object(c.jsxs)("div",{className:"App has-two-col-1-3",children:[Object(c.jsx)(h,{}),Object(c.jsx)("main",{className:"project-single project",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.projectList[i].projectName}),Object(c.jsx)(b,{videoName:e.projectList[i].videoName}),Object(c.jsxs)("section",{className:"has-two-col",children:[Object(c.jsxs)("div",{className:"project-info-important",children:[Object(c.jsxs)("div",{className:"btn-group",id:"project-btn",children:[e.projectList[i].deployedLink?Object(c.jsx)("a",{className:"btn has-light-text has-dark-bg-color",href:e.projectList[i].deployedLink,target:"_blank",children:"Live Site"}):null,e.projectList[i].gitHubLink?Object(c.jsx)("a",{className:"btn has-light-text has-dark-bg-color",href:e.projectList[i].gitHubLink,target:"_blank",children:"GitHub Repo"}):null]}),Object(c.jsxs)("h3",{children:["Skills Showcased: ",e.projectList[i].skillsShowcased]}),Object(c.jsxs)("h3",{children:["Technology Used: ",e.projectList[i].techUsed]})]}),Object(c.jsx)("p",{children:e.projectList[i].projectDescription})]})]})})]})})},w=t(14);var v=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{basename:"/portfolio-mk5",children:Object(c.jsxs)(n.c,{children:[Object(c.jsx)(n.a,{exact:!0,path:"/",children:Object(c.jsx)(u,{projectList:w})}),Object(c.jsx)(n.a,{exact:!0,path:"/project/:projectName",children:Object(c.jsx)(y,{projectList:w})})]})})})};s.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8331f271.chunk.js.map