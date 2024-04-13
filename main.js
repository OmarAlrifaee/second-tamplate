// select elements
const rightArrow = document.querySelector(".landing i.right");
const leftArrow = document.querySelector(".landing i.left");
const landingSection = document.querySelector(".landing");
const bullets = document.querySelectorAll(".landing .bullets li");

// set options
let index = 0;

// make an array contains all photos
const photos = [
  "./images/landing.jpeg",
  "./images/landing2.png",
  "./images/landing3.jpg",
  "./images/landing4.jpg",
  "./images/landing5.jpg",
  "./images/landing6.jpg",
];

checker(); // run here to hundle the first photo on page load

rightArrow.addEventListener("click", () => {
  index++;
  checker();
});

leftArrow.addEventListener("click", () => {
  index--;
  checker();
});

bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    index = bullet.dataset.num;
    checker();
  });
});

function checker() {
  leftArrow.classList.remove("stop");
  rightArrow.classList.remove("stop");
  // set the background image depend on index variable
  landingSection.style.backgroundImage = `url(${photos[index]})`;
  // hundle if its last photo
  if (photos[index] === photos[photos.length - 1]) {
    rightArrow.classList.add("stop");
  }
  // hundle if its first photo
  if (photos[index] === photos[0]) {
    leftArrow.classList.add("stop");
  }
  hundleBullets();
}

function hundleBullets() {
  // remove active class from all bullets
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  // add active class on the current bullet
  bullets[index].classList.add("active");
}
