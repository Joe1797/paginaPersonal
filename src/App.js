import "./App.css";
import { Toaster } from "react-hot-toast";
import { Router } from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Router></Router>
      {/* <header className="App-header">
        <h1>Mi portafolio</h1>
      </header> */}
    </div>
  );
}

export default App;
