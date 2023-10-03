import "./App.css";
import Contacts from "./components/Contacts";
import Posts from "./components/Posts";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Contacts />
      <h1>Posts</h1>
      <Posts />
    </div>
  );
}

export default App;
