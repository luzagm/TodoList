import React from 'react';

export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}
  
export interface TodoItemInterface {
  handleTodoUpdate: (ev: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  todo: TodoInterface;
}

export interface TodoListInterface {
  handleTodoUpdate: (ev: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  todos: TodoInterface[]
}

export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}