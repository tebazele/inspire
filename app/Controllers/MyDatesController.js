import { appState } from "../AppState.js";
import { myDatesService } from "../Services/MyDatesService.js";
import { setText } from "../Utils/Writer.js";

function _drawTime() {
    setText('time', appState.myDate)
}

export class MyDatesController {
    constructor() {
        // console.log('date controller linked up');
        appState.on('myDate', _drawTime)
        this.getDate()
    }

    getDate() {
        myDatesService.getDate()
        // console.log(appState.myDate);
        this.updateDate()
    }

    updateDate() {
        setInterval(myDatesService.getDate, 1000)
    }
}