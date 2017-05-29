class Game {
    constructor(player) {
        this.player = player;
        var deck = new Deck();
        this.dealer = new Dealer(deck);
    }
    
    start() {
        this.setUPButtonHandlers();
    }
    
    playRound() {
        this.clearInput();
        this.hideBetInput();
        this.showGameButtons();

        this.dealer.shuffle();
        this.dealer.dealInitialHand(this.player);
        this.dealer.dealInitialHand(this.dealer);
        this.displayCards(); 
    }

    
    setUPButtonHandlers() {
        enterButton.onclick = this.handleGetBet.bind(this);
        hitButton.onclick = this.handleHit.bind(this);
        stayButton.onclick = this.handleStay.bind(this);
        splitButton.onclick = this.handleSplit.bind(this);
        
    }
    getBet(message) {
        prompt.innerHTML = message || 'Enter your bet:';
        
    }
    
    handleGetBet(prompt) {
        var bet = input.value;
        if (bet > this.player.bank) {
            prompt.innerHTML = "You don't have quite that much, but we'll take what you've got.";
        }  
        if (isNaN(bet)) {
            this.getBet("That's not a valid bet. Try again.");
        } else {
            this.player.placeBet(bet);
            this.playRound();
        }
    }
    
    displayCards() {
        display.innerHTML = 'You have: ' + this.player.hand.toString() + '<br>';
        display.innerHTML += 'Dealer is showing: ' + this.dealer.cardsShowing();
        
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
        display.innerHTML += "You " + result + "! <br> Your balance is now " + player.bank 
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
