class WeatherCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .card {
                    padding: 1rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                h2 {
                    margin-top: 0;
                }
            </style>
            <div class="card">
                <h2>${this.getAttribute('city')}</h2>
                <p>Temperature: ${this.getAttribute('temperature')}°C</p>
                <p>Weather: ${this.getAttribute('weather')}</p>
            </div>
        `;
    }
}

customElements.define('weather-card', WeatherCard);

const weatherCardsContainer = document.getElementById('weather-cards-container');
const citySearch = document.getElementById('city-search');
const searchBtn = document.getElementById('search-btn');

const defaultCities = ['London', 'New York', 'Tokyo', 'Seoul'];

async function getWeatherData(city) {
    try {
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
        const geoData = await geoResponse.json();
        const { latitude, longitude } = geoData.results[0];

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherResponse.json();
        return {
            city,
            temperature: weatherData.current_weather.temperature,
            weather: weatherData.current_weather.weathercode, // You might want to map this to a string
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

function renderWeatherCard(weatherData) {
    if (!weatherData) return;
    const weatherCard = document.createElement('weather-card');
    weatherCard.setAttribute('city', weatherData.city);
    weatherCard.setAttribute('temperature', weatherData.temperature);
    weatherCard.setAttribute('weather', weatherData.weather);
    weatherCardsContainer.appendChild(weatherCard);
}

async function loadDefaultWeather() {
    for (const city of defaultCities) {
        const weatherData = await getWeatherData(city);
        renderWeatherCard(weatherData);
    }
}

searchBtn.addEventListener('click', async () => {
    const city = citySearch.value;
    if (city) {
        const weatherData = await getWeatherData(city);
        if(weatherData) {
            weatherCardsContainer.innerHTML = ''; // Clear existing cards
            renderWeatherCard(weatherData);
        }
    }
});

loadDefaultWeather();



const themeToggle = document.getElementById('theme-toggle');

const body = document.body;



themeToggle.addEventListener('click', () => {

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {

        localStorage.setItem('theme', 'dark-mode');

    } else {

        localStorage.removeItem('theme');

    }

});



// Check for saved theme preference



if (localStorage.getItem('theme') === 'dark-mode') {



    body.classList.add('dark-mode');



}







const hourHand = document.querySelector('.hour-hand');



const minuteHand = document.querySelector('.minute-hand');



const secondHand = document.querySelector('.second-hand');



const currentDateElement = document.getElementById('current-date');



const digitalClockElement = document.getElementById('digital-clock');







function setDate() {



    const now = new Date();



    



    // Seoul is KST (UTC+9)



    const seoulTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Seoul"}));







    const seconds = seoulTime.getSeconds();



    const secondsDegrees = ((seconds / 60) * 360) + 90;



    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;







    const minutes = seoulTime.getMinutes();



    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;



    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;







    const hours = seoulTime.getHours();



    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;



    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;







    const digitalHours = String(hours).padStart(2, '0');



    const digitalMinutes = String(minutes).padStart(2, '0');



    const digitalSeconds = String(seconds).padStart(2, '0');



    digitalClockElement.textContent = `${digitalHours}:${digitalMinutes}:${digitalSeconds}`;



}







function setCurrentDate() {



    const now = new Date();



    const seoulTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Seoul"}));



    const year = seoulTime.getFullYear();



    const month = String(seoulTime.getMonth() + 1).padStart(2, '0');



    const day = String(seoulTime.getDate()).padStart(2, '0');



    currentDateElement.textContent = `${year}/${month}/${day}`;



}







setInterval(setDate, 1000);







setDate();



setCurrentDate();








