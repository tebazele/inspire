import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
    setHTML('weather-spot', appState.weather.WeatherTemplate)
}

export class WeatherController {
    constructor() {
        // console.log('weather controller linked up');
        appState.on('weather', _drawWeather)
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

    celsiusFahrenheitSwitch() {
        weatherService.celsiusFahrenheitSwitch()
    }

}