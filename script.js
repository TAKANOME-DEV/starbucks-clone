const accordion = document.querySelectorAll(".acc");

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
