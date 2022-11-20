export class MyDate {
    constructor() {
        this.time = this.ComputeTime
    }

    get ComputeTime() {
        let now = new Date()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()
        let localTime = now.toLocaleTimeString()
        let lengthString = localTime.length
        let amOrPm = localTime[lengthString - 2] + localTime[lengthString - 1]
        return (hours + ':' + minutes + ':' + seconds + ' ' + amOrPm)

    }



}