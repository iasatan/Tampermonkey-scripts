// ==UserScript==
// @name         diabloTorrent
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  simplifies the use of diablotorrent
// @author       iasatan
// @match        https://diablotorrent.net/*
// ==/UserScript==


var url = window.location.href;
if(url=="https://diablotorrent.net/login"){
    $("#login_nev").val("");
    $("#login_jelszo").val("");
    $("#login_form").submit();
}
else if(url=="https://diablotorrent.net/index")
    open("https://diablotorrent.net/browse", "_self");
