webpackJsonp([5],{Cz8s:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("aCc6"),s=n("Ea00"),l={data:function(){return{langClose:!1,userOpenFlag:!1,navOpenFlag:!1,navAnimate:!1,curLang:"",curIcon:"",lanActive:2,navShow:!1,opacityFlag:!1,isHome:!1,isLogo:!1,curRoute:this.$route.path,closeFlag:1,pcLangClose:!1,scrollTopFlag:!1,routerFlag:!1,langList:[{lang:"简体中文",tag:"CN"},{lang:"English",tag:"EN"},{lang:"Deutsch",tag:"DE"},{lang:"Русский язык",tag:"RU"},{lang:"한국어",tag:"KR"},{lang:"日本語",tag:"JP"},{lang:"español",tag:"ES"}],navClose:!1}},mounted:function(){var t=localStorage.getItem("Qlang");for(var a in this.langList)t===this.langList[a].tag&&(this.curLang=this.langList[a].lang)},methods:{open:function(){this.$emit("open")},changeLang:function(t){this.curLang=t.lang,this.lanActive=1,localStorage.setItem("Qlang",t.tag),s.a.locale=t.tag,window.location.reload()},checkMenu:function(){this.closeFlag++,this.pcLangClose=!1,this.closeFlag>2&&(this.closeFlag=1)},checkDownMenu:function(t,a){this.$t("header.navList")[a].dropDownFlag=!this.$t("header.navList")[a].dropDownFlag,this.$router.push({path:t.path,query:{anchor:""}}),0!==a&&1!==a&&4!==a&&(this.closeFlag=!1)},jumpRouter:function(t){this.$router.push({path:t.path,query:{anchor:""}})},jump:function(t,a,n){t!==this.curRoute?this.$router.push({path:t,query:{anchor:n}}):a?this.$router.push(a):e.a.$emit("clickDropNav",n)},jump2:function(t,a,n){t!==this.curRoute?this.$router.push({path:t,query:{anchor:n}}):a?this.$router.push(a):e.a.$emit("clickDropNav",n),this.closeFlag=!1}},watch:{$route:function(t,a){this.curRoute=t.path,"/home"===t.path?this.routerFlag=!0:this.routerFlag=!1}}},i={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{staticClass:"header"},[n("div",{staticClass:"pc"},[n("div",{staticClass:"wrap"},[n("h1",[n("router-link",{attrs:{tag:"span",to:"/home"}})],1),t._v(" "),n("div",{staticClass:"rightBox"},[n("div",{staticClass:"head-right"},[n("ul",{class:{close:2===t.closeFlag}},t._l(t.$t("header.navList"),function(a,e){return"/home"!==a.path?n("router-link",{key:e,attrs:{tag:"li",to:a.path}},[t._v(t._s(a.name))]):t._e()}),1),t._v(" "),n("ul",{class:{close:1===t.closeFlag}},[n("li",[n("a",{attrs:{href:"https://ex.bitquin.com/login",target:"_blank"}},[t._v(t._s(t.$t("header.text1")))])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://ex.bitquin.com/signup",target:"_blank"}},[t._v(t._s(t.$t("header.text2")))])]),t._v(" "),n("li",{staticClass:"langBox",on:{click:function(a){t.pcLangClose=!t.pcLangClose}}},[n("span",[t._v(t._s(t.curLang))]),t._v(" "),n("ul",{class:{close:t.pcLangClose}},t._l(t.langList,function(a,e){return n("li",{key:e,class:{active:a.lang==t.curLang},on:{click:function(n){return t.changeLang(a)}}},[t._v(t._s(a.lang))])}),0)]),t._v(" "),n("li",{staticClass:"trade"},[n("a",{attrs:{href:"https://ex.bitquin.com/home",target:"_blank"}},[t._v(t._s(t.$t("header.text3")))])])])]),t._v(" "),n("div",{staticClass:"mune",on:{click:function(a){return t.checkMenu()}}})])])]),t._v(" "),n("div",{staticClass:"app"},[n("h1",{on:{click:function(a){return t.$router.push("/home")}}}),t._v(" "),n("div",{staticClass:"user",on:{click:t.open}}),t._v(" "),n("div",{staticClass:"userBox"},[n("ul",t._l(t.$t("header.navList"),function(a,e){return n("router-link",{key:e,attrs:{to:a.path,tag:"li"},nativeOn:{click:function(a){return t.open(a)}}},[t._v(t._s(a.name))])}),1),t._v(" "),n("a",{attrs:{href:"https://ex.bitquin.com/login",target:"_blank"}},[t._v(t._s(t.$t("header.text1")))]),t._v(" "),n("a",{attrs:{href:"https://ex.bitquin.com/signup",target:"_blank"}},[t._v(t._s(t.$t("header.text2")))]),t._v(" "),n("div",{staticClass:"lang",on:{click:function(a){t.langClose=!t.langClose}}},[t._v("\n        "+t._s(t.$t("home.text21"))+"\n        "),n("ul",{class:{close:t.langClose}},t._l(t.langList,function(a,e){return n("li",{key:e,class:{active:t.curLang==a.tag},on:{click:function(n){return t.changeLang(a)}}},[t._v(t._s(a.lang))])}),0)])])])])},staticRenderFns:[]};var o=n("VU/8")(l,i,!1,function(t){n("UadQ")},"data-v-fb57ab30",null);a.default=o.exports},UadQ:function(t,a){}});