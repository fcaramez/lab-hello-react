import logo from "./logo.svg";
import "./App.css";
import Components from "./Components/Components/Components";
import Declarative from "./Components/Declarative/Declarative";
import Jsx from "./Components/Jsx/Jsx";
import Logo from "./Components/Logo/Logo";
import MainText from "./Components/MainText/MainText";
import Paragraph from "./Components/Paragraph/Paragraph";
import SingleWay from "./Components/SingleWay/SingleWay";

function App() {
  return (
    <div className="App">
      <div className="backg">
        <Logo />
        <div className="main-text">
          <MainText />
          <Paragraph />
        </div>
      </div>
      <div className="images">
        <Declarative />
        <Components />
        <SingleWay />
        <Jsx />
      </div>
    </div>
  );
}

export default App;
