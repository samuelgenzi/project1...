
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=3d3b7fc3ef1ccb996dfd9a99c3aeceda&units=metric';
const apiKey = '3d3b7fc3ef1ccb996dfd9a99c3aeceda'; 


const searchInput = document.getElementById('my-input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temp');
const city = document.querySelector('.city');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');


async function getWeatherData(cityName) {
    const response = await fetch(`${apiUrl}&q=${cityName}&appid=${apiKey}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error fetching weather data:', response.status);
      return null;
    }
  }
  