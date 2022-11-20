import { appState } from "../AppState.js";
import { MyDate } from "../Models/MyDate.js";

class MyDatesService {
    getDate() {
        let myDate = new MyDate()
        // console.log(myDate);
        appState.myDate = myDate.time
    }

}

export const myDatesService = new MyDatesService()