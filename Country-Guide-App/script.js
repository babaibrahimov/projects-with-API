let searchBtn = document.getElementById('search-button')
let seaarchInp = document.getElementById('search-input')
const notice = document.querySelector('.notice')
const country = document.querySelector('.country');
const capital = document.querySelector('.capital span');
const continent = document.querySelector('.continent span');
const population = document.querySelector('.population span');
const currency = document.querySelector('.currency span');
const language = document.querySelector('.language span');
const flag = document.querySelector('.flag-area img');

searchBtn.addEventListener('click', () => {
    let countryName = seaarchInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl)
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(Object.values(data[0].languages).toString().split(",").join(", "));
    
        let flagIndex = `${data[0].flags.svg}`
        let countryIndex = `${data[0].name.common}`
        let capitalIndex = `${data[0].capital[0]}`
        let continentIndex = `${data[0].continents[0]}`
        let currencyIndex = `${Object.keys(data[0].currencies)[0]}`
        let languageIndex = `${Object.values(data[0].languages).toString().split(",").join(", ")}`
        let populationIndex = `${data[0].population}`


        flag.src = flagIndex;
        country.innerHTML = countryIndex;
        capital.innerHTML = capitalIndex;
        continent.innerHTML = continentIndex;
        currency.innerHTML = currencyIndex;
        language.innerHTML = languageIndex;
        population.innerHTML = populationIndex;

    });
    if(seaarchInp.value == "") {
        notice.style.display = "block"
    }else
    {
        notice.style.display = "none"
    }    
});