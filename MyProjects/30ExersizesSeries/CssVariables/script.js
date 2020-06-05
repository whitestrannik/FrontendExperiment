const rightOffset = document.querySelector("#right-offset");
const bottomOffset = document.querySelector("#bottom-offset");

rightOffset.addEventListener("change", updateRightOffset);
rightOffset.addEventListener("mousemove", updateRightOffset);
bottomOffset.addEventListener("change", updateBottomOffset);
bottomOffset.addEventListener("mousemove", updateBottomOffset);

function updateRightOffset(e) {
    document.documentElement.style.setProperty("--right-offset", this.value + "px");
}

function updateBottomOffset(e) {
    document.documentElement.style.setProperty("--bottom-offset", this.value + "px");
}