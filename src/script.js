const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 0;

// Function to update slide position
function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatic slide every 4 seconds
let slideInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}, 4000);

// Manual navigation
document.getElementById("nextSlide").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
  resetInterval();
});

document.getElementById("prevSlide").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
  resetInterval();
});

// Reset interval when manually sliding
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }, 4000);
}

let myContainer1 = document.querySelector("#container");
let myContainer2 = document.querySelector("#container2");  // Fixed selector
let myContainer3 = document.querySelector("#container3");
let myContainer4 = document.querySelector("#container4");

let myButton = document.querySelector("#clickme");
let myButton2 = document.querySelector("#clickme2");
let myButton3 = document.querySelector("#clickme3");
let myButton4 = document.querySelector("#clickme4");

let arrowIcon = document.querySelectorAll("#arrowIcon")

let condition1 = true;
let condition2 = true;
let condition3 = true;
let condition4 = true;

myButton.addEventListener("click", function () {
  if (condition1) {
    myContainer1.style.transition = "height 0.5s ease";
    myContainer1.style.height = "100px";
    myButton.style.backgroundColor = "yellow"
    condition1 = false;
  } else {
    myContainer1.style.height = "40px";
     myButton.style.backgroundColor = "black"
    condition1 = true;
  }
});

myButton2.addEventListener("click", function () {
  if (condition2) {
    myContainer2.style.transition = "height 0.5s ease";
    myContainer2.style.height = "100px";
    myButton2.style.backgroundColor = "yellow"
    condition2 = false;
  } else {
    myContainer2.style.height = "40px";
    myButton2.style.backgroundColor = "black"
    condition2 = true;
  }
});

myButton3.addEventListener("click", function () {
  if (condition3) {
    myContainer3.style.transition = "height 0.5s ease";
    myContainer3.style.height = "100px";
     myButton3.style.backgroundColor = "yellow"
    condition3 = false;
  } else {
    myContainer3.style.height = "40px";
     myButton3.style.backgroundColor = "black"
    condition3 = true;
  }
});




arrowIcon.forEach((btn) => {
  btn.addEventListener("click", () => {
    
  if (btn.classList.contains("fa-chevron-down")) {
    btn.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    btn.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  let counters = [
    { element: document.querySelector("#counter"), start: 0, end: 1789, duration: 4000 },
    { element: document.querySelector("#counter2"), start: 0, end: 647, duration: 4000 },
    { element: document.querySelector("#counter3"), start: 0, end: 4000, duration: 4000 },
    { element: document.querySelector("#counter4"), start: 0, end: 44, duration: 4000 }
  ];

  const startCounter = (counter) => {
    let { element, start, end, duration } = counter;
    let incrementTime = Math.round(duration / (end - start)); 
    let currentNumber = start;

    let interval = setInterval(() => {
      if (currentNumber <= end) {
        element.innerText = currentNumber;
        currentNumber++;
      } else {
        clearInterval(interval); 
      }
    }, incrementTime);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          counters.forEach((counter) => {
            if (container.contains(counter.element)) {
              startCounter(counter); 
            }
          });
          observer.unobserve(container); 
        }
      });
    },
    { threshold: 0.5 } 
  );

  
  const counterContainer = document.querySelector("#counter-container");
  if (counterContainer) {
    observer.observe(counterContainer);
  }
});


// Map button IDs to container IDs
const mappings = {
  showAll: "show-all",
  Commrical: "commrical",
  Education: "education",
  Governament: "governament",
  Infractucture: "infractructure",
  Residental: "residental",
  Healthcare: "healthcare",
};

// Function to show the relevant container and hide others
const showContainer = (containerId) => {
  // Hide all containers
  Object.values(mappings).forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  // Show the selected container
  document.getElementById(containerId).classList.remove("hidden");
};

// Attach event listeners to all buttons
Object.keys(mappings).forEach(buttonId => {
  document.getElementById(buttonId).addEventListener("click", () => {
    showContainer(mappings[buttonId]);
  });
});


const cmentslider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.slider-btn');
let currentSlide = 0;

// Update active slide
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide = index;
    updateSliderPosition();
    updateActiveButton();
  });
});

function updateSliderPosition() {
  const offset = -currentSlide * 100; // Calculate translation
  cmentslider.style.transform = `translateX(${offset}%)`;
}

function updateActiveButton() {
  buttons.forEach((btn, index) => {
    if (index === currentSlide) {
      btn.classList.add('bg-yellow-500');
      btn.classList.remove('bg-gray-300');
    } else {
      btn.classList.add('bg-gray-300');
      btn.classList.remove('bg-yellow-500');
    }
  });
}

// Initialize the first button as active
updateActiveButton();



