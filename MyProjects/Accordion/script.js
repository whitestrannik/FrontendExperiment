console.log("12313123123123123");

var headers = document.getElementsByClassName("accordion-header");

for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", () => {
        headers[i].classList.toggle("active");
        let content = headers[i].nextElementSibling;

        if (content) {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    });
}