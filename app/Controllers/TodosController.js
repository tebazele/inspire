import { todosService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"

function _drawMyTodos() {

}

export class TodosController {
    constructor() {
        // console.log('todo controller linked up');

    }

    async getTodos() {
        try {
            await todosService.getTodos()

        } catch (error) {
            console.error(error)
        }
    }

    createTodo() {
        window.event.preventDefault()
        let form = window.event.target
        let todoDescription = form.todo.value
        console.log(todoDescription);
        todosService.createTodo(todoDescription)
        // @ts-ignore
        form.reset()
    }
}