(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6VaU":function(e,t,n){"use strict";var r=n("XKFU"),a=n("xF/b"),o=n("S/j/"),i=n("ne8i"),l=n("2OiF"),c=n("zRwo");r(r.P,"Array",{flatMap:function(e){var t,n,r=o(this);return l(e),t=i(r.length),n=c(r,0),a(n,r,r,t,0,1,e,arguments[1]),n}}),n("nGyu")("flatMap")},NAXS:function(e,t,n){"use strict";var r=n("k1TG"),a=n("8o2o"),o=n("TSYQ"),i=n.n(o),l=n("q1tI"),c=n.n(l),s=n("VWqr"),u=n("ILyh"),f=n("vUet"),m=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.active,m=e.disabled,p=e.className,v=e.variant,d=e.action,b=e.as,y=e.eventKey,h=e.onClick,g=Object(a.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);n=Object(f.b)(n,"list-group-item");var E=Object(l.useCallback)((function(e){if(m)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[m,h]);return c.a.createElement(s.a,Object(r.a)({ref:t},g,{eventKey:Object(u.b)(y,g.href),as:b||(d?g.href?"a":"button":"div"),onClick:E,className:i()(p,n,o&&"active",m&&"disabled",v&&n+"-"+v,d&&n+"-action")}))}));m.defaultProps={variant:null,active:!1,disabled:!1},m.displayName="ListGroupItem",t.a=m},"bP+6":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u})),n.d(t,"query",(function(){return f}));n("f3/d"),n("Vd3H"),n("91GP"),n("Z2Ku"),n("L9s1"),n("6VaU");var r=n("q1tI"),a=n.n(r),o=n("7vrA"),i=n("3Z9Z"),l=n("7oih"),c=n("EYWl"),s=n("zbQT");var u=function(e){var t,n;function r(t){var n,r=(n=e.call(this,t)||this).props.data,a=r.flavors.nodes,o=r.ingredients.nodes,i=r.vendors.nodes;return n.state={vendors:i.flatMap((function(e){var t=a.filter((function(t){return t.vendor===e.code})),n=o.filter((function(e){return t.some((function(t){return t.casNumbers.includes(e.casNumber)}))}));return t.length?[Object.assign({},e,{flavors:t,ingredients:n})]:[]}))},n.state.vendors.sort((function(e,t){return e.name.localeCompare(t.name)})),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.state.vendors;return a.a.createElement(l.a,null,a.a.createElement(c.a,{title:"Vendor Info"}),a.a.createElement(o.a,null,a.a.createElement(i.a,null,a.a.createElement("h1",null,"Vendor Info")),e.map((function(e){return a.a.createElement(s.a,Object.assign({},e,{key:e.code,flavors:e.flavors,ingredients:e.ingredients}))}))))},r}(r.Component),f="2692145388"},sjrs:function(e,t,n){"use strict";var r=n("k1TG"),a=n("8o2o"),o=n("TSYQ"),i=n.n(o),l=n("q1tI"),c=n.n(l),s=(n("2W6z"),n("JCAc")),u=n("vUet"),f=n("rQNl"),m=n("NAXS"),p=c.a.forwardRef((function(e,t){var n,o=Object(s.a)(e,{activeKey:"onSelect"}),l=o.className,m=o.bsPrefix,p=o.variant,v=o.horizontal,d=o.as,b=void 0===d?"div":d,y=Object(a.a)(o,["className","bsPrefix","variant","horizontal","as"]);return m=Object(u.b)(m,"list-group"),n=v?!0===v?"horizontal":"horizontal-"+v:null,c.a.createElement(f.a,Object(r.a)({ref:t},y,{as:b,className:i()(l,m,p&&m+"-"+p,n&&m+"-"+n)}))}));p.defaultProps={variant:null,horizontal:null},p.displayName="ListGroup",p.Item=m.a,t.a=p},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},"xF/b":function(e,t,n){"use strict";var r=n("EWmC"),a=n("0/R4"),o=n("ne8i"),i=n("m0Pp"),l=n("K0xU")("isConcatSpreadable");e.exports=function e(t,n,c,s,u,f,m,p){for(var v,d,b=u,y=0,h=!!m&&i(m,p,3);y<s;){if(y in c){if(v=h?h(c[y],y,n):c[y],d=!1,a(v)&&(d=void 0!==(d=v[l])?!!d:r(v)),d&&f>0)b=e(t,n,v,o(v.length),b,f-1)-1;else{if(b>=9007199254740991)throw TypeError();t[b]=v}b++}y++}return b}},zbQT:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("Vd3H"),n("f3/d"),n("tUrg");var r=n("Wbzz"),a=n("q1tI"),o=n.n(a),i=n("6xyR"),l=n("65eO"),c=n("sjrs"),s=n("NAXS"),u=n("7Qib");function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(e){var t,n,m,v,d;function b(){return e.apply(this,arguments)||this}return n=e,(t=b).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,b.prototype.render=function(){var e=this.props,t=e.code,n=e.link,r=e.name,a=e.flavorCount;return o.a.createElement(i.a,{className:"my-3"},o.a.createElement(i.a.Header,null,o.a.createElement("h3",null,o.a.createElement("span",null,r),n?o.a.createElement("span",{className:"ml-auto"},o.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer"},n.title)):null,o.a.createElement("span",null," (",t,")"),o.a.createElement(l.a,{variant:"secondary",className:"float-right"},a," flavors"))),o.a.createElement(i.a.Body,null,this.description,this.flavors,this.ingredients))},m=b,(v=[{key:"description",get:function(){var e=this.props.description;return e?o.a.createElement("p",null,e):null}},{key:"flavors",get:function(){var e=this.props.flavors;return(null==e?void 0:e.length)?o.a.createElement(a.Fragment,null,o.a.createElement("h6",{className:"my-3"},"Flavors with concerning ingredients (",e.length,")"),o.a.createElement(c.a,{activeKey:""},e.map((function(e){return o.a.createElement(s.a,{action:!0,as:r.Link,key:e.name,to:Object(u.getFlavorSlug)(e)},e.name)})))):null}},{key:"ingredients",get:function(){var e=f(this.props.ingredients);return e.sort((function(e,t){return e.category.toLowerCase().localeCompare(t.category.toLowerCase())||e.name.toLowerCase().localeCompare(t.name.toLowerCase())})),(null==e?void 0:e.length)?o.a.createElement(a.Fragment,null,o.a.createElement("h6",{className:"my-3"},"Ingredients used by this vendor (",e.length,")"),o.a.createElement(c.a,{activeKey:""},e.map((function(e){return o.a.createElement(s.a,{action:!0,as:r.Link,key:e.casNumber,to:Object(u.getIngredientSlug)(e),variant:Object(u.getCategoryVariant)(e.category)},e.name)})))):null}}])&&p(m.prototype,v),d&&p(m,d),b}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-vendors-js-e15dc98da4cd1d9983aa.js.map