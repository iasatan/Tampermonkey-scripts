// ==UserScript==
// @name            Steam wishlist sale 2
// @namespace       http://steamcommunity.com/id/*/
// @include         http://steamcommunity.com/id/*/wishlist
// @include         http://steamcommunity.com/id/*/wishlist/?sort=name
// @include         http://steamcommunity.com/id/*/wishlist/?sort=added
// @include         http://steamcommunity.com/id/*/wishlist/?sort=rank
// @include         http://steamcommunity.com/id/*/wishlist/?sort=price
// @version         1.0
// @author          iasatan
// @run-at          document-end
// ==/UserScript==

(function() {
    var discount=$J('.discount_pct');
    var games=$J('.wishlistRow ');
    var goodDiscount = [];
    for(i=0;i<games.length;i++)
    {
        games[i].hide();
    }
    for(i=0;i<discount.length;i++)
    {
        discount[i].parentElement.parentElement.parentElement.parentElement.show();
    }
})();
