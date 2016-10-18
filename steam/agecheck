// ==UserScript==
// @name         Steam Agecheck
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      http://store.steampowered.com/agecheck/app/*
// @include      http://store.steampowered.com/app/*
// @description  skips agecheck
// @author       iasatan
// ==/UserScript==

(function() {
    var path = window.location.pathname.split('/');
    if(path[3]=='agecheck')
    {
        HideAgeGate(path[2]);
    }
    if(path[1]=='agecheck')
    {
        $("span:contains('Enter')");
        jQuery('#ageYear').val (1996).trigger ('change');
        DoAgeGateSubmit();
    }
})();
