import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import TodoForm from "./components/Form";
import Todos from "./components/todos";
import TodoDetail from "./components/todoDetail";




const  App = () =>{
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h2> ToDO List App in redux</h2>
        <Routes>
         <Route path='/' element={<TodoForm/>}/>
         </Routes>
        <Routes>
         <Route path="/todo/:name/:description" element={<TodoDetail/>} />
         <Route path="/" element={<Todos/>} />
         </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;

