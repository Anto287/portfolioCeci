import React from 'react';
import { useNavigate } from 'react-router-dom';

import '@styles/TopBar.css';

const ImgLoader = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/${path}`, { replace: true }); 
  }

  return (
    <div className="topbar">
      <div className='container-page'>
        <p onClick={() => handleClick('home')}>Cecilia Ferrari</p>
        <p onClick={() => handleClick('about')}>(About)</p>
        <p>(Archive)</p>
      </div>
      <div className='container-contact'>
        <p>(Email)</p>
        <p>(Instagram)</p>
        <p>(Linkedin)</p>
      </div>
    </div>
  );
};
  
export default ImgLoader;