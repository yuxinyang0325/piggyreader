!function(e){"use strict";e(function(){var t=null;chrome.extension.onRequest.addListener(function(n,i,o){if(i&&i.id===chrome.i18n.getMessage("@@extension_id"))switch(n.name){case"settings":t=n.data,e.jps.publish("init-selectionphrase",{container:e(document.body),dictLookup:t.dictHostpage||"selection",from:"page"});break;case"lookupphrase-result":if("page"!==n.data.from)return;if(n.data.phrase!==document.getSelection().toString().trim())return;e.jps.publish("init-dict-layer",{dictData:n.data.dictData,position:n.data.position,hover:"hover"===t.dictHostpage})}}),chrome.extension.connect({name:"getsettings"}).postMessage(),e(document.body).keydown(function(e){(e.metaKey||e.ctrlKey)&&e.shiftKey&&88===e.keyCode&&chrome.extension.connect({name:"createreader"})})})}(jQuery);