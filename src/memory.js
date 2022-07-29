class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(this.cards === undefined) {
      return undefined;
    }
    
    for (let i = this.cards.length - 1; i > 0; i--) {  
      var j = Math.floor(Math.random() * (i + 1)); 
      var temp = this.cards[i]; 
      this.cards[i] = this.cards[j]; 
      this.cards[j] = temp; 
    } 
    return this.cards; 
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }


  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length/2) {
      console.log("finished");
      return true;
    }
    return false;
  }
}
