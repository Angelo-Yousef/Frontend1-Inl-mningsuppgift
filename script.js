function Buy() {
    const inputs = ["select", "adressInput", "emailInput"].map(id => document.getElementById(id));

    const values = inputs.map(input => input.value);

    if (values.some(value => !value)) {
        alert("Du måste mata in värden i fälten ovan!");
        return;
    }

    const rubriker = document.querySelectorAll('a:not(.topnav a)');

    const utmatning = Array.from(rubriker).map((rubrik, index) => `${rubrik.textContent} ${values[index]}`).join("<br>");

    const outputContainer = document.getElementById("outputContainer");

    outputContainer.innerHTML = `<div>${utmatning}</div><p>Din dricka är påväg!</p>`;

    inputs.forEach(input => (input.value = ""));
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  if (slides.length === 0) {
    console.error("Inga slides hittades.");
    return;
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  let currentSlide = slides[slideIndex - 1];
  let currentImage = currentSlide.querySelector("img");

  if (currentImage) {
    captionText.innerHTML = currentImage.alt;
  } else {
    console.error("Ingen bild hittades i den aktuella slidens HTML.");
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentSlide.style.display = "block";
  dots[slideIndex - 1].className += " active";

  const currentCaption = document.getElementById(`caption${slideIndex}`);
  if (currentCaption) {
    captionText.innerHTML = currentCaption.innerHTML;
  } else {
    console.error("Ingen bildbeskrivning hittades.");
  }
}