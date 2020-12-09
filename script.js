var slideIndex = 0;

nextSlide();





function nextSlide() {

  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  [].forEach.call(slides, function (el) {el.style.display = "none"});
  /* var dots = document.getElementsByClassName("dot"); */
 /*  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } */
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
 /*  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } */
  slides[slideIndex - 1].style.display = "block";
 /*  dots[slideIndex - 1].className += " active"; */
  setTimeout(nextSlide, 5800);
  
}


