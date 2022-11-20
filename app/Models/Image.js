export class Image {
    constructor(data) {
        this.url = data.url
        this.imgUrl = data.imgUrl
        this.author = data.author
        this.largeImgUrl = data.largeImgUrl
    }

    get ImageTemplate() {
        return this.largeImgUrl
    }
}