// ==UserScript==
// @name            Steam wishlist sale
// @namespace       http://steamcommunity.com/id/*/
// @include         http://steamcommunity.com/id/*/wishlist
// @include         http://steamcommunity.com/id/*/wishlist/?sort=name
// @include         http://steamcommunity.com/id/*/wishlist/?sort=added
// @include         http://steamcommunity.com/id/*/wishlist/?sort=rank
// @include         http://steamcommunity.com/id/*/wishlist/?sort=price
// @include         http://steamcommunity.com/profiles/*/wishlist/*
// @include         http://steamcommunity.com/profiles/*/wishlist
// @version         1.8
// @author          iasatan
// @run-at          document-end
// ==/UserScript==

function hideGames()
{
    var discount=$J('.discount_pct');
    var games=$J('.wishlistRow');
    var percent =75;
    for(i=0;i<games.length;i++)
    {
        games[i].hide();
    }
    for(i=0;i<discount.length;i++)
    {
        if(discount[i].innerText.replace(/[^0-9]/ig, '')>=percent)
        {
            discount[i].parentElement.parentElement.parentElement.parentElement.show();
        }
    }
}

(function() {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "hide games without sale";
    button.onclick = hideGames;
    logo_holder.appendChild(button);
})();
