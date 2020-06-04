function handleMouseClick(e) {
    playSound(this.dataset.sound);
}

function handleKeyDown(e) {
    const key = String.fromCharCode(e.keyCode);

    const button = document.querySelector(`div[data-sound="${key}"]`);

    if (button != null) {
        button.classList.add("active");
        button.addEventListener("transitionend", (e) => {
            button.classList.remove("active");
        }, { once: true })
    }

    playSound(key);
}

function playSound(soundCode) {
    console.log(soundCode);

    const audio = document.querySelector(`audio[data-key="${soundCode}"]`);
    if (audio != null)
    {
        audio.currentTime = 0;
        audio.play();
    }
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((e) => {
    e.addEventListener("click", handleMouseClick);
});

window.addEventListener("keydown", handleKeyDown);