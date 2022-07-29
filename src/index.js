const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const pairsClicked = document.getElementById('pairs-clicked');
const pairsGuessed = document.getElementById('pairs-guessed');
const memoryGame = new MemoryGame(cards);
let myCanva = document.getElementById("myCanvas");
let ctx = myCanva.getContext("2d");
let img = new Image();
img.src = "../img/win.png"
ctx.drawImage(img,10,10);


window.addEventListener('load', (event) => {
  memoryGame.shuffleCards();
  myCanva.style.display = "none";
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('turned');
      setTimeout(function() {  
        if(memoryGame.pickedCards.length < 3) {
          memoryGame.pickedCards.push(card);
        }
        if(memoryGame.pickedCards.length === 2) {
          let cardOneName = memoryGame.pickedCards[0].getAttribute("data-card-name");
          let cardTwoName = memoryGame.pickedCards[1].getAttribute("data-card-name");

          if(memoryGame.checkIfPair(cardOneName, cardTwoName) ) {
            memoryGame.pickedCards[0].classList.toggle("blocked");
            memoryGame.pickedCards[1].classList.toggle("blocked");
            if(memoryGame.checkIfFinished()) {
              myCanva.style.display = "block";
              ctx.drawImage(img,10,10,600,600);
            }
            pairsGuessed.innerText = memoryGame.pairsGuessed;
          } else {
            memoryGame.pickedCards[0].classList.toggle("turned");
            memoryGame.pickedCards[1].classList.toggle("turned");
          }
          pairsClicked.innerText = memoryGame.pairsClicked;
          memoryGame.pickedCards = [];
        }
    }, 1800);

    });
  });
});
