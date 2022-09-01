import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route,Routes, Link} from "react-router-dom";
import { Fib } from './Fib';
import { OtherPage } from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Fibonacci  Calculator</h1>
        <Link to='/'>Home</Link>
        <Link to='/otherpage'>Next Page</Link>
      </header>

      <div>
        <Routes>
        <Route exact path='/' element={<Fib/>}/>
        <Route path='/otherpage' element={<OtherPage/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
