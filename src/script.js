const apikey = "64e43f422e916e5c20a619c40dd5026b";

const container = document.querySelector(".container");

const fieldSearch = document.querySelector(".fieldSearch");
const buttonSubmit = document.querySelector(".buttonSubmit");

const informations = document.querySelector(".informations");
const city = document.querySelector(".city");
const country = document.querySelector(".country");

const weather = document.querySelector(".weather");

const deg = document.querySelector(".deg");
const imageCondition = document.querySelector(".imageCondition");

// FUNÇÔES
const getWeather = async (citySearch) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&lang=pt_br&appid=${apikey}`;
  const res = await fetch(apiURL);
  const data = await res.json();
  return data;
};

const showWeather = async (citySearch) => {
  const data = await getWeather(citySearch);
  console.log(data);
  informations.style.display = "flex";
  fieldSearch.value = "";

  city.innerHTML = data.name;
  country.innerHTML = ` -${data.sys.country}`;
  deg.innerHTML = `${parseInt(data.main.temp)}°C`;
  weather.innerHTML =
    data.weather[0].description[0].toUpperCase() +
    data.weather[0].description.substring(1);
  imageCondition.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  background();
};

function background() {
  const weatherValue = weather.textContent;
  // console.log(weatherValue)
  if (weatherValue === "Nublado") {
    container.style.backgroundImage = "url('/src/assets/Nublado.jpg')";
  } else if (weatherValue === "Céu limpo") {
    container.style.backgroundImage = "url('/src/assets/Ceu_Limpo.jpg')";
    container.style.color = "black";
  } else if (
    weatherValue === "Algumas nuvens" ||
    weatherValue === "Nuvens dispersas"
  ) {
    container.style.backgroundImage = "url('/src/assets/Algumas_nuvens.jpg')";
  } else if (weatherValue === "Tempestade") {
    container.style.backgroundImage = "url('/src/assets/tempestade.jpg')";
  } else if (weatherValue === "Neve") {
    container.style.backgroundImage = "url('/src/assets/Neve.jpg')";
  }
}

// EVENTOS
buttonSubmit.addEventListener("click", () => {
  const citySearch = fieldSearch.value;

  if (citySearch !== "") {
    showWeather(citySearch);
  } else {
    alert("Informe uma cidade corretamente");
  }
});
