console.log('Hello from js/scripts.js!');
//change color of modal
const btnPrimary = document.querySelector('btn-primary');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}
btnPrimary.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.getElementId(container).style.backgroundColor = rndCol;
}

//beer quotes
const beerQuote = document.querySelector('.beerquote');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ":insertx:";

let insertX = ['\"What care I how time advances? I am drinking ale today.\"', '\"He was a wise man who invented beer.\"' , '\"Beer, it’s the best damn drink in the world.\"', '\"A man who lies about beer makes enemies.\"'

(".beerquote").addEventListener('click', function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray (insertX);
  newStory = newStory.replace(':insertx:',xItem);
}
  story.textContent = newStory;
  story.style.visibility = 'visible';
