// ==UserScript==
// @name         pornhub helper
// @namespace    pornhub.com
// @version      0.4
// @description  No more nigger or degenerate porn
// @author       iasatan
// @match        http://www.pornhub.com/*
// ==/UserScript==

(function() {
    var keyWords=['whore', 'african', 'slut', 'ebony', 'piss', 'interracial', 'interacial', 'bbc', 'cuck', 'black', 'milkingtable', 'compilation', 'cumpilation', 'mandingo', 'bbw', 'faketaxi', 'old', '3d', 'chubby', 'pee', 'fat', 'pregnant', 'humiliation', 'dad', 'burningangel', 'pegging', 'bbd', 'toilet'];
    var thumb = document.getElementsByClassName('thumbnail-info-wrapper');
    var title =[];
    for(i=6;i<thumb.length;i++){
        title[i]=thumb[i].children[0].innerText.toLowerCase();
    }
    for(i=6;i<thumb.length;i++){
        var length = keyWords.length;
        while(length--) {
            if (title[i].indexOf(keyWords[length])!=-1) {
                thumb[i].parentElement.parentElement.parentElement.style.display = 'none';
                break;
            }
        }
    }
})();
