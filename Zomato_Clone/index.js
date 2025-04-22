document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("main input");
  
    input.addEventListener("focus", () => {
      input.placeholder = "Type something delicious...";
    });
  
    input.addEventListener("blur", () => {
      input.placeholder = "Search for restaurant, cuisine or a dish";
    });
  
    // Simple animation on load (if needed)
    const main = document.querySelector("main");
    main.style.opacity = 0;
    setTimeout(() => {
      main.style.transition = "opacity 1s ease-in-out";
      main.style.opacity = 1;
    }, 100);
  });
  