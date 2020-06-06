const panels = document.querySelectorAll(".panel");

function clickHandler(e) {
    this.classList.toggle("active");
}

function trnasitionEndHandler(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("opened");
    }
}

panels.forEach(p => p.addEventListener("click", clickHandler));
panels.forEach(p => p.addEventListener("transitionend", trnasitionEndHandler));