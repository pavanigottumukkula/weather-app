let btn = document.getElementById("btn");
let cityInput = document.getElementById("city");
let resultCard = document.getElementById("result");
let cityName = document.getElementById("cityName");
let temp = document.getElementById("temp");
let desc = document.getElementById("desc");

btn.addEventListener("click", function() {
    let cityNameValue = cityInput.value;
    
    if (cityNameValue === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "c1056557fd47a16e25dc9f37c355c3c0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                cityName.textContent = data.name;
                temp.textContent = Math.round(data.main.temp) + "°C";
                desc.textContent = data.weather[0].description;
                resultCard.classList.remove("d-none"); // Show the card
            } else {
                alert("City not found!");
            }
        })
        .catch(error => {
            console.log("Error:", error);
        });
});
