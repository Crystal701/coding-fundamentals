const button = document.querySelector("button");
const quoteCard = document.querySelector(".quote-card");

button.addEventListener("click", fetchData)

async function fetchData() {
    try {
        const req = await fetch("https://api.quotable.io/random");
        const data = await req.json();

        generateQuote(data);
    } catch (e) {
        quoteCard.innerHTML = "Sorry, there's an error :(";
    }
}

function generateQuote(data) {
    quoteCard.innerHTML = `<p>${data.content}</p> <cite>&#8212; ${data.author}</cite>`
}