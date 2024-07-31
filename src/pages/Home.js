import React from 'react';
import icon from '@images/img_home/image_1.png';
import icon2 from '@images/img_home/image_2.png';

import ImgLoader from '@components/ImgLoader';
import TopBar from '@components/TopBar';
import Carousel from '@components/Carusel';

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
            <b>
              CECILIA FERRARI IS AN INTERIOR AND SPATIAL DESIGNER WORKING IN A VARIETY  OF MEDIA, FROM CONCEPTUAL CREATION OF INSTALLATIONS IN THE SPACES TO EVENTS. 
              SHE IS CURRENTLY STUDYING INTERIOR AND SPATIAL DESIGN MASTER IN POLITECNICO DI MILANO. 
              BASED IN MILAN, ITALY. ACTUALLY IN BARCELONA, SPAIN.
            </b>
          </div>

          <div className='container-img-home'>
            <div className='card'>
              <div className='card-title'>
                <b>MOLDING LIFE</b>
              </div>
              <Carousel images={[icon, icon2]}/>
              <div className='card-description'>
                <p>What if two opposite concepts such as happiness and mold were associated?</p>
              </div>
            </div>
            
            <div className='card'>
              <div className='card-title'>
                <b>BAGNO ROSA</b>
              </div>
              <Carousel images={[icon, icon2]}/>
              <div className='card-description'>
                <p>Collect plastic, release fun.</p>
              </div>
            </div>

            <div className='card'>
              <div className='card-title'>
                <b>METASENSO</b>
              </div>
              <Carousel images={[icon, icon2]}/>
              <div className='card-description'>
                <p>Go further the common sense of things:  the search for the essence.</p>
              </div>
            </div>

            <div className='card'>
              <div className='card-title'>
                <b>QCLUB</b>
              </div>
              <Carousel images={[icon, icon2]}/>
              <div className='card-description'>
                <p>Immersive experience and clubbing event organize by VUOTOCOLLETTIVO + SETTEMENOUNO.</p>
              </div>
            </div>

            <div className='card'>
              <div className='card-title'>
                <b>SPAZIOSERRA</b>
              </div>
              <Carousel images={[icon, icon2]}/>
              <div className='card-description'>
                <p>Set-up and the opening event by VUOTOCOLLETTIVO for "Students Living in Case Milanesissime",a  project in collaboration with @alvaraaltissimo.</p>
              </div>
            </div>

            <div className='card'>
              <div className='card-title'>
                <b>DESIGN SENZA FILI</b>
              </div>
              <Carousel images={[icon, icon2]}/>
              <div className='card-description'>
                <p>Set-up and the opening event by VUOTOCOLLETTIVO for "Students Living in Case Milanesissime",a  project in collaboration with @alvaraaltissimo.</p>
              </div>
            </div>

            <div className='card'>
              <div className='card-title'>
                <b>MATERIA BANQUET</b>
              </div>
              <Carousel images={[icon, icon2]}/>
              <div className='card-description'>
                <p>Set-up and the opening event by VUOTOCOLLETTIVO for "Students Living in Case Milanesissime",a  project in collaboration with @alvaraaltissimo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;