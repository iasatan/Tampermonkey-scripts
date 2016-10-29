// ==UserScript==
// @name            Steam wishlist sale
// @namespace       http://steamcommunity.com/id/*/
// @include         http://steamcommunity.com/id/*/wishlist
// @include         http://steamcommunity.com/id/*/wishlist/?sort=name
// @include         http://steamcommunity.com/id/*/wishlist/?sort=added
// @include         http://steamcommunity.com/id/*/wishlist/?sort=rank
// @include         http://steamcommunity.com/id/*/wishlist/?sort=price
// @version         1.6.1
// @author          iasatan
// @run-at          document-end
// ==/UserScript==

(function() {
    var discount=$J('.discount_pct');
    var dprice=$J('.discount_original_price');
    var percent=75;
    var count=0;
    var answer;

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
        alert(count+" games are having a sale above "+percent+" %");
        count=1;
        for(i=0;i<discount.length-1;i++)
        {
            if(discount[i].innerText.replace(/[^0-9]/ig, '')>=percent)
            {
                if(confirm(count+". "+discount[i].parentElement.parentElement.parentElement.innerText.replace(/Áruházi oldal megnézése|(Eltávolítás)|Hivatkozások|Hozzáadva|január|február|március|április|május|június|július|augusztus|szeptember|október|november|december|2015|(\r\n|\n|\r)/gm,"").replace(/[^a-z0-9 %€,.]/ig, '').replace('%', "% ").slice(0,-4)))
                    //Removes unnecesary infrmation, change them to your language
                {
                    //open(discount[i].parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[1].children[0].getAttribute('href'), '_blank');
                    open(discount[i].parentElement.parentElement.children[1].children[0].getAttribute('href'), '_blank');
                    if(confirm("Exit?"))
                        i=discount.lenght;
                }
                count++;
            }
        }
    }
})();
