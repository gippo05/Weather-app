const temp = document.getElementById('temp');


fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=3af68efb4f427c9b53ec2c6d8bffbf4e')
.then(res => res.json())
.then(data => {
    temp.textContent = `Temperature: ${data.main.temp}°C`
})
.catch(error =>  {
    console.error("Not found!!", error)
})