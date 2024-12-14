async function buscar_clima() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric");
    return await response.json();
}

async function mostrar_clima() {
    const informacion_clima = await buscar_clima();
    const clima = informacion_clima.weather[0].main; 
    const descripcion = informacion_clima.weather[0].description;
    const temperatura = informacion_clima.main.temp;
    const sensacion_termica = informacion_clima.main.feels_like;
    const humedad = informacion_clima.main.humidity;
    const presion = informacion_clima.main.pressure;
    const temperatura_max = informacion_clima.main.temp_max;
    const temperatura_min = informacion_clima.main.temp_min;
    const icono = informacion_clima .weather[0].icon

    const iconoUrl = `https://openweathermap.org/img/wn/${icono}.png`

    document.getElementById("clima").innerText = "Clima: " + clima;
    document.getElementById("descripcion").innerText = "Descripción: " + descripcion;
    document.getElementById("temperatura").innerText = "Temperatura: " + temperatura + " °C";
    document.getElementById("sensacion-termica").innerText = "Sensación Térmica: " + sensacion_termica + " °C";
    document.getElementById("humedad").innerText = "Humedad: " + humedad + " %";
    document.getElementById("presion").innerText = "Presión: " + presion + " hPa";
    document.getElementById("temperatura-max").innerText = "Temperatura Máxima: " + temperatura_max + " °C";
    document.getElementById("temperatura-min").innerText = "Temperatura Mínima: " + temperatura_min + " °C";
    document.getElementById("icono").src=iconoUrl
}


mostrar_clima();
