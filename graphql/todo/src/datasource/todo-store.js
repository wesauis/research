const { ApolloError } = require("apollo-server");
const { randomBytes } = require("crypto");

const createId = () => randomBytes(16).toString("hex");

const checkHasFound = (todo) => {
  if (!todo) {
    throw new ApolloError("todo not found", "NOT_FOUND");
  }

  return todo;
};

const checkDescription = (description) => {
  if (description.length < 1 || description.length > 32) {
    throw new ApolloError(
      "description field must have between 1 and 32 characters",
      "INVALID_DESCRIPTION_SIZE"
    );
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
    checkHasFound(index !== -1);

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

    checkHasFound(index !== -1)

    TODOS.splice(index, 1);
    return true;
  }
}

module.exports = TodoStore;
