let index = 1;
showSlides(index);

function slidesOk(n) {
  showSlides(index += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");

  if (n > slides.length) {
	 index = 1;
  }
  if (n < 1) {
	 index = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
	 slides[i].style.transform = `translateX(${100 * (i - index + 1)}%)`;
  }
}