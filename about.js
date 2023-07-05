
var images = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');

var currentSlide = 0;

var interval = setInterval(function() {
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }

  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  images[currentSlide].classList.add('active');
}, 30000);

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    currentSlide = i;

    for (var j = 0; j < images.length; j++) {
      images[j].classList.remove('active');
    }

    images[currentSlide].classList.add('active');
  });
}