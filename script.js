const accordion = document.querySelectorAll(".acc");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const li = this.nextElementSibling;
    console.log(li.scrollHeight);
    let height = li.style.maxHeight;
    console.log({ height });

    if (height) height = null;
    else height = `${li.scrollHeight}px`;
  });
}
