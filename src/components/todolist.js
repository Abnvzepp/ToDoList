import React from 'react';
import ToDo from './todo';

const ToDoList =({ToDos, setToDos, filtered}) =>{
    return(
        <div className="todo-container">
      <ul className="todo-list">
            {filtered.map(todos => (
                <ToDo key ={todos.id} text={todos.text} ToDos={ToDos} ToDo ={todos} setToDos={setToDos} />
            ))}
      </ul>
    </div>
    );
}

export default ToDoList;