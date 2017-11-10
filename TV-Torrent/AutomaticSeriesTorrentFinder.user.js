// ==UserScript==
// @name         Automatic Series Torrent Finder
// @namespace    https://www.pogdesign.co.uk/cat/
// @include      https://www.pogdesign.co.uk/cat/
// @version      2.3.1
// @description  searches for todays episodes in piratebay
// @author       iasatan
// ==/UserScript==

function searchThem(){
    var today = document.getElementById("today").parentElement.children;
    for(i=1;i<today.length;i++){
        if(!today[i].className.includes("checked")){
            open("http://glodls.to/search_results.php?search="+today[i].children[0].children[2].children[0].innerText+"%20"+today[i].children[0].children[2].children[1].innerText+"&incldead=Search","_");
            //open("https://thepiratebay.org/search/"+today[i].children[0].children[2].children[0].innerText+"%20"+today[i].children[0].children[2].children[1].innerText+"/0/99/208",i+"a");
        }
    }
}
Date.prototype.getWeekNumber = function(){
    var d = new Date(+this);
    d.setHours(0,0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};

(function() {
    if(new Date().getDay()==3){
        var day = document.getElementById("today").parentElement.children[1];
        day.innerHTML+='<div class="ep info"><span><input type="checkbox"><label><span></span></label><p data-episode=""><a href="http://glodls.to/search_results.php?search=mp3+new&incldead=Search">MP3 New Releases Week '+(new Date().getWeekNumber()-1)+'</a></p></span></div>';
        var btn2 = document.createElement("input");
        btn2.type = "button";
        btn2.value = "Search Music";
        btn2.onclick=function(){open("http://glodls.to/search_results.php?search=mp3+new&incldead=Search");};
        today.appendChild(btn2);
    }
        var btn = document.createElement("input");
        btn.type = "button";
        btn.value = "Search";
        btn.onclick=searchThem;
        today.appendChild(btn);
})();
