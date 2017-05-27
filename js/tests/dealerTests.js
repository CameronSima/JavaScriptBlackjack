describe('Dealer tests', function() {
    
    var dealer;
    var player;
    var deck;
    
    beforeEach(function() {
        
        deck = new Deck();
        dealer = new Dealer(deck);
        player = new Player();
        
    })
    
    it('Dealer deals cards', function() {

        dealer.dealInitialHand(player);
        
        expect(player.hand.cards.length).toBe(2);
        expect(player.hand.toString()).toBe('A of Clubs; K of Clubs; ');     
    });
    
    it('Dealer deals his own hand', function() {
        
        dealer.dealInitialHand(dealer);
        
        expect(dealer.hand.cards.length).toBe(2);
        expect(dealer.hand.toString()).toBe('A of Clubs; K of Clubs; ');    
    });
    
    it('Dealer shuffles deck', function() {
        
        var lastOrder = deck;
        
        // shuffled 100 times, the deck is never the same twice.
        for (var i=0; i<100; i++) {
            dealer.shuffle();
            expect(deck.cards).not.toEqual(lastOrder);
            lastOrder = deck;
        }
    })
    
})