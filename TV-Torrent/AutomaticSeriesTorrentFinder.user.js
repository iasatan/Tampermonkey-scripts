// ==UserScript==
// @name         Automatic Series Torrent Finder
// @namespace    http://www.pogdesign.co.uk/cat/
// @include      http://www.pogdesign.co.uk/cat/
// @version      1.5
// @description  searches for todays episodes in glodls
// @author       iasatan
// ==/UserScript==

function searchThem(){
    var today = document.getElementById("today").parentElement.children;
    for(i=1;i<today.length;i++){
            if(!today[i].className.includes("checked")){
                if(today[i].children[0].children[2].children[0].innerText==="Agents of SHIELD"){
                    open("https://thepiratebay.org/search/Agents%20of%20"+today[i].children[0].children[2].children[1].innerText,i+"a");
                }
                else{
                    open("https://thepiratebay.org/search/"+today[i].children[0].children[2].children[0].innerText+"%20"+today[i].children[0].children[2].children[1].innerText,i+"a");
                }
            }
        }
}
function checkButtonNecesity(){
    var today = document.getElementById("today").parentElement.children;
    if(today.length==1)
        close();
    for(i=1;i<today.length;i++){
        if(!today[i].className.includes("checked"))
           return true;
    }
    return false;
}


(function() {
    if(new Date().getDay()==3){
        var btn2 = document.createElement("input");
        btn2.type = "button";
        btn2.value = "Search Music";
        btn2.onclick=function(){open("http://glodls.to/search_results.php?search=mp3+new&incldead=Search");};
        today.appendChild(btn2);
    }
    if(checkButtonNecesity()){
        var btn = document.createElement("input");
        btn.type = "button";
        btn.value = "Search";
        btn.onclick=searchThem;
        today.appendChild(btn);
    }
})();
