let getUserBtn = document.querySelector('#getUser')
const profile = document.querySelector('.user-image img');
const fullName = document.querySelector('.fullname');
const username = document.querySelector('.username');
const location1 = document.querySelector('.location span');

let url = "https://random-data-api.com/api/v2/users?response_type=json";



let getUser = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => { 
    let profileIndex = `${data.avatar}`
    let nameIndex = `${data.first_name} ${data.last_name}`
    let userIndex = `${data.username}`
    let locationIndex = `${data.address.city}, ${data.address.country}`

    profile.src = profileIndex;
    fullName.innerHTML = nameIndex;
    username.innerHTML ="@"+ userIndex;
    location1.innerHTML = locationIndex;

    console.log(data)
});
};
window.addEventListener("load", getUser);
getUserBtn.addEventListener("click", getUser);
