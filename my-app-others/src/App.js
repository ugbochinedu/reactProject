// import logo from './logo.svg';
// import './App.css';
import Form from './components/form';

function App() {

  const collectedValue = (newValue) =>{
    console.log(newValue)
  }

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
      <Form collectValue ={collectedValue}/>
      {/* <Form /> */}
    </div>
  );
}

export default App;