(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{284:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("550929d6",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n(284)},308:function(t,e,n){var o=n(54)(!1);o.push([t.i,'.container[data-v-01690aac]{font-family:"Josefin Sans","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:200;font-size:2rem}#title[data-v-01690aac]{position:absolute;top:50%;left:0;width:33%;height:max-content;transform:translateY(-50%);text-align:right}#title h2[data-v-01690aac]{font-size:3rem;font-weight:100;margin-bottom:.2rem}#title p[data-v-01690aac]{font-size:1.5rem}#sphereContent[data-v-01690aac]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100vw;height:100vh;background:rgba(255,255,255,.7);font-family:"Comfortaa","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;text-align:center;visibility:hidden;opacity:0;transition:visibility .4s,opacity .4s}#sphereContent.show[data-v-01690aac]{visibility:visible;opacity:1}#sphereContent.show .inner[data-v-01690aac]{height:13rem}#sphereContent .inner[data-v-01690aac]{position:relative;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;height:0;transition:height .4s;text-align:center}#sphereContent .heading[data-v-01690aac]{position:absolute;top:0;width:100%;display:block;font-size:2rem;font-weight:400;margin-bottom:5rem}#sphereContent p[data-v-01690aac]{position:absolute;width:100%;font-weight:200}#sphereContent p[data-v-01690aac]:nth-of-type(1){top:35%;font-size:1.5rem}#sphereContent p[data-v-01690aac]:nth-of-type(2){bottom:0;font-size:1rem}#sideMenu[data-v-01690aac]{position:absolute;top:50%;right:0;width:33%;height:max-content;transform:translateY(-50%)}#sideMenu ul[data-v-01690aac]{list-style:none}#sideMenu li[data-v-01690aac]{max-width:max-content;margin-bottom:2rem}#sideMenu .menulink[data-v-01690aac]{position:relative;padding:.5rem 0;padding-right:2rem;transition:padding-left .4s,color .4s}#sideMenu .menulink[data-v-01690aac]::after{content:"";position:absolute;left:0;bottom:.5rem;width:0;height:1px;background:#333;transition:width .4s}#sideMenu .menulink[data-v-01690aac]:hover{padding-left:1rem}#sideMenu .menulink[data-v-01690aac]:hover::after{width:130%}@media only screen and (max-width: 599px){#title[data-v-01690aac]{position:relative;width:100%;transform:none;padding-top:18vh;text-align:center}#title h2[data-v-01690aac]{font-size:12vw}#title p[data-v-01690aac]{font-size:6vw}#sideMenu[data-v-01690aac]{top:unset;bottom:0;width:100%;transform:none;font-size:1.3rem}#sideMenu ul[data-v-01690aac]{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0}#sideMenu ul li[data-v-01690aac]{width:100%;max-width:none;margin-bottom:1.5rem}#sideMenu ul .menulink[data-v-01690aac]{display:block;width:max-content;margin:0 auto;padding:0}}@media only screen and (max-height: 800px){#title[data-v-01690aac]{padding-top:15vh}#sideMenu[data-v-01690aac]{margin-top:34vh}}',""]),t.exports=o},316:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{menus:["About","Works","Library","Blog","Contact"],sphereContents:[["About Me","All About nullworkbench."],["My Works","Be a Professional."],["Library","Beautiful Scenes."],["Blog","Logs of Learning."],["Contact","Stay in Touch."]],sphereContentIdx:0}},methods:{showContent:function(t){if(this.$device.isDesktop){this.sphereContentIdx=t,document.getElementById("sphereContent").classList.add("show");for(var e=document.getElementsByClassName("menulink"),i=0;i<e.length;i++)i!==t&&(e[i].style.color="#ddd")}},hideContent:function(t){if(this.$device.isDesktop){document.getElementById("sphereContent").classList.remove("show");for(var e=document.getElementsByClassName("menulink"),i=0;i<e.length;i++)e[i].style.color="#333"}}}},r=(n(307),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{attrs:{id:"sphereContent"}},[e("div",{ref:"sphereContentInner",staticClass:"inner"},[e("span",{staticClass:"heading"},[t._v(t._s(t.sphereContents[t.sphereContentIdx][0]))]),t._v(" "),e("p",[t._v(t._s(t.sphereContents[t.sphereContentIdx][1]))]),t._v(" "),e("p",[t._v("click to continue")])])]),t._v(" "),e("nav",{attrs:{id:"sideMenu"}},[e("ul",t._l(t.menus,(function(menu,n){return e("li",{key:n,on:{mouseover:function(e){return t.showContent(n)},mouseout:function(e){return t.hideContent(n)}}},[e("nuxt-link",{staticClass:"menulink",attrs:{to:menu.toLowerCase()}},[t._v(t._s(menu))])],1)})),0)])])}),[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"title"}},[e("h2",[t._v("nullworkbench")]),t._v(" "),e("p",[t._v('"beginning from _"')])])}],!1,null,"01690aac",null);e.default=component.exports}}]);