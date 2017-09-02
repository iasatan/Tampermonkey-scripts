// ==UserScript==
// @name         jsBlocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blocks javaScript
// @author       iasatan
// @match        https://yts.ag/
// @include      http://glodls.to
// ==/UserScript==

var scripts = document.getElementsByTagName("script");
for(i=0; scripts.length;i++){
    scripts[i].parentElement.removeChild(scripts[i]);
    i--;
}
