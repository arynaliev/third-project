import "./App.css";
import { CustomButton } from "./components/customButton/CustomButton";
import { CustomInput } from "./components/customInput/CustomInput";
// import Header from "./components/header/Header";
// import { Header } from "./components/header/Header";

function App() {
  const onClickHandler = () => {
    alert("clicked");
  };

  const showDate = () => {
    console.log(new Date().toLocaleString());
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <CustomButton onClickHandler={onClickHandler} text="Click" />
      <CustomButton onClickHandler={showDate} text="Today's date" />

      <br />

      <CustomInput onChangeHandler={onInputChange} />
    </div>
  );
}

export default App;
