describe('BlackJackHand Tests', function() {
    
    it('Has a value', function() {
        var hand = new Hand();
        hand.addCard(new Card(2, 'Spades'));
        expect(hand.sum() > 0).toBe(true);
    });
    
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
        
        expect(hand.getPoints()).toEqual(17);
    })
    
    it('Hits blackjack!', function() {
        var hand = new Hand();
        var card1 = new Card('J', 'Clubs');
        var card2 = new Card('A', 'Diamonds');
        hand.addCard(card1);
        hand.addCard(card2);
        
        expect(hand.hasBlackJack()).toBe(true);
    })
    
    it('split is possible', function() {
        var hand = new Hand();
        var card1 = new Card('8', 'Clubs');
        var card2 = new Card('8', 'Hearts');
        hand.addCard(card1);
        hand.addCard(card2);
        
        expect(hand.isSplittable()).toBe(true);
    })
    
    it('Has aces, over 21, but aces equal 1', function() {
        var hand = new Hand();
        var card1 = new Card('A', 'Clubs');
        var card2 = new Card('J', 'Hearts');
        var card3 = new Card('10', 'Diamonds');
        hand.addCard(card1);
        hand.addCard(card2);
        hand.addCard(card3);
        
        expect(hand.getPoints()).toEqual(21);
    })
});