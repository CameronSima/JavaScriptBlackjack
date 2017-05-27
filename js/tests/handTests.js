describe('BlackJackHand Tests', function() {
    
//    it('Has a value', function() {
//        expect(hand.getValue() > 0).toBe(true);
//    });
    
    it('can add cards', function() {
        var hand = new Hand();
        var card = new Card(7, 'Clubs');
        hand.addCard(card);
        
        expect(hand.cards.length).toBe(1);
    })
    
    it('has a sum', function() {
        var hand = new Hand();
        var card1 = new Card(7, 'Clubs');
        var card2 = new Card('J', 'Diamonds');
        hand.addCard(card1);
        hand.addCard(card2);
        
        expect(hand.sum()).toEqual(17);
    })
});