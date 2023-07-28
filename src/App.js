import logo from './logo.svg';
import './App.css';

function App() {
  let age = 0;
  const increaseAge= () =>{
    age=age+1;
    console.log(age);
  }
  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increas age </button>
    </div>
  );
}

export default App;
