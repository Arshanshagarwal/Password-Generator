import "./App.css";
import Header from "./components/header/header.jsx";
import Slider from "react-input-slider";

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

        <Slider axis="x" className="length-slider" />
      </div>
    </div>
  );
}

export default App;
