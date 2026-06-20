const url = `https://pokeapi.co/api/v2/pokemon/lugia`

//fetch(url).then(response => response.json())
//            .then(pokemon => console.log(pokemon))

const climaUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'


fetch(climaUrl).then(res => res.json()).then(clima => console.log(clima))
