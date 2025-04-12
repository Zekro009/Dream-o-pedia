import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="welcome-box">
      <h1>Welcome to Dream-o-pedia</h1>
      <p className="quote">"Wonder into the world of dreams"</p>
    </div>
  );
}

function DiscussionForum() {
  return <h2>Discussion Forum</h2>;
}

function About() {
  return <h2>About Dream-o-pedia</h2>;
}

function PublishDream() {
  return <h2>Publish Your Dream</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/discussion-forum">Discussion Forum</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/publish-dream">Publish Your Dream</Link>
              </li>
            </ul>
          </nav>
          <Home />
        </header>
      </div>
    </Router>
  );
}

export default App;
