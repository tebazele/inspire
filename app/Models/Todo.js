import { generateId } from "../Utils/generateId.js"

export class Todo {
  constructor(data) {
    this.completed = data.completed || false
    this.description = data.description || ''
    this.id = data.id
  }

  get TodoTemplate() {
    if (!this.completed) {
      return `
            <input type="checkbox" onchange="app.todosController.completeTodo('${this.id}')">
              <label class="ms-2">
                ${this.description}
              </label>
              <i class="mdi mdi-trash-can selectable" onclick="app.todosController.removeTodo('${this.id}')"> </i><br>`
    } else {
      return `
            <input type="checkbox" checked onchange="app.todosController.completeTodo('${this.id}')">
              <label class="ms-2">
                ${this.description}
              </label>
              
              <i class="mdi mdi-trash-can selectable" onclick="app.todosController.removeTodo('${this.id}')"> </i><br>
              `
    }

  }
}