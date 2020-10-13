(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(286)),i={title:"Stat / Small"},l={unversionedId:"examples/stat-small",id:"examples/stat-small",isDocsHomePage:!1,title:"Stat / Small",description:"Create a stat card displaying a single value.",source:"@site/docs/examples/stat-small.md",slug:"/examples/stat-small",permalink:"/qd/docs/examples/stat-small",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/stat-small.md",version:"current",sidebar:"someSidebar",previous:{title:"Dashboard",permalink:"/qd/docs/examples/dashboard"},next:{title:"Stat / Large",permalink:"/qd/docs/examples/stat-large"}},c=[],u={rightToc:c};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create a stat card displaying a single value."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(393).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom faker import Faker\n\nfrom synth import FakePercent\nfrom h2o_q import site, ui\n\npage = site['/demo']\n\nfake = Faker()\nf = FakePercent()\nval, _ = f.next()\nc = page.add('example', ui.small_stat_card(\n    box=f'1 1 1 1',\n    title=fake.cryptocurrency_name(),\n    value=f'${val:.2f}',\n))\npage.save()\n\nwhile True:\n    time.sleep(1)\n    val, _ = f.next()\n    c.value = f'${val:.2f}'\n    page.save()\n")))}s.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},393:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);