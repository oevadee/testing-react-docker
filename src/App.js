import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <h1>Hello {process.env.REACT_APP_NAME}</h1>
      <p>test</p>
    </div>
  );
};
