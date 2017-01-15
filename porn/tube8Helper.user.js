// ==UserScript==
// @name         tube8 helper
// @namespace    tube8.com
// @version      0.1
// @description  No more nigger or degenerate porn
// @author       iasatan
// @match        http://www.tube8.com/cat/*
// @include      http://www.tube8.com/*
// ==/UserScript==

(function() {
    var porn = document.getElementsByClassName('video_box');
    var title =[];
    for(i=0;i<porn.length;i++)
    {
        title[i]=porn[i].children[1].innerText.toLowerCase();
    }
    for(i=0;i<title.length;i++){
        if(title[i].includes('piss')||title[i].includes('ebony')||title[i].includes('interacial')||title[i].includes('black')||title[i].includes('bbc')||title[i].includes('interracial')||title[i].includes('cuck'))
            porn[i].style.display = 'none';
    }
    for(i=0;i<porn.length;i++){
        if(porn[i].children[0].children[0].children[0].className !== 'hdIcon')
            porn[i].style.display = 'none';
    }
})();
