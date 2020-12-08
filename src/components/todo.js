import React from 'react';

const ToDo =({text,ToDos, ToDo, setToDos}) => {
    const deleteHandler =() =>{
        setToDos(ToDos.filter((el) => el.id !== ToDo.id));
    }

    const completeHandler =() =>{
        setToDos(ToDos.map((el) =>{
            if(el.id === ToDo.id){
                return{
                    ...el, completed: !el.completed
                };
            }
            return el;
        }));
    }

    return(
        <div className="todo">
            <li className={`todo-item ${ToDo.completed ? "completed" : " " }`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick ={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default ToDo;