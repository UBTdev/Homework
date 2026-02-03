"use strict";

let todos = [];

const todoKeys = {
  ID: "id",
  LABEL: "label",
  IS_COMPLETED: "is_completed",
};

const errTodoNotFound = todoId => `Todo with ${todoId} is not found!`;

const getNewTodoId = (todos) => todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.ID]), 0) + 1;

// ===== CRUD ======
// OT FANATKY Laravel

// Create
const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.ID]: getNewTodoId(todos),
    [todoKeys.LABEL]: text,
    [todoKeys.IS_COMPLETED]: false,
  };
  todos.push(newTodo)
  return newTodo;
}

// Read
const getTodoById = (todos, todoId) => {
  return todos.find(todo => todo[todoKeys.ID] === todoId);
};

const getAllTodos = (todos) => {
    return todos;
};

const printTodo = (todo) => {
  if (!todo) {
    console.error('Todo not found');
    return;
  }
  console.table(todo);
};

const printAllTodos = (todos) => {
    console.table(todos);
};

// Update
const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.ID] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.IS_COMPLETED] = !todo[todoKeys.IS_COMPLETED];
  printTodo(todo);
  return todo;
}

const editLabelTodoById = (todos, todoId, newLabel) => {
  const todo = todos.find((todo) => todo[todoKeys.ID] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.LABEL] = newLabel;
  printTodo(todo);
  return todo;
}

// Delete
const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.ID] === todoId);
  if (todoIndex == -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  printAllTodos(todos);
  return todos;
}

const deleteAllTodos = (todos) => {
  if (todos.length === 0) {
    console.error(`Todo list is empty!`);
    return todos;
  }
  todos.length = 0;
  return todos;
}
// createTodo(todos, "New task");
