describe('Card and Deck tests', function() {
    
    var deck = new Deck();
    
    it('a deck has 52 cards', function() {
        
        expect(deck.cards.length).toEqual(52);
    }); 
    
    it('a deck contains 52 unique cards', function() {
        
        expect(new Set(deck.cards).size == deck.cards.length).toBe(true);
    });
    
    it('each deck is identical and in the same order', function() {
   
        var deck2 = new Deck();
        
        deck2.cards.forEach(function(card, i) {
            expect(card).toEqual(deck.cards[i]);
        })
    });
    
    it('deck can be dealt from and loses a card', function() {
        
        var card = deck.dealOne();
        
        expect(card).toBeDefined();
        
        // dealt cards are removed
        expect(deck.cards.length).toBe(51);
    });
    
    it('A card has a nice toString() method', function() {
        
        var card = new Card('J', 'Diamonds');
        
        expect(card.toString()).toEqual('J of Diamonds');
    })
    
});