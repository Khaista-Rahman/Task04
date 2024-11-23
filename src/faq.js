document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".myButton");
  const containers = document.querySelectorAll(".myTransition-height");

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