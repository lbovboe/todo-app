import React from 'react';

const Todo=({text,setTodos,todo,todos})=>{
    // Events
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id !== todo.id));
        
    }
    const completeHandler = ()=>{
        setTodos(todos.map(item=>{
            if (item.id === todo.id){
                return {
                    ...item, complete:!item.complete
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.complete ? "completed" : ""}`}>{text}</li>
            <button onClick ={completeHandler} className="complete-btn">
                <i className ="fas fa-check"></i>
            </button>
            <button onClick = {deleteHandler} className="trash-btn">
                <i className ="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;