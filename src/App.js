import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import Home from '@pages/Home';
import About from '@pages/About';
import NoPage from '@pages/NoPage';
import Layout from '@components/Layout';

import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;