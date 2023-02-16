import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';


export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/*" element={<NotFound />} />;
      </Routes>
    </div>
  );
};
