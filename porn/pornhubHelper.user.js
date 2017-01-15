// ==UserScript==
// @name         pornhub helper
// @namespace    pornhub.com
// @version      0.1
// @description  No more nigger or degenerate porn
// @author       iasatan
// @match        http://www.pornhub.com/*
// ==/UserScript==

(function() {
    var thumb = document.getElementsByClassName('thumbnail-info-wrapper');
    var title =[];
    for(i=6;i<thumb.length;i++){
        title[i]=thumb[i].children[0].innerText.toLowerCase();
    }
    for(i=6;i<thumb.length;i++){
        if(title[i].includes('piss')||title[i].includes('ebony')||title[i].includes('interacial')||title[i].includes('black')||title[i].includes('bbc')||title[i].includes('interracial')||title[i].includes('cuck')||title[i].includes('mandingo'))
            thumb[i].parentElement.parentElement.parentElement.style.display = 'none';
    }
})();
