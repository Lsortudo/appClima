import axios from 'axios';




export const pegarClima = async (cidade) => {
    const url = `https://goweather.herokuapp.com/weather/${cidade}`;
    const response = await axios.get(url);

    const dados = {
        temperatura: response.data.temperature,
        vento: response.data.wind,
        descricao: response.data.description,

        previsaoTemperatura1: response.data.forecast[1].temperature,
        previsaoVento1: response.data.forecast[1].wind,
        previsaoTemperatura2: response.data.forecast[2].temperature,
        previsaoVento2: response.data.forecast[2].wind,
        
        

    }
    
    return dados;
}