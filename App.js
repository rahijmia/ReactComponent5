import logo from './logo.svg';
import './App.css';

function App() {
const nayoks=['Anwar','Jafor','Alomgir','Salman']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>

       
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" Job="Dorshok"></Person>
       
      </header>
    </div>
  );


  
function Person(props){ 
  return ( 
  <div style={{border:'2px solid gold',width:'400px'}}>
    <h3>My Name:{props.name}</h3>
    <p>My Profession:{props.job}</p>
  </div>
  )
}
  }

export default App;
