import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";

// @ts-ignore
let weatherApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})
class WeatherService {
    async getWeather() {
        // console.log('weather service linked up');
        try {
            let response = await weatherApi.get()
            // console.log('got the weather yo', response.data);
            // console.log(response.data.weather['0']['icon']);
            appState.weather = new Weather(response.data)
            // Goddammit, work you stupid weather object
            // console.log('my weather object', appState.weather);
        } catch (error) {
            console.error(error)
        }
    }
    celsiusFahrenheitSwitch() {
        appState.weather.isFahrenheit = !appState.weather.isFahrenheit
        appState.emit('weather')
    }

}

export const weatherService = new WeatherService()