import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product';

function App() {
  return (
    <div className="App space-y-5">
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/:id' element={ <Product /> } />
      </Routes>
    </div>
  );
}

export default App;
