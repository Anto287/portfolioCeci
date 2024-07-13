import React from 'react';
import icon from '@images/img_home/image_1.png';
import ImgLoader from '@components/ImgLoader';
import TopBar from '@components/TopBar';

import '@styles/Home.css';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${icon})`,
  };

  return (
    <div className="container-home">
      <TopBar />
      <div className='background-container' style={backgroundStyle}>
        <div className='overlay'>
          <div className='container-top-text'>
            <p>
              Cecilia Ferrari is an interior and spatial designer working in a variety  of media, from conceptual creation of installations in the spaces to events. She is currently studying Interior and Spatial design Master in politecnico di milano.
              Based in milan, italy. Actually in barcelona, spain.
            </p>
          </div>
          <div className='container-img-home'>
            <div className="container-img">
              <ImgLoader
                src={icon}
                containerClass="container-big-left-home"
                imgClass="img-responsive"
                style={{width: '55%', height: '50%', backgroundColor: '#cccccc'}}
                styleImg={{width: '100%', height: '100%', borderRadius: '8px'}}
              />
              <div className='container-text-home'>
                <div className='container-text-title'>
                  <b>HAPPINESS IS VITAL</b>
                  <p>(2023)</p>
                </div>
                <p>What if two opposite concepts such as happiness and mold were associated?</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;