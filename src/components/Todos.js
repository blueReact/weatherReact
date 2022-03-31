import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodos from './AddTodos';

const Todos = () => {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Drinking water",
            isCompleted: false
        },
        {
            id: 2,
            text: "Coding",
            isCompleted: false
        }
    ])

    //{"id":"b08ae7b9-1cc0-4470-ac0a-b88464dadf73","text":"dsds","isCompleted":false}

    const chnageTodotext = (e) => {
        setTodoText(e.target.value);
    }

    const addTodo = () => {

        if(todoText) {
            const newTodo = {
                id: uuidv4(),
                text: todoText,
                isCompleted: false
            }
            console.log(newTodo);
            setTodos([newTodo, ...todos]);
            setTodoText('');
        }
        else {
            alert('Enter something')
        }                
        
    }

    const deleteTodo = (id) => {
        console.log(id);
        const updatedRTo = todos.filter(todo => todo.id !== id)
        setTodos(updatedRTo);
    }
    
    return (
        <ul className="list-group">
            <AddTodos todoText={todoText} chnageTodotext={chnageTodotext}
                addTodo={addTodo} />
            {/* Moved to a diiferent file AddTodos     */}
            {/* <input type="text" 
            placeholder='Enter your todo' 
            value= {todoText}
            onChange={(e=> chnageTodotext(e))}/>
            <button onClick={addTodo}>Add</button> */}
            {
                todos.map(todo => {
                    return (
                        <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                            <div >{todo.text}</div>
                            <span onClick={() => deleteTodo(todo.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"></path><path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path><path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path></svg></span>
                        </li>
                    )
                })
            }
        </ul>
    )

}


export default Todos;