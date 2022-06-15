const section = document.querySelector("section");
const button = document.querySelector("button");

async function fetchData() {
    try {
        const req = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await req.json();

        generateData(data);
    } catch (e) {
        console.log(e);
    }
}

function generateData(input) {
    for (let data of input) {
        const card = document.createElement("div");
        const topDiv = document.createElement("div");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        const article = document.createElement("article");
        const button = document.createElement("button");

        card.classList.add("card");

        imgContainer.classList.add("img-box");
        img.src = data.image.url;

        article.innerHTML = `<h3>${data.name}</h3> <p>${data.description}</p>`;

        button.innerText = "Profile"
        button.addEventListener("click", () => {
            window.open(data.cfa_url, "_blank");
        })

        section.appendChild(card);
        card.appendChild(topDiv);
        topDiv.appendChild(imgContainer);
        imgContainer.appendChild(img);
        topDiv.appendChild(article);
        card.appendChild(button);
    }
}

fetchData();