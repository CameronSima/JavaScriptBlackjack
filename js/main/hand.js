class Hand {
    constructor() {
        this.cards = [];
    }
    
    toString() {
        var result = '';
        this.cards.forEach(function(card) {
            result += card.toString() + '; '
        })
        return result;
    }
    
    addCard(card) {
        this.cards.push(card);
    }
    
    isSplittable() {
        return this.cards.length == 2 && this.cards[0].value == this.cards[1].value;
    }
    
    getPoints() {
        var result = this.sum();
        this.numAces().forEach(function(ace) {
            if (result > 21) {
                result -= 10;
            }
        })
        return result;
    }
 
    numAces() {
        return this.cards.filter(function(card) {
            return card.value == 'A';
        })
    }
    
    isOver21() {
        return sum() > 21;
    }
    
    hasBlackJack() {
        return this.cards.length == 2 && this.sum() == 21;
    }
    
    sum() {
        var result = 0;
        this.cards.forEach(function(card) {
            result += parseInt(this.getCardValue(card));
        }, this)
        return result;
    }
    
    getCardValue(card) {
        if (card.value == 'J' || card.value == 'Q' || card.value == 'K') {
            return 10;
        } else if (card.value == 'A') {
            return 11;
        } else {
            return card.value;
        }     
    }
}