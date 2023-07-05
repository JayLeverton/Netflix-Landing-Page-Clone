const faqButtons = document.querySelectorAll(".faq-button");
const faqBodyContainers = document.querySelectorAll(".faq-body-container");
const plusSvgs = document.querySelectorAll(".plus-svg");
let clickedFaqButton;
let buttonOpenedBeforeClicked = 0;

const emailInput = document.querySelectorAll(".email-input");

for (let i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener("click", () => {

        clickedFaqButton = faqButtons[i];

        if (clickedFaqButton.nextElementSibling.classList.contains("faq-body-container-opened")) {
            buttonOpenedBeforeClicked = 1;
        } else {
            buttonOpenedBeforeClicked = 0;
        }

        for (let i = 0; i < faqBodyContainers.length; i++) {
            faqBodyContainers[i].classList.remove("faq-body-container-opened");
            plusSvgs[i].classList.remove("rotate-45");
            console.log("removed classes");
        }

        if (buttonOpenedBeforeClicked == 0) {
            clickedFaqButton.nextElementSibling.classList.add("faq-body-container-opened");
            clickedFaqButton.children[0].children[0].classList.add("rotate-45");
            console.log(clickedFaqButton.children[0].children[0]);
        }
        // plusSvgs[i].classList.toggle("rotate-45");

    });
}

emailInput.addEventListener("click", () => {
    
})