const accordion = document.querySelectorAll(".acc");
const icon = document.querySelector(".icon");
const link = document.querySelector(".links");
const main = document.querySelector(".main");
const body = document.querySelector(".body");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const ul = this.nextElementSibling;

    if (ul.style.display === "block") ul.style.display = "none";
    else ul.style.display = "block";

    if (ul.style.height) ul.style.height = null;
    else ul.style.height = `${ul.scrollHeight}px`;
  });
}

icon.addEventListener("click", function () {
  this.classList.toggle("open");
  link.classList.toggle("open");
  main.classList.toggle("open");
  body.classList.toggle("open");
});
