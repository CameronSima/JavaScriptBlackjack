class Player {
    constructor() {
        this.hand = new Hand();
        this.splits = [];
        this.bet = 0;
        this.bank = 5000;
    }
    
    placeBet(bet) {
        this.bet = bet <= this.bank ? bet : this.bank;
        this.bank -= this.bet;
    }
    
    hit(card) {
        this.hand.addCard(card);
    }
    
    split() {
        if (this.hand.isSplittable()) {
            this.splits = this.hand.cards.map(function(card) {
                var splitHand = new Hand();
                splitHand.addCard(card);
                return splitHand;
            })
            this.hand = new Hand();
        }
    }
    
    hitSplitHand(hand, card) {
        if (this.hasSplitHands()) {
            hand.addCard(card);
        }
    }
    
    hasSplitHands() {
        return this.splits.length == 2 && this.hand.cards.length == 0;
    }
}

class Dealer extends Player {
    constructor(deck) {
        super();
        this.bank = 10000000;
        this.deck = deck;
    }
    
    shuffle() {
        var cards = this.deck.cards;
        for (var i = cards.length-1; i>0; i--) {
            var j = Math.floor(Math.random() * (i+1));
            var temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }
    
    dealCard() {
        return this.deck.dealOne();
    }
    
    dealInitialHand(player) {
        [1, 2].forEach(function(index) {
            player.hand.addCard(this.dealCard());
        }, this);  
    }
    
    cardsShowing() {
        // Dealer's second card is dealt face-down and is not
        // visible to player.
        return this.hand.cards.filter(function(card, index) {
            return index != 1;
        })
    }
}