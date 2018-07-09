// ==UserScript==
// @name         4chan Anti-cancer
// @namespace    https://4chan.org/
// @version      0.1
// @description  Fixes the shady cancer Hiroshimoot added to 4chan on 18/12/2017.
// @include      https://boards.4chan.org/*/
// @match        https://boards.4chan.org/*/
// @include      http://boards.4chan.org/*/
// @match        http://boards.4chan.org/*/
// @include      https://boards.4chan.org/*
// @match        https://boards.4chan.org/*
// @include      http://boards.4chan.org/*
// @match        http://boards.4chan.org/*
// ==/UserScript==
var match = '(function(){var f="to",n="U",u="pper",r="C",t="ase",o="substr"';
window.addEventListener('beforescriptexecute', function(e) {
    if(e.target.textContent.startsWith(match)){
        e.stopPropagation();
        e.preventDefault();
        console.log("Cancer averted.");
    }
}, true);
