var slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0,
  slideCount = slide.length,
  prevBtn = document.querySelector(".prev"),
  slideWidth = 150,
  slideMargin = 30,
  nextBtn = document.querySelector(".next");
var index = 0;
var colors = ["red", "orange", "yellow", "green", "blue", "Indigo", "purple"];
var max = colors.length;
var timerId;
slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";

function moveSlide(num) {
  slides.style.left = -num * 180 + "px";
  currentIdx = num;
}

nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 4) {
    moveSlide(currentIdx + 1);
  } else {
    moveSlide(0);
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 4);
  }
});

function one_btn() {
  document.getElementById("colorChange").style.backgroundColor = "#a4e468";
}

function two_btn() {
  document.getElementById("colorChange").style.backgroundColor = "#00a3d2";
}

function three_btn() {
  document.getElementById("colorChange").style.backgroundColor = "FFD700";
}
