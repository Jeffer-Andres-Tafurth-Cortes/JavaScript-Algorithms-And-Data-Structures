let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = '9f0e8a32a514b3a62a91f40875c1b96a';
let kelvinCelcious = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response)) 
}

function mostrarDatosClima(response){
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = response.name;
    const paisNombre = response.sys.country;
    const temperatura = response.main.temp;
    const humedad = response.main.humidity;
    const descripcion = response.weather[0].description;
    const icono = response.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre} `;

    const ciudadTemperatura = document.createElement('p');
    let diferenciaTemperaturas = temperatura - kelvinCelcious;
    ciudadTemperatura.textContent = `La temperatura es: ${Math.floor(diferenciaTemperaturas)}°C`;

    const ciudadHumedad = document.createElement('p');
    ciudadHumedad.textContent = `La humedad es: ${humedad}%`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const ciudadDescripcion = document.createElement('p');
    ciudadDescripcion.textContent = `La descripcion meteorologica de hoy es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(ciudadTemperatura);
    divDatosClima.appendChild(ciudadHumedad);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(ciudadDescripcion);
}
