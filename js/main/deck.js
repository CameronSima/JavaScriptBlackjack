class Deck { 
    constructor() {
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        this.ranks = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        this.cards;
        populateDeck.bind(this)();
    }
   
    dealOne() {
        return this.cards.pop();
    }
}

function populateDeck() {
        this.cards = this.ranks.map(function(rank) {
                    return this.values.map(function(value) {
                        return new Card(value, rank)
                    })
                }, this)
    
            .reduce(function(acc, curr) {
                return acc.concat(curr);
                }, []);
    };