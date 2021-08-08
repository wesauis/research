const { NOT_FOUND, INVALID_SIZE } = require("../helper/error-codes.js");
const { createId, throwError } = require("../helper/utils.js");

const checkDescription = (description) => {
  if (description.length < 1 || description.length > 32) {
    throwError(INVALID_SIZE, 'description must have a size between 1 and 32 chars')
  }
};

const TODOS = [];
class TodoStore {
  async getTodos() {
    return TODOS;
  }

  async getTodo(todoId) {
    return TODOS.find((todo) => todo.id === todoId);
  }

  async createTodo({ done, description }) {
    checkDescription(description);

    const todo = {
      id: createId(),
      done: done ?? false,
      description: description,
    };

    TODOS.push(todo);
    return todo;
  }

  async updateTodo(todoId, { done, description }) {
    const index = TODOS.findIndex((todo) => todo.id === todoId);

    if (index === -1) throwError(NOT_FOUND) 

    if (done != null) {
      TODOS[index].done = done;
    }

    if (description != null) {
      checkDescription(description);
      TODOS[index].description = description;
    }

    return TODOS[index];
  }

  async deleteTodo(todoId) {
    const index = TODOS.findIndex((todo) => todo.id === todoId);

    if (index === -1) throwError(NOT_FOUND) 

    TODOS.splice(index, 1);
    return true;
  }
}

module.exports = TodoStore;
