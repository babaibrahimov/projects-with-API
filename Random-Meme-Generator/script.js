let meme = document.getElementById('meme');
let title = document.querySelector('.name');
let btn = document.getElementById('btn')

let url = "https://meme-api.com/gimme/";
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];



let getMeme = () => {
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

    fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    let memeImg = `${data.url}`
    let memeText = `${data.title}`
    meme.src = memeImg;
    title.innerHTML = memeText;
    })
}

btn.addEventListener('click', getMeme)
window.addEventListener('load', getMeme)