_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},"3Z9Z":function(e,t,r){"use strict";var n=r("RAs/"),a=r("hVfy"),o=r("eC2I"),i=r.n(o),c=r("q1tI"),l=r.n(c),s=r("vUet"),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.noGutters,f=e.as,p=void 0===f?"div":f,b=Object(a.a)(e,u),m=Object(s.a)(r,"row"),g=m+"-cols",h=[];return d.forEach((function(e){var t,r=b[e];delete b[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&h.push(""+g+n+"-"+t)})),l.a.createElement(p,Object(n.a)({ref:t},b,{className:i.a.apply(void 0,[o,m,c&&"no-gutters"].concat(h))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},"48fX":function(e,t,r){var n=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"7vrA":function(e,t,r){"use strict";var n=r("RAs/"),a=r("hVfy"),o=r("eC2I"),i=r.n(o),c=r("q1tI"),l=r.n(c),s=r("vUet"),u=["bsPrefix","fluid","as","className"],d=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.fluid,c=e.as,d=void 0===c?"div":c,f=e.className,p=Object(a.a)(e,u),b=Object(s.a)(r,"container"),m="string"===typeof o?"-"+o:"-fluid";return l.a.createElement(d,Object(n.a)({ref:t},p,{className:i()(f,o?""+b+m:b)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),c=r("FYa8"),l=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var s=f[c];if(a.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?o=!1:r.add(s);else{var u=a.props[s],d=n[s]||new Set;d.has(u)?o=!1:(d.add(u),n[s]=d)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function b(e){var t=e.children,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}b.rewind=function(){};var m=b;t.default=m},BzWl:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing2",function(){return r("fBjI")}])},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},GOVm:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),a=r.n(n),o=a.a.createElement,i=a.a.createContext(),c=function(e){var t=e.children,r=Object(n.useState)(!1),a=r[0],c=r[1],l=Object(n.useState)(!1),s=l[0],u=l[1],d=Object(n.useState)(!1),f=d[0],p=d[1],b=Object(n.useState)({theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta"}),m=b[0],g=b[1],h=Object(n.useState)({theme:"dark",style:"style1"}),v=h[0],y=h[1];return o(i.Provider,{value:{themeDark:a,toggleTheme:function(){c(!a)},videoModalVisible:s,toggleVideoModal:function(){u(!s)},visibleOffCanvas:f,toggleOffCanvas:function(){p(!f)},closeOffCanvas:function(){p(!1)},header:m,setHeader:g,footer:v,setFooter:y}},t)};t.b=i},GPKm:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r("rePB"),a=r("q1tI"),o=r.n(a),i=r("GOVm"),c=o.a.createElement;function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta",buttonText:"Get started free"},d={theme:"dark",style:"style2"},f=function(e){var t=e.children,r=e.headerConfig,n=void 0===r?null:r,l=e.footerConfig,f=void 0===l?null:l,p=Object(a.useContext)(i.b);return Object(a.useEffect)((function(){p.themeDark?(p.setHeader(s(s(s({},u),n),{},{theme:"dark"})),p.setFooter(s(s(s({},d),f),{},{theme:"dark"}))):(p.setHeader(s(s({},u),n)),p.setFooter(s(s({},d),f)))}),[p.themeDark,n,f]),c(o.a.Fragment,null,t)}},JI6e:function(e,t,r){"use strict";var n=r("RAs/"),a=r("hVfy"),o=r("eC2I"),i=r.n(o),c=r("q1tI"),l=r.n(c),s=r("vUet"),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.as,f=void 0===c?"div":c,p=Object(a.a)(e,u),b=Object(s.a)(r,"col"),m=[],g=[];return d.forEach((function(e){var t,r,n,a=p[e];if(delete p[e],"object"===typeof a&&null!=a){var o=a.span;t=void 0===o||o,r=a.offset,n=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+b+i:""+b+i+"-"+t),null!=n&&g.push("order"+i+"-"+n),null!=r&&g.push("offset"+i+"-"+r)})),m.length||m.push(b),l.a.createElement(f,Object(n.a)({},p,{ref:t,className:i.a.apply(void 0,[o].concat(m,g))}))}));f.displayName="Col",t.a=f},"RAs/":function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),a=r("/GRZ"),o=r("i2R6"),i=(r("qXWd"),r("48fX")),c=r("tCBg"),l=r("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var a=l(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var u=r("q1tI"),d=function(e){i(r,e);var t=s(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=d},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),a=r("7KCV");t.__esModule=!0,t.default=void 0;var o,i=a(r("q1tI")),c=r("elyg"),l=r("nOHt"),s=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var r=o||(u?o=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),s.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,r,n){(0,c.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),d[t+"%"+r]=!0)}var b=function(e){var t=!1!==e.prefetch,r=i.default.useState(),a=n(r,2),o=a[0],s=a[1],b=(0,l.useRouter)(),m=b&&b.pathname||"/",g=i.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href,!0),r=n(t,2),a=r[0],o=r[1];return{href:a,as:e.as?(0,c.resolveHref)(m,e.as):o||a}}),[m,e.href,e.as]),h=g.href,v=g.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,c.isLocalURL)(h)&&!d[h+"%"+v])return f(o,(function(){p(b,h,v)}))}),[t,o,h,v,b]);var y=e.children,x=e.replace,w=e.shallow,N=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var k=i.Children.only(y),O={ref:function(e){e&&s(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,b,h,v,x,w,N)}};return t&&(O.onMouseEnter=function(e){(0,c.isLocalURL)(h)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),p(b,h,v,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(O.href=(0,c.addBasePath)((0,c.addLocale)(v,b&&b.locale,b&&b.defaultLocale))),i.default.cloneElement(k,O)};t.default=b},cWnB:function(e,t,r){"use strict";var n=r("RAs/"),a=r("hVfy"),o=r("eC2I"),i=r.n(o),c=r("q1tI"),l=r.n(c),s=r("vUet"),u=r("Qg85"),d=["as","disabled","onKeyDown"];function f(e){return!e||"#"===e.trim()}var p=l.a.forwardRef((function(e,t){var r=e.as,o=void 0===r?"a":r,i=e.disabled,c=e.onKeyDown,s=Object(a.a)(e,d),p=function(e){var t=s.href,r=s.onClick;(i||f(t))&&e.preventDefault(),i?e.stopPropagation():r&&r(e)};return f(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),i&&(s.tabIndex=-1,s["aria-disabled"]=!0),l.a.createElement(o,Object(n.a)({ref:t},s,{onClick:p,onKeyDown:Object(u.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),c)}))}));p.displayName="SafeAnchor";var b=p,m=["bsPrefix","variant","size","active","className","block","type","as"],g=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.variant,c=e.size,u=e.active,d=e.className,f=e.block,p=e.type,g=e.as,h=Object(a.a)(e,m),v=Object(s.a)(r,"btn"),y=i()(d,v,u&&"active",o&&v+"-"+o,f&&v+"-block",c&&v+"-"+c);if(h.href)return l.a.createElement(b,Object(n.a)({},h,{as:g,ref:t,className:i()(y,h.disabled&&"disabled")}));t&&(h.ref=t),p?h.type=p:g||(h.type="button");var x=g||"button";return l.a.createElement(x,Object(n.a)({},h,{className:y}))}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=g},dI71:function(e,t,r){"use strict";function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.d(t,"a",(function(){return n}))},eC2I:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},fBjI:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("YFqc"),i=r.n(o),c=r("7vrA"),l=r("3Z9Z"),s=r("JI6e"),u=r("cWnB"),d=r("vYJ8"),f=r("GPKm"),p=r("8Kt/"),b=r.n(p),m=a.a.createElement;t.default=function(){var e=Object(n.useState)(1),t=e[0],r=e[1];return m(a.a.Fragment,null,"    ",m(b.a,null,m("title",null,"Pricing | Free Billing and Accounting Software | GoBills"),m("meta",{property:"og:title",content:"Free Billing and Accounting Software | GoBills",key:"title"})),m(f.a,{headerConfig:{align:"right",button:"account"},footerConfig:{theme:"light",style:"style2"}},m("div",{className:"inner-banner bg-default-2 pt-25 pt-lg-29"},m(c.a,null,m(l.a,{className:"justify-content-center pt-5"},m(s.a,{lg:"9",xl:"8"},m("div",{className:"px-md-15 text-center mb-5 mb-lg-13"},m("h2",{className:"title gr-text-2 mb-9 mb-lg-12"},"Pricing & Plans"),m("p",{className:"gr-text-8 mb-0"},"Gobills comes with affordable pricing.")))))),m("div",{className:"pricing-section bg-default-2 pt-lg-9 pb-5 pb-md-19"},m(c.a,null,m(l.a,{className:"justify-content-center"},m(s.a,{lg:"4",md:"6",sm:"8",className:"col-lg-4 col-md-6 col-sm-8 mb-9"},m("div",{className:"pricing-card gr-hover-shadow-1 text-center pt-9 pb-9 pr-9 pr-xl-9 pl-9 pl-xl-9 bg-white rounded-10"},m("div",{className:"price-content light-mode-texts"},m("span",{className:"small-title gr-text-12 text-uppercase text-red font-weight-bold"},"Starter"),m("div",{className:"d-flex align-items-end justify-content-center mt-9 "},m("span",{className:"currency mr-2 gr-text-6 text-blackish-blue font-weight-bold line-spacing-none"}),m("h2",{className:"price-value gr-text-2 text-blackish-blue font-weight-bold line-spacing-none mb-0"},"\u20b9 2299"),m("span",{className:"per gr-text-9 text-blackish-blue"},"/year")),m("ul",{className:"card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto"},m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Invoices"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Estimates"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Clients"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"2 Business"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"7 Invoices templates"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"Premium Support"))),m(u.a,{variant:"dark",className:"btn-black gr-hover-y gr-min-width-219 mx-auto"},"Get Started Now"))),m(s.a,{lg:"4",md:"6",sm:"8",className:"col-lg-4 col-md-6 col-sm-8 mb-9"},m("div",{className:"pricing-card gr-hover-shadow-1 text-center pt-9 pb-9 pr-9 pr-xl-9 pl-9 pl-xl-9 bg-white rounded-10"},m("div",{className:"price-content light-mode-texts"},m("span",{className:"small-title gr-text-12 text-uppercase text-red font-weight-bold"},"Medium"),m("div",{className:"d-flex align-items-end justify-content-center mt-9 "},m("span",{className:"currency mr-2 gr-text-6 text-blackish-blue font-weight-bold line-spacing-none"}),m("h2",{className:"price-value gr-text-2 text-blackish-blue font-weight-bold line-spacing-none mb-0"},"\u20b9 2499"),m("span",{className:"per gr-text-9 text-blackish-blue"},"/year")),m("ul",{className:"card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto"},m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Invoices"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Estimates"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Clients"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"2 Business"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"7 Invoices templates"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"Premium Support"))),m(u.a,{variant:"dark",className:"btn-black gr-hover-y gr-min-width-219 mx-auto"},"Get Started Now"))),m(s.a,{lg:"4",md:"6",sm:"8",className:"col-lg-4 col-md-6 col-sm-8 mb-9"},m("div",{className:"pricing-card gr-hover-shadow-1 text-center pt-9 pb-9 pr-9 pr-xl-9 pl-9 pl-xl-9 bg-white rounded-10"},m("div",{className:"price-content light-mode-texts"},m("span",{className:"small-title gr-text-12 text-uppercase text-red font-weight-bold"},"Large Business"),m("div",{className:"d-flex align-items-end justify-content-center mt-9 "},m("span",{className:"currency mr-2 gr-text-6 text-blackish-blue font-weight-bold line-spacing-none"}),m("h2",{className:"price-value gr-text-2 text-blackish-blue font-weight-bold line-spacing-none mb-0"},"\u20b9 2999"),m("span",{className:"per gr-text-9 text-blackish-blue"},"/year")),m("ul",{className:"card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto"},m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Invoices"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Estimates"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"100 Clients"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"2 Business"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"7 Invoices templates"),m("li",{className:"text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block"},"Premium Support"))),m(u.a,{variant:"dark",className:"btn-black gr-hover-y gr-min-width-219 mx-auto"},"Get Started Now")))))),m("div",{className:"bg-default-2 pt-lg-7 pb-9 pb-lg-22"},m(c.a,null,m(l.a,{className:"justify-content-center"},m(s.a,{xl:"8",lg:"9"},m("div",{className:"px-md-12 text-center mb-9 mb-lg-18"},m("h2",{className:"title gr-text-3 mb-8"},"Frequently Asked Questions"),m("p",{className:"gr-text-8 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.")))),m(l.a,{className:"justify-content-center"},m(s.a,{xl:"8",lg:"9"},m("div",{className:"accordion",id:"accordionExample"},m("div",{className:"border rounded-10 mb-3 bg-white overflow-hidden"},m("div",{className:"mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white",id:"heading4-1"},m("button",{className:"btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100",type:"button","aria-controls":"collapse-1",onClick:function(){return r(1)},"aria-expanded":1===t},"Can I use Albino for my clients?")),m(d.a,{in:1===t},m("div",null,m("div",{className:"card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.")))),m("div",{className:"border rounded-10 mb-3 bg-white overflow-hidden"},m("div",{className:"mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white",id:"heading4-2"},m("button",{className:"btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100",type:"button","aria-controls":"collapse-2",onClick:function(){return r(2)},"aria-expanded":2===t},"Does it work with WordPress?")),m(d.a,{in:2===t},m("div",null,m("div",{className:"card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page.")))),m("div",{className:"border rounded-10 mb-3 bg-white overflow-hidden"},m("div",{className:"mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white",id:"heading4-3"},m("button",{className:"btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100",type:"button","aria-controls":"collapse-3",onClick:function(){return r(3)},"aria-expanded":3===t},"Do I get free updates?")),m(d.a,{in:3===t},m("div",null,m("div",{className:"card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page.")))),m("div",{className:"border rounded-10 mb-3 bg-white overflow-hidden"},m("div",{className:"mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white",id:"heading4-4"},m("button",{className:"btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100",type:"button","aria-controls":"collapse-4",onClick:function(){return r(4)},"aria-expanded":4===t},"Organize your campaigns")),m(d.a,{in:4===t},m("div",null,m("div",{className:"card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page.")))),m("div",{className:"border rounded-10 mb-3 bg-white overflow-hidden"},m("div",{className:"mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white",id:"heading4-5"},m("button",{className:"btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100",type:"button","aria-controls":"collapse-5",onClick:function(){return r(5)},"aria-expanded":5===t},"Will you provide support?")),m(d.a,{in:5===t},m("div",null,m("div",{className:"card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page.")))))),m("div",{className:"col-12 text-center pt-11"},m("p",{className:"gr-text-9 gr-text-9 gr-text-color"},"Haven\u2019t got your answer?"," ",m(i.a,{href:"/"},m("a",{className:"btn-link"},"Contact our support now")))))))))}},hVfy:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,r){var n=r("5fIB"),a=r("rlHP"),o=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,r){var n=r("C+bE"),a=r("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}},vUet:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("RAs/");var n=r("q1tI"),a=r.n(n),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var r=Object(n.useContext)(o);return e||r[t]||t}},vYJ8:function(e,t,r){"use strict";var n,a=r("RAs/"),o=r("hVfy"),i=r("eC2I"),c=r.n(i),l=r("7j6X"),s=r("q1tI"),u=r.n(s),d=r("dRu9"),f=r("wsUu"),p=r("Qg85"),b=r("z+q/"),m=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(e,t){var r=t["offset"+e[0].toUpperCase()+e.slice(1)],n=g[e];return r+parseInt(Object(l.a)(t,n[0]),10)+parseInt(Object(l.a)(t,n[1]),10)}var v=((n={})[d.c]="collapse",n[d.d]="collapsing",n[d.b]="collapsing",n[d.a]="collapse show",n),y={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:h},x=u.a.forwardRef((function(e,t){var r=e.onEnter,n=e.onEntering,i=e.onEntered,l=e.onExit,g=e.onExiting,y=e.className,x=e.children,w=e.dimension,N=void 0===w?"height":w,k=e.getDimensionValue,O=void 0===k?h:k,j=Object(o.a)(e,m),C="function"===typeof N?N():N,E=Object(s.useMemo)((function(){return Object(p.a)((function(e){e.style[C]="0"}),r)}),[C,r]),P=Object(s.useMemo)((function(){return Object(p.a)((function(e){var t="scroll"+C[0].toUpperCase()+C.slice(1);e.style[C]=e[t]+"px"}),n)}),[C,n]),I=Object(s.useMemo)((function(){return Object(p.a)((function(e){e.style[C]=null}),i)}),[C,i]),M=Object(s.useMemo)((function(){return Object(p.a)((function(e){e.style[C]=O(C,e)+"px",Object(b.a)(e)}),l)}),[l,O,C]),_=Object(s.useMemo)((function(){return Object(p.a)((function(e){e.style[C]=null}),g)}),[C,g]);return u.a.createElement(d.e,Object(a.a)({ref:t,addEndListener:f.a},j,{"aria-expanded":j.role?j.in:null,onEnter:E,onEntering:P,onEntered:I,onExit:M,onExiting:_}),(function(e,t){return u.a.cloneElement(x,Object(a.a)({},t,{className:c()(y,x.props.className,v[e],"width"===C&&"width")}))}))}));x.defaultProps=y,t.a=x},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))}},[["BzWl",0,1,2,11]]]);