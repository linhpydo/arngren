// Declare some variables
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;

// Function to show the current slide and update the active indicator
function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  // Update active indicator
  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });
  indicators[index].classList.add('active');
}

// Show the first slide and activate the first indicator by default
showSlide(currentSlide);

// Previous button click event listener
prev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

// Next button click event listener
next.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

// Indicator click event listeners
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

