(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{spMenuOpened:!1}},methods:{spMenuToggle:function(){this.spMenuOpened?(this.$refs.globalMenu.classList.remove("show"),this.$refs.spMenuTrigger.classList.remove("show")):(this.$refs.globalMenu.classList.add("show"),this.$refs.spMenuTrigger.classList.add("show")),this.spMenuOpened=!this.spMenuOpened},spMenuClose:function(){this.$refs.globalMenu.classList.remove("show"),this.$refs.spMenuTrigger.classList.remove("show"),this.spMenuOpened=!1}}},r=(n(216),n(24)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[n("nuxt-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/nwb_icon.svg",alt:"nullworkbenchのロゴ"}}),e._v(" "),n("span",[e._v("nullworkbench")])])],1),e._v(" "),n("div",{ref:"spMenuTrigger",staticClass:"spMenuTrigger",on:{click:e.spMenuToggle}},[n("div"),e._v(" "),n("div")]),e._v(" "),n("ul",{ref:"globalMenu"},[n("li",[n("nuxt-link",{ref:"about",attrs:{to:"/about"}},[e._v("About")])],1),e._v(" "),n("li",[n("nuxt-link",{ref:"works",attrs:{to:"/works"}},[e._v("Works")])],1),e._v(" "),n("li",[n("nuxt-link",{ref:"library",attrs:{to:"/library"}},[e._v("Library")])],1),e._v(" "),n("li",[n("nuxt-link",{ref:"blog",attrs:{to:"/blog"}},[e._v("Blog")])],1),e._v(" "),n("li",[n("nuxt-link",{ref:"contact",attrs:{to:"/contact"}},[e._v("Contact")])],1),e._v(" "),e._m(0)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("p",[e._v("2021 © nullworkbench")]),e._v(" "),n("p",[e._v("Tetta Ueyama")])])}],!1,null,"c3c2df7c",null);t.default=component.exports},15:function(e,t,n){"use strict";n.r(t);var o=n(41),r=n(42),c=n(5),d=function(){function e(){Object(o.a)(this,e),this.scene=null,this.camera=null,this.renderer=null,this.size={windowWidth:null,windowHeight:null}}return Object(r.a)(e,[{key:"init",value:function(e){this.setSize(),this.scene=new c.n;var t=Math.PI/180*42.5,n=this.size.windowHeight/2/Math.tan(t);this.camera=new c.l(this.size.windowWidth/-2,this.size.windowWidth/2,this.size.windowHeight/2,this.size.windowHeight/-2,-1e3,2*n),this.camera.position.set(0,0,n),this.camera.lookAt(this.scene.position),this.renderer=new c.r({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.size.windowWidth,this.size.windowHeight),this.renderer.shadowMap.enabled=!0}},{key:"setSize",value:function(){this.size.windowWidth=window.innerWidth,this.size.windowHeight=window.innerHeight}},{key:"resize",value:function(){this.setSize(),this.camera.aspect=this.size.windowWidth/this.size.windowHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.windowWidth,this.size.windowHeight)}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}}]),e}();t.default=new d},156:function(e,t,n){var content=n(217);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("a7488f1a",content,!0,{sourceMap:!1})},157:function(e,t,n){var content=n(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("396725ca",content,!0,{sourceMap:!1})},158:function(e,t,n){var content=n(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("56b15182",content,!0,{sourceMap:!1})},170:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var o=n(41),r=n(42),c=n(66),d=n(15),l=n(171),h=function(){function e(t){Object(o.a)(this,e),this.props=t,c.a.$on("THREE_PATH_TRANSITION",this.pathTransition.bind(this)),this.init()}return Object(r.a)(e,[{key:"init",value:function(){d.default.init(this.props.$canvas),this.shape=new l.default,window.addEventListener("resize",this.resize.bind(this)),this.loop()}},{key:"pathTransition",value:function(e){this.shape.shapeTransition(e)}},{key:"resize",value:function(){d.default.resize()}},{key:"mouseMoved",value:function(e){this.shape.mouseMoved(e.clientX,e.clientY)}},{key:"render",value:function(){this.shape.update(),d.default.render()}},{key:"loop",value:function(){this.render(),requestAnimationFrame(this.loop.bind(this))}}]),e}()},171:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));n(34),n(9),n(19),n(37),n(23),n(27),n(38),n(39),n(28);var o=n(41),r=n(42),c=n(5),d=n(15);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw r}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var f=function(){function e(){Object(o.a)(this,e),this.icosahedronInitialPos=new c.q(0,0,0),this.rotationSpeed=.001,this.mouse=new c.p(0,0),this.init()}return Object(r.a)(e,[{key:"init",value:function(){this.initMaterial(),this.addIcosahedron(),this.mixer=new c.c(this.icosahedron)}},{key:"addAmbientLight",value:function(){var e=new c.a(4210752,1);d.default.scene.add(e)}},{key:"addDirectionalLight",value:function(e,t,n,o){var r=new c.m(e,1);r.position.set(t,n,o),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,d.default.scene.add(r)}},{key:"initMaterial",value:function(){this.material=new c.o({uniforms:{color1:{value:new c.d(7662549)},color2:{value:new c.d(11319013)},color3:{value:new c.d(16568991)}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n    ",fragmentShader:"\n    uniform vec3 color1;\n    uniform vec3 color2;\n\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);\n    }\n    "})}},{key:"appendEdgeLine",value:function(e){var t=new c.e(e);return new c.i(t,new c.h({color:16777215}))}},{key:"addIcosahedron",value:function(){var e,t=0,n=(e=d.default.size.windowWidth)<600?(t=20,.35*e):.15*e,o=new c.f(n,2);this.icosahedron=new c.k(o,this.material),this.icosahedronLine=this.appendEdgeLine(o),this.icosahedronLine.scale.set(1.005,1.005,1.005),d.default.scene.add(this.icosahedron),this.icosahedron.add(this.icosahedronLine),this.icosahedronInitialPos.setY(t),this.icosahedron.position.setY(this.icosahedronInitialPos.y)}},{key:"shapeTransition",value:function(path){var e,t,n={tracks:[]};switch(path){case"index":e={name:".position",type:"vector",times:[0,.8],values:[this.icosahedron.position.x,this.icosahedron.position.y,this.icosahedron.position.z,0,this.icosahedronInitialPos.y,0]},t={name:".scale",type:"vector",times:[0,.8],values:[this.icosahedron.scale.x,this.icosahedron.scale.y,this.icosahedron.scale.z,1,1,1]};break;case"about":e={name:".position",type:"vector",times:[0,.8],values:[this.icosahedron.position.x,this.icosahedron.position.y,this.icosahedron.position.z,-d.default.size.windowWidth/2,this.icosahedronInitialPos.y,0]},t={name:".scale",type:"vector",times:[0,.8],values:[this.icosahedron.scale.x,this.icosahedron.scale.y,this.icosahedron.scale.z,2,2,2]};break;case"works":e={name:".position",type:"vector",times:[0,.8],values:[this.icosahedron.position.x,this.icosahedron.position.y,this.icosahedron.position.z,0,0,0]},t={name:".scale",type:"vector",times:[0,.8],values:[this.icosahedron.scale.x,this.icosahedron.scale.y,this.icosahedron.scale.z,5,5,5]};break;case"blog":e={name:".position",type:"vector",times:[0,.8],values:[this.icosahedron.position.x,this.icosahedron.position.y,this.icosahedron.position.z,0,d.default.size.windowWidth/2.2,0]},t={name:".scale",type:"vector",times:[0,.8],values:[this.icosahedron.scale.x,this.icosahedron.scale.y,this.icosahedron.scale.z,2,2,2]};break;default:e={name:".position",type:"vector",times:[0,.8],values:[this.icosahedron.position.x,this.icosahedron.position.y,this.icosahedron.position.z,0,this.icosahedronInitialPos.y,0]},t={name:".scale",type:"vector",times:[0,.8],values:[this.icosahedron.scale.x,this.icosahedron.scale.y,this.icosahedron.scale.z,1,1,1]}}n.tracks.push(e,t);var o,r=l(n.tracks);try{for(r.s();!(o=r.n()).done;){o.value.interpolation=c.g}}catch(e){r.e(e)}finally{r.f()}this.mixer.uncacheAction();var h=c.b.parse(n),f=this.mixer.clipAction(h);f.clampWhenFinished=!0,f.setLoop(c.j,1),f.play()}},{key:"mouseMoved",value:function(e,t){this.mouse.x=e-d.default.size.windowWidth/2,this.mouse.y=t-d.default.size.windowHeight/2,this.icosahedron.rotation.x-=this.mouse.y/5e4,this.icosahedron.rotation.y-=this.mouse.x/5e4}},{key:"update",value:function(){this.mixer.update(.01),this.icosahedron.rotation.x+=this.rotationSpeed/4,this.icosahedron.rotation.y-=this.rotationSpeed}}]),e}()},174:function(e,t,n){"use strict";n(19);var o=n(115),r=n(88),c=n(66),d={components:{GlobalHeader:o.default,Canvas:r.default},watch:{"$route.name":function(e,t){c.a.$emit("THREE_PATH_TRANSITION",e),this.$refs.globalHeader.spMenuClose()}},mounted:function(){c.a.$emit("THREE_PATH_TRANSITION",this.$route.name)}},l=(n(220),n(24)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("GlobalHeader",{ref:"globalHeader"}),e._v(" "),n("div",{attrs:{id:"canvas"}},[n("Canvas")],1),e._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{GlobalHeader:n(115).default,Canvas:n(88).default})},176:function(e,t,n){n(177),e.exports=n(178)},216:function(e,t,n){"use strict";n(156)},217:function(e,t,n){var o=n(54)(!1);o.push([e.i,'header[data-v-c3c2df7c]{position:fixed;z-index:90;top:0;left:0;width:100vw;padding:.5rem 1.5rem;background:#f9f9f9;font-family:"Comfortaa","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}h1[data-v-c3c2df7c]{max-width:15rem;font-size:1.5rem;font-weight:200}h1 a[data-v-c3c2df7c]{display:flex}h1 img[data-v-c3c2df7c]{display:block;width:1.2rem;margin-right:.5rem}h1 span[data-v-c3c2df7c]{display:block;padding-top:.3rem}.spMenuTrigger[data-v-c3c2df7c]{display:none}ul[data-v-c3c2df7c]{display:flex;position:absolute;top:0;right:0;margin:0}li[data-v-c3c2df7c]{padding-right:2rem}li a[data-v-c3c2df7c]{display:block;line-height:3rem;transition:padding .4s}li a[data-v-c3c2df7c]:hover{padding:0 1rem}li .nuxt-link-active[data-v-c3c2df7c]{font-weight:600}li[data-v-c3c2df7c]:last-of-type{display:none}@media only screen and (max-width:599px){header[data-v-c3c2df7c]{height:3rem}h1[data-v-c3c2df7c]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:none}h1 span[data-v-c3c2df7c]{display:none}h1 img[data-v-c3c2df7c]{width:1.3rem;margin:0}.spMenuTrigger[data-v-c3c2df7c]{display:block;position:relative;top:50%;transform:translateY(-50%);width:1.2rem;height:.6rem;margin:auto 0 auto auto}.spMenuTrigger div[data-v-c3c2df7c]{position:absolute;right:0;width:1.2rem;height:1px;background:#333;transition:transform .4s cubic-bezier(.55,.055,.675,.19),top .2s,bottom .2s}.spMenuTrigger div[data-v-c3c2df7c]:first-of-type{top:0}.spMenuTrigger div[data-v-c3c2df7c]:nth-of-type(2){bottom:0}.spMenuTrigger.show div[data-v-c3c2df7c]{top:50%}.spMenuTrigger.show div[data-v-c3c2df7c]:first-of-type{transform:rotate(45deg)}.spMenuTrigger.show div[data-v-c3c2df7c]:nth-of-type(2){transform:rotate(-45deg)}ul[data-v-c3c2df7c]{display:block;width:100vw;height:0;transition:height .4s cubic-bezier(.55,.055,.675,.19),padding .4s;margin-top:3rem;overflow:hidden;background:#f9f9f9}ul li[data-v-c3c2df7c]{padding:0;opacity:0;transform:translateX(-3rem);transition:opacity .4s,transform .4s}ul li[data-v-c3c2df7c]:nth-of-type(0){transition-delay:0s}ul li[data-v-c3c2df7c]:first-of-type{transition-delay:.1s}ul li[data-v-c3c2df7c]:nth-of-type(2){transition-delay:.2s}ul li[data-v-c3c2df7c]:nth-of-type(3){transition-delay:.3s}ul li[data-v-c3c2df7c]:nth-of-type(4){transition-delay:.4s}ul li[data-v-c3c2df7c]:nth-of-type(5){transition-delay:.5s}ul li[data-v-c3c2df7c]:last-of-type{display:block;width:82%;position:absolute;bottom:4rem;text-align:center;font-size:.9rem;color:#575757;transition-delay:.4s}ul.show[data-v-c3c2df7c]{height:100vh;padding:2rem}ul.show li[data-v-c3c2df7c]{opacity:1;transform:translateX(0)}}',""]),e.exports=o},218:function(e,t,n){"use strict";n(157)},219:function(e,t,n){var o=n(54)(!1);o.push([e.i,"canvas[data-v-200cf3b7]{width:100%;height:100%}",""]),e.exports=o},220:function(e,t,n){"use strict";n(158)},221:function(e,t,n){var o=n(54)(!1);o.push([e.i,':root{--theme-color:#6fc5c6}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background:#edf2f5}.page-enter,.page-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .5s}*,:after,:before{box-sizing:border-box;margin:0;padding:0}#container{min-height:100vh}#canvas{position:fixed;z-index:-90;top:0;left:0;width:100vw;height:100vh}.container{position:relative;min-height:100vh}@supports (-webkit-touch-callout:none){#container,.container{min-height:-webkit-fill-available}}a{text-decoration:none;color:#000}p{margin-bottom:.5rem}ul{margin:.8rem 0;list-style-type:none}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;font:inherit}h2{font-family:"Josefin Sans","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:300;font-size:3rem}.emoji{padding-right:.6rem}',""]),e.exports=o},66:function(e,t,n){"use strict";var o=new(n(1).a);t.a=o},88:function(e,t,n){"use strict";n.r(t);var o=n(170),r={mounted:function(){this.CanvasGL||(this.CanvasGL=new o.default({$canvas:this.$refs.canvas}))}},c=(n(218),n(24)),component=Object(c.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("canvas",{ref:"canvas"})}),[],!1,null,"200cf3b7",null);t.default=component.exports;installComponents(component,{Canvas:n(88).default})}},[[176,17,1,18]]]);