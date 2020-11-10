console.log('Hello from js/scripts.js!');
//change color of modal
const jazz = document.querySelector('#jazz');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}
('#jazz').onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.getElementId(container).style.backgroundColor = rndCol;
}
//Michaels code
const input = document.getElementById('username');
const button = document.getElementById('my-button');

button.addEventListener( 'click', say_hello );

function say_hello () {
    alert( 'Hello ' + input.value + '!' );
}
//beer quotes
const beerQuote = document.querySelector('.beerquote');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const beerQuote = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ":insertx:";

let insertX = ['\"What care I how time advances? I am drinking ale today.\"', '\"He was a wise man who invented beer.\"' , '\"Beer, it’s the best damn drink in the world.\"', '\"A man who lies about beer makes enemies.\"'

beerQuote.addEventListener('click', function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray (insertX);
  newStory = newStory.replace(':insertx:',xItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
