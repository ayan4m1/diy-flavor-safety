(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"65eO":function(e,a,t){"use strict";var r=t("k1TG"),n=t("8o2o"),i=t("TSYQ"),o=t.n(i),s=t("q1tI"),l=t.n(s),u=t("vUet"),c=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.variant,s=e.pill,c=e.className,m=e.as,f=void 0===m?"span":m,d=Object(n.a)(e,["bsPrefix","variant","pill","className","as"]),p=Object(u.b)(t,"badge");return l.a.createElement(f,Object(r.a)({ref:a},d,{className:o()(c,p,s&&p+"-pill",i&&p+"-"+i)}))}));c.displayName="Badge",c.defaultProps={pill:!1},a.a=c},NAXS:function(e,a,t){"use strict";var r=t("k1TG"),n=t("8o2o"),i=t("TSYQ"),o=t.n(i),s=t("q1tI"),l=t.n(s),u=t("VWqr"),c=t("ILyh"),m=t("vUet"),f=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.active,f=e.disabled,d=e.className,p=e.variant,h=e.action,v=e.as,g=e.eventKey,$=e.onClick,b=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(m.b)(t,"list-group-item");var y=Object(s.useCallback)((function(e){if(f)return e.preventDefault(),void e.stopPropagation();$&&$(e)}),[f,$]);return l.a.createElement(u.a,Object(r.a)({ref:a},b,{eventKey:Object(c.b)(g,b.href),as:v||(h?b.href?"a":"button":"div"),onClick:y,className:o()(d,t,i&&"active",f&&"disabled",p&&t+"-"+p,h&&t+"-action")}))}));f.defaultProps={variant:null,active:!1,disabled:!1},f.displayName="ListGroupItem",a.a=f},dhqo:function(e,a,t){t("8+KV"),t("pIFo"),t("Oyvg"),e.exports=function(){var e=[],a=[],t={},r={},n={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function s(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,t){return a[t]||""}))}function l(e,a){return e.replace(a[0],(function(t,r){var n=s(a[1],arguments);return o(""===t?e[r-1]:t,n)}))}function u(e,a,r){if(!e.length||t.hasOwnProperty(e))return a;for(var n=r.length;n--;){var i=r[n];if(i[0].test(a))return l(a,i)}return a}function c(e,a,t){return function(r){var n=r.toLowerCase();return a.hasOwnProperty(n)?o(r,n):e.hasOwnProperty(n)?o(r,e[n]):u(n,r,t)}}function m(e,a,t,r){return function(r){var n=r.toLowerCase();return!!a.hasOwnProperty(n)||!e.hasOwnProperty(n)&&u(n,n,t)===n}}function f(e,a,t){return(t?a+" ":"")+(1===a?f.singular(e):f.plural(e))}return f.plural=c(n,r,e),f.isPlural=m(n,r,e),f.singular=c(r,n,a),f.isSingular=m(r,n,a),f.addPluralRule=function(a,t){e.push([i(a),t])},f.addSingularRule=function(e,t){a.push([i(e),t])},f.addUncountableRule=function(e){"string"!=typeof e?(f.addPluralRule(e,"$0"),f.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},f.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),n[e]=a,r[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return f.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return f.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return f.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(f.addUncountableRule),f}()},lkz9:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p})),t.d(a,"query",(function(){return h}));t("91GP"),t("f3/d");var r=t("dhqo"),n=t.n(r),i=t("Wbzz"),o=t("q1tI"),s=t.n(o),l=t("7vrA"),u=t("3Z9Z"),c=t("JI6e"),m=t("7oih"),f=t("EYWl"),d=t("zbQT");var p=function(e){var a,t;function r(a){var t,r=(t=e.call(this,a)||this).props.data,n=r.flavors.nodes,i=r.ingredients.nodes,o=r.vendor;return t.state={flavors:n,ingredients:i,vendor:o},t}return t=e,(a=r).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,r.prototype.render=function(){var e=this.state,a=e.flavors,t=e.ingredients,r=e.vendor,o="Vendor Info - "+r.name,p=r.name+" uses "+t.length+" concerning "+n()("ingredient",t.length)+" in "+a.length+" "+n()("flavor",a.length)+".";return s.a.createElement(m.a,null,s.a.createElement(f.a,{title:o,description:p}),s.a.createElement(l.a,null,s.a.createElement(u.a,{className:"mb-3"},s.a.createElement(c.a,null,s.a.createElement(i.Link,{to:"/vendors"},"Vendors")," » ",r.name)),s.a.createElement(u.a,null,s.a.createElement(c.a,null,s.a.createElement(d.a,Object.assign({},r,{flavors:a,ingredients:t}))))))},r}(o.Component),h="2661056220"},sjrs:function(e,a,t){"use strict";var r=t("k1TG"),n=t("8o2o"),i=t("TSYQ"),o=t.n(i),s=t("q1tI"),l=t.n(s),u=(t("2W6z"),t("JCAc")),c=t("vUet"),m=t("rQNl"),f=t("NAXS"),d=l.a.forwardRef((function(e,a){var t,i=Object(u.a)(e,{activeKey:"onSelect"}),s=i.className,f=i.bsPrefix,d=i.variant,p=i.horizontal,h=i.as,v=void 0===h?"div":h,g=Object(n.a)(i,["className","bsPrefix","variant","horizontal","as"]);return f=Object(c.b)(f,"list-group"),t=p?!0===p?"horizontal":"horizontal-"+p:null,l.a.createElement(m.a,Object(r.a)({ref:a},g,{as:v,className:o()(s,f,d&&f+"-"+d,t&&f+"-"+t)}))}));d.defaultProps={variant:null,horizontal:null},d.displayName="ListGroup",d.Item=f.a,a.a=d},tUrg:function(e,a,t){"use strict";t("OGtf")("link",(function(e){return function(a){return e(this,"a","href",a)}}))},zbQT:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));t("a1Th"),t("Btvt"),t("XfO3"),t("HEwt"),t("rGqo"),t("rE2o"),t("ioFf"),t("Vd3H"),t("f3/d"),t("tUrg");var r=t("Wbzz"),n=t("q1tI"),i=t.n(n),o=t("6xyR"),s=t("65eO"),l=t("sjrs"),u=t("NAXS"),c=t("7Qib");function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return f(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function d(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(e){var a,t,f,p,h;function v(){return e.apply(this,arguments)||this}return t=e,(a=v).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,v.prototype.render=function(){var e=this.props,a=e.code,t=e.link,r=e.name,n=e.flavorCount;return i.a.createElement(o.a,{className:"my-3"},i.a.createElement(o.a.Header,null,i.a.createElement("h3",null,i.a.createElement("span",null,r),t?i.a.createElement("span",{className:"ml-auto"},i.a.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer"},t.title)):null,i.a.createElement("span",null," (",a,")"),i.a.createElement(s.a,{variant:"secondary",className:"float-right"},n," flavors"))),i.a.createElement(o.a.Body,null,this.description,this.flavors,this.ingredients))},f=v,(p=[{key:"description",get:function(){var e=this.props.description;return e?i.a.createElement("p",null,e):null}},{key:"flavors",get:function(){var e=this.props.flavors;return(null==e?void 0:e.length)?i.a.createElement(n.Fragment,null,i.a.createElement("h6",{className:"my-3"},"Flavors with concerning ingredients (",e.length,")"),i.a.createElement(l.a,{activeKey:""},e.map((function(e){return i.a.createElement(u.a,{action:!0,as:r.Link,key:e.name,to:Object(c.getFlavorSlug)(e)},e.name)})))):null}},{key:"ingredients",get:function(){var e=m(this.props.ingredients);return e.sort((function(e,a){return e.category.toLowerCase().localeCompare(a.category.toLowerCase())||e.name.toLowerCase().localeCompare(a.name.toLowerCase())})),(null==e?void 0:e.length)?i.a.createElement(n.Fragment,null,i.a.createElement("h6",{className:"my-3"},"Ingredients used by this vendor (",e.length,")"),i.a.createElement(l.a,{activeKey:""},e.map((function(e){return i.a.createElement(u.a,{action:!0,as:r.Link,key:e.casNumber,to:Object(c.getIngredientSlug)(e),variant:Object(c.getCategoryVariant)(e.category)},e.name)})))):null}}])&&d(f.prototype,p),h&&d(f,h),v}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-vendor-js-e694a91c7473e95438c3.js.map