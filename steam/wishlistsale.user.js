// ==UserScript==
// @name            Steam wishlist sale
// @namespace       http://steamcommunity.com/id/*/
// @include         http://steamcommunity.com/id/*/wishlist
// @include         http://steamcommunity.com/id/*/wishlist/?sort=name
// @include         http://steamcommunity.com/id/*/wishlist/?sort=added
// @include         http://steamcommunity.com/id/*/wishlist/?sort=rank
// @include         http://steamcommunity.com/id/*/wishlist/?sort=price
// @version         1.3
// @author          iasatan
// @run-at          document-end
// ==/UserScript==

(function() {
    var discount=$J('.discount_pct');
    var dprice=$J('.discount_original_price');
    var textToFind;
    var percent=80;
    var count=0;
    for(i=0, j=0;i<discount.length;i++, j=j+2)
    {
        if(discount[i].innerText.replace(/[^0-9]/ig, '')>=percent)
        {
            count++;
        }
    }
    if(count===0)
    {
        window.alert("No sale above "+percent+"%");
    }
    else
    {
        alert(count+" games are having a sale above"+percent+" %");
        for(i=0;i<discount.length;i++)
        {
            if(discount[i].innerText.replace(/[^0-9]/ig, '')>=percent)
            {
                if(confirm(discount[i].innerText))
                {
                    textToFind=discount[i].innerText+"	"+dprice[i].innerText;
                    find(textToFind);
                    document.getElementById(discount[i]).scrollIntoView();
                    i=discount.lenght;
                }
            }
        }
    }
})();
