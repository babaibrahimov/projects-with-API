const jokeContainer = document.querySelector(".text");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let emojiIcon = document.querySelector('.emoji');

const emojies = ["😂", "🤣", "😃", "😆", "😅", "😁"]
// const emojies = ["A", "B", "C", "D", "E", "F", "G", "H"]
let emoji = "😂"


let randomEmojies = () => {
    emoji = emojies[Math.floor(Math.random() * emojies.length)];
}

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        // console.log(item)
    });
    emojiIcon.innerHTML = emoji
}
btn.addEventListener("click",getJoke);
btn.addEventListener("click", randomEmojies);
getJoke();