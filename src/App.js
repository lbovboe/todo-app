import React, {useState,useEffect}from 'react'; // state for all the fields which we wanna get info from 
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[])
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[status,todos])

  const filterHandler =()=>{
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo=> todo.complete === true));
        break
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo=> todo.complete === false));
        break
      default:
        setFilteredTodos(todos);
        break
    }
  }

  const saveLocalTodos =() =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const getLocalTodos =() =>{
    if(localStorage.getItem("todos") !== null){
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className = "App">
      <header>
        <h1>Paul's Todo List</h1>
      </header>
      <Form 
        inputText = {inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText ={setInputText}
        setStatus ={setStatus}
        />
      <TodoList filteredTodos= {filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
