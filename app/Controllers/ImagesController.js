import { appState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { imagesService } from "../Services/ImagesService.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawImage() {
    // console.log(appState.image);
    let imageObject = appState.image
    document.querySelector('body').style.backgroundImage = `url("${imageObject.ImageTemplate}")`
    setText('img-author', imageObject.author)
}
export class ImagesController {
    constructor() {
        // console.log('images controller linked up');
        appState.on('image', _drawImage)
        this.getImage()
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            console.error(error)
        }
    }
}