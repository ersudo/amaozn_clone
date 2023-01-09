import './App.css';
import DisplayContent from './Components/DisplayComtent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <MainPage/> */}
      {/* <DisplayContent/> */}
      <PlaceOrder/>
    </div>
  );
}

export default App;
