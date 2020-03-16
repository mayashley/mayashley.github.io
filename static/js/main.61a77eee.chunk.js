(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(36),c=a.n(i),r=(a(54),a(13)),o=a(9),s=a(2),m=a(3),u=a(5),p=a(4),h=a(6),d=(a(55),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.title;return l.a.createElement("div",null,l.a.createElement("button",{className:"button",type:"button"},e))}}]),t}(n.Component)),b=(a(56),a(57),a(48)),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{className:"LogoNav",steps:["Hello,",1e3,"I'm Ashley",1e3,"and this is my portfolio...",1e3,"Ashley May",500],loop:1,wrapper:"p"})}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navContainer"},l.a.createElement("div",{className:"logo"},l.a.createElement(f,null)),l.a.createElement("div",{className:"navbtn"},l.a.createElement(r.b,{to:"/projects"},l.a.createElement(d,{title:"Projects"})),l.a.createElement(r.b,{to:"/about"},l.a.createElement(d,{title:"About"})),l.a.createElement(r.b,{to:"/contact"},l.a.createElement(d,{title:"Contact"}))))}}]),t}(n.Component),g=(a(62),a(63),a(39)),v=a.n(g),j=(a(66),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"socialLinks"},l.a.createElement("div",{className:"containLinks"},l.a.createElement("div",{className:"links"},l.a.createElement("a",{href:"https://www.linkedin.com/in/ashley-may-a145a4164/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin-in"}))),l.a.createElement("div",{className:"links"},l.a.createElement("a",{href:"https://github.com/mayashley",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("div",{className:"links"},l.a.createElement("a",{href:"https://www.freecodecamp.org/fcc214a97eb-4900-4876-9bed-3c4c00af75ba",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-free-code-camp"})))))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).sendEmail=function(e){e.preventDefault(),v.a.sendForm("gmail","template_pPmFeMrO",e.target,"user_djoWIOCG4u34zU7Y1jTPl").then((function(e){console.log(e.text),a.setState({emailSent:!0})}),(function(e){console.log(e.text),a.setState({emailError:e.text})}))},a.state={emailSent:!1,emailError:null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.emailSent,a=e.emailError;return l.a.createElement("div",{className:"contactContainer"},l.a.createElement("div",{className:"contactInfo"},a?l.a.createElement("div",null,l.a.createElement("p",null,a)):l.a.createElement("div",null,t?l.a.createElement("div",{className:"emailSuccess"},l.a.createElement("h1",null,"Thank You!"),l.a.createElement("p",null,"Your Email has been sent.")):l.a.createElement("div",null,l.a.createElement("p",null,"Contact Me"),l.a.createElement("form",{onSubmit:this.sendEmail},l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your first name..",required:!0}),l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",id:"lname",name:"lastname",placeholder:"Your last name..",required:!0}),l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Your email",required:!0}),l.a.createElement("label",null,"Subject"),l.a.createElement("textarea",{id:"subject",name:"subject",placeholder:"Write something..",required:!0}),l.a.createElement("input",{className:"contactMe",type:"submit",value:"Send"})))),l.a.createElement("div",{className:"linkAlign"},l.a.createElement(j,null))))}}]),t}(n.Component),O=(a(67),a(40)),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).mouseOut=function(){a.setState({flipped:!1})},a.mouseOver=function(){a.setState({flipped:!0})},a.state={flipped:null,animateIn:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({animateIn:!0})}),1e3*this.props.index)}},{key:"render",value:function(){var e=this,t=this.props,a=t.link,n=t.image,i=t.logo,c=this.state.animateIn;return l.a.createElement(O.Animated,{animationIn:"slideInLeft",animationOut:"wobble",animateOnMount:!1,animationInDuration:1e3,animationOutDuration:1e3,isVisible:c,className:"animateContainer"},l.a.createElement("div",{className:"thumbContainer"},l.a.createElement("a",{href:a},l.a.createElement("div",{className:"projectThumbImg",onMouseOut:function(){return e.mouseOut()},onMouseOver:function(){return e.mouseOver()}},this.state.flipped&&l.a.createElement("div",{className:"hoverTop"},i.includes("javaScript")&&l.a.createElement("div",{className:"aboutThumbImg"},l.a.createElement("i",{className:"fab fa-js"})),i.includes("react")&&l.a.createElement("div",{className:"aboutThumbImg"},l.a.createElement("i",{className:"fab fa-react"})),i.includes("html")&&l.a.createElement("div",{className:"aboutThumbImg"},l.a.createElement("i",{className:"fab fa-html5"})),i.includes("css")&&l.a.createElement("div",{className:"aboutThumbImg"},l.a.createElement("i",{className:"fab fa-css3-alt"}))),l.a.createElement("img",{className:"image",src:n,alt:"projects"})))))}}]),t}(n.Component),N=(a(122),a(41)),w=a.n(N),C=a(42),I=a.n(C),S=a(43),x=a.n(S),M=a(44),T=a.n(M),A=a(45),L=a.n(A),P=a(46),W=a.n(P),Y=a(47),_=a.n(Y),q=[{link:"https://beaches-travel.netlify.com",image:L.a,title:"Beaches Travel Agency",logo:["react","html","css"]},{link:"https://landscape-site.netlify.com",image:W.a,title:"Ferrell Landscaping Company",logo:["react","html","css"]},{link:"https://github.com/mayashley/tmdb-movies/tree/gh-pages",image:T.a,title:"tbd movies",logo:["react","html","css"]},{link:"https://wikipedia-serch-project.netlify.com",image:_.a,title:"Wikipedia Search Page",logo:["javaScript","html","css"]},{link:"https://github.com/mayashley/Apple-Clone",image:w.a,title:"apple landing page",logo:["javaScript","html","css"]},{link:"https://github.com/mayashley/to-do-list",image:x.a,title:"to do list",logo:["html","react","css"]},{link:"https://github.com/mayashley/my-react-weather-app/tree/gh-pages",image:I.a,title:"react weather app",logo:["html","react","css"]}],D=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"projectsContainer"},q.map((function(e,t){return l.a.createElement(k,{key:t,link:e.link,image:e.image,title:e.title,logo:e.logo,index:t+1})})))}}]),t}(n.Component),F=(a(123),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"mainContainer"},l.a.createElement("div",{className:"aboutMeContainer"},l.a.createElement("div",{className:"aboutMeInfo"},l.a.createElement("div",{className:"heading"},l.a.createElement("h1",null,"about me...")),l.a.createElement("div",{className:"subHeading"},l.a.createElement("h3",null,"I'm a junior web developer living in Columbus,Ohio.")),l.a.createElement("div",{className:"paragraphContainer"},l.a.createElement("p",null,"I began learning to code in 2019 and soon realized how much I enjoyed the challenge it provided. Over the last few months I have been working as a freelance web developer. While freelancing I've had the pleasure of working with a few small companies in my community to help them create websites for their small businesses while also building my own portfolio of projects and gaining valuable knowledge along the way.")),l.a.createElement(j,null))))}}]),t}(n.Component));var B=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"bodyContainer"},l.a.createElement(E,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/contact",component:y}),l.a.createElement(o.a,{path:"/about",component:F}),l.a.createElement(o.a,{path:"/",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,a){e.exports=a.p+"static/media/apple-clone.9c16a1ae.png"},42:function(e,t,a){e.exports=a.p+"static/media/weatherAppReact.218fa05b.png"},43:function(e,t,a){e.exports=a.p+"static/media/groceryList.c2c9badd.png"},44:function(e,t,a){e.exports=a.p+"static/media/tmdb-movie.df945aa8.png"},45:function(e,t,a){e.exports=a.p+"static/media/beachesGatsbyProject.f70f55b5.png"},46:function(e,t,a){e.exports=a.p+"static/media/ferrelLandscapeImg.97d92a02.png"},47:function(e,t,a){e.exports=a.p+"static/media/wikkiSearchPage.197ddde6.png"},49:function(e,t,a){e.exports=a(124)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.61a77eee.chunk.js.map