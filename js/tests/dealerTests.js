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
        
        for (var i=0; i<50; i++) {
            dealer.shuffle();
            expect(deck.cards).not.toEqual(lastOrder);
            lastOrder = deck;
        }
    });
    
    it('Dealer cardsShowing method shows the right cards', function() {
        
        var card1 = new Card(5, 'Clubs');
        var card2 = new Card(10, 'Spades');
        dealer.hand.addCard(card1);
        dealer.hand.addCard(card2);
        
        expect(dealer.cardsShowing().toString()).toEqual(card1.toString());
        
        var card3 = new Card('A', 'Diamonds');
        dealer.hand.addCard(card3);
        
        expect(dealer.cardsShowing().length).toEqual(2);
        expect(dealer.cardsShowing()[1]).toEqual(card3);
    })
    
    it('Dealer has a lot of money', function() {
        
        expect(dealer.bank).toEqual(10000000);
    })
    
})