(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{NAXS:function(e,t,a){"use strict";var r=a("k1TG"),n=a("8o2o"),o=a("TSYQ"),i=a.n(o),s=a("q1tI"),l=a.n(s),u=a("VWqr"),c=a("ILyh"),m=a("vUet"),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.active,d=e.disabled,f=e.className,p=e.variant,h=e.action,v=e.as,g=e.eventKey,$=e.onClick,y=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(m.b)(a,"list-group-item");var b=Object(s.useCallback)((function(e){if(d)return e.preventDefault(),void e.stopPropagation();$&&$(e)}),[d,$]);return l.a.createElement(u.a,Object(r.a)({ref:t},y,{eventKey:Object(c.b)(g,y.href),as:v||(h?y.href?"a":"button":"div"),onClick:b,className:i()(f,a,o&&"active",d&&"disabled",p&&a+"-"+p,h&&a+"-action")}))}));d.defaultProps={variant:null,active:!1,disabled:!1},d.displayName="ListGroupItem",t.a=d},dhqo:function(e,t,a){a("8+KV"),a("pIFo"),a("Oyvg"),e.exports=function(){var e=[],t=[],a={},r={},n={};function o(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function i(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function s(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function l(e,t){return e.replace(t[0],(function(a,r){var n=s(t[1],arguments);return i(""===a?e[r-1]:a,n)}))}function u(e,t,r){if(!e.length||a.hasOwnProperty(e))return t;for(var n=r.length;n--;){var o=r[n];if(o[0].test(t))return l(t,o)}return t}function c(e,t,a){return function(r){var n=r.toLowerCase();return t.hasOwnProperty(n)?i(r,n):e.hasOwnProperty(n)?i(r,e[n]):u(n,r,a)}}function m(e,t,a,r){return function(r){var n=r.toLowerCase();return!!t.hasOwnProperty(n)||!e.hasOwnProperty(n)&&u(n,n,a)===n}}function d(e,t,a){return(a?t+" ":"")+(1===t?d.singular(e):d.plural(e))}return d.plural=c(n,r,e),d.isPlural=m(n,r,e),d.singular=c(r,n,t),d.isSingular=m(r,n,t),d.addPluralRule=function(t,a){e.push([o(t),a])},d.addSingularRule=function(e,a){t.push([o(e),a])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},d.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),n[e]=t,r[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()},lkz9:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p})),a.d(t,"query",(function(){return h}));a("91GP"),a("f3/d");var r=a("dhqo"),n=a.n(r),o=a("Wbzz"),i=a("q1tI"),s=a.n(i),l=a("7vrA"),u=a("3Z9Z"),c=a("JI6e"),m=a("7oih"),d=a("EYWl"),f=a("zbQT");var p=function(e){var t,a;function r(t){var a,r=(a=e.call(this,t)||this).props.data,n=r.flavors.nodes,o=r.ingredients.nodes,i=r.vendor;return a.state={flavors:n,ingredients:o,vendor:i},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.state,t=e.flavors,a=e.ingredients,r=e.vendor,i="Vendor Info - "+r.name,p=r.name+" uses "+a.length+" concerning "+n()("ingredient",a.length)+" in "+t.length+" "+n()("flavor",t.length)+".";return s.a.createElement(m.a,null,s.a.createElement(d.a,{title:i,description:p}),s.a.createElement(l.a,null,s.a.createElement(u.a,{className:"mb-3"},s.a.createElement(c.a,null,s.a.createElement(o.Link,{to:"/vendors"},"Vendors")," » ",r.name)),s.a.createElement(u.a,null,s.a.createElement(c.a,null,s.a.createElement(f.a,Object.assign({},r,{flavors:t,ingredients:a}))))))},r}(i.Component),h="2354604492"},sjrs:function(e,t,a){"use strict";var r=a("k1TG"),n=a("8o2o"),o=a("TSYQ"),i=a.n(o),s=a("q1tI"),l=a.n(s),u=(a("2W6z"),a("JCAc")),c=a("vUet"),m=a("rQNl"),d=a("NAXS"),f=l.a.forwardRef((function(e,t){var a,o=Object(u.a)(e,{activeKey:"onSelect"}),s=o.className,d=o.bsPrefix,f=o.variant,p=o.horizontal,h=o.as,v=void 0===h?"div":h,g=Object(n.a)(o,["className","bsPrefix","variant","horizontal","as"]);return d=Object(c.b)(d,"list-group"),a=p?!0===p?"horizontal":"horizontal-"+p:null,l.a.createElement(m.a,Object(r.a)({ref:t},g,{as:v,className:i()(s,d,f&&d+"-"+f,a&&d+"-"+a)}))}));f.defaultProps={variant:null,horizontal:null},f.displayName="ListGroup",f.Item=d.a,t.a=f},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},zbQT:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("a1Th"),a("Btvt"),a("XfO3"),a("HEwt"),a("rGqo"),a("rE2o"),a("ioFf"),a("Vd3H"),a("f3/d"),a("tUrg");var r=a("Wbzz"),n=a("q1tI"),o=a.n(n),i=a("6xyR"),s=a("65eO"),l=a("sjrs"),u=a("NAXS"),c=a("7Qib");function m(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function f(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(e){var t,a,d,p,h;function v(){return e.apply(this,arguments)||this}return a=e,(t=v).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,v.prototype.render=function(){var e=this.props,t=e.code,a=e.link,r=e.name,n=e.flavorCount;return o.a.createElement(i.a,{className:"my-3"},o.a.createElement(i.a.Header,null,o.a.createElement("h3",null,o.a.createElement("span",null,r),a?o.a.createElement("span",{className:"ml-auto"},o.a.createElement("a",{href:a.href,target:"_blank",rel:"noopener noreferrer"},a.title)):null,o.a.createElement("span",null," (",t,")"),o.a.createElement(s.a,{variant:"secondary",className:"float-right"},n," flavors"))),o.a.createElement(i.a.Body,null,this.description,this.flavors,this.ingredients))},d=v,(p=[{key:"description",get:function(){var e=this.props.description;return e?o.a.createElement("p",null,e):null}},{key:"flavors",get:function(){var e=this.props.flavors;return(null==e?void 0:e.length)?o.a.createElement(n.Fragment,null,o.a.createElement("h6",{className:"my-3"},"Flavors with concerning ingredients (",e.length,")"),o.a.createElement(l.a,{activeKey:""},e.map((function(e){return o.a.createElement(u.a,{action:!0,as:r.Link,key:e.name,to:Object(c.getFlavorSlug)(e)},e.name)})))):null}},{key:"ingredients",get:function(){var e=m(this.props.ingredients);return e.sort((function(e,t){return e.category.toLowerCase().localeCompare(t.category.toLowerCase())||e.name.toLowerCase().localeCompare(t.name.toLowerCase())})),(null==e?void 0:e.length)?o.a.createElement(n.Fragment,null,o.a.createElement("h6",{className:"my-3"},"Ingredients used by this vendor (",e.length,")"),o.a.createElement(l.a,{activeKey:""},e.map((function(e){return o.a.createElement(u.a,{action:!0,as:r.Link,key:e.casNumber,to:Object(c.getIngredientSlug)(e),variant:Object(c.getCategoryVariant)(e.category)},e.name)})))):null}}])&&f(d.prototype,p),h&&f(d,h),v}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-vendor-js-f62245967deb66e85841.js.map