import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawMyTodos() {
    let template = ''
    appState.myTodos.forEach(t => template += t.TodoTemplate)
    setHTML('mytodo', template)
}

function _drawTodoCount() {
    setText('todo-count', appState.todoCount)
}

export class TodosController {
    constructor() {
        // console.log('todo controller linked up');
        this.getTodos()
        appState.on('myTodos', _drawMyTodos)
        appState.on('todoCount', _drawTodoCount)

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
        // console.log(todoDescription);
        todosService.createTodo(todoDescription)
        // @ts-ignore
        form.reset()

    }

    async completeTodo(todoId) {
        // trigger this on change when checkbox is clicked
        // find the Todo by id, flip the bool .completed
        // edit the Todo in the api
        // redraw Todos from api - getTodos()
        await todosService.completeTodo(todoId)

    }

    async removeTodo(todoId) {
        if (Pop.confirm('Are you sure you want to delete this todo?', '')) {
            await todosService.removeTodo(todoId)
            this.getTodos()

        }
    }

    getTodoCount() {
        todosService.getTodoCount()

    }
}