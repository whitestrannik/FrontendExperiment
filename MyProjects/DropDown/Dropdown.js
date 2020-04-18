function onDropdownClick() {
    var element = document.getElementById("dropdown-list-id");
    element.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    console.log(event.target);
    if (!event.target.matches(".dropdown-button")) {
        var openDropdown = document.getElementById("dropdown-list-id");
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show") ;
        }
    }
};
