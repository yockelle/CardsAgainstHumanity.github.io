
module.exports = class Player {
   
    constructor(username,socket_id) {
        
        // Log in information
        this.username = username; 
        this.socket_id = socket_id;
        
        // Hand
        this.hand = [];
        this.judge = false; 

        // Connection
        this.connection = true;
    }

    drawCards(deck, number) {
    	// draws number of cards from the Deck to player's hand:
    	for (let i = 0; i < number; i++){
    		this.hand.push(deck.drawCard(this.username));
    	}
    }

   	playCard(index, deck) {
   		// Returns a card played at given index - and replaces it with a new card from deck
   		if (index >=  this.hand.length) {
   			throw "IndexError: The index:" + index + " is out of bounds! " ;
   		}
      // *TODO*  don't draw card until after round ends
      // return this.hand.splice(index,1) 
   		return this.hand.splice(index,1, deck.drawCard())[0];
   	}

   	toString() {
   		return "Player: " + this.username + " Current_Hand: " + this.hand;
   	}
  }