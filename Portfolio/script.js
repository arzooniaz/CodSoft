let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
function openPDF() {
  window.open('https://drive.google.com/file/d/1NMQlsIbkQhC7X8eN7QRwzC7m4KAFKsgS/view?usp=drive_link', '_blank')};

  function openLink() {
    window.open('https://www.behance.net/arzooniaz1', '_blank')};


    document.addEventListener("DOMContentLoaded", function () {
      // Select all elements with the class "animated-progress"
      var elements = document.querySelectorAll(".animated-progress span");

      // Loop through each element and animate the progress
      elements.forEach(function (element) {
        var progressValue = element.getAttribute("data-progress");
        var progressBar = 0;

        // Animate the progress over a duration of 1000ms (1 second)
        var interval = setInterval(function () {
          if (progressBar >= progressValue) {
            clearInterval(interval);
          } else {
            progressBar++;
            element.style.width = progressBar + "%";
            element.innerText = progressBar + "%";
          }
        }, 10); // Adjust the interval for smoother or faster animation
      });
    });

