function buildPage(){

    var deal = document.getElementById("deal-button");
    var hit = document.getElementById('hit-button');
    var stand = document.getElementById('stand-button');
    var dealerhand = document.getElementById('dealer-hand');
    var playerhand = document.getElementById('player-hand');

    var playerCards = [];
    var dealerCards = [];

    var deck = [ {point: 10, suit: 'H',  face: ""}, {point: 2, suit: 'H',  face: ""}, {point: 3, suit: 'H',  face: ""},
    {point: 4, suit: 'H',  face: ""}, {point: 5, suit: 'H',  face: ""}, {point: 6, suit: 'H',  face: ""}, 
    {point: 7, suit: 'H',  face: ""}, {point: 8, suit: 'H',  face: ""}, {point: 9, suit: 'H',  face: ""},
    {point: 10, suit: 'H', face: "K"}, {point: 11, suit: 'H',  face: ""}, {point: 10, suit: 'H', face: "J"},
    {point: 10, suit: 'H',  face: "Q"}, {point: 10, suit: 'D', face: ""}, {point: 2, suit: 'D', face: ""}, 
    {point: 3, suit: 'D',  face: ""}, {point: 4, suit: 'D',  face: ""}, {point: 5, suit: 'D', face: ""}, 
    {point: 6, suit: 'D',  face: ""},  {point: 7, suit: 'D',  face: ""}, {point: 8, suit: 'D', face: ""}, 
    {point: 9, suit: 'D',  face: ""}, {point: 10, suit: 'D', face: "K"}, {point: 10, suit: 'D', face: "Q"}, 
    {point: 10, suit: 'D', face: "J"}, {point: 11, suit: 'D', face: ""},  {point: 10, suit: 'C', face: ""}, 
    {point: 2, suit: 'C', face: ""}, {point: 3, suit: 'C', face: ""}, {point: 4, suit: 'C', face: ""}, {point: 5, suit: 'C', face: ""}, 
    {point: 6, suit: 'C', face: ""},  {point: 7, suit: 'C', face: ""}, {point: 8, suit: 'C', face: ""}, 
    {point: 9, suit: 'C', face: ""}, {point: 10, suit: 'C', face: "K"}, {point: 11, suit: 'C', face: ""}, 
    {point: 10, suit: 'C', face: "Q"}, {point: 10, suit: 'C', face: "J"}, {point: 10, suit: 'S', face: ""}, 
    {point: 2, suit: 'S', face: ""}, {point: 3, suit: 'S', face: ""}, {point: 4, suit: 'S', face: ""}, {point: 5, suit: 'S',  face: ""}, 
    {point: 6, suit: 'S', face: ""},  {point: 7, suit: 'S', face: ""}, {point: 8, suit: 'S', face: ""}, 
    {point: 9, suit: 'S', face: ""}, {point: 10, suit: 'S', face: "K"}, {point: 10, suit: 'S', face: "Q"}, 
    {point: 11, suit: 'S', face: ""}, {point: 10, suit: 'S', face: "J"}];

    
    function randint(){
        return Math.floor(Math.random() + deck.length);
    }


    function clickdeal(){
        shuffleArray(deck);
        var card1 = deck.pop();
        var card1img = document.createElement('img');
        var card2 = deck.pop();
        var card2img = document.createElement('img');
        var card3 = deck.pop();
        var card3img = document.createElement('img');
        var card4 = deck.pop();
        var card4img = document.createElement('img');
        playerCards.push(card1);
        card1img.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
        card1img.setAttribute('src', ("JPEG/" + card1.point + card1.suit + card1.face + ".jpg"));
        playerCards.push(card2);
        card2img.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
        card2img.setAttribute('src', ("JPEG/" + card2.point + card2.suit + card2.face + ".jpg"));
        dealerCards.push(card3);
        card3img.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
        card3img.setAttribute('src', ("JPEG/" + card3.point + card3.suit + card3.face + ".jpg"));
        dealerCards.push(card4);
        card4img.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
        card4img.setAttribute('src', ("JPEG/" + card4.point + card4.suit + card4.face + ".jpg"));
        playerhand.appendChild(card1img);
        playerhand.appendChild(card2img);
        dealerhand.appendChild(card3img);
        dealerhand.appendChild(card4img);
        playerScore();
        dealerScore();
    }

    function shuffleArray(deck) {
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;
    }

    function calcPlayerPoints(){
        sum = 0
        for (var i = 0; i < playerCards.length; i++){
            sum += playerCards[i].point;
        }
        return sum;
    }


    var playerPoints = document.getElementById("player-points");
    function playerScore(){
        playerPoints.innerHTML = calcPlayerPoints();
        if (calcPlayerPoints() > 21){
            alert("player busted");
            var playAgain = prompt("Play again?(Y or N)");
            if (playAgain == "Y"){
                calcPlayerPoints() = 0;
                calcDealerPoints() = 0;
                playerScore() = 0;
                dealerScore() = 0;
                playerCards = [];
                playerhand = [];
            } else {
                alert("Bye!");
            }
        }
    }

    function calcDealerPoints(){
        sum = 0
        for (var i = 0; i < dealerCards.length; i++){
            sum += dealerCards[i].point;
        }
        return sum;
    }


    var dealerPoints = document.getElementById("dealer-points");
    function dealerScore(){
        dealerPoints.innerHTML = calcDealerPoints();
        if (calcDealerPoints() > 21){
            alert("dealer busted");
            var playAgain = prompt("Play again?(Y or N)");
            if (playAgain == "Y"){
                calcPlayerPoints() = 0;
                calcDealerPoints() = 0;
                playerCards = [];
                playerhand = [];
            } else {
                alert("Bye!");
            }
        }
    }

    function clickstand(){
        while (calcDealerPoints() < 17){
            var card1 = deck.pop();
            var card1img = document.createElement('img');
            dealerCards.push(card1);
            card1img.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
            card1img.setAttribute('src', ("JPEG/" + card1.point + card1.suit + card1.face + ".jpg"));
            dealerhand.appendChild(card1img);
            playerScore();
            dealerScore();
        }
        
    }

    function clickhit(){
        shuffleArray(deck);
        var card5 = deck.pop();
        var card5img = document.createElement('img');
        playerCards.push(card5);
        card5img.setAttribute('style', 'height: 90%; border: 2px solid black; border-radius: 5%; margin-top: 5px; margin-left: 3px;');
        card5img.setAttribute('src', ("JPEG/" + card5.point + card5.suit + card5.face + ".jpg"));
        playerhand.appendChild(card5img);
        playerScore();
        dealerScore();
    }
    function work(){
        deal.addEventListener('click', function() {
            clickdeal();
        })
        hit.addEventListener('click', function() {
            clickhit();
        })
        stand.addEventListener('click', function() {
            clickstand();
        })
    }
    work();
}