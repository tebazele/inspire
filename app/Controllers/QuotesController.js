import { appState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawQuote() {
    setHTML('quote-spot', appState.quote.QuoteTemplate)
}

export class QuotesController {
    constructor() {
        // console.log('quotes controller linked up');
        appState.on('quote', _drawQuote)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}