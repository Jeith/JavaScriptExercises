function buildPage(){

    var deal = document.getElementById("deal-button");
    var hit = document.getElementById('hit-button');
    var stand = document.getElementById('stand-button');
    var dealerhand = document.getElementById('dealer-hand');
    var playerhand = document.getElementById('player-hand');

    var card1 = document.createElement("img");
    var card2 = document.createElement('img');
    var card3 = document.createElement("img");
    var card4 = document.createElement("img");
    var card5 = document.createElement('img');

    card1.setAttribute('src', "JPEG/2C.jpg");
    card1.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
    card2.setAttribute('src', "JPEG/2D.jpg");
    card2.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
    card3.setAttribute('src', "JPEG/2H.jpg");
    card3.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
    card4.setAttribute('src', "JPEG/2S.jpg");
    card4.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
    card5.setAttribute('src', 'JPEG/3C.jpg');
    card5.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
    function clickdeal(){
        dealerhand.appendChild(card1);
        dealerhand.appendChild(card2);
        playerhand.appendChild(card3);
        playerhand.appendChild(card4);
    }
    function clickhit(){
        playerhand.appendChild(card5);
    }
    function work(){
        deal.addEventListener('click', function() {
            clickdeal();
        })
        hit.addEventListener('click', function() {
            clickhit();
        })
    }
    work();
}