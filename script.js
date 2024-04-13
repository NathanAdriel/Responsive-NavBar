const btnBurguer = document.querySelector(".btn-menu-burguer");
const mobileMenu = document.getElementById("mobile");
const closeBtn = document.querySelector(".close-btn");

// Function ShowMenuBurguer

btnBurguer.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  btnBurguer.style.display = "none";
  closeBtn.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  closeBtn.classList.add("hidden");
  btnBurguer.style.display = "block";
});
