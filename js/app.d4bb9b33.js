(function(t){function a(a){for(var i,l,r=a[0],c=a[1],o=a[2],d=0,u=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&u.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);v&&v(a);while(u.length)u.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],i=!0,r=1;r<e.length;r++){var c=e[r];0!==s[c]&&(i=!1)}i&&(n.splice(a--,1),t=l(l.s=e[0]))}return t}var i={},s={app:0},n=[];function l(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=i,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)l.d(e,i,function(a){return t[a]}.bind(null,i));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var o=0;o<r.length;o++)a(r[o]);var v=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"020d":function(t,a){},"0587":function(t,a,e){},"119e":function(t,a,e){},2576:function(t,a,e){"use strict";var i=e("020d"),s=e.n(i);a["default"]=s.a},"28cd":function(t,a,e){"use strict";e("119e")},"371a":function(t,a,e){"use strict";var i=e("515a"),s=e("2576"),n=(e("e155"),e("2877")),l=e("6544"),r=e.n(l),c=e("62ad"),o=e("132d"),v=e("0fd9"),d=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,null,null);a["default"]=d.exports,r()(d,{VCol:c["a"],VIcon:o["a"],VRow:v["a"]})},"3a0e":function(t,a,e){},"515a":function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return s}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"contact"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"ftitle"},[t._v("Contact")]),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"contactcard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("a",{attrs:{href:"tel:+959777531977"}},[e("v-icon",{staticClass:"contacticon",attrs:{size:"100"}},[t._v("mdi-phone")])],1)]),e("div",{staticClass:"contacttitle"},[t._v("Phone")]),e("div",{staticClass:"subcontacttitle"},[e("a",{attrs:{href:"tel:+959777531977"}},[t._v("09777531977")]),t._v(" , "),e("a",{attrs:{href:"tel:+959445828544"}},[t._v("09445828544")])])])]),e("v-col",{staticClass:"contactcard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("v-icon",{staticClass:"contacticon",attrs:{size:"100"}},[t._v("mdi-home")])],1),e("div",{staticClass:"contacttitle"},[t._v("Address")]),e("div",{staticClass:"subcontacttitle"},[t._v("Home No:(10) , Maha Bawga street , 3 Ward , Kamayut Township , Hledan , Yangon.")])])]),e("v-col",{staticClass:"contactcard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("a",{attrs:{href:"mailto:sattpaing72@gmail.com"}},[e("v-icon",{staticClass:"contacticon",attrs:{size:"100"}},[t._v("mdi-email")])],1)]),e("div",{staticClass:"contacttitle"},[t._v("Email")]),e("div",{staticClass:"subcontacttitle"},[e("a",{attrs:{href:"mailto:sattpaing72@gmail.com"}},[t._v("sattpaing72@gmail.com")])])])])],1)],1)])},s=[]},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Top"),e("Skills"),e("Experience"),e("Project"),e("Contact"),e("Footer")],1)},n=[],l=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"top"}},[i("div",{attrs:{id:"pctop"}},[i("div",{staticClass:"container"},[i("v-app-bar",{staticClass:"nav",attrs:{fixed:"",elevation:"5",dark:""}},[i("v-toolbar-title",{staticClass:"textbox"},[t._v("Satt Paing")]),i("v-spacer"),i("v-btn",{staticClass:"btnlink",attrs:{text:""},on:{click:function(a){return t.click("top")}}},[t._v("home")]),i("v-btn",{staticClass:"btnlink",attrs:{text:""},on:{click:function(a){return t.click("skills")}}},[t._v("Skills")]),i("v-btn",{staticClass:"btnlink",attrs:{text:""},on:{click:function(a){return t.click("experience")}}},[t._v("Experience")]),i("v-btn",{staticClass:"btnlink",attrs:{text:""},on:{click:function(a){return t.click("project")}}},[t._v("Projects")]),i("v-btn",{staticClass:"btnlink",attrs:{text:""},on:{click:function(a){return t.click("contact")}}},[t._v("Contact")]),i("v-btn",{staticClass:"btnlink",attrs:{text:""},on:{click:t.downloadfile}},[t._v("Resume")])],1),i("div",{staticClass:"left"},[i("div",[i("v-img",{staticClass:"img",attrs:{src:e("e45e"),"lazy-src":e("e45e")}}),i("div",{staticClass:"name"},[t._v("Satt Paing")]),i("div",{staticClass:"jobtitle"},[t._v("Senior Web Developer")])],1)]),i("div",{staticClass:"right"},[i("div",{staticClass:"upper"},[i("div",{staticClass:"titletext"},[t._v("Biography")]),t._m(0),i("p",{staticClass:"para"},[t._v(" Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, Java , JavaScript , CSS , MySQL and knowledge in Rest API . I am developing React and Vue Js Framework.Well-Knowledge in Version Control System (Git) , Agile Project Management Framework (Scrum,Board) . Now I trying to good as 10x Programmer. ")]),i("div",{staticClass:"lower"},[i("div",{staticClass:"child"},[i("div",{staticClass:"titletext"},[t._v("Education")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Metro IT and Japanese Language Center ")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("BA : Dagon University Distance (History) ")])],1),i("div",{staticClass:"child"},[i("div",{staticClass:"titletext"},[t._v("Interest")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Learning new languages")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Listening Music")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Cloud Computing")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Reading")])],1)])])])],1)]),i("div",{attrs:{id:"phonetop"}},[i("v-app-bar",{attrs:{fixed:"",color:"#212024",dark:""}},[i("v-app-bar-nav-icon",{on:{click:function(a){t.drawer=!0}}}),i("v-toolbar-title",{staticClass:"textbox"},[t._v("Satt Paing")])],1),i("v-navigation-drawer",{staticClass:"drawer",attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[i("v-list",{staticClass:"navlist",attrs:{nav:"",dense:""}},[i("v-list-item-group",{attrs:{"active-class":"draweractive"},model:{value:t.group,callback:function(a){t.group=a},expression:"group"}},[i("v-list-item",{staticClass:"navbox"},[i("v-list-item-title",{staticClass:"navtext",on:{click:function(a){return t.click("top")}}},[t._v("HOME")])],1),i("v-list-item",{staticClass:"navbox"},[i("v-list-item-title",{staticClass:"navtext",on:{click:function(a){return t.click("skills")}}},[t._v("SKILLS")])],1),i("v-list-item",{staticClass:"navbox"},[i("v-list-item-title",{staticClass:"navtext",on:{click:function(a){return t.click("experience")}}},[t._v("EXPERIENCE")])],1),i("v-list-item",{staticClass:"navbox"},[i("v-list-item-title",{staticClass:"navtext",on:{click:function(a){return t.click("project")}}},[t._v("PROJECTS")])],1),i("v-list-item",{staticClass:"navbox"},[i("v-list-item-title",{staticClass:"navtext",on:{click:function(a){return t.click("contact")}}},[t._v("CONTACT")])],1),i("v-list-item",{staticClass:"navbox"},[i("v-list-item-title",{staticClass:"navtext",on:{click:t.downloadfile}},[t._v("RESUME")])],1)],1)],1)],1),i("div",{staticClass:"imgbox"},[i("div",[i("v-img",{staticClass:"img",attrs:{src:e("e45e"),"lazy-src":e("e45e")}}),i("div",{staticClass:"name"},[t._v("Satt Paing")]),i("div",{staticClass:"jobtitle"},[t._v("Senior Web Developer")])],1)])],1),i("div",{attrs:{id:"phonebio"}},[i("div",{staticClass:"ftitle"},[t._v("Biography")]),t._m(1),i("p",{staticClass:"para"},[t._v(" Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, Java , JavaScript , CSS , MySQL and knowledge in Rest API . I am developing React and Vue Js Framework.Well-Knowledge in Version Control System (Git) , Agile Project Management Framework (Scrum,Board) . Now I trying to good as 10x Programmer. ")]),i("div",{staticClass:"titletext"},[t._v("Education")]),i("div",{staticClass:"chipgp"},[i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Metro IT and Japanese Language Center ")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("BA : Dagon University Distance (History) ")])],1),i("div",{staticClass:"titletext"},[t._v("Interest")]),i("div",{staticClass:"chipgp"},[i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Learning new languages")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Listening Music")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Cloud Computing")]),i("v-chip",{staticClass:"mt-1 mb-1 ml-1 mr-1 chip",attrs:{label:""}},[t._v("Reading")])],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"para"},[t._v(" Hi , I am Satt Paing , Currenty working as a Web Developer at Shingenki Company . I have a (Diploma of IT ) of "),e("a",{attrs:{href:"http://metro-myanmar.com/mic/",target:"_blank"}},[t._v("Metro IT & Japanese Language Center")]),t._v(" and Certificate of "),e("a",{attrs:{href:"https://itpec.org/about/itpec-common-exam.html",target:"_blank"}},[t._v("ITPEC (FE)")]),t._v(" . ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"para"},[t._v(" Hi , I am Satt Paing , Currenty working as a Web Developer at Shingenki Company . I have a (Diploma of IT ) of "),e("a",{attrs:{href:"http://metro-myanmar.com/mic/",target:"_blank"}},[t._v("Metro IT & Japanese Language Center")]),t._v(" and Certificate of "),e("a",{attrs:{href:"https://itpec.org/about/itpec-common-exam.html",target:"_blank"}},[t._v("ITPEC (FE)")]),t._v(" . ")])}],c=(e("ac1f"),e("00b4"),{name:"Top",data:function(){return{drawer:!1,group:null}},methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},click:function(t){var a=document.getElementById(t);this.drawer=!1,a.scrollIntoView(!0)},downloadfile:function(){window.open("https://s3.amazonaws.com/sattpaing.tk/SattPaingOo_CV.docx")}}}),o=c,v=(e("e166"),e("2877")),d=e("6544"),u=e.n(d),m=e("40dc"),p=e("5bc1"),f=e("8336"),b=e("cc20"),g=e("adda"),C=e("8860"),_=e("da13"),h=e("1baa"),k=e("5d23"),y=e("f774"),w=e("2fa4"),x=e("2a7f"),S=Object(v["a"])(o,l,r,!1,null,null,null),I=S.exports;u()(S,{VAppBar:m["a"],VAppBarNavIcon:p["a"],VBtn:f["a"],VChip:b["a"],VImg:g["a"],VList:C["a"],VListItem:_["a"],VListItemGroup:h["a"],VListItemTitle:k["a"],VNavigationDrawer:y["a"],VSpacer:w["a"],VToolbarTitle:x["a"]});var E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"skills"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"ftitle"},[t._v("Skills")]),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"skillscard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("a",{attrs:{href:"https://reactjs.org/",target:"_blank"}},[e("v-icon",{staticClass:"skillicon",attrs:{size:"100"}},[t._v("mdi-react")])],1)]),e("div",{staticClass:"skilltitle"},[t._v("React")]),e("div",{staticClass:"subskilltitle"},[t._v("[ reactrouter , i18n ]")]),e("div",{staticClass:"subskilltitle"},[t._v("[ redux , UI Library , etc ]")]),e("v-rating",{attrs:{color:"black lighten-3","background-color":"black lighten-1",value:"4",size:"30",readonly:""}})],1)]),e("v-col",{staticClass:"skillscard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[e("v-icon",{staticClass:"skillicon",attrs:{size:"100"}},[t._v("mdi-vuejs")])],1)]),e("div",{staticClass:"skilltitle"},[t._v("Vue")]),e("div",{staticClass:"subskilltitle"},[t._v("[ vuerouter , i18n ]")]),e("div",{staticClass:"subskilltitle"},[t._v("[ vuex , UI Library , etc ]")]),e("v-rating",{attrs:{color:"black lighten-3","background-color":"black lighten-1",value:"4",size:"30",readonly:""}})],1)]),e("v-col",{staticClass:"skillscard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("v-icon",{staticClass:"skillicon",attrs:{size:"100"}},[t._v("mdi-code-braces")])],1),e("div",{staticClass:"skilltitle"},[t._v("Web Development")]),e("div",{staticClass:"subskilltitle"},[t._v("[ Html , Css ]")]),e("div",{staticClass:"subskilltitle"},[t._v("[ javascript , jquery ]")]),e("v-rating",{attrs:{color:"black lighten-3","background-color":"black lighten-1",value:"4",size:"30",readonly:""}})],1)]),e("v-col",{staticClass:"skillscard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("a",{attrs:{href:"https://aws.amazon.com/",target:"_blank"}},[e("v-icon",{staticClass:"skillicon",attrs:{size:"100"}},[t._v("mdi-aws")])],1)]),e("div",{staticClass:"skilltitle"},[t._v("AWS")]),e("div",{staticClass:"subskilltitle"},[t._v("[ S3 , Route53 , Certificate ]")]),e("div",{staticClass:"subskilltitle"},[t._v("[ cognito , cloudfront , lambda , etc ]")]),e("v-rating",{attrs:{color:"black lighten-3","background-color":"black lighten-1",value:"3",size:"30",readonly:""}})],1)]),e("v-col",{staticClass:"skillscard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("a",{attrs:{href:"https://www.java.com/en/",target:"_blank"}},[e("v-icon",{staticClass:"skillicon",attrs:{size:"100"}},[t._v("mdi-language-java")])],1)]),e("div",{staticClass:"skilltitle"},[t._v("Java")]),e("div",{staticClass:"subskilltitle"},[t._v("[ JavaSE , JavaEE ]")]),e("div",{staticClass:"subskilltitle"},[t._v("[ Spring (Boot & MVC), JUnit, Maven ]")]),e("v-rating",{attrs:{color:"black lighten-3","background-color":"black lighten-1",value:"2",size:"30",readonly:""}})],1)]),e("v-col",{staticClass:"skillscard reveal",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[e("div",[e("a",{attrs:{href:"https://www.mysql.com/",target:"_blank"}},[e("v-icon",{staticClass:"skillicon",attrs:{size:"100"}},[t._v("mdi-database")])],1)]),e("div",{staticClass:"skilltitle"},[t._v("DateBase")]),e("div",{staticClass:"subskilltitle"},[t._v("[ Mysql ]")]),e("v-rating",{attrs:{color:"black lighten-3","background-color":"black lighten-1",value:"2",size:"30",readonly:""}})],1)])],1)],1)])},j=[],P={data:function(){return{rating:4}}},V=P,T=(e("69bb"),e("62ad")),M=e("132d"),L=e("1d4d"),O=e("0fd9"),z=Object(v["a"])(V,E,j,!1,null,null,null),A=z.exports;u()(z,{VCol:T["a"],VIcon:M["a"],VRating:L["a"],VRow:O["a"]});var B=e("61cd"),J=e("8cca"),D=e("371a"),R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"footer"}},[t._m(0),e("div",{staticClass:"totop",on:{click:t.Totop}},[e("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-chevron-up")])],1)])},W=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h3",{staticClass:"footertext"},[t._v("Copyright © 2022 SattPaing")])])}],$={name:"Footer",methods:{Totop:function(){var t=document.getElementById("top");t.scrollIntoView(!0)}}},F=$,H=(e("28cd"),Object(v["a"])(F,R,W,!1,null,null,null)),N=H.exports;u()(H,{VIcon:M["a"]});var U={name:"App",components:{Top:I,Skills:A,Experience:B["default"],Project:J["default"],Contact:D["default"],Footer:N},data:function(){return{}}};function q(){for(var t=document.querySelectorAll(".reveal"),a=0;a<t.length;a++){var e=window.innerHeight,i=t[a].getBoundingClientRect().top,s=150;i<e-s&&t[a].classList.add("active")}}window.addEventListener("scroll",q);var K=U,G=(e("5c0b"),e("7496")),Y=Object(v["a"])(K,s,n,!1,null,null,null),Q=Y.exports;u()(Y,{VApp:G["a"]});var X=e("f309");i["a"].use(X["a"]);var Z=new X["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:Z,render:function(t){return t(Q)}}).$mount("#app")},"5b23":function(t,a,e){"use strict";e("bbc0")},"5c0b":function(t,a,e){"use strict";e("9c0c")},"61cd":function(t,a,e){"use strict";var i=e("6a0f"),s=e("8b45"),n=(e("5b23"),e("2877")),l=e("6544"),r=e.n(l),c=e("b0af"),o=e("99d9"),v=e("8414"),d=e("1e06"),u=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,null,null);a["default"]=u.exports,r()(u,{VCard:c["a"],VCardSubtitle:o["a"],VCardText:o["b"],VCardTitle:o["c"],VTimeline:v["a"],VTimelineItem:d["a"]})},"69bb":function(t,a,e){"use strict";e("a28a")},"6a0f":function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return s}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"experience"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"ftitle"},[t._v("Experience")]),e("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},[e("v-timeline-item",{staticClass:"reveal",attrs:{color:"#947668","fill-dot":""}},[e("v-card",{attrs:{color:"#947668",dark:"",hover:""}},[e("v-card-title",[t._v("Full Stack Developer")]),e("v-card-subtitle",{staticStyle:{"font-size":"18px"}},[t._v("Shingenki Company")]),e("v-card-text",{staticClass:"white text--primary"},[e("br"),e("h3",[t._v("01/06/2018 - Present ( Myanmar , Yangon )")]),e("br"),e("h3",[t._v("Team : Myanmar developer team")]),e("br"),e("h3",[t._v("About : Built an Customer Project with team using React , Vue ( Frontend) and Java SpringBoot (Backend) and AWS.Built Shop project using shopify.")])])],1)],1),e("v-timeline-item",{staticClass:"reveal",attrs:{color:"#947668","fill-dot":""}},[e("v-card",{attrs:{color:"#947668",dark:"",hover:""}},[e("v-card-title",[t._v("Student")]),e("v-card-subtitle",{staticStyle:{"font-size":"18px"}},[t._v("Metro IT and japanese Language Center")]),e("v-card-text",{staticClass:"white text--primary"},[e("br"),e("h3",[t._v("2015 - 2017 ( Myanmar , Yangon )")]),e("br"),e("h3",[t._v("Course : System Creator")]),e("br"),e("h3",[t._v("About : Learnt Networking , Strategy , Programming and Japanese.Made a Assignment and School Project.")]),e("br"),e("h3",[t._v("Achievements : ITPEC(IP) , ITPEC(FE) and N4 (Japanese)")])])],1)],1)],1)],1)])},s=[]},"8b45":function(t,a,e){"use strict";var i=e("9348"),s=e.n(i);a["default"]=s.a},"8cca":function(t,a,e){"use strict";var i=e("a1e8"),s=e("aaa6"),n=(e("a3e7"),e("2877")),l=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,null,null);a["default"]=l.exports},9348:function(t,a){},"9c0c":function(t,a,e){},a1e8:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return s}));var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"project"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"ftitle"},[t._v("Projects")]),e("h2",{staticStyle:{"text-align":"center"}},[t._v("Currently , I have no own Projects.")]),e("h2",{staticStyle:{"text-align":"center"}},[t._v("Coming Soon . . . ")])])])}]},a28a:function(t,a,e){},a3e7:function(t,a,e){"use strict";e("3a0e")},aaa6:function(t,a,e){"use strict";var i=e("f153"),s=e.n(i);a["default"]=s.a},bbc0:function(t,a,e){},e155:function(t,a,e){"use strict";e("f5b5")},e166:function(t,a,e){"use strict";e("0587")},e45e:function(t,a,e){t.exports=e.p+"img/sattpaing.85861e49.png"},f153:function(t,a){},f5b5:function(t,a,e){}});
//# sourceMappingURL=app.d4bb9b33.js.map