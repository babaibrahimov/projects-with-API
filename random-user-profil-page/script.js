let userBtn = document.getElementById('user-edit');
let passwordBtn = document.getElementById('password-edit');
let fullnameBtn = document.getElementById('fullname-edit');
let emailBtn = document.getElementById('email-edit');
let phoneBtn = document.getElementById('phone-edit');
let genderBtn = document.getElementById('gender-edit');
let birthDateBtn = document.getElementById('birth-date-edit');
let countryBtn = document.getElementById('country-edit');
let stateBtn = document.getElementById('state-edit');
let cityBtn = document.getElementById('city-edit');
let streetBtn = document.getElementById('street-edit');
let zipcodeBtn = document.getElementById('zipcode-edit');
let cardnumberBtn = document.getElementById('cardnumber-edit');
let showHideBtn = document.getElementById('show-hide-password');

let userInput = document.querySelector('.user-input');
let passwordInput = document.querySelector('.password-input');
let fullnameInput = document.querySelector('.fullname-input');
let emailInput = document.querySelector('.email-input');
let phoneInput = document.querySelector('.phone-input');
let genderInput = document.querySelector('.gender-input');
let birthDateInput = document.querySelector('.birth-date-input');
let countryInput = document.querySelector('.country-input');
let stateInput = document.querySelector('.state-input');
let cityInput = document.querySelector('.city-input');
let streetInput = document.querySelector('.street-input');
let zipcodeInput = document.querySelector('.zipcode-input');
let cardnumberInput = document.querySelector('.cardnumber-input');

let body = document.querySelector('body')

showHideBtn.addEventListener('click', () => {

    if( passwordInput.type == 'password'){
        passwordInput.setAttribute('type', 'text');
        showHideBtn.classList.remove('ri-eye-off-line');
        showHideBtn.classList.add('ri-eye-line');
    } else {
        passwordInput.setAttribute('type', 'password');
        showHideBtn.classList.remove('ri-eye-line')
        showHideBtn.classList.add('ri-eye-off-line');
    }
})

let useredit = true;
let passwordedit = true;
let fullnameedit = true;
let emailedit = true;
let phoneedit = true;
let genderedit = true;
let birthdateedit = true;
let countryedit = true;
let stateedit = true;
let cityedit = true;
let streetedit = true;
let zipcodeedit = true;
let cardnumberedit = true;

//show username in the profile box
let usernameshow = document.querySelector('.username');
usernameshow.innerHTML = userInput.value;

userBtn.addEventListener('click', () => {
    if(useredit) {
        userInput.readOnly = false;
        userInput.style.borderColor = "#0fcb82"
        userInput.style.cursor = "text"
        userBtn.classList.remove('ri-pencil-line');
        userBtn.classList.add('ri-save-line')
        userInput.style.background = "#c2d7fc"
        useredit = false
    } else {
        userInput.readOnly = true;
        userInput.style.borderColor = "transparent"
        userInput.style.cursor = "default"
        userBtn.classList.remove('ri-save-line')
        userBtn.classList.add('ri-pencil-line');
        userInput.style.background = "#e9e7e7"
        useredit = true
        //update username with new username
        userInput.value == userInput;
        usernameshow.innerHTML = userInput.value;
    }
});

passwordBtn.addEventListener('click', () => {
    if(passwordedit) {
        passwordInput.readOnly = false;
        passwordInput.style.borderColor = "#0fcb82"
        passwordInput.style.cursor = "text"
        passwordInput.setAttribute('type', 'text');
        passwordBtn.classList.remove('ri-pencil-line');
        passwordBtn.classList.add('ri-save-line')
        passwordInput.style.background = "#c2d7fc"
        showHideBtn.style.display = "none"
        passwordedit = false
    } else {
        passwordInput.readOnly = true;
        passwordInput.style.borderColor = "transparent"
        passwordInput.style.cursor = "default"
        passwordInput.setAttribute('type', 'password')
        passwordBtn.classList.remove('ri-save-line')
        passwordBtn.classList.add('ri-pencil-line');
        passwordInput.style.background = "#e9e7e7"
        showHideBtn.style.display = "flex"
        passwordedit = true
        //update password with new password
        passwordInput.value == passwordInput;
    }  
});

//show fullname in the profile box
let fullnameshow = document.querySelector('.name');
fullnameshow.innerHTML = fullnameInput.value;

fullnameBtn.addEventListener('click', () => {
    if(fullnameedit) {
        fullnameInput.readOnly = false;
        fullnameInput.style.borderColor = "#0fcb82"
        fullnameInput.style.cursor = "text"
        fullnameBtn.classList.remove('ri-pencil-line');
        fullnameBtn.classList.add('ri-save-line')
        fullnameInput.style.background = "#c2d7fc"
        fullnameedit = false
    } else {
        fullnameInput.readOnly = true;
        fullnameInput.style.borderColor = "transparent"
        fullnameInput.style.cursor = "default"
        fullnameBtn.classList.remove('ri-save-line')
        fullnameBtn.classList.add('ri-pencil-line');
        fullnameInput.style.background = "#e9e7e7"
        fullnameedit = true
        //update fullname with new fullname
        fullnameInput.value ==fullnameInput;
        //show new fullname in the profile box
        fullnameshow.innerHTML = fullnameInput.value;
    } 
});

//show email in the profil box
let emailshow = document.querySelector('.mail p');
emailshow.innerHTML = emailInput.value;

emailBtn.addEventListener('click', () => {
    if(emailedit) {
        emailInput.readOnly = false;
        emailInput.style.borderColor = "#0fcb82"
        emailInput.style.cursor = "text"
        emailBtn.classList.remove('ri-pencil-line');
        emailBtn.classList.add('ri-save-line')
        emailInput.style.background = "#c2d7fc"
        emailedit = false
    } else {
        emailInput.readOnly = true;
        emailInput.style.borderColor = "transparent"
        emailInput.style.cursor = "default"
        emailBtn.classList.remove('ri-save-line')
        emailBtn.classList.add('ri-pencil-line');
        emailInput.style.background = "#e9e7e7"
        emailedit = true
        //update email name with new email
        emailInput.value == emailInput;
        //show new email in the profile box
        emailshow.innerHTML = emailInput.value;
    }
});

phoneBtn.addEventListener('click', () => {
    if(phoneedit) {
        phoneInput.readOnly = false;
        phoneInput.style.borderColor = "#0fcb82"
        phoneInput.style.cursor = "text"
        phoneBtn.classList.remove('ri-pencil-line');
        phoneBtn.classList.add('ri-save-line')
        phoneInput.style.background = "#c2d7fc"
        phoneedit = false
    } else {
        phoneInput.readOnly = true;
        phoneInput.style.borderColor = "transparent"
        phoneInput.style.cursor = "default"
        phoneBtn.classList.remove('ri-save-line')
        phoneBtn.classList.add('ri-pencil-line');
        phoneInput.style.background = "#e9e7e7"
        phoneedit = true
        //update phone number with new phone number
        phoneInput.value == phoneInput;
    }
});

genderBtn.addEventListener('click', () => {
    if(genderedit) {
        genderInput.readOnly = false;
        genderInput.style.borderColor = "#0fcb82"
        genderInput.style.cursor = "text"
        genderBtn.classList.remove('ri-pencil-line');
        genderBtn.classList.add('ri-save-line')
        genderInput.style.background = "#c2d7fc"
        genderedit = false;
    } else {
        genderInput.readOnly = true;
        genderInput.style.borderColor = "transparent"
        genderInput.style.cursor = "default"
        genderBtn.classList.remove('ri-save-line')
        genderBtn.classList.add('ri-pencil-line');
        genderInput.style.background = "#e9e7e7"
        genderedit = true;
        //update gender with new gender
        genderInput.value == genderInput;
    }
});

birthDateBtn.addEventListener('click', () => {
    if(birthdateedit) {
        birthDateInput.readOnly = false;
        birthDateInput.style.borderColor = "#0fcb82"
        birthDateInput.style.cursor = "text"
        birthDateBtn.classList.remove('ri-pencil-line');
        birthDateBtn.classList.add('ri-save-line')
        birthDateInput.style.background = "#c2d7fc"
        birthdateedit = false
    } else {
        birthDateInput.readOnly = true;
        birthDateInput.style.borderColor = "transparent"
        birthDateInput.style.cursor = "default"
        birthDateBtn.classList.remove('ri-save-line')
        birthDateBtn.classList.add('ri-pencil-line');
        birthDateInput.style.background = "#e9e7e7"
        birthdateedit = true
        //update birthdate with new birthdate
        birthDateInput.value == birthDateInput;
    }
});

//show location in the profil box
let locationshow = document.querySelector('.location p');
locationshow.innerHTML = countryInput.value + "," + cityInput.value;

countryBtn.addEventListener('click', () => {
    if(countryedit) {
        countryInput.readOnly = false;
        countryInput.style.borderColor = "#0fcb82"
        countryInput.style.cursor = "text"
        countryBtn.classList.remove('ri-pencil-line');
        countryBtn.classList.add('ri-save-line')
        countryInput.style.background = "#c2d7fc"
        countryedit = false
    } else {
        countryInput.readOnly = true;
        countryInput.style.borderColor = "transparent"
        countryInput.style.cursor = "default"
        countryBtn.classList.remove('ri-save-line')
        countryBtn.classList.add('ri-pencil-line');
        countryInput.style.background = "#e9e7e7"
        countryedit = true;
        //update country with new country
        countryInput.value == countryInput;
        //show new location in the profile box
        locationshow.innerHTML = countryInput.value + "," + cityInput.value;
    }
});

stateBtn.addEventListener('click', () => {
    if(stateedit) {
        stateInput.readOnly = false;
        stateInput.style.borderColor = "#0fcb82"
        stateInput.style.cursor = "text"
        stateBtn.classList.remove('ri-pencil-line');
        stateBtn.classList.add('ri-save-line')
        stateInput.style.background = "#c2d7fc"
        stateedit = false
    } else {
        stateInput.readOnly = true;
        stateInput.style.borderColor = "transparent"
        stateInput.style.cursor = "default"
        stateBtn.classList.remove('ri-save-line')
        stateBtn.classList.add('ri-pencil-line');
        stateInput.style.background = "#e9e7e7"
        stateedit = true;
        //update state with new state
        stateInput.value == stateInput;
    }
});

cityBtn.addEventListener('click', () => {
    if(cityedit) {
        cityInput.readOnly = false;
        cityInput.style.borderColor = "#0fcb82"
        cityInput.style.cursor = "text"
        cityBtn.classList.remove('ri-pencil-line');
        cityBtn.classList.add('ri-save-line')
        cityInput.style.background = "#c2d7fc"
        cityedit = false
    } else {
        cityInput.readOnly = true;
        cityInput.style.borderColor = "transparent"
        cityInput.style.cursor = "default"
        cityBtn.classList.remove('ri-save-line')
        cityBtn.classList.add('ri-pencil-line');
        cityInput.style.background = "#e9e7e7"
        cityedit = true;
        //update city with new city
        cityInput.value == cityInput;
        //show new location in profile box
        locationshow.innerHTML = countryInput.value + "," + cityInput.value;
    }
});

streetBtn.addEventListener('click', () => {
    if(streetedit) {
        streetInput.readOnly = false;
        streetInput.style.borderColor = "#0fcb82"
        streetInput.style.cursor = "text"
        streetBtn.classList.remove('ri-pencil-line');
        streetBtn.classList.add('ri-save-line')
        streetInput.style.background = "#c2d7fc"
        streetedit = false;
    } else {
        streetInput.readOnly = true;
        streetInput.style.borderColor = "transparent"
        streetInput.style.cursor = "default"
        streetBtn.classList.remove('ri-save-line')
        streetBtn.classList.add('ri-pencil-line');
        streetInput.style.background = "#e9e7e7"
        streetedit = true;
        //update steet with new street
        streetInput.value == streetInput;
    }
});

zipcodeBtn.addEventListener('click', () => {
    if(zipcodeedit) {
        zipcodeInput.readOnly = false;
        zipcodeInput.style.borderColor = "#0fcb82"
        zipcodeInput.style.cursor = "text"
        zipcodeBtn.classList.remove('ri-pencil-line');
        zipcodeBtn.classList.add('ri-save-line')
        zipcodeInput.style.background = "#c2d7fc"
        zipcodeedit = false;
    } else {
        zipcodeInput.readOnly = true;
        zipcodeInput.style.borderColor = "transparent"
        zipcodeInput.style.cursor = "default"
        zipcodeBtn.classList.remove('ri-save-line')
        zipcodeBtn.classList.add('ri-pencil-line');
        zipcodeInput.style.background = "#e9e7e7"
        zipcodeedit = true;
        //update zipcode with new zipcode
        zipcodeInput.value == zipcodeInput;
    }
});

cardnumberBtn.addEventListener('click', () => {
    if(cardnumberedit) {
        cardnumberInput.readOnly = false;
        cardnumberInput.style.borderColor = "#0fcb82"
        cardnumberInput.style.cursor = "text"
        cardnumberBtn.classList.remove('ri-pencil-line');
        cardnumberBtn.classList.add('ri-save-line')
        cardnumberInput.style.background = "#c2d7fc"
        cardnumberedit = false
    } else {
        cardnumberInput.readOnly = true;
        cardnumberInput.style.borderColor = "transparent"
        cardnumberInput.style.cursor = "default"
        cardnumberBtn.classList.remove('ri-save-line')
        cardnumberBtn.classList.add('ri-pencil-line');
        cardnumberInput.style.background = "#e9e7e7"
        cardnumberedit = true;
        //update cardnumber with new cardnumber
        genderInput.value == genderInput;
    }
});