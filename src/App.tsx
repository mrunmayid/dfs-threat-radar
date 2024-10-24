import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="tab-list">
            <li className="tab-item">
              <Link to="/">Home</Link>
            </li>
            <li className="tab-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;