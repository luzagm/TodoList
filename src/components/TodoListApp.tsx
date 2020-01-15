import React from 'react';
import TodoForm from './todo-form'
import TodoList from './todo-list'
import { TodoInterface } from '../interfaces'
import '../styles/styles.css'

const TodoListApp = () => {
  const [todos,setTodos] = React.useState<TodoInterface[]>([])

  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }
    
  function handleTodoUpdate(ev: React.ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = ev.currentTarget.value
    setTodos(newTodosState)
  }

  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    setTodos(newTodosState)
  }

  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodosState)
  }

  return (
    <div className="todo-list-app">
      <h1 className="todo-list-title">To do list</h1>
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}/>
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}/>
    </div>
  )
}

export default TodoListApp