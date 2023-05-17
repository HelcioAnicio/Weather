const apikey = "64e43f422e916e5c20a619c40dd5026b";

const fieldSearch = document.querySelector('.fieldSearch');
const buttonSubmit = document.querySelector('.buttonSubmit');

const city = document.querySelector('.city');
const country = document.querySelector('.country');
const weather = document.querySelector('.weather');
const deg = document.querySelector('.deg');
const imageCondition = document.querySelector('.imageCondition');




// FUNÇÔES
const getWeather = async (citySearch) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&lang=pt_br&appid=${apikey}`
    const res = await fetch(apiURL);
    const data = await res.json();    
    return data;
}


const showWeather = async (citySearch) => {
    const data = await getWeather(citySearch);   
    console.log(data);

    city.innerHTML = data.name;
    country.innerHTML = data.sys.country;
    deg.innerHTML = `${parseInt(data.main.temp)}°C`;
    weather.innerHTML = data.weather[0].description;
    imageCondition.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    )
}




// EVENTOS
buttonSubmit.addEventListener('click', ()=>{
    const citySearch = fieldSearch.value
  
    showWeather(citySearch)
})