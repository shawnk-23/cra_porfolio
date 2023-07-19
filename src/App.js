import logo from './logo.svg';
import './App.css';
import DigiNavbar from './DigiNavbar';
import DigiFooter from './DigiFooter';
import DigiHome from './DigiHome';

function App() {
  return (
    <div className="App">
      <h1>Welcome to DigiProfile!</h1>
      <DigiNavbar/>
      <DigiHome/>
      <DigiFooter/>
    </div>
  );
}

export default App;
