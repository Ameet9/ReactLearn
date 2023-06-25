import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <div className="App">
        <h2>Learning React</h2>
        <Navbar title="TextUtils"></Navbar>
        <div className="container my-3">
          <TextForm heading="Enter the Text below" />
        </div>
      </div>
    </>
  );
}

export default App;
