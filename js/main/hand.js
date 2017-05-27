class Hand {
    constructor() {
        this.cards = [];
    }
    
    addCard(card) {
        this.cards.push(card);
    }
    
    isOver21() {
        return sum() > 21;
    }
    
    sum() {
        var result = 0;
        this.cards.forEach(function(card) {
            result += this.getCardValue(card);
        }, this)
        return result;
    }
    
    getCardValue(card) {
console.log(card)
        var result = (card.value == 'J' || card.value == 'Q' || card.value == 'K' || card.value == 'A') ? 10 : card.value;
        
        return result
    }
}