import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Todos from './components/Todos';
import Weather from './components/weather';

const Welcome = (props) => {
  // return <h1>Welcome {props.user}</h1>

  if(props.user === undefined) return <h1>Welcome guest</h1>
  else return <h1>Welcome {props.user}</h1>
}

function App() {
  return (
    <div className="App container">
      <h1>Todo react</h1>
      {/* <Welcome user="Suvroto"/>
      <Message/> */}
      <Todos/>
      <Weather/>
    </div>
  );
}

export default App;
