window.PR_SHOULD_USE_CONTINUATION=!0,function(){function e(e){function n(e){var n=e.charCodeAt(0);if(92!==n)return n;var t=e.charAt(1);return n=d[t],n?n:t>="0"&&"7">=t?parseInt(e.substring(1),8):"u"===t||"x"===t?parseInt(e.substring(2),16):e.charCodeAt(1)}function t(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);var n=String.fromCharCode(e);return"\\"!==n&&"-"!==n&&"["!==n&&"]"!==n||(n="\\"+n),n}function r(e){for(var r=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),a=[],s=[],i="^"===r[0],l=i?1:0,o=r.length;o>l;++l){var u=r[l];if(/\\[bdsw]/i.test(u))a.push(u);else{var c,d=n(u);o>l+2&&"-"===r[l+1]?(c=n(r[l+2]),l+=2):c=d,s.push([d,c]),65>c||d>122||(65>c||d>90||s.push([32|Math.max(65,d),32|Math.min(c,90)]),97>c||d>122||s.push([-33&Math.max(97,d),-33&Math.min(c,122)]))}}s.sort(function(e,n){return e[0]-n[0]||n[1]-e[1]});for(var f=[],p=[NaN,NaN],l=0;l<s.length;++l){var h=s[l];h[0]<=p[1]+1?p[1]=Math.max(p[1],h[1]):f.push(p=h)}var g=["["];i&&g.push("^"),g.push.apply(g,a);for(var l=0;l<f.length;++l){var h=f[l];g.push(t(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&g.push("-"),g.push(t(h[1])))}return g.push("]"),g.join("")}function a(e){for(var n=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),t=n.length,a=[],l=0,o=0;t>l;++l){var u=n[l];if("("===u)++o;else if("\\"===u.charAt(0)){var c=+u.substring(1);c&&o>=c&&(a[c]=-1)}}for(var l=1;l<a.length;++l)-1===a[l]&&(a[l]=++s);for(var l=0,o=0;t>l;++l){var u=n[l];if("("===u)++o,void 0===a[o]&&(n[l]="(?:");else if("\\"===u.charAt(0)){var c=+u.substring(1);c&&o>=c&&(n[l]="\\"+a[o])}}for(var l=0,o=0;t>l;++l)"^"===n[l]&&"^"!==n[l+1]&&(n[l]="");if(e.ignoreCase&&i)for(var l=0;t>l;++l){var u=n[l],d=u.charAt(0);u.length>=2&&"["===d?n[l]=r(u):"\\"!==d&&(n[l]=u.replace(/[a-zA-Z]/g,function(e){var n=e.charCodeAt(0);return"["+String.fromCharCode(-33&n,32|n)+"]"}))}return n.join("")}for(var s=0,i=!1,l=!1,o=0,u=e.length;u>o;++o){var c=e[o];if(c.ignoreCase)l=!0;else if(/[a-z]/i.test(c.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){i=!0,l=!1;break}}for(var d={b:8,t:9,n:10,v:11,f:12,r:13},f=[],o=0,u=e.length;u>o;++o){var c=e[o];if(c.global||c.multiline)throw new Error(""+c);f.push("(?:"+a(c)+")")}return new RegExp(f.join("|"),l?"gi":"g")}function n(e){function n(e){switch(e.nodeType){case 1:if(r.test(e.className))return;for(var t=e.firstChild;t;t=t.nextSibling)n(t);var u=e.nodeName;"BR"!==u&&"LI"!==u||(a[l]="\n",i[l<<1]=s++,i[l++<<1|1]=e);break;case 3:case 4:var c=e.nodeValue;c.length&&(c=o?c.replace(/\r\n?/g,"\n"):c.replace(/[ \t\r\n]+/g," "),a[l]=c,i[l<<1]=s,s+=c.length,i[l++<<1|1]=e)}}var t,r=/(?:^|\s)nocode(?:\s|$)/,a=[],s=0,i=[],l=0;e.currentStyle?t=e.currentStyle.whiteSpace:window.getComputedStyle&&(t=document.defaultView.getComputedStyle(e,null).getPropertyValue("white-space"));var o=t&&"pre"===t.substring(0,3);return n(e),{sourceCode:a.join("").replace(/\n$/,""),spans:i}}function t(e,n,t,r){if(n){var a={sourceCode:n,basePos:e};t(a),r.push.apply(r,a.decorations)}}function r(e){for(var n=void 0,t=e.firstChild;t;t=t.nextSibling){var r=t.nodeType;n=1===r?n?e:t:3===r&&U.test(t.nodeValue)?e:n}return n===e?void 0:n}function a(n,r){var a,s={};!function(){for(var t=n.concat(r),i=[],l={},o=0,u=t.length;u>o;++o){var c=t[o],d=c[3];if(d)for(var f=d.length;--f>=0;)s[d.charAt(f)]=c;var p=c[1],h=""+p;l.hasOwnProperty(h)||(i.push(p),l[h]=null)}i.push(/[\0-\uffff]/),a=e(i)}();var i=r.length,l=function(e){for(var n=e.sourceCode,o=e.basePos,c=[o,$],d=0,f=n.match(a)||[],p={},h=0,g=f.length;g>h;++h){var m,v=f[h],y=p[v],w=void 0;if("string"==typeof y)m=!1;else{var x=s[v.charAt(0)];if(x)w=v.match(x[1]),y=x[0];else{for(var b=0;i>b;++b)if(x=r[b],w=v.match(x[1])){y=x[0];break}w||(y=$)}m=y.length>=5&&"lang-"===y.substring(0,5),!m||w&&"string"==typeof w[1]||(m=!1,y=D),m||(p[v]=y)}var S=d;if(d+=v.length,m){var C=w[1],N=v.indexOf(C),_=N+C.length;w[2]&&(_=v.length-w[2].length,N=_-C.length);var E=y.substring(5);t(o+S,v.substring(0,N),l,c),t(o+S+N,C,u(E,C),c),t(o+S+_,v.substring(_),l,c)}else c.push(o+S,y)}e.decorations=c};return l}function s(e){var n=[],t=[];e.tripleQuotedStrings?n.push([k,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?n.push([k,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):n.push([k,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&t.push([k,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;if(r&&(e.cStyleComments?(r>1?n.push([A,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):n.push([A,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),t.push([k,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null])):n.push([A,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(t.push([A,/^\/\/[^\r\n]*/,null]),t.push([A,/^\/\*[\s\S]*?(?:\*\/|$)/,null])),e.regexLiterals){var s="/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/";t.push(["lang-regex",new RegExp("^"+B+"("+s+")")])}var i=e.types;i&&t.push([P,i]);var l=(""+e.keywords).replace(/^ | $/g,"");return l.length&&t.push([R,new RegExp("^(?:"+l.replace(/[\s,]+/g,"|")+")\\b"),null]),n.push([$,/^\s+/,null," \r\n	 "]),t.push([L,/^@[a-z_$][a-z_$@0-9]*/i,null],[P,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[$,/^[a-z_$][a-z_$@0-9]*/i,null],[L,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[$,/^\\[\s\S]?/,null],[T,/^.[^\s\w\.$@\'\"\`\/\#\\]*/,null]),a(n,t)}function i(e,n){function t(e){switch(e.nodeType){case 1:if(s.test(e.className))break;if("BR"===e.nodeName)r(e),e.parentNode&&e.parentNode.removeChild(e);else for(var n=e.firstChild;n;n=n.nextSibling)t(n);break;case 3:case 4:if(o){var a=e.nodeValue,u=a.match(i);if(u){var c=a.substring(0,u.index);e.nodeValue=c;var d=a.substring(u.index+u[0].length);if(d){var f=e.parentNode;f.insertBefore(l.createTextNode(d),e.nextSibling)}r(e),c||e.parentNode.removeChild(e)}}}}function r(e){function n(e,t){var r=t?e.cloneNode(!1):e,a=e.parentNode;if(a){var s=n(a,1),i=e.nextSibling;s.appendChild(r);for(var l=i;l;l=i)i=l.nextSibling,s.appendChild(l)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var t,r=n(e.nextSibling,0);(t=r.parentNode)&&1===t.nodeType;)r=t;c.push(r)}var a,s=/(?:^|\s)nocode(?:\s|$)/,i=/\r\n?|\n/,l=e.ownerDocument;e.currentStyle?a=e.currentStyle.whiteSpace:window.getComputedStyle&&(a=l.defaultView.getComputedStyle(e,null).getPropertyValue("white-space"));for(var o=a&&"pre"===a.substring(0,3),u=l.createElement("LI");e.firstChild;)u.appendChild(e.firstChild);for(var c=[u],d=0;d<c.length;++d)t(c[d]);n===(0|n)&&c[0].setAttribute("value",n);var f=l.createElement("OL");f.className="linenums";for(var p=Math.max(0,n-1|0)||0,d=0,h=c.length;h>d;++d)u=c[d],u.className="L"+(d+p)%10,u.firstChild||u.appendChild(l.createTextNode(" ")),f.appendChild(u);e.appendChild(f)}function l(e){var n=/\bMSIE\b/.test(navigator.userAgent),t=/\n/g,r=e.sourceCode,a=r.length,s=0,i=e.spans,l=i.length,o=0,u=e.decorations,c=u.length,d=0;u[c]=a;var f,p;for(p=f=0;c>p;)u[p]!==u[p+2]?(u[f++]=u[p++],u[f++]=u[p++]):p+=2;for(c=f,p=f=0;c>p;){for(var h=u[p],g=u[p+1],m=p+2;c>=m+2&&u[m+1]===g;)m+=2;u[f++]=h,u[f++]=g,p=m}c=u.length=f;for(;l>o;){var v,y=(i[o],i[o+2]||a),w=(u[d],u[d+2]||a),m=Math.min(y,w),x=i[o+1];if(1!==x.nodeType&&(v=r.substring(s,m))){n&&(v=v.replace(t,"\r")),x.nodeValue=v;var b=x.ownerDocument,S=b.createElement("SPAN");S.className=u[d+1];var C=x.parentNode;C.replaceChild(S,x),S.appendChild(x),y>s&&(i[o+1]=x=b.createTextNode(r.substring(m,y)),C.insertBefore(x,S.nextSibling))}s=m,s>=y&&(o+=2),s>=w&&(d+=2)}}function o(e,n){for(var t=n.length;--t>=0;){var r=n[t];F.hasOwnProperty(r)?window.console&&console.warn("cannot override language handler %s",r):F[r]=e}}function u(e,n){return e&&F.hasOwnProperty(e)||(e=/^\s*</.test(n)?"default-markup":"default-code"),F[e]}function c(e){var t=e.langExtension;try{var r=n(e.sourceNode),a=r.sourceCode;e.sourceCode=a,e.spans=r.spans,e.basePos=0,u(t,a)(e),l(e)}catch(s){"console"in window&&console.log(s&&s.stack?s.stack:s)}}function d(e,n,t){var r=document.createElement("PRE");r.innerHTML=e,t&&i(r,t);var a={langExtension:n,numberLines:t,sourceNode:r};return c(a),r.innerHTML}function f(e){function n(n){return(e&&e.nodeType?e:document).getElementsByTagName(n)}function t(){for(var n=window.PR_SHOULD_USE_CONTINUATION?d.now()+250:1/0;p<s.length&&d.now()<n;p++){var a=s[p],l=a.className;if(l.indexOf("prettyprint")>=0){var o,u=l.match(h);!u&&(o=r(a))&&"CODE"===o.tagName&&(u=o.className.match(h)),u&&(u=u[1]);for(var g=!1,m=a.parentNode;m;m=m.parentNode)if(("pre"===m.tagName||"code"===m.tagName||"xmp"===m.tagName)&&m.className&&m.className.indexOf("prettyprint")>=0){g=!0;break}if(!g){var v=a.className.match(/\blinenums\b(?::(\d+))?/);v=v?v[1]&&v[1].length?+v[1]:!0:!1,v&&i(a,v),f={langExtension:u,sourceNode:a,numberLines:v},c(f)}}}p<s.length?setTimeout(t,250):"function"==typeof e&&e()}for(var a=[n("pre"),n("code"),n("xmp")],s=[],l=0;l<a.length;++l)for(var o=0,u=a[l].length;u>o;++o)s.push(a[l][o]);a=null;var d=Date;d.now||(d={now:function(){return+new Date}});var f,p=0,h=/\blang(?:uage)?-([\w.]+)(?!\S)/;t()}var p=["break,continue,do,else,for,if,return,while"],h=[p,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],g=[h,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],m=[g,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],v=[g,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],y=[v,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",x=[g,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],b="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",S=[p,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],C=[p,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],N=[p,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],_=[m,y,x,b+S,C,N],E=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,k="str",R="kwd",A="com",P="typ",L="lit",T="pun",$="pln",O="tag",I="dec",D="src",z="atn",M="atv",j="nocode",B="(?:^^\\.?|[+-]|\\!|\\!=|\\!==|\\#|\\%|\\%=|&|&&|&&=|&=|\\(|\\*|\\*=|\\+=|\\,|\\-=|\\->|\\/|\\/=|:|::|\\;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\@|\\[|\\^|\\^=|\\^\\^|\\^\\^=|\\{|\\||\\|=|\\|\\||\\|\\|=|\\~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",U=/\S/,V=s({keywords:_,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};o(V,["default-code"]),o(a([],[[$,/^[^<?]+/],[I,/^<!\w[^>]*(?:>|$)/],[A,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[T,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),o(a([[$,/^[\s]+/,null," 	\r\n"],[M,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[O,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[z,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[T,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),o(a([],[[M,/^[\s\S]+/]]),["uq.val"]),o(s({keywords:m,hashComments:!0,cStyleComments:!0,types:E}),["c","cc","cpp","cxx","cyc","m"]),o(s({keywords:"null,true,false"}),["json"]),o(s({keywords:y,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:E}),["cs"]),o(s({keywords:v,cStyleComments:!0}),["java"]),o(s({keywords:N,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]),o(s({keywords:S,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]),o(s({keywords:b,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]),o(s({keywords:C,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]),o(s({keywords:x,cStyleComments:!0,regexLiterals:!0}),["js"]),o(s({keywords:w,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),o(a([],[[k,/^[\s\S]+/]]),["regex"]),window.prettyPrintOne=d,window.prettyPrint=f,window.PR={createSimpleLexer:a,registerLangHandler:o,sourceDecorator:s,PR_ATTRIB_NAME:z,PR_ATTRIB_VALUE:M,PR_COMMENT:A,PR_DECLARATION:I,PR_KEYWORD:R,PR_LITERAL:L,PR_NOCODE:j,PR_PLAIN:$,PR_PUNCTUATION:T,PR_SOURCE:D,PR_STRING:k,PR_TAG:O,PR_TYPE:P}}();