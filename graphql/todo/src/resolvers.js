const resolvers = {
  Query: {
    todos: (parent, args, { dataSources }, info) => {
      return dataSources.todoStore.getTodos();
    },
    todo: (parent, { id }, { dataSources }, info) => {
      return dataSources.todoStore.getTodo(id);
    },
  },
  Mutation: {
    createTodo: (parent, args, { dataSources }, info) => {
      return dataSources.todoStore.createTodo(args);
    },
    updateTodo: (parent, { id, ...args }, { dataSources }, info) => {
      return dataSources.todoStore.updateTodo(id, args);
    },
    deleteTodo: (parent, { id }, { dataSources }, info) => {
      return dataSources.todoStore.deleteTodo(id);
    },
  },
};

module.exports = { resolvers };
