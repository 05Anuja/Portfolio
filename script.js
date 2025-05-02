let menuList = document.getElementById("menu");
let menuBtn = document.querySelector(".menuBtn");
let closeBtn = document.querySelector(".closeBtn");

function openMenu() {
  menuList.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function closeMenu() {
  menuList.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
}
