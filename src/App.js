import "./assests/css/App.css";
import "./assests/css/slider.css";
import Header from "./components/header/header.jsx";
import Toggles from "./components/toggles/toggles.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="password-generator">
        <div className="password-output">
          <span className="password-output-span">dada</span>
          <button className="generate-button" type="button">
            Generate
          </button>
        </div>
        <div className="slider">
          <input
            className="length-slider"
            type="range"
            min="4"
            max="40"
            step="1"
          />
        </div>
        <div className="toggle-div">
          <Toggles />
        </div>
      </div>
    </div>
  );
}

export default App;
