let text = document.querySelector('.text');
let author = document.querySelector('.author');
let btn = document.getElementById('btn')

const url = "https://api.quotable.io/random ";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
      text.innerText =  item.content;
      author.innerText = "- " + item.author + " -";
    });
}

window.addEventListener('load', getQuote)
btn.addEventListener('click', getQuote)