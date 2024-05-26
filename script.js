const firstTitle = document.querySelector(".first-title");
const secondTitle = document.querySelector(".second-title");
const firstContent = "Bachelier Alonzo";
const secondContent = "Développeur Web";
const header = document.querySelector("header");
const curriculumVitae = document.querySelector("#cv");

let firstIndexText = 0;
let secondIndexText = 0;
// affichage du titre dans l'accueil lettre par lettre
function displayFirstTitle() {
    if (firstIndexText < firstContent.length) {
        firstTitle.textContent += firstContent[firstIndexText];
        firstTitle.insertAdjacentHTML(
            "beforeend",
            '<span class="cursor"></span>'
        );
        firstIndexText++;
        setTimeout(displayFirstTitle, 150);
    } else {
        setTimeout(displaySecondTitle, 250);
    }
}
// affichage du deuxième titre dans l'accueil lettre par lettre
function displaySecondTitle() {
    const cursorElements = document.querySelectorAll(".cursor");
    cursorElements[0].remove();
    if (secondIndexText < secondContent.length) {
        secondTitle.textContent += secondContent[secondIndexText];
        secondTitle.insertAdjacentHTML(
            "beforeend",
            '<span class="cursor"></span>'
        );
        secondIndexText++;
        setTimeout(displaySecondTitle, 150);
    }
}

displayFirstTitle();

//gestion de l'ouverture fermeture de l'accordeon Tailwind lorsque les liens du header sont cliqués
function toggleAccordion(targetId) {
    const allAccordions = document.querySelectorAll(
        '[id^="accordion-collapse-body"]'
    );
    const targetAccordion = document.getElementById(targetId);
    const isHidden = targetAccordion.classList.contains("hidden");

    allAccordions.forEach(accordion => {
        if (
            accordion.id !== targetId &&
            !accordion.classList.contains("hidden")
        ) {
            accordion.classList.add("hidden");
        }
    });

    if (isHidden) {
        targetAccordion.classList.remove("hidden");
        targetAccordion.setAttribute("aria-expanded", "true");
    } else {
        targetAccordion.classList.add("hidden");
        targetAccordion.setAttribute("aria-expanded", "false");
    }

    targetAccordion.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    // Une fois que le défilement est terminé, ajustez la position
    setTimeout(() => {
        // Ajustez la position en fonction de la page actuelle et de la position de l'élément
        const yOffset = -50; // Ajustez cet offset à la valeur souhaitée
        const y =
            targetAccordion.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }, 500); //
}

//cacher ou non le header selon le scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
