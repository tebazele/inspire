export class Weather {
    constructor(data) {
        this.highF = this.kelvinToFahrenheit(data.main.temp_max)
        this.lowF = this.kelvinToFahrenheit(data.main.temp_min)
        this.tempF = this.kelvinToFahrenheit(data.main.temp)
        this.feels_likeF = this.kelvinToFahrenheit(data.main.feels_like)
        this.highC = this.kelvinToCelsius(data.main.temp_max)
        this.lowC = this.kelvinToCelsius(data.main.temp_min)
        this.tempC = this.kelvinToCelsius(data.main.temp)
        this.feels_likeC = this.kelvinToCelsius(data.main.feels_like)
        this.icon = this.weatherIcon(data.weather['0']['icon'])
        this.description = data.weather['0']['description']
        this.isFahrenheit = true
    }

    get WeatherTemplate() {
        if (this.isFahrenheit) {
            return `
            <p class="pt-2">
                <span>High: ${this.highF}°<i class="mdi mdi-arrow-up"></i> </span>
                <span>Low: ${this.lowF}°<i class="mdi mdi-arrow-down"></i></span>
              </p>
              <h3>${this.tempF}°F</h3>
              <p>Feels like
                <span>${this.feels_likeF}°</span>
              </p>
              <div class="d-flex justify-content-center">
              <img src="${this.icon}" class="img-fluid weather-icon">
              </div>
              <p>${this.description}</p>
            `
        } else {
            return `
            <p class="pt-2">
                <span>High: ${this.highC}°<i class="mdi mdi-arrow-up"></i> </span>
                <span>Low: ${this.lowC}°<i class="mdi mdi-arrow-down"></i></span>
              </p>
              <h3>${this.tempC}°C</h3>
              <p>Feels like
                <span>${this.feels_likeC}°</span>
              </p>
              <div class="d-flex justify-content-center">
              <img src="${this.icon}" class="img-fluid weather-icon text-center">
              </div>
              <p>${this.description}</p>
            `
        }
    }

    kelvinToFahrenheit(temp) {
        let fTemp = (temp - 273.15) * 9 / 5 + 32
        return Math.round(fTemp)
    }

    kelvinToCelsius(temp) {
        let cTemp = temp - 273.15
        return Math.round(cTemp)
    }

    weatherIcon(iconCode) {
        return `https://openweathermap.org/img/wn/${iconCode}.png`
    }
}