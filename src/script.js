// const apikey = "64e43f422e916e5c20a619c40dd5026b";

const fieldSearch = document.querySelector('.fieldSearch');
const buttonSubmit = document.querySelector('.buttonSubmit');

const city = document.querySelector('.city');
const weather = document.querySelector('.weather');
const deg = document.querySelector('.deg');
const imageCondition = document.querySelector('.imageCondition');

// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}



buttonSubmit.addEventListener('click', ()=>{
    const citySearch = fieldSearch.value

    console.log(citySearch)
})