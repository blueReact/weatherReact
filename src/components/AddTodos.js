import React from 'react';

const AddTodos = (props) => {
    return (
        <div className="input-group mb-3">
            <input type="text"
                placeholder='Enter your todo'
                value={props.todoText}
                onChange={(e => props.chnageTodotext(e))} className="form-control"/>
          
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2"  onClick={props.addTodo}>Add</span>
            </div>
                        
        </div>
    )
}

export default AddTodos;