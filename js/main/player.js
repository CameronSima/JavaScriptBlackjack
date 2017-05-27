class Player {
    constructor() {
        this.hand = new Hand();
        this.splits = [];
        this.bet = 0;
        this.bank = 5000;
    }
    
    placeBet(bet) {
        this.bet = bet <= this.bank ? bet : this.bank;
    }
    
    hit(card) {
        this.hand.push(card);
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
    
    hasSplitHands() {
        return this.splits.length == 2;
    }
}