const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const city = document.getElementById('city');
const inputEl = document.getElementById('input-el');
const submitBtn = document.getElementById('submit-btn');





submitBtn.addEventListener('click', () =>{
    let cityName = inputEl.value.trim();
    let searchName = cityName.toString();
    inputEl.value = "";
    
    if (!cityName){
        alert("Please enter a city name!")
        return;
    }
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchName}&appid=3af68efb4f427c9b53ec2c6d8bffbf4e&units=metric`)
.then(res => res.json())
.then(data => {
    city.textContent = data.name
    temp.textContent = `Temperature: ${data.main.temp}°C`
    weather.textContent = `Weather: ${data.weather[0].description}`
})
.catch(error =>  {
    console.error("Not found!!", error)
})
});
