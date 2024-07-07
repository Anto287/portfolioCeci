import React, { useState } from 'react';
import '@styles/ImgLoaderStyle.css';

const ImgLoader = ({ src, alt, width, height, backgroundColor }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
  
    return (
      <div 
        className={`image-container ${loaded ? 'loaded' : ''}`} 
        style={{ width, height, backgroundColor }}
      >
        <img 
          src={src} 
          alt={alt} 
          onLoad={() => setLoaded(true)} 
          onError={() => setError(true)}
          style={{ display: error ? 'none' : 'block' }}
        />
        {(!loaded || error) && (
          <div className="fallback">
            <p>{alt || ''}</p>
          </div>
        )}
      </div>
    );
};
  
export default ImgLoader;