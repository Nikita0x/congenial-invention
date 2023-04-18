const scrollUpBtn = document.getElementById("scroll-up-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
  console.log("page scrolled");
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log("btn clicked");
});
