// import logo from './logo.svg';
// import './App.css';
// import Calculator from './components/Calculator/Calculator';
// import Number from './components/Calculator/Number';
// import CurrencyExchanger from './components/Currency/Currency';
// import ClassCal from './components/Calculator/ClassCal';
// import Money from './components/Currency/money';
import { useState } from 'react';
import Chat from './components/chat/chat';
import Message from './components/chat/message';
// import MyForm from './components/Form/MyForm';
// import Form from './components/form';

function App() {

  // const collectedValue = (newValue) =>{
  //   console.log(newValue)
  // }

  const[message, setMessage] = useState("")

  const receievedValueHandler = (msg)=>{
    setMessage(msg)
  }
  console.log(message);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Form collectValue ={collectedValue}/> */}
      {/* <Form /> */}
      {/* <MyForm/> */}
      {/* <Calculator/> */}
      {/* <Number/> */}
      {/* <CurrencyExchanger/> */}
      {/* <Money/> */}
      {/* <ClassCal/> */}
      <Chat collectedInputValue={receievedValueHandler} />
      <Message  receievedMessage ={message}/>
    </div>
  );
}

export default App;
