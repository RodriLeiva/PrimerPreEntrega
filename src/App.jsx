import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';

function App() {

  const handleClick = () =>{
    alert("I want some stuffs!");
  }
    return (
    <div>
      <Navbar/>
      <Button greeting="Make an Order!" handleClick = {handleClick}/>
      <h1 style= {{color: "red" }}>Tornado Motorsport</h1>
    </div>
  );
}

export default App;
