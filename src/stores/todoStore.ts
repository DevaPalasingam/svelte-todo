import { writable } from "svelte/store";

interface TodoItem {
  text: string;
  completed: boolean;
  id: number;
}

export const todos = writable<TodoItem[]>([]);

export const addTodo = (text: string) => {
  todos.update((curr) => {
    const newTodos = [...curr, { text, completed: false, id: Date.now() }];
    return newTodos;
  });
};

export const deleteTodo = (id: number) => {
  todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleCompleted = (id: number) => {
  todos.update((todos) => {
    let index = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
    }
    return todos;
  });
};
