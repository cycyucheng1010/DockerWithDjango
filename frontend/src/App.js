//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
