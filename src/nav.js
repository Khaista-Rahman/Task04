

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-btn");
  const containers = document.querySelectorAll(".transition-height");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const targetContainer = document.getElementById(targetId);

      // Hide all containers
      containers.forEach((container) => {
        if (container !== targetContainer) {
          container.classList.add("hidden");
        }
      });

      // Toggle the clicked container
      targetContainer.classList.toggle("hidden");
    });
  });
});




document.addEventListener("DOMContentLoaded", function() {
  let navBtn = document.getElementById("navBtn");
  let navContainer = document.getElementById("barContainer");
  let navCondition = true;

  navBtn.addEventListener("click", function() {
    console.log("hey its me khaista rahman");
    if (navCondition) {
      navContainer.style.display = "block";
      navCondition = false;
    } else {
      navContainer.style.display = "none";
      navCondition = true;
    }
  });
});


let barCross = document.getElementById("barCross");
let barSearchContainer = document.getElementById("barSearchContainer");
let barSearch = document.getElementById("barSearch");

barSearch.addEventListener("click", function(){
  barSearchContainer.style.display = "block";
})
barCross.addEventListener("click", function(){
  barSearchContainer.style.display = "none"
})


let hideme1 = document.querySelector("#hideme1");
let hideme2 = document.querySelector("#hideme2");
let hidecontent1 = document.querySelector("#hideme1content")
let hidecontent2 = document.querySelector("#hideme2content")

hideme1.addEventListener("click", function() {
  hidecontent1.style.display = "none"
})
hideme2.addEventListener("click", function() {
  hidecontent2.style.display = "none"
})