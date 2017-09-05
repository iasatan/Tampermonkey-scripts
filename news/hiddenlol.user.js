// ==UserScript==
// @name         Hiddenlol
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes downvoted posts
// @author       iasatan
// @match        http://hiddenlol.com/fresh/*
// ==/UserScript==

var posts=document.getElementById("feed").children;
for(i=0; i<posts.lenght;i++){
    if(posts[i].children[0].children[2].children[0].innerText.replace(" points","")<0){
        posts[i].style.display = 'none';
    }
}
