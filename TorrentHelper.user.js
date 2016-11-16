// ==UserScript==
// @name         Torrent Helper
// @namespace    https://thepiratebay.org/search/
// @include      https://thepiratebay.org/search/*
// @version      1.0
// @description  opens glodls if piratebay doesn't have the neceserry files
// @author       iasatan
// ==/UserScript==

function openGloDLS()
{
    var torrents = $('.detName');
    for(i=0;i<torrents.length;i++)
        if(torrents[i].innerText.includes("720p"))
            return false;
    return true;
}

(function() {
    var url = window.location.href.split("/")[4];
    if(openGloDLS())
    {
        open("http://glodls.to/search_results.php?search="+url+"&incldead=Search","_");
        close();
    }
})();
