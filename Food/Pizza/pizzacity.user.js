// ==UserScript==
// @name         pizzacity
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fills out my details in the local pizza site
// @author       iasatan
// @match        http://pizzacitymiskolc.hu/penztar
// @grant        none
// ==/UserScript==

(function() {
    $("#regName").val("Sátán Ádám");
    $("#regMail").val("satanadam@outlook.com");
    $("#regTel").val("06205084577");
    $("#regAdr1").val("44");
    $("#regAdr2").val("4/1");
})();
