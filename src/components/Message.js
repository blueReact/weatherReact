import React, {useState} from "react";


const Message = () => {
    const [message, setMessage] = useState("Please update your browser");

    function sayHello(name){
        setMessage(name);
    }
    return (
        <div className="message">
            <p>{message}</p>
            <button onClick = {()=> sayHello('subroto')}>Update</button>
        </div>
    )
}


export default Message;