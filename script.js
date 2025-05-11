let menuList = document.getElementById("menu");
let menuBtn = document.querySelector(".menuBtn");
let closeBtn = document.querySelector(".closeBtn");

let footerP = document.getElementById("footer-p");

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

let d = new Date();
footerP.innerText = `\u00A9 ${d.getFullYear()} Anuja Pawar | Frontend Developer`
