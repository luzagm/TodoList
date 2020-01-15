import React from 'react';
import { render } from 'react-dom'
import TodoListApp from './components/TodoListApp'

const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)

