const collapsibleButtons = document.querySelectorAll(".faq__expand-button");
const collapsibleElements = document.querySelectorAll(".faq__item-answer");

for (let i = 0; i < collapsibleButtons.length; i++) {
  collapsibleButtons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = collapsibleElements[i];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0 2rem";
    } else {
      content.style.maxHeight = "none";
      content.style.padding = "2rem";
    }
  });
}
