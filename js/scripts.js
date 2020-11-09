console.log('Hello from js/scripts.js!');


const btn-primary = document.querySelector('btn-primary');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn-primary.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.style.backgroundColor = rndCol;
}
