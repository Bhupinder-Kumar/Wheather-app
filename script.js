let p = fetch("https://goweather.herokuapp.com/weather/Aus");

p.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data, 'data');
    
    // Bind data to HTML elements
    document.getElementById('temperature').innerText = `Temp: ${data.temperature}`;
    document.getElementById('wind').innerText = `Wind: ${data.wind}`;
    document.getElementById('description').innerText = `${data.description}`;
});
