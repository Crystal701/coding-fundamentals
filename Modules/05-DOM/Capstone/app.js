const header = document.querySelector("header");

window.addEventListener("mousemove", () => {
    if (window.event.clientY <= 100 && window.scrollY > 150) {
        header.setAttribute("style", "display: flex; position: sticky; top: -150px; left: 0; transition: all 0.5s; transform: translateY(150px);")

    } else if (window.event.clientY > 100 && window.scrollY > 150 && !document.querySelector(".main-nav")) {
        header.setAttribute("style", "display: flex; transition: all 0.5s; transform: translateY(-150px);");
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY < 150) {
        header.setAttribute("style", "display: flex; position: sticky; top: 0; left: 0;");
    } else {
        header.setAttribute("style", "display: flex; transition: all 0.5s; transform: translateY(-150px)");
    }

    if (window.innerWidth <= 800 && menu.checked) {
        ul.style.display = "none";
        button.style.display = "none";

        document.querySelector(".main-nav").remove();

        nav.appendChild(ul);
        nav.appendChild(button);

        menu.checked = false;
    }
})