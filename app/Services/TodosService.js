import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"

// @ts-ignore
let myTodoApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/jeanne/todos'
})
class TodosService {
    async getTodos() {
        try {
            let response = await myTodoApi.get()
            // console.log(response.data);
            appState.myTodos = response.data.map(t => new Todo(t))
            // console.log(appState.myTodos);
        } catch (error) {
            console.error(error)
        }
    }
    async createTodo(todoDescription) {
        try {
            let newTodo = new Todo(todoDescription)
            // console.log(newTodo)
            let response = await myTodoApi.post('', newTodo)
            // console.log(response.data);
            appState.myTodos = [...appState.myTodos, response.data]

        } catch (error) {
            console.error(error)
        }
    }

}

export const todosService = new TodosService()