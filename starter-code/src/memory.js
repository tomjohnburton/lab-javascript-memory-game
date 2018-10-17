class MemoryGame {
  constructor(imgs) {
    this.cards = [];
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    for (var i = 0; i < imgs.length; i++) {
      this.cards.push( {
        img: imgs[i],
        isVisible: false
      })
      this.cards.push( {
        img: imgs[i],
        isVisible: false
      })
    }
    // TODO: continue
  }
  shuffleCards() {
    // var shuffleSet = []
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    // this.cards = shuffleSet ;
}

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked +=1;
    $('#pairs_clicked').text(this.pairsClicked);
    if ( firstCard == secondCard){
      this.pairsGuessed += 1;
      $('#pairs_guessed').text(this.pairsGuessed);
      return true;
    }
    else {
      
      return false;
    }
    
  }
  
  isFinished() {
    if (this.pairsGuessed === imgs.length){
      $('#memory_board').html('<h1>GAME OVER</h1><br><h2>Pairs Guessed '+this.pairsGuessed+ '</h2><h2>Pairs Clicked '+this.pairsClicked+ '</h2>')

    }
    return false
    
    
  }
  
  
  render() {


    var html = '';

    for (var i = 0; i < this.cards.length; i++) {
      var card = this.cards[i]

      html += '<div class="card" data-index="' + i + '">';
      if (card.isVisible)
        html += '  <img src="img/' + card.img + '">';
      html += '</div>';
    }

    $('#memory_board').html(html);

    $('.card').click(e =>{

      let index = e.target.dataset.index;
      var card1 = this.cards[index]
      card1.isVisible = true;
            if (this.pickedCards.length !== 2){
              this.pickedCards.push(card1)
            }
  


            if (this.pickedCards.length == 2){

            if( this.checkIfPair(this.pickedCards[0].img,this.pickedCards[1].img)==true){
              
              this.pickedCards = [];

            } else {
              var that = this ;
              setTimeout(function(){
            that.pickedCards[0].isVisible = false;
            that.pickedCards[1].isVisible = false;
            that.pickedCards = [];
            that.render();
;
          },1000)
        }
      }
            this.render();  
            this.isFinished();

      console.log("C1",this.pickedCards[0]) 
      console.log("C2",this.pickedCards[1]) 
      
    });
  }
}
