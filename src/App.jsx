import "./App.css";
import { CustomButton } from "./components/customButton/CustomButton";
import { Header } from "./components/header/Header";

function App() {
  const onClickHandler = () => {
    alert("clicked");
  };

  const onDateHandler = () => {
    console.log(new Date().toLocaleString());
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <CustomButton onClickHandler={onClickHandler} text="Click" />
      <CustomButton onClickHandler={onDateHandler} text="Today's date" />
    </div>
  );
}

export default App;
