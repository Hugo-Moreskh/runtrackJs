window.addEventListener("scroll", function () {
  var footer = document.getElementById("footer");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    footer.style.backgroundColor = "#ff0000";
  } else {
    footer.style.backgroundColor = "#333";
  }
});
