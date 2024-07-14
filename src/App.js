import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element={<Landing/>}/>
          <Route path ="/register" element={<Register/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
