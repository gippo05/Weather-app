const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const city = document.getElementById('city');
const inputEl = document.getElementById('input-el');
const submitBtn = document.getElementById('submit-btn');
const errorEl = document.getElementById('error-el');




submitBtn.addEventListener('click', async () => {
    let cityName = inputEl.value.trim();
    inputEl.value = "";
    errorEl.textContent = "";

    if (!cityName) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3af68efb4f427c9b53ec2c6d8bffbf4e&units=metric`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        city.textContent = data.name;
        temp.textContent = `${data.main.temp}°C`;
        weather.textContent = `${data.weather[0].description}`;
    } catch (error) {
        city.textContent = "";
        temp.textContent = "Temperature: ";
        weather.textContent = "Weather: ";
        errorEl.textContent = "Location not found! Please try again.";
    }
});
