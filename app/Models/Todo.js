import { generateId } from "../Utils/generateId.js"

export class Todo {
    constructor(description) {
        this.completed = false
        this.description = description
        this.id = generateId()
    }

    get TodoTemplate() {
        if (!this.completed) {
            return `
            <input type="checkbox">
              <label class="ms-2">
                ${this.description}
              </label>
              <i class="mdi mdi-trash-can"> </i>`
        } else {
            return `
            <input type="checkbox" checked>
              <label class="ms-2">
                ${this.description}
              </label>
              <i class="mdi mdi-trash-can"> </i>`
        }

    }
}