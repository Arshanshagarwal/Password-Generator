import "./assests/css/App.css";
import "./assests/css/slider.css";
import Header from "./components/header/header.jsx";
import Toggles from "./components/toggles/toggles.jsx";
import { RandomPassword } from "./utils/RandomPassword";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 8,
      newLength: 8,
      pwd: "",
      upperCase: true,
      lowerCase: true,
      numeric: false,
      symbol: false,
    };
  }

  componentDidMount() {
    this.generatePwd();
  }

  generatePwd() {
    const { upperCase, lowerCase, numeric, symbol, length } = this.state;
    let pwd = new RandomPassword()
      .setLength(length)
      .setLowerCase(lowerCase)
      .setUpperCase(upperCase)
      .setNumberCase(numeric)
      .setSymbol(symbol)
      .generate();
    this.setState({ pwd });
  }

  handleCheckbox(e) {
    const { name, checked } = e.target;

    this.setState(
      {
        [name]: checked,
      },
      () => this.generatePwd()
    );
  }

  strength() {
    let s = this.state.length;
    if (s > 30) return "What is this monstrosity?";
    else if (s > 20) return "Very Strong";
    else if (s === 10 || s === 11) return "Fairly Strong Password";
    else if (s > 10) return "Strong Password";
    else if (s > 4) return "Weak";
    else return "Even a child can predict this";
  }

  handleLenghtChange({ target: { value } }) {
    if (value >= 40) {
      value = 40;
    }
    this.setState({ length: value }, () => this.generatePwd());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="password-generator">
          <div className="password-output">
            <span
              className="password-output-span"
              ref={(textarea) => (this.textArea = textarea)}
            >
              {this.state.pwd}
            </span>

            <button
              className="generate-button"
              type="button"
              onClick={() => {
                this.generatePwd(this.state);
              }}
            >
              Generate
            </button>

            <button
              className="copy-button"
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(this.state.pwd);
              }}
            >
              Copy Password
            </button>
          </div>
          <div className="slider">
            <div className="password-strength">{this.strength()}</div>
            <div className="slider-label">Length : {this.state.length}</div>
            <input
              className="length-slider"
              type="range"
              min="4"
              max="40"
              step="1"
              value={this.state.length}
              onChange={(e) => this.handleLenghtChange(e)}
            />
          </div>
          <div className="toggle-div">
            <Toggles
              state={this.state}
              handleCheckbox={(e) => this.handleCheckbox(e)}
            />
          </div>
        </div>
        <div className="footer">
          Made with <i className="fas fa-heart heart"> </i> and React by{" "}
          <a href="https://github.com/Arshanshagarwal" className="footer-link">
            Arshansh
          </a>
        </div>
      </div>
    );
  }
}

export default App;
