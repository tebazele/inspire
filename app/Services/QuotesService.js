import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";

// @ts-ignore
let quoteApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

class QuotesService {
    async getQuote() {
        try {
            // console.log('quote service linked up');
            let response = await quoteApi.get()
            // console.log('got me a quote', response.data);
            appState.quote = new Quote(response.data)
            // console.log('heres how my quote looks now', appState.quote);

        } catch (error) {
            console.error(error)
        }
    }

}

export const quotesService = new QuotesService()