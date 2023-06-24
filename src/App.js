import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import CreateRecipe from "./components/create-recipe";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.svg";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          <Link to="/" className="navbar-brand">
            MERN-Stack Recipe Management
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create a New Recipe
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<TodosList />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/create" element={<CreateRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
