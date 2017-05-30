class Game {
    constructor(player) {
        this.player = player;
        var deck = new Deck();
        this.dealer = new Dealer(deck);
    }
    
    start() {
        if (this.player.bank == 0) {
            alert("You're broke! Goodbye!");
            window.location.reload(false);
        } else {
        this.setUPButtonHandlers();
        this.getBet();
        }
    }
    
    setUPButtonHandlers() {
        enterButton.onclick = this.handleGetBet.bind(this);
        hitButton.onclick = this.handleHit.bind(this);
        stayButton.onclick = this.handleStay.bind(this);
        splitButton.onclick = this.handleSplit.bind(this);   
    }
    
    getBet(message) {
        input.style.display  = 'inline-block';
        prompt.innerHTML = message || 'Enter your bet:';  
    }
    
    playRound() {
        this.setUpGameDisplay();
        this.initialDeal();
        this.displayCards(); 
        this.checkBlackJack();
    }
    
    initialDeal() {
        this.dealer.shuffle();
        [this.player, this.dealer].forEach(function(player) {
            this.dealer.dealInitialHand(player);
        }.bind(this))
    }
    
    checkBlackJack() {
        if (this.player.hasBlackJack()) {
            this.player.winOnBlackJack();
            this.showResults('win');
        }
    }
    
    setUpGameDisplay() {
        this.clearInput();
        this.hideBetInput();
        this.showGameButtons();
    }

    handleGetBet(prompt) {
        var bet = input.value;
        if (bet > this.player.bank) {
            alert("You don't have $" + bet + ", but we'll take the $" + this.player.bank + " you've got.");
        }  
        if (isNaN(bet)) {
            this.getBet("That's not a valid bet. Try again.");
        } else {
            this.player.placeBet(bet);
            this.playRound();
        }
    }
    
    displayCards() {
        display.innerHTML = 'You Have: '
        
        if (this.player.hasSplitHands()) {
            this.displaySplitHands();
        } else {
            display.innerHTML += this.player.hand.toString() + '<br>';
        }
        display.innerHTML += 'Dealer is showing: ' + this.dealer.cardsShowing() + '<br>';
    }
    
    displaySplitHands() {
        this.player.splits.forEach(function(hand, index) {
            display.innerHTML += '<br> Hand ' + (index+1) + ': ' + hand.toString();
            }.bind(this))
    }
    
    handleHit() {
        this.player.hit(this.dealer.dealCard());
        this.displayCards();
        if (this.player.busts()) {
            this.showResults('lose');
        }
    }
    
    handleStay() {
        this.dealer.takeTurn();
        if (this.dealer.busts()) {
            this.player.win();
            this.showResults('win');
        } else {
            this.endRound();
        }
    }
    
    handleSplit() {
        this.player.split();  
    }
    
    endRound() {
        if (this.player.hand.getPoints() > this.dealer.hand.getPoints()) {
            player.win();
            this.showResults("win");
        } else {
            this.showResults("lose");
        }
    }
    
    showResults(result) {
        this.hideGameButtons();
        display.innerHTML = 'You have: ' + this.player.hand.toString() + '<br>';
        display.innerHTML += 'Dealer has: ' + this.dealer.hand.toString() + '<br>';
        display.innerHTML += "You " + result + "! <br> Your balance is now " + '$' + player.bank  + "<br>";
        this.promptPlayAgain();
    }
    
    promptPlayAgain() {
        prompt.style.display = "inline-block";
        enterButton.style.display = "inline-block";
        prompt.innerHTML = "Play again?"
        enterButton.onclick = function() {
            this.player.hand = new Hand();
            var game = new Game(this.player);
            game.start();
        }.bind(this)
    }
    
    showGameButtons() {
        [hitButton, stayButton, splitButton].forEach(function(button) {
            if (button.id != 'splitButton' || player.hand.isSplittable()) {
                button.style.display = 'inline-block';
            }
        })
    }
    
    hideGameButtons() {
        [hitButton, stayButton, splitButton].forEach(function(button) {
            button.style.display = "none";
        })
    }
    
    hideBetInput() {
        input.style.display = 'none';
        prompt.style.display = 'none';
        enterButton.style.display = 'none';
}
       
    displayHand() {
        display.innerHTML = this.player.hand.toString();
    }
    
    clearAll() {
        this.clearPrompt();
        this.clearDisplay();
        this.clearInput();
    }
    
    clearInput() {
        input.value = "";
    }
    
    clearPrompt() {
        prompt.innerHTML = "";
    }
    
    clearDisplay() {
        display.innerHTML = "";
    }
}

var player = new Player();
var game = new Game(player);
game.start();
