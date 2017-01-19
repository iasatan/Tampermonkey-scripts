// ==UserScript==
// @name         tube8 helper
// @namespace    tube8.com
// @version      0.3
// @description  No more nigger or degenerate porn
// @author       iasatan
// @match        http://www.tube8.com/cat/*
// @include      http://www.tube8.com/*
// ==/UserScript==

(function() {
    var keyWords=['ebony', 'piss', 'interracial', 'interacial', 'bbc', 'cuck', 'black', 'milkingtable', 'compilation', 'cumpilation', 'mandingo', 'bbw', 'faketaxi', 'old', '3d', 'chubby', 'pee', 'fat', 'pregnant', 'humiliation', 'dad', 'burningangel'];
    var porn = document.getElementsByClassName('video_box');
    var title =[];
    for(i=0;i<porn.length;i++)
    {
        title[i]=porn[i].children[1].innerText.toLowerCase();
    }
    for(i=0;i<title.length;i++){
        var length = keyWords.length;
        while(length--) {
            if (title[i].indexOf(keyWords[length])!=-1) {
                porn[i].style.display = 'none';
                break;
            }
        }
    }
    for(i=0;i<porn.length;i++){
        if(porn[i].children[0].children[0].children[0].className !== 'hdIcon')
            porn[i].style.display = 'none';
    }
})();
