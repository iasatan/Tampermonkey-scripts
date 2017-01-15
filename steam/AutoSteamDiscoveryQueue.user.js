// ==UserScript==
// @name            Auto Steam Discovery Queue
// @namespace       http://store.steampowered.com/app
// @description     Finds  games that you may like
// @include         http://store.steampowered.com/app/*
// @version         2.9
// @author          iasatan
// @match           http://store.steampowered.com/app/
// ==/UserScript==

var keyWords=['TurnBased', 'Rejtett trgy', 'Arcade', 'Twin Stick Shooter', 'Match 3', 'TopDown', 'Pixel Graphics', 'Relaxing', 'Side Scroller', 'Local Multiplayer', 'Puzzle', '2D', 'Family Friendly', 'Gore', 'RTS', 'Education', 'Cute', 'Nudity', 'Historical', 'Memes', 'VR', 'Hidden Object', 'MMORPG', 'Tower Defense', 'Music', 'Management', 'JRPG',
              'Illuminati', 'Dating Sim', 'Survival Horror', 'Psychological Horror', 'Bullet Hell', 'Trains', 'Grand Strategy', 'City Builder', 'MOBA', 'Perma Death', 'Base Building', 'Card Game', 'Board Game', 'Economy', 'Choose Your Own Adventure', 'TurnBased Combat', 'TurnBased Tactics', 'TurnBased Strategy', 'Detective', 'Top Down Shooter',
             'Resource Management', '2.5D', 'Lovecraftian', 'Noir', 'Soundtrack', '2D Fighter', 'Split screen', 'Comic book', 'Strategy RPG', 'LEGO', 'FMV', 'Star Wars', 'Real Time Tactics', 'Politics', 'Batman', 'Agriculture', 'Grid Based Movement', 'Clicker', 'Political', 'Inventory Management', 'Chess', 'Programming', 'Typing', 'Gambling', 'Capitalism',
             'Diplomacy', 'Point & Click', 'Sports', 'Visual Novel', 'Anime', 'Casual', 'Massively Multiplayer', 'Walking Simulator', 'Movie', '4 Player Local', 'Crime', 'Free to Play', 'Interactive Fiction', 'Racing', 'Spelling'];
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
        var temp=tags[i].innerText.replace(/[^a-z0-9 ,.?!]/ig, '');
        var length = keyWords.length;
        while(length--) {
            if (temp.indexOf(keyWords[length])!=-1) {
                return true;
            }
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
        {
            $J('#next_in_queue_form')[0].setAttribute("target", "_blank");
            $J('#next_in_queue_form').submit();
        }
    }
    else
        skipGame();
})();
