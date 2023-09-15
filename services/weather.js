const xhr = new XMLHttpRequest();

let APIKey = "f0e453764bbb80bed07b24485f43c370"

function makeRequest(){
    var cityName = document.getElementById("searchbar").value;

    console.log('CITY : ' + cityName);

    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=7536aec06435d5e6acc6c0d95ce8e393&lang=fr&units=metric");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
            document.getElementById("location").innerHTML = data.name;
            document.getElementById("meteo").innerHTML = data.main.temp + "°C";
            let desc = data.weather[0].description;
            desc.charAt(0).toUpperCase() + desc.slice(1);
            document.getElementById("temp").innerHTML = desc;
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}

const all = () => makeRequest();
