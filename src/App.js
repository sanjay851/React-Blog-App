import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Navbar from './Components/Navbar';
import Data from './Components/Data';
import  Card  from './Components/Card';
function App() {
  return (
    <div>
      <Data>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/bollywood" element={<Bollywood/>}/>
    <Route path="/technology" element={<Technology/>}/>
    <Route path="/hollywood"element={<Hollywood/>}/>
    <Route path="/fitness" element={<Fitness/>}/>
    <Route path="/food" element={<Food/>}/>
    <Route path='/:category/:id' element={<Card/>} />
    </Routes>
    </BrowserRouter>
    </Data>
    </div>
  )
}
export default App;
