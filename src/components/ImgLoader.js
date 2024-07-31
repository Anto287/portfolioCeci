import React, { useState, useEffect } from 'react';
import '@styles/ImgLoaderStyle.css';
import AspectRatio from 'react-aspect-ratio';
import 'react-aspect-ratio/aspect-ratio.css';

const ImgLoader = ({ src, alt, style = {}, styleImg = {}, styleTextError = {}, containerClass = '', imgClass = '',  ratio = '1/1'}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [styleImmagine, setStyleImmagine] = useState({});
    
    useEffect(() => {
      let value = {...styleImg, display: error ? 'none' : 'block'};

      setStyleImmagine({...value})
    }, [error, styleImg]);

    return (
      <div 
        className={`image-container ${loaded ? 'loaded' : ''} ${containerClass}`} 
        style={style}
      >
        <AspectRatio ratio={ratio}>
          <img 
            src={src} 
            alt={alt} 
            onLoad={() => setLoaded(true)} 
            onError={() => setError(true)}
            style={styleImmagine}
            className={`${imgClass}`}
          />
        </AspectRatio>
        {(!loaded || error) && (
          <div className="fallback" style={styleTextError}>
            <p>{alt || ''}</p>
          </div>
        )}
      </div>
    );
};
  
export default ImgLoader;