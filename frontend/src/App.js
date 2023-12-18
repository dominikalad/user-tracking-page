
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import ReportPage from './components/ReportPage';
import './styles/App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/report' element={<ReportPage />}/>
        </Routes>
      </div>
    </Router>

  );
};

export default App;
