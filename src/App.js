import logo from './logo.svg';
import './App.css';
import {BrowserRoute,Routes,Route} from "react-router-dom"
import Home from './pages/Home'

function App() {
  return (
    <BrowserRoute>
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Home />}/>

      </Routes>
      
    </div>

    </BrowserRoute>
  );
}

export default App;
