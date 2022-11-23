export class MyDate {
    constructor() {
        this.time = this.ComputeTime
    }

    get ComputeTime() {
        let now = new Date()
        let hours = now.getHours()
        hours = hours % 12
        hours = hours ? hours : 12
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()
        let minutesString = ''
        let secondsString = ''
        if (minutes < 10) {
            minutesString = minutes.toString().padStart(2, '0')
        } else {
            minutesString = minutes.toString()
        }
        if (seconds < 10) {
            secondsString = seconds.toString().padStart(2, '0')
        } else {
            secondsString = seconds.toString()
        }
        let localTime = now.toLocaleTimeString()
        let lengthString = localTime.length
        let amOrPm = localTime[lengthString - 2] + localTime[lengthString - 1]
        return (hours + ':' + minutesString + ':' + secondsString + ' ' + amOrPm)

    }



}