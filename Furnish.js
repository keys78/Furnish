function openNav() {
document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}


const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}




///////////////////// mINIMIZED FOOTER JS //////////////////////////////////////

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});




/////////////////// CUSTOMER TESTIMONIALS AREA////////////////////////////

const nexty = document.querySelector('.nexty');
const prevy = document.querySelector('.prevy');
const moves = document.querySelectorAll('.move');

let index = 0;
display(index);
function display (index) {
	moves.forEach((move) => {
		move.style.display = 'none';
	});
	moves[index].style.display = 'grid';
}

function nextMove () {
	index++;
	if (index > moves.length - 1) {
		index = 0;
	}
	display(index);
  
}
function prevMove () {
	index--;
	if (index < 0) {
		index = moves.length - 1;
	}
	display(index);
}

nexty.addEventListener('click', nextMove);
prevy.addEventListener('click', prevMove);


