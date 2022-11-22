import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Image.js').Image|null} */
  image = null

  /** @type {import('./Models/Quote.js').Quote|null} */

  quote = null

  /** @type {import('./Models/Weather.js').Weather|null} */
  weather = null
  /** @type {string|null} */
  myDate = null

  /** @type {import('./Models/Todo.js').Todo[]} */
  myTodos = []

  completedTodoCount = 0

  todoCount = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
