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