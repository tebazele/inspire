import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"


// @ts-ignore
let imageApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})
class ImagesService {
    async getImage() {
        try {
            // console.log('image service linked up -- get image');
            let response = await imageApi.get()
            // console.log('got an image!', response.data);
            appState.image = new Image(response.data)
        } catch (error) {
            console.error(error)
        }
    }


}

export const imagesService = new ImagesService()