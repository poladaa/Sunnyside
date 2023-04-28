const nav = document.querySelector(".navbar1");
const hidden = document.querySelector(".hidden-nav ");

nav.addEventListener("click", () => {
  hidden.classList.toggle("hide");
  hidden.classList.toggle("active");
});
