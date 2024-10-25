import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('/');

  return (
    <Router>
      <div>
        <nav>
          <ul className="tab-list">
            <li className={`tab-item ${activeTab === '/' ? 'tab-selected' : ''}`}>
              <Link to="/" onClick={() => setActiveTab('/')}>Home</Link>
            </li>
            <li className={`tab-item ${activeTab === '/dashboard' ? 'tab-selected' : ''}`}>
              <Link to="/dashboard" onClick={() => setActiveTab('/dashboard')}>Dashboard</Link>
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