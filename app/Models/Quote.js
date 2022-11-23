export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
        <p class="py-5 quote fs-5">"${this.content}"</p>
          <h3 class="quote-author">${this.author}</h3>
          `
    }
}