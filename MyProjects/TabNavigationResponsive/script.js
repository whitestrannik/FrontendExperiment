function onMenuClick() {
    var navbar = document.getElementById("navbar-container-id");
    
    if (navbar.className === "navbar-container") {
        navbar.className = navbar.className + " small";
    }
    else {
        navbar.className = "navbar-container";
    }
}