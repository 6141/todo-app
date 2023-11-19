import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddTodoPage from "./components/AddTodoPage";
import IndividualTodoPage from "./components/IndividualTodoPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2> TODO APP</h2>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/add-todo" element={<AddTodoPage/>} />
            <Route path="/todo/:id" element={<IndividualTodoPage/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
