import './App.css';
import Checkout from './Components/Checkout/Checkout';
import DisplayContent from './Components/DisplayComtent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
      <Router>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/display" element={<DisplayContent/>}/>
            <Route path="/order" element={<PlaceOrder/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="" element={<MainPage/>}/>
          </Routes>
        </div>
        </Router>
  );
}

export default App;
