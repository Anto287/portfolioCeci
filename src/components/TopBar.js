import React, { useState } from 'react';
import '@styles/TopBar.css';

const ImgLoader = () => {
    return (
      <div className="topbar">
        <div className='container-page'>
            <p>Cecilia Ferrari</p>
            <p>About</p>
            <p>Archive</p>
        </div>
        <div className='container-contact'>
            <p>Email</p>
            <p>Instagram</p>
            <p>Linkedin</p>
        </div>
      </div>
    );
};
  
export default ImgLoader;