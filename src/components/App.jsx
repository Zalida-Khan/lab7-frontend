import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Countries';
import Details from './Details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries" element={<Countries />}>
          <Route path=":cca2" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;