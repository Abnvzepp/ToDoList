import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/form';
import ToDoList from './components/todolist';



function App() {
  //State
  const [inputText, setInputText] = useState('');
  const [ToDos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered ] = useState([]);

  useEffect(() =>{
    getLocalTodo();
  },[])

  useEffect(() =>{
    filterHandler();
    saveLocalTodo();
  },[ToDos, status])

  //Function

  const filterHandler =(e) =>{
    switch(status){
      case "completed":
        setFiltered(ToDos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(ToDos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltered(ToDos);
        break;
    }
  } 

  //Save to Local Storage

  const saveLocalTodo =() =>{
      localStorage.setItem('ToDos', JSON.stringify(ToDos));
  }

  const getLocalTodo =() =>{
    if(localStorage.getItem('ToDos') === null){
      localStorage.setItem('ToDos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('ToDos'));
      setToDos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
  <h1>ToDo List </h1>
      </header>
      <Form 
      ToDos ={ToDos} 
      setToDos ={setToDos} 
      inputText = {inputText} 
      setInputText={setInputText}
      setStatus = {setStatus} />
      <ToDoList ToDos ={ToDos}  setToDos ={setToDos} filtered ={filtered}/>
    </div>
  );
}

export default App;
