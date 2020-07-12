const city = document.getElementById('city');
const temp = document.getElementById('temp');
const forecast = document.getElementById('forecast');
const wind = document.getElementById('wind');
const input = document.getElementById('input');
const button = document.getElementById('cityZip');

const weatherData = async (val) => {
  const url =
    'http://api.openweathermap.org/data/2.5/weather?zip=' +
    val +
    ',US&appid=5d03735935aea079ff2b689474bf64f0';
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
  city.innerHTML = data.name;
  temp.innerHTML =
    ((parseFloat(data.main.temp) - 273.15) * 1.8 + 32).toFixed() + '&#176;';

  const upper = data.weather[0].description;
  forecast.innerHTML = upper[0].toUpperCase() + upper.slice(1);

  wind.innerHTML = data.wind.speed + ' mph winds';
};

button.addEventListener('click', () => {
  const entry = input.value;
  weatherData(entry).catch(err);
  input.value = '';
});

const err = (error) => {
  console.log(error);
};

weatherData(98101).catch(err);
console.log(container);
