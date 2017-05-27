describe('Deck tests', function() {
    
    var deck = new Deck();
    
    it('it has 52 cards', function() {
        
        expect(deck.cards.length).toEqual(52);
    }); 
    
    it('contains 52 unique cards', function() {
        
        expect(new Set(deck.cards).size == deck.cards.length).toBe(true);
    });
    
    it('each deck is identical and in the same order', function() {
   
        var deck2 = new Deck();
        
        deck2.cards.forEach(function(card, i) {
            expect(card).toEqual(deck.cards[i]);
        })
    });
    
    it('can be dealt from', function() {
        
        var card = deck.dealOne();
        
        expect(card).toBeDefined();
        expect(deck.cards.length).toBe(51);
    })
    
});