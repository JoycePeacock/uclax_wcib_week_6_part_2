console.log('Hello from js/scripts.js!');
//change color of modal
const btnPrimary = document.querySelector('.btn-primary');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btnPrimary.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.getElementById('container').style.backgroundColor = rndCol;
}

//beer quotes
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
} // Change image every 4 seconds/*
