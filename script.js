document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get city from the input
    let city = document.getElementById('city').value.toLowerCase();

    // Hardcoded weather data
    const weatherData = {
        london: {
            description: 'Sunny',
            temperature: 25,
            humidity: 40
        },
        newyork: {
            description: 'Cloudy',
            temperature: 22,
            humidity: 50
        },
        mumbai: {
            description: 'Rainy',
            temperature: 30,
            humidity: 70
        },
        tokyo: {
            description: 'Clear Sky',
            temperature: 20,
            humidity: 35
        }
    };

    // Display result based on city
    if (weatherData[city]) {
        let data = weatherData[city];
        document.getElementById('weather-result').innerHTML = `
            <p>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}: ${data.description}</p>
            <p>Temperature: ${data.temperature} °C</p>
            <p>Humidity: ${data.humidity}%</p>
        `;
    } else {
        document.getElementById('weather-result').innerText = 'City not found!';
    }
});
