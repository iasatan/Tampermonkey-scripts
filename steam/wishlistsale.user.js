// ==UserScript==
// @name            Steam wishlist sale
// @namespace       http://steamcommunity.com/id/*/
// @include         http://steamcommunity.com/id/*/wishlist
// @include         http://steamcommunity.com/id/*/wishlist/?sort=name
// @include         http://steamcommunity.com/id/*/wishlist/?sort=added
// @include         http://steamcommunity.com/id/*/wishlist/?sort=rank
// @include         http://steamcommunity.com/id/*/wishlist/?sort=price
// @version         1.7
// @author          iasatan
// @run-at          document-end
// ==/UserScript==

(function() {
    var discount=$J('.discount_pct');
    var dprice=$J('.discount_original_price');
    var percent=75;
    var count=0;
    var answer;
    var goodDiscount = [];
    for(i=0;i<discount.length;i++)
    {
        if(discount[i].innerText.replace(/[^0-9]/ig, '')>=percent)
        {
            goodDiscount.push(discount[i]);
            count++;
        }
    }
    if(count===0)
    {
        alert("No sale above "+percent+"%");
    }
    else
    {
        alert(count+" games are having a sale above "+percent+" %");
        count=1;
        for(i=0;i<goodDiscount.length;i++)
        {
            if(goodDiscount[i].innerText.replace(/[^0-9]/ig, '')>=percent)
            {
                if(confirm(count+". "+goodDiscount[i].parentElement.innerText.replace(/[^0-9 %€,.]/ig, '').replace('%', "% ")+" "+goodDiscount[i].parentElement.parentElement.parentElement.children[2].innerText))
                {
                    open(goodDiscount[i].parentElement.parentElement.children[1].children[0].getAttribute('href'), '_blank');
                    if(confirm("Exit?"))
                        i=goodDiscount.lenght;
                }
                count++;
            }
        }
    }
})();
