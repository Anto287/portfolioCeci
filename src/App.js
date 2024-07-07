import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import Home from '@pages/Home';
import Layout from '@components/Layout';

import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;