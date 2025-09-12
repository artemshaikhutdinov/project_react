import "./App.css";
import AgeInfo from "./components/AgeInfo/AgeInfo";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div>
      <p>Hello, React!</p>
      <Greeting />
      <Goodbye />
      <AgeInfo age={23} />
      <AgeInfo age={26} />
    </div>
  );
}

export default App;
