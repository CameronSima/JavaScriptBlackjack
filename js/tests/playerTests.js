describe('BlackjackPlayer and BlackjackDealer Tests', function() {
    
    var player;
    var hand;
    var card1;
    var card2;
    
    beforeEach(function() {
        player = new Player();
        
        console.log(player.hand)
        card1 = new Card(8, 'Clubs');
        card2 = new Card('8', 'Diamonds');
        player.hand.addCard(card1);
        player.hand.addCard(card2);
 
        console.log(player.hand)
    });
    
    it('Can have a hand', function() {
        expect(player.hand.cards.length).toBe(2);
        expect(player.hand.cards[0]).toBe(card1);
    });
    
    it('Player can split on a pair', function(){
        player.split();
        
        expect(player.s)
    })
})