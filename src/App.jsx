import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';
import { Home } from './components/Home/Home';


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
