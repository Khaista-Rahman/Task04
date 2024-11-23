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

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  const totalSlides = slider.children.length; // Total number of slides
  const slideWidth = slider.children[0].offsetWidth; // Width of each slide

  // Navigate to the previous slide
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1; // Loop to the last slide
    }
    updateSliderPosition();
  });

  // Navigate to the next slide
  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first slide
    }
    updateSliderPosition();
  });

  // Update the slider position
  function updateSliderPosition() {
    slider.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }
});