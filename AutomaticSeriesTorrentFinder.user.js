// ==UserScript==
// @name         Automatic Series Torrent Finder
// @namespace    http://www.pogdesign.co.uk/cat/
// @include      http://www.pogdesign.co.uk/cat/
// @version      1.0
// @description  searches for todays episodes in glodls
// @author       iasatan
// ==/UserScript==


(function() {
    var today = document.getElementById("today").parentElement.children;
    for(i=1;i<today.length;i++)
    {
        open("http://glodls.to/search_results.php?search="+today[i].children[0].children[2].children[0].innerText+"&incldead=Search",i);
    }
})();