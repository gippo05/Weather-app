const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const city = document.getElementById('city');
const inputEl = document.getElementById('input-el');
const submitBtn = document.getElementById('submit-btn');
const errorEl = document.getElementById('error-el');
const icon = document.getElementById("icon");
const iconImage = document.getElementById("w-icon");




submitBtn.addEventListener('click', async () => {
    let cityName = inputEl.value.trim();
    inputEl.value = "";
    errorEl.textContent = "";
    let iconCode = "";
    let iconUrl = "";

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

        iconCode = `${data.weather[0].icon}`
        iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";

        iconImage.setAttribute('src', iconUrl)
        city.textContent = data.name;
        temp.textContent = Math.round(data.main.temp) + "°C";
        weather.textContent = `${data.weather[0].description}`;

    } catch (error) {
        city.textContent = "";
        temp.textContent = "";
        weather.textContent = "";
        errorEl.textContent = "Location not found! Please try again.";
    }
});


inputEl.addEventListener('keypress', (e) =>{
    if (e.key === "Enter"){
        submitBtn.click();
    }
})