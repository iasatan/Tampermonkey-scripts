// ==UserScript==
// @name         Torrent Helper
// @namespace    https://thepiratebay.org/search/
// @include      https://thepiratebay.org/search/*
// @version      1.2
// @description  opens glodls if piratebay doesn't have the neceserry files
// @author       iasatan
// ==/UserScript==

function GloDLSSearch()
{
    var url = window.location.href.split("/")[4];
    open("http://glodls.to/search_results.php?search="+url+"&incldead=Search","_");
}

function openGloDLS()
{
    var torrents = $('.detName');
    for(i=0;i<torrents.length;i++)
        if(torrents[i].innerText.includes("720p"||"1080p"))
            return false;
    return true;
}

(function() {
    var SearchResults = document.getElementById("SearchResults");
    if(document.referrer.includes("pogdesign"))
    {
        if(openGloDLS())
        {
            GloDLSSearch();
            close();
        }
        var pirateSerch = document.getElementsByClassName("submitbutton");
        var btn = document.createElement("input");
        btn.type = "button";
        btn.value = "SearchGloDLS";
        btn.onclick=GloDLSSearch;
        SearchResults.appendChild(btn);
    }
})();
