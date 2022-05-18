import React from "react";
import BlogPosts from "./BlogPosts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./Article";
import "./App.css";
import { data } from "./data";

function App() {
  return (
    <div className="app">
      <Router>
        <h1>Glimpse Blog</h1>
        <Routes>
          <Route path="/" element={<BlogPosts data={data} />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
