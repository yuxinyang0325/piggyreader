!function(t){"use strict";window.jiZhuReaderGetPageContent={getCurrentContent:function(t){var e=this,n=null,r=e.extractContent(document);if(r.isSuccess&&(n=r.content.asNode()),n){var a=e.cleanNode(n);t&&t(a)}else t&&t(null)},getContent:function(t,e,n,r){var a=this;a.getDocByUrl(t,function(o){var i=o.title.levenshtein(e);if(!(i>Math.max(e.length,o.title.length)/2)){var l="",s=null,c=a.extractContent(o);if(c.isSuccess&&(s=c.content.asNode()),s){var l=a.cleanNode(s);l!==n&&r&&r(t,l,o)}}})},getDocByUrl:function(t,e){if(t&&"http"===t.substr(0,4)){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="document",n.onload=function(t){200===t.target.status&&e&&e(n.response)},n.send(null)}},extractContent:function(t){var e=new ExtractContentJS.LayeredExtractor;return e.addHandler(e.factory.getHandler("Heuristics")),e.extract(t)},cleanNode:function(e){var n=t(e).clone();n.find("style,script,link,iframe,frame,frameset,noscript,head,html,applet,base,basefont,bgsound,blink,ilayer,layer,meta,object,embed,input,textarea,button,select,canvas,map").remove();var r=window.location.origin+window.location.pathname;return n.find("a, img").each(function(t,e){"a"===e.tagName.toLowerCase()?e.href&&(e.origin+e.pathname===r&&e.hash?(e.target="_self",e.href=e.hash):(e.target="_blank",e.href=e.href)):e.src=e.getAttribute("original")||e.src}),n.removeAttr("id").find("*[id], *[style]").removeAttr("id").removeAttr("style"),n[0].outerHTML},findNextPageContent:function(t,e,n){var r=this,a=r.findNextLink(t,e);return a&&r.getContent(a,t.title,n,function(t,e,n){if(e){var a=chrome.extension.connect({name:"appendcontent"});a.postMessage({content:e,title:n.title,url:t}),r.getContentTimer=setTimeout(function(){jiZhuReaderGetPageContent.findNextPageContent(n,t,e)},1e3)}}),!1},findNextLink:function(t,e){var n=(Date.now(),this),r=n.getMatchUrl(e);n.convertRelativePathToAbsolutePathOfLinks(t);for(var a,o,i,l=t.querySelectorAll('a[href ^= "'+r+'"]'),s=[],c=[],u=e.replace(/[^0-9]/gi,""),f=0,h=l.length;h>f;f++)/^\d+$/.test(l[f].innerHTML.trim())&&(o=l[f].origin+l[f].pathname+l[f].search,i=o.replace(/[^0-9]/gi,""),i.length===u.length?i>u&&s.push(o):i.length===u.length+1&&c.push(o));return s.sort(),c.sort(),a=s[0]||c[0]},getMatchUrl:function(t){t=t.split("/");var e=t.pop();return-1!==e.lastIndexOf(".")&&(e=e.substr(0,e.lastIndexOf("."))),e.length<=2?t.join("/")+"/"+e:t.join("/")+"/"+e.substr(0,e.length-2)},convertRelativePathToAbsolutePathOfLinks:function(t){for(var e,n=t.querySelectorAll("a"),r=n.length-1;r>=0;r--)e=n[r].getAttribute("href"),e&&"#"!==e&&(n[r].href=n[r].href)}}}(jQuery);