export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
        <p class="py-5 quote">"${this.content}"</p>
          <h4 class="quote-author">${this.author}</h4>
          `
    }
}