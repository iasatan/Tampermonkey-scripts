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
// @version         1.9
// @author          iasatan
// @run-at          document-end
// ==/UserScript==

function showGoodSaleGames()
{
    var discount=$J('.discount_pct');
    var games=$J('.wishlistRow');
    //var percent =80;
    var percent = document.getElementById('salePercentList').value;
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
function showSaleGames()
{
    var discount=$J('.discount_pct');
    var games=$J('.wishlistRow');
    for(i=0;i<games.length;i++)
    {
        games[i].hide();
    }
    for(i=0;i<discount.length;i++)
    {
        discount[i].parentElement.parentElement.parentElement.parentElement.show();
    }
}

function showGames()
{
    var games=$J('.wishlistRow');
    for(i=0;i<games.length;i++)
    {
        games[i].show();
    }
}
function createSelect(){
    var sel = document.createElement('select');
    sel.name = 'sale';
    sel.id = 'salePercentList';
    var percent = [
        "90",
        "80",
        "75",
        "66",
        "50",
        "40",
        "33",
        "25"
    ];
    var options_str = "";
    percent.forEach( function(percent) {
        if(percent==="80")
            options_str += '<option selected value="' + percent + '">' + percent + '</option>';
        else
            options_str += '<option value="' + percent + '">' + percent + '</option>';
    });
    sel.innerHTML = options_str;
    tabs_baseline.appendChild(sel);
}

(function() {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "hide games without good sale";
    button.onclick = showGoodSaleGames;
    tabs_baseline.appendChild(button);
    createSelect();
    var button3 = document.createElement("input");
    button3.type = "button";
    button3.value = "hide games without sale";
    button3.onclick = showSaleGames;
    tabs_baseline.appendChild(button3);
    var button2 = document.createElement("input");
    button2.type = "button";
    button2.value = "Show them All";
    button2.onclick=showGames;
    tabs_baseline.appendChild(button2);})();
