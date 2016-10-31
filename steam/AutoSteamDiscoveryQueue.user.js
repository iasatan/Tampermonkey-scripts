// ==UserScript==
// @name            Auto Steam Discovery Queue
// @namespace       http://store.steampowered.com/app
// @description     Finds  games that you may like
// @include         http://store.steampowered.com/app/*
// @version         2.7.1
// @author          iasatan
// @match           http://store.steampowered.com/app/
// ==/UserScript==

function dislikedDevelopers()
 {
     var fejleszto=$J('.details_block');
     if(fejleszto[0].innerText.indexOf("Ubisoft")>-1)
     {
         return true;
     }
     return false;
}

function badTags(tags)
{
    for(i=0;i<tags.length-3;i++)
    {
       // alert(tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, ''));
        if(tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="TurnBased"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Rejtett trgy"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Arcade"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Twin Stick Shooter"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Match 3"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="TopDown"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Pixel Graphics"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Relaxing"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Side Scroller"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Local Multiplayer"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Puzzle"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="2D"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Family Friendly"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Gore"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="RTS"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Education"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Cute"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Nudity"||
           tags[i].innerText==="Survival Horror"||
           tags[i].innerText==="Psychological Horror"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Historical"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Memes"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="VR"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Hidden Object"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="MMORPG"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Tower Defense"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Music"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Management"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="JRPG"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Illuminati"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Dating Sim"||
           tags[i].innerText==="Bullet Hell"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Trains"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Grand Strategy"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="City Builder"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="MOBA"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Perma Death"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Base Building"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Card Game"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Board Game"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Economy"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Choose Your Own Adventure"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="TurnBased Combat"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="TurnBased Tactics"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="TurnBased Strategy"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Detective"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Top Down Shooter"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Resource Management"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="2.5D"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Lovecraftian"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Noir"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Soundtrack"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="2D Fighter"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Split screen"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Comic Book"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Strategy RPG"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="God Game"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Tactical RPG"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="LEGO"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="FMV"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Star Wars"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Real Time Tactics"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Politics"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Batman"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Agriculture"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Grid Based Movement"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Clicker"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Political"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Inventory Management"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Chess"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Programming"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Typing"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Gambling"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Capitalism"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Diplomacy"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!&]/ig, '')==="Point & Click"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Sports"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Visual Novel"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Anime"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Casual"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Massively Multiplayer"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Walking Simulator"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Movie"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="4 Player Local"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Crime"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Free to Play"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Interactive Fiction"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Racing"||
           tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Spelling")
        {
            //alert(tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, ''));
            return true;
        }
    }
    return false;
}

function hasCampaign()
{
    var single=$J('.game_area_details_specs');
    for(i=0;i<single.length;i++)
    {
        if(single[0].innerText.trim()==="Egyjátékos") //You need to change it to your language
        {
            return true;
        }
    }
    return false;
}

function indieAndSomethingBad(tags)
{
    for (i = 0; i < tags.length-3; i++)
    {
        for(j=0;j<tags.length-3;j++)
        {
            if((tags[j].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="RPG"||
                tags[j].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="RPG maker"||
                tags[j].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="RPGMaker"||
                tags[j].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Horror"||
                tags[j].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Hacking")&&
               tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Indie")
            {
                return true;
            }
        }
    }
    return false;
}

function notFPS(tags)
{
    for(i=0;i<tags.length-3;i++)
    {
        if(tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="FPS")
            return false;
    }
    return true;
}

function badReviews()
{
    var notReviewed=$J('.user_reviews_summary_row');
    var summary=$J('.game_review_summary');
    if((notReviewed[0].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==='SSZESTVENincs felhasznli rtkels')===false)//you need to change it to your language
    {
        if(summary[0].innerText==='Negatív'||summary[0].innerText==="Nagyon negatív")
        {
            return true;
        }
    }
    return false;
}

function lessThanThreeTags(tags)
{
    if (tags.length<6)
    {
        return true;
    }
    return false;
}

function oldGame()
{
    var kiad=$J('.date');
    var kiadEv;

    if(!isNaN(kiad[0].innerText.substring(0,4)))
    {
        kiadEv=parseInt(kiad[0].innerText.substring(0, 4));
    }
    else
    {
        kiadEv=2017;
    }
    if (kiadEv<2005)
    {
        return true;
    }
    return false;
}

function leftInEarlyAcces(tags)
{
    for(i=0;i<tags.length-3;i++)
    {
        if((tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '')==="Early Access")&&kiadEv<2016)
        {
            return true;
        }
    }
    return false;
}

function skipGame()
{
    $J('.queue_control_button.queue_btn_ignore .queue_btn_inactive').trigger("click");//Not interested button
    $J('#next_in_queue_form').submit();//next in queue button
}


(function() {
    var tags = $J('.app_tag');
    var shouldSkip = false;
    var singlePlayer=false;
    shouldSkip=dislikedDevelopers();
    singlePlayer=hasCampaign();
    if(singlePlayer)
    {
        if(!shouldSkip)
            shouldSkip=badReviews();
        if(!shouldSkip)
            shouldSkip=lessThanThreeTags(tags);
        if(!shouldSkip)
            shouldSkip=badTags(tags);
        if(!shouldSkip)
            shouldSkip=indieAndSomethingBad(tags);
        if(!shouldSkip)
            shouldSkip=oldGame();
        if(!shouldSkip)
            shouldSkip=leftInEarlyAcces(tags);
        if(shouldSkip)
            shouldSkip=notFPS(tags);
        if(shouldSkip)
            skipGame();
        else
            alert();
    }
    else
        skipGame();
})();
