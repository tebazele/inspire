import { ImagesController } from "./Controllers/ImagesController.js";
import { MyDatesController } from "./Controllers/MyDatesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  weatherController = new WeatherController();

  myDatesController = new MyDatesController();
}

window["app"] = new App();
