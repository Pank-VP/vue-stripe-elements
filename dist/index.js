!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],e):"object"==typeof exports?exports["vue-stripe-elements"]=e():t["vue-stripe-elements"]=e()}(this,(function(){return function(){var t={8257:function(t,e,n){var r=n(7583),o=n(9212),i=n(5637),u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},2569:function(t,e,n){var r=n(7583),o=n(794),i=r.String,u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},5766:function(t,e,n){var r=n(2977),o=n(6782),i=n(1825),u=function(t){return function(e,n,u){var c,s=r(e),f=i(s),a=o(u,f);if(t&&n!=n){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},9624:function(t,e,n){var r=n(7386),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},3058:function(t,e,n){var r=n(7583),o=n(8191),i=n(9212),u=n(9624),c=n(3649)("toStringTag"),s=r.Object,f="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=s(t),c))?n:f?u(e):"Object"==(r=u(e))&&i(e.callee)?"Arguments":r}},3478:function(t,e,n){var r=n(2870),o=n(929),i=n(6683),u=n(4615);t.exports=function(t,e){for(var n=o(e),c=u.f,s=i.f,f=0;f<n.length;f++){var a=n[f];r(t,a)||c(t,a,s(e,a))}}},57:function(t,e,n){var r=n(8494),o=n(4615),i=n(4677);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},4677:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8494:function(t,e,n){var r=n(6544);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6668:function(t,e,n){var r=n(7583),o=n(794),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},6918:function(t,e,n){var r=n(5897);t.exports=r("navigator","userAgent")||""},4061:function(t,e,n){var r,o,i=n(7583),u=n(6918),c=i.process,s=i.Deno,f=c&&c.versions||s&&s.version,a=f&&f.v8;a&&(o=(r=a.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},5690:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7263:function(t,e,n){var r=n(7583),o=n(6683).f,i=n(57),u=n(1270),c=n(460),s=n(3478),f=n(4451);t.exports=function(t,e){var n,a,p,l,v,m=t.target,d=t.global,h=t.stat;if(n=d?r:h?r[m]||c(m,{}):(r[m]||{}).prototype)for(a in e){if(l=e[a],p=t.noTargetGet?(v=o(n,a))&&v.value:n[a],!f(d?a:m+(h?".":"#")+a,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;s(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(n,a,l,t)}}},6544:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},8262:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},4340:function(t,e,n){var r=n(8494),o=n(2870),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),s=c&&"something"===function(){}.name,f=c&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:s,CONFIGURABLE:f}},7386:function(t){var e=Function.prototype,n=e.bind,r=e.call,o=n&&n.bind(r);t.exports=n?function(t){return t&&o(r,t)}:function(t){return t&&function(){return r.apply(t,arguments)}}},5897:function(t,e,n){var r=n(7583),o=n(9212),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},911:function(t,e,n){var r=n(8257);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7583:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2870:function(t,e,n){var r=n(7386),o=n(1324),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},4639:function(t){t.exports={}},275:function(t,e,n){var r=n(8494),o=n(6544),i=n(6668);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5044:function(t,e,n){var r=n(7583),o=n(7386),i=n(6544),u=n(9624),c=r.Object,s=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?s(t,""):c(t)}:c},9734:function(t,e,n){var r=n(7386),o=n(9212),i=n(1314),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},2743:function(t,e,n){var r,o,i,u=n(9491),c=n(7583),s=n(7386),f=n(794),a=n(57),p=n(2870),l=n(1314),v=n(9137),m=n(4639),d="Object already initialized",h=c.TypeError,y=c.WeakMap;if(u||l.state){var b=l.state||(l.state=new y),g=s(b.get),x=s(b.has),S=s(b.set);r=function(t,e){if(x(b,t))throw new h(d);return e.facade=t,S(b,t,e),e},o=function(t){return g(b,t)||{}},i=function(t){return x(b,t)}}else{var O=v("state");m[O]=!0,r=function(t,e){if(p(t,O))throw new h(d);return e.facade=t,a(t,O,e),e},o=function(t){return p(t,O)?t[O]:{}},i=function(t){return p(t,O)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!f(e)||(n=o(e)).type!==t)throw h("Incompatible receiver, "+t+" required");return n}}}},9212:function(t){t.exports=function(t){return"function"==typeof t}},4451:function(t,e,n){var r=n(6544),o=n(9212),i=/#|\.prototype\./,u=function(t,e){var n=s[c(t)];return n==a||n!=f&&(o(e)?r(e):!!e)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},794:function(t,e,n){var r=n(9212);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},6268:function(t){t.exports=!1},5871:function(t,e,n){var r=n(7583),o=n(5897),i=n(9212),u=n(2447),c=n(7786),s=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&u(e.prototype,s(t))}},1825:function(t,e,n){var r=n(97);t.exports=function(t){return r(t.length)}},8640:function(t,e,n){var r=n(4061),o=n(6544);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9491:function(t,e,n){var r=n(7583),o=n(9212),i=n(9734),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},4615:function(t,e,n){var r=n(7583),o=n(8494),i=n(275),u=n(2569),c=n(8734),s=r.TypeError,f=Object.defineProperty;e.f=o?f:function(t,e,n){if(u(t),e=c(e),u(n),i)try{return f(t,e,n)}catch(t){}if("get"in n||"set"in n)throw s("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},6683:function(t,e,n){var r=n(8494),o=n(8262),i=n(112),u=n(4677),c=n(2977),s=n(8734),f=n(2870),a=n(275),p=Object.getOwnPropertyDescriptor;e.f=r?p:function(t,e){if(t=c(t),e=s(e),a)try{return p(t,e)}catch(t){}if(f(t,e))return u(!o(i.f,t,e),t[e])}},9275:function(t,e,n){var r=n(8356),o=n(5690).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},4012:function(t,e){e.f=Object.getOwnPropertySymbols},2447:function(t,e,n){var r=n(7386);t.exports=r({}.isPrototypeOf)},8356:function(t,e,n){var r=n(7386),o=n(2870),i=n(2977),u=n(5766).indexOf,c=n(4639),s=r([].push);t.exports=function(t,e){var n,r=i(t),f=0,a=[];for(n in r)!o(c,n)&&o(r,n)&&s(a,n);for(;e.length>f;)o(r,n=e[f++])&&(~u(a,n)||s(a,n));return a}},5432:function(t,e,n){var r=n(8356),o=n(5690);t.exports=Object.keys||function(t){return r(t,o)}},112:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3060:function(t,e,n){"use strict";var r=n(8191),o=n(3058);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},6252:function(t,e,n){var r=n(7583),o=n(8262),i=n(9212),u=n(794),c=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!u(r=o(n,t)))return r;if(i(n=t.valueOf)&&!u(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!u(r=o(n,t)))return r;throw c("Can't convert object to primitive value")}},929:function(t,e,n){var r=n(5897),o=n(7386),i=n(9275),u=n(4012),c=n(2569),s=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=u.f;return n?s(e,n(t)):e}},1270:function(t,e,n){var r=n(7583),o=n(9212),i=n(2870),u=n(57),c=n(460),s=n(9734),f=n(2743),a=n(4340).CONFIGURABLE,p=f.get,l=f.enforce,v=String(String).split("String");(t.exports=function(t,e,n,s){var f,p=!!s&&!!s.unsafe,m=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet,h=s&&void 0!==s.name?s.name:e;o(n)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||a&&n.name!==h)&&u(n,"name",h),(f=l(n)).source||(f.source=v.join("string"==typeof h?h:""))),t!==r?(p?!d&&t[e]&&(m=!0):delete t[e],m?t[e]=n:u(t,e,n)):m?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||s(this)}))},3955:function(t,e,n){var r=n(7583).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},460:function(t,e,n){var r=n(7583),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9137:function(t,e,n){var r=n(7836),o=n(8284),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},1314:function(t,e,n){var r=n(7583),o=n(460),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},7836:function(t,e,n){var r=n(6268),o=n(1314);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6782:function(t,e,n){var r=n(7486),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},2977:function(t,e,n){var r=n(5044),o=n(3955);t.exports=function(t){return r(o(t))}},7486:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},97:function(t,e,n){var r=n(7486),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},1324:function(t,e,n){var r=n(7583),o=n(3955),i=r.Object;t.exports=function(t){return i(o(t))}},2670:function(t,e,n){var r=n(7583),o=n(8262),i=n(794),u=n(5871),c=n(911),s=n(6252),f=n(3649),a=r.TypeError,p=f("toPrimitive");t.exports=function(t,e){if(!i(t)||u(t))return t;var n,r=c(t,p);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||u(n))return n;throw a("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},8734:function(t,e,n){var r=n(2670),o=n(5871);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},8191:function(t,e,n){var r={};r[n(3649)("toStringTag")]="z",t.exports="[object z]"===String(r)},5637:function(t,e,n){var r=n(7583).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},8284:function(t,e,n){var r=n(7386),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},7786:function(t,e,n){var r=n(8640);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3649:function(t,e,n){var r=n(7583),o=n(7836),i=n(2870),u=n(8284),c=n(8640),s=n(7786),f=o("wks"),a=r.Symbol,p=a&&a.for,l=s?a:a&&a.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var e="Symbol."+t;c&&i(a,t)?f[t]=a[t]:f[t]=s&&p?p(e):l(e)}return f[t]}},9751:function(t,e,n){var r=n(7263),o=n(1324),i=n(5432);r({target:"Object",stat:!0,forced:n(6544)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},6394:function(t,e,n){var r=n(8191),o=n(1270),i=n(3060);r||o(Object.prototype,"toString",i,{unsafe:!0})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";n.r(r),n.d(r,{StripeElement:function(){return s},StripeElements:function(){return p},createElement:function(){return i},createElements:function(){return o},initStripe:function(){return e}});var t=function(){var t=this.$createElement;return(this._self._c||t)("div")};t._withStripped=!0;n(9751),n(6394);var e=function(t,e){if(void 0===window.Stripe){var n="Stripe v3 library is not loaded";return console.error(n),n}return window.Stripe(t,e)},o=function(t,e){if(void 0===t){var n="Instance object is not defined, make sure you initialized Stripe before creating elements";return console.error(n),n}return t.elements(e)},i=function(t,e,n){if(void 0===t){var r="Elements object is not defined. You can not create stripe element without it";return console.error(r),r}if(void 0===e){var o="elementType is required. You can not create stripe element without it";return console.error(o),o}return t.create(e,n)};function u(t,e,n,r,o,i,u,c){var s,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=s):o&&(s=c?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(f.functional){f._injectStyles=s;var a=f.render;f.render=function(t,e){return s.call(e),a(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,s):[s]}return{exports:t,options:f}}var c=u({name:"StripeElement",props:{elements:{type:Object,required:!0},type:{type:String,default:function(){return"card"}},options:{type:[Object,void 0],default:function(){}}},data:function(){return{stripeElement:void 0,domElement:document.createElement("div")}},computed:{elementsUsable:function(){return!!this.elements&&Object.keys(this.elements).length>0}},watch:{options:{handler:function(t){t&&this.stripeElement&&this.stripeElement.update(t)},deep:!0}},beforeDestroy:function(){this.stripeElement&&(this.stripeElement.unmount(),this.stripeElement.destroy())},mounted:function(){this.elementsUsable&&(this.mountElement(),this.handleEvents())},methods:{mountElement:function(){var t=this.domElement;return this.stripeElement=i(this.elements,this.type,this.options),this.stripeElement.mount(t),this.$el.appendChild(t),this.stripeElement},handleEvents:function(){var t=this;["change","ready","focus","blur","escape"].forEach((function(e){t.stripeElement.on(e,t.eventHandler.bind(t,e))}))},eventHandler:function(t,e){return this.$emit(t,e)}}},t,[],!1,null,null,null);c.options.__file="src/components/StripeElement.vue";var s=c.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.elementsUsable?n("div",[t._t("default",null,{instance:t.instance,elements:t.elements})],2):t._e()};f._withStripped=!0;var a=u({name:"StripeElements",props:{stripeKey:{type:String,required:!0},instanceOptions:{type:Object,default:function(){return{}}},elementsOptions:{type:Object,default:function(){return{}}}},data:function(){return{instance:{},elements:{}}},computed:{elementsUsable:function(){var t=this.elements;return!!t&&Object.keys(t).length>0}},mounted:function(){this.instance=e(this.stripeKey,this.instanceOptions),this.elements=o(this.instance,this.elementsOptions)}},f,[],!1,null,null,null);a.options.__file="src/components/StripeElements.vue";var p=a.exports}(),r}()}));