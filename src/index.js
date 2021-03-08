import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TodoList from './TodoList'

var destination = document.querySelector('#list-container')

ReactDOM.render(
  <div>
    <h1>Hello! Welcome to my Todo List!</h1>
    <p>Created by Andrew Zhang for PCL</p>

    <h4>
        Type your task below and click the Add button to get started! <br/>
        Simply double click an item to remove it.
    </h4>
    <TodoList />
  </div>,
  destination
)