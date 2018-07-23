function buildPage(){

    var deal = document.getElementById("deal-button");
    var hit = document.getElementById('hit-button');
    var stand = document.getElementById('stand-button');
    var dealerhand = document.getElementById('dealer-hand');
    var playerhand = document.getElementById('player-hand');

    var playerCards = [];
    var dealerCards = [];

    var deck = [ {point: 1, suit: 'hearts'}, {point: 2, suit: 'hearts'}, {point: 3, suit: 'hearts'},
    {point: 4, suit: 'hearts'}, {point: 5, suit: 'hearts'}, {point: 6, suit: 'hearts'}, 
    {point: 7, suit: 'hearts'}, {point: 8, suit: 'hearts'}, {point: 9, suit: 'hearts'},
    {point: 10, suit: 'hearts'}, {point: 11, suit: 'hearts'}, {point: 12, suit: 'hearts'},
    {point: 13, suit: 'hearts'}, {point: 1, suit: 'diamonds'}, {point: 2, suit: 'diamonds'}, 
    {point: 3, suit: 'diamonds'}, {point: 4, suit: 'diamonds'}, {point: 5, suit: 'diamonds'}, 
    {point: 6, suit: 'diamonds'},  {point: 7, suit: 'diamonds'}, {point: 8, suit: 'diamonds'}, 
    {point: 9, suit: 'diamonds'}, {point: 10, suit: 'diamonds'}, {point: 11, suit: 'diamonds'}, 
    {point: 12, suit: 'diamonds'}, {point: 13, suit: 'diamonds'},  {point: 1, suit: 'clubs'}, 
    {point: 2, suit: 'clubs'}, {point: 3, suit: 'clubs'}, {point: 4, suit: 'clubs'}, {point: 5, suit: 'clubs'}, 
    {point: 6, suit: 'clubs'},  {point: 7, suit: 'clubs'}, {point: 8, suit: 'clubs'}, 
    {point: 9, suit: 'clubs'}, {point: 10, suit: 'clubs'}, {point: 11, suit: 'clubs'}, 
    {point: 12, suit: 'clubs'}, {point: 13, suit: 'clubs'}, {point: 1, suit: 'spades'}, 
    {point: 2, suit: 'spades'}, {point: 3, suit: 'spades'}, {point: 4, suit: 'spades'}, {point: 5, suit: 'spades'}, 
    {point: 6, suit: 'spades'},  {point: 7, suit: 'spades'}, {point: 8, suit: 'spades'}, 
    {point: 9, suit: 'spades'}, {point: 10, suit: 'spades'}, {point: 11, suit: 'spades'}, 
    {point: 12, suit: 'spades'}, {point: 13, suit: 'spades'}];

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
    
    function randint(){
        return Math.floor(Math.random() + deck.length);
    }

    function removeFromDeck(){
        var newDeck = deck.map(function(element){
            if (element === playerCards || element === dealerCards){
                
            }
        });
    }

    function clickdeal(){
        dealerhand.appendChild(deck[randint()]);
        dealerhand.appendChild(deck[randint()]);
        playerhand.appendChild(deck[randint()]);
        playerhand.appendChild(deck[randint()]);
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