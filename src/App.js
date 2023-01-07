import './App.css';
import DisplayContent from './Components/DisplayComtent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <MainPage/> */}
      <DisplayContent/>
    </div>
  );
}

export default App;
