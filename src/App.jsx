import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import React from "react";
import Notes from "./components/Notes";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Categorie from "./components/Categorie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Test />
      <Bouton /> */}
      <Router>
        <header className="App-header">
          <NavBar />
        </header>

        <Routes>
          <Route path="/Menu" element={<Menu />}></Route>
        </Routes>
        <Routes>
          <Route path="/Notes" element={<Notes />}></Route>
        </Routes>
        <Routes>
          <Route path="/Categorie" element={<Categorie />}></Route>
        </Routes>
       
      </Router>
    </div>
  );
}
export default App;
