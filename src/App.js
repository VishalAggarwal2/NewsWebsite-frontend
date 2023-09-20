import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Part from './components/Part';
import Nav from './components/Nav';
function App() {
  return (  <Router>
    <div className="App">
       <Nav></Nav>


    </div>
    </Router>
  );
}

export default App;
