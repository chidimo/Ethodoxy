(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{176:function(e,t,n){"use strict";var a=n(41),r=n.n(a),o=n(50),i=n(26),s=n.n(i),c=n(177),u=n.n(c),l={getPaginatedItems:function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a,o,i,c,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=t;case 2:if(!a){e.next=12;break}return e.next=5,s.a.get(a);case 5:o=e.sent,i=o.data,c=i.results,u=i.next,n=n.concat(c),a=u,e.next=2;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),formatText:function(e,t){switch(t){case"upper":return e.toUpperCase();case"lower":return e.toLowerCase();case"title":return u()(e);default:return e}}};t.a=l},177:function(e,t,n){var a=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;e.exports=function(e){return i(e,a)},e.exports.toTitleCase=e.exports;var r=n(178).concat(n(179)).concat(n(180)).concat(a.source.replace(/(^\^\(|\)\$$)/g,"").split("|")).concat(["is"]),o=new RegExp("^("+r.join("|")+")$","i");function i(e,t){return e?e.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,n,a){return n>0&&n+e.length!==a.length&&e.search(t)>-1&&":"!==a.charAt(n-2)&&("-"!==a.charAt(n+e.length)||"-"===a.charAt(n-1))&&a.charAt(n-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}e.exports.toLaxTitleCase=function(e){return i(e,o)}},178:function(e,t){e.exports=["the","a","an","some"]},179:function(e,t){e.exports=["a","abaft","aboard","about","above","absent","across","afore","after","against","along","alongside","amid","amidst","among","amongst","an","apropos","apud","around","as","aside","astride","at","athwart","atop","barring","before","behind","below","beneath","beside","besides","between","beyond","but","by","circa","concerning","despite","down","during","except","excluding","failing","following","for","forenenst","from","given","in","including","inside","into","like","mid","midst","minus","modulo","near","next","notwithstanding","o'","of","off","on","onto","opposite","out","outside","over","pace","past","per","plus","pro","qua","regarding","round","sans","save","since","than","through","throughout","thru","thruout","till","times","to","toward","towards","under","underneath","unlike","until","unto","up","upon","versus","via","vice","vis-\xe0-vis","with","within","without","worth"]},180:function(e,t){e.exports=["as","because","for","and","nor","but","or","yet","so"]},181:function(e,t,n){"use strict";var a=n(41),r=n.n(a),o=n(50),i=n(26),s=n.n(i),c=n(51),u=n(30),l={getDRBBooks:function(e){return{type:u.b.GET_DRB_BOOKS,booklist:e}},getDRBBookById:function(e){return{type:u.b.GET_BOOK_BY_ID,book:e}},cleanGetDRBBookById:function(){return{type:u.b.CLEAN_GET_BOOK_BY_ID}}},d=n(176),f={getDRBBooks:function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(c.showLoading)()),e.next=3,d.a.getPaginatedItems("/books");case 3:n=e.sent,t(l.getDRBBooks(n)),t(Object(c.hideLoading)());case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getDRBBookById:function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a,o,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(c.showLoading),t.next=3,s.a.get("/chapters/".concat(e));case 3:a=t.sent,o=a.data,i=o.results,n(l.getDRBBookById(i)),n(c.hideLoading);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},cleanGetDRBBookById:function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t(l.cleanGetDRBBookById());case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}};t.a=f},184:function(e,t,n){"use strict";var a=n(2),r=n(1),o=n(0),i=n.n(o),s=(n(3),n(4)),c=n(5),u=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=i.a.forwardRef(function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,c=e.alignItems,u=void 0===c?"stretch":c,l=e.classes,d=e.className,f=e.component,p=void 0===f?"div":f,g=e.container,m=void 0!==g&&g,x=e.direction,h=void 0===x?"row":x,b=e.item,v=void 0!==b&&b,w=e.justify,y=void 0===w?"flex-start":w,O=e.lg,k=void 0!==O&&O,E=e.md,j=void 0!==E&&E,B=e.sm,A=void 0!==B&&B,I=e.spacing,S=void 0===I?0:I,C=e.wrap,D=void 0===C?"wrap":C,U=e.xl,R=void 0!==U&&U,z=e.xs,Y=void 0!==z&&z,N=e.zeroMinWidth,W=void 0!==N&&N,L=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(s.a)(l.root,d,m&&[l.container,0!==S&&l["spacing-xs-".concat(String(S))]],v&&l.item,W&&l.zeroMinWidth,"row"!==h&&l["direction-xs-".concat(String(h))],"wrap"!==D&&l["wrap-xs-".concat(String(D))],"stretch"!==u&&l["align-items-xs-".concat(String(u))],"stretch"!==o&&l["align-content-xs-".concat(String(o))],"flex-start"!==y&&l["justify-xs-".concat(String(y))],!1!==Y&&l["grid-xs-".concat(String(Y))],!1!==A&&l["grid-sm-".concat(String(A))],!1!==j&&l["grid-md-".concat(String(j))],!1!==k&&l["grid-lg-".concat(String(k))],!1!==R&&l["grid-xl-".concat(String(R))]);return i.a.createElement(p,Object(r.a)({className:G,ref:t},L))});var p=Object(c.a)(function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return u.forEach(function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})}),n}(e,"xs"),{},e.breakpoints.keys.reduce(function(t,n){return function(e,t,n){var a={};l.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))},{name:"MuiGrid"})(f);t.a=p},185:function(e,t,n){var a;a=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045f":"dz","\u0490":"G","\u0491":"g","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b9":"indian rupee","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial"}'),t=JSON.parse('{"bg":{"locale":"Bulgarian","\u045d":"u"}}');function n(n,a){if("string"!==typeof n)throw new Error("slugify: string argument expected");var r=t[(a="string"===typeof a?{replacement:a}:a||{}).locale]||{},o=n.split("").reduce(function(t,n){return t+(r[n]||e[n]||n).replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,a.replacement||"-");return a.lower?o.toLowerCase():o}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=a(),e.exports.default=a()},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),i=n(34),s=n(177),c=n.n(s),u=n(185),l=n.n(u),d=n(184),f=n(166),p=n(181),g=Object(f.a)({container:{paddingTop:"20px"}}),m=Object(f.a)({item:{}});t.default=function(){var e=Object(i.useDispatch)();Object(a.useEffect)(function(){p.a.getDRBBooks()(e)},[e]);var t=g(),n=m(),s=Object(i.useSelector)(function(e){return e.drbReducer}).books;return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"Douay-Rheims Bible"),r.a.createElement("h3",null,"Old Testament"),r.a.createElement(d.a,{container:!0,spacing:2,classes:{root:t.container}},s.filter(function(e){return"old testament"===e.testament}).map(function(e){var t=e.id,a=e.name,i="/douay-rheims-bible/".concat(l()(a),"/").concat(t);return r.a.createElement(d.a,{key:t,item:!0,classes:{item:n.item}},r.a.createElement(o.b,{className:"book-link",to:i},c()(a)))})),r.a.createElement("h3",null,"New Testament"),r.a.createElement(d.a,{container:!0,spacing:2,classes:{root:t.container}},s.filter(function(e){return"new testament"===e.testament}).map(function(e){var t=e.id,a=e.name,i="/douay-rheims-bible/".concat(l()(a),"/").concat(t);return r.a.createElement(d.a,{key:t,item:!0,classes:{item:n.item}},r.a.createElement(o.b,{className:"book-link",to:i},c()(a)))})))}}}]);
//# sourceMappingURL=3.27007f64.chunk.js.map