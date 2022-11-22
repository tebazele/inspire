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
            appState.todoCount = appState.myTodos.length
            // console.log(appState.myTodos);
        } catch (error) {
            console.error(error)
        }
    }
    async createTodo(todoDescription) {
        try {
            let newTodo = new Todo({})
            newTodo.description = todoDescription
            newTodo.completed = false
            console.log(newTodo)
            let response = await myTodoApi.post('', newTodo)
            console.log(response.data);
            appState.myTodos = [...appState.myTodos, new Todo(response.data)]
            appState.todoCount++
            // console.log(appState.myTodos);

        } catch (error) {
            console.error(error)
        }
    }
    async completeTodo(todoId) {
        // find the Todo by id, flip the bool .completed
        // edit the Todo in the api
        let foundTodo = appState.myTodos.find(t => t.id == todoId)
        foundTodo.completed = !foundTodo.completed
        // console.log(foundTodo);
        const response = await myTodoApi.put(todoId, foundTodo)
        // console.log(response.data);
    }
    async removeTodo(todoId) {
        let foundTodo = appState.myTodos.find(t => t.id == todoId)
        let response = await myTodoApi.delete(foundTodo.id)
        console.log(response.data);
        appState.todoCount--
    }

    getTodoCount() {
        console.log(appState.myTodos.length);
    }

}

export const todosService = new TodosService()