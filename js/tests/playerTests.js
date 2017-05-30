describe('Player Tests', function() {
    
    var player;
    var deck;
    var card1;
    var card2;
    
    beforeEach(function() {
        player = new Player();     
        card1 = new Card(8, 'Clubs');
        card2 = new Card('8', 'Diamonds');
        player.hand.addCard(card1);
        player.hand.addCard(card2);
        deck = new Deck();
    });
    
    it('Can have a hand', function() {
        expect(player.hand.cards.length).toBe(2);
        expect(player.hand.cards[0]).toBe(card1);
    });
    
    it('Player can split on a pair', function(){
        
        player.split();
        
        expect(player.hasSplitHands()).toBe(true);
        
        // hand is empty, cards are now split into separate
        // hands
        expect(player.hand).toEqual(new Hand());
        
        // the card in player's first of two hands is card1
        expect(player.splits[0].cards[0]).toBe(card1);
    });
    
    it('Player can hit', function() {
        var card = deck.dealOne();
        player.hit(card);
        
        expect(player.hand.cards.length).toBe(3);
        expect(player.hand.cards[2]).toBe(card);
    })
    
    it('Hits blackjack!', function() {
        var hand = new Hand();
        var card1 = new Card('J', 'Clubs');
        var card2 = new Card('A', 'Diamonds');
        hand.addCard(card1);
        hand.addCard(card2);
        
        player.hand = hand;
        
        expect(player.hasBlackJack()).toBe(true);
    });
    
    it('Hit split hand', function() {
        
        player.split();
        var card = deck.dealOne();
        var card2 = deck.dealOne();
        
        // two ways to hit on a split hand
        player.hitSplitHand(player.splits[0], card);
        player.splits[1].addCard(card);
        
        expect(player.splits[0].cards.length).toBe(2);
        expect(player.splits[1].cards.length).toBe(2);
        
        // How I expect to handle taking a turn with split hands.
        player.splits.forEach(function(hand) {
            player.hitSplitHand(hand, deck.dealOne());
        })
        
        expect(player.splits[0].cards.length).toBe(3);
        expect(player.splits[1].cards.length).toBe(3);
        
    });
    
    it('Player places a bet lower than current bank', function() {
        player.placeBet(100);
        
        expect(player.bet).toBe(100);
        expect(player.bank).toBe(4900);
    });
    
    it('Player tries to bet higher than bank; goes ALL IN', function() {
        player.placeBet(10000);
        
        expect(player.bet).toBe(5000);
        expect(player.bank).toBe(0);
    });
})