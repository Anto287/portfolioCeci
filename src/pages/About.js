import React from 'react';

import TopBar from '@components/TopBar';
import ImgLoader from '@components/ImgLoader';

import icon from '@images/img_about/img_1.webp';

import '@styles/About.css';

const About = () => {
  return (
    <div className='container-about'>
      <TopBar />
      <div className='container-tex-top'>
        <b>
          Cecilia Ferrari is an interior and spatial designer working in a variety  of media, 
          from conceptual creation of installations in the spaces to events. She is currently studying Interior and Spatial design Master in politecnico di milano.  
          Based in milan, italy. Actually in barcelona, spain.
        </b>
      </div>
      <div className='container-all-page'>
        <div className='row'>
          <div className='paragraf-name'>
            <p>001</p>
          </div>
          <div className='contrainer-content-paragraph'>
            <div className='title'>
              <p>BIO</p>
            </div>
            <div className='content'>
              <p>
                Cecilia (nata nel 1999) è una designer determinata, 
                curiosa e perspicace con una solida formazione nel campo del design e dell'arte. 
                Ha completato i suoi studi a Modena, ottenendo un diploma artistico durante gli anni del liceo. 
                Sin dall'inizio, ha mostrato un forte interesse per il mondo dell'arte, 
                sviluppando competenze nel disegno, nell'osservazione e nella rappresentazione grafica delle sue idee.
              </p>
            </div>
          </div>
        </div>

        <div className='row between'>
          <div className='paragraf-name'>
            <p>002</p>
          </div>
          <div className='container-two-content'>
            <div className='row'>
              <div className='cell-1'></div>
              <div className='cell'>
                <p style={{fontSize: 'calc(15px + 1vmax)'}}>
                  EDUCATION
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2024
                </p>
              </div>
              <div className='cell'>
                <p>
                  Erasmus Experience at EINA, University Center of Design and Art of Barcelona Barcelona, Spain
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2022/24
                </p>
              </div>
              <div className='cell'>
                <p>
                  Master Degree in Interior and Spatial Design, Politecnico di Milano
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2019/22
                </p>
              </div>
              <div className='cell'>
                <p>
                  Bachelor Degree cum Laude in Interior Design, Politecnico di Milano
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2022
                </p>
              </div>
              <div className='cell'>
                <p>
                Erasmus Experience at Universidade Lusiada,Lisbon, Portugal
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='paragraf-name'>
            <p>003</p>
          </div>
          <div className='container-two-content'>
            <div className='row'>
              <div className='cell-1'></div>
              <div className='cell'>
                <p style={{fontSize: 'calc(15px + 1vmax)'}}>
                  WORK
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2023
                </p>
              </div>
              <div className='cell'>
                <p>
                  Co-Founder and Member of VUOTO COLLETTIVO A MULTIDISCIPLINARY DESIGN AND ARTISTIC COLLECTIVE and research Studio based in Milan
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2024
                </p>
              </div>
              <div className='cell'>
                <p>
                  Mosca Partners with Michele de Lucchi: “How to visualize happiness”
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2023
                </p>
              </div>
              <div className='cell'>
                <p>
                  Partnership with Leroy Merlyn, Fuori Salone in Milan at Casa Nervesa
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2023
                </p>
              </div>
              <div className='cell'>
                <p>
                  Mosca Partner Fuori Salone in Milan at Circolo Filologico, Staff member
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='cell-1'>
                <p>
                  2020
                </p>
              </div>
              <div className='cell'>
                <p>
                  GebisForKids, Graphic Designer and Social Media Manager
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className='row'>
          <div className='paragraf-name'>
            <p>004</p>
          </div>
          <div className='center'>
            <div className='container-two-content'>
              <div className='row'>
                <div className='cell-1'></div>
                <div className='cell'>
                  <p style={{fontSize: 'calc(15px + 1vmax)'}}>
                    EXHIBITION
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='cell-1'>
                  <p>
                    2024
                  </p>
                </div>
                <div className='cell'>
                  <p>
                    Fuori Salone in Milan, Mosca Partners with Michele de Lucchi: “How to visualize happiness"
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='cell-1'>
                  <p>
                    2023
                  </p>
                </div>
                <div className='cell'>
                  <p>
                    Fuori Salone Milano, Leroy Merlin, Casa Nervesa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row' style={{gap: '0px'}}>
          <div className='paragraf-name'>
            <p>005</p>
          </div>
          <div className='container-three-content'>
            <div className='row' style={{marginLeft: '2%'}}>
              <div className='cell'>
                <p style={{fontSize: 'calc(15px + 1vmax)'}}>
                  EVENTS  RESUME
                </p>
              </div>
              <div className='cell'></div>
              <div className='cell'></div>
            </div>

            <div className='row' style={{marginLeft: '2%'}}>
              <div className='cell'>
                <p>
                  2024
                </p>
              </div>
              <div className='cell'>
                <p>
                  VUOTO COLLETTIVO
                </p>
              </div>
              <div className='cell'>
                <p>
                  Materia Banquet_x Dropcity_Milano IT
                </p>
              </div>
            </div>

            <div className='row' style={{marginLeft: '2%'}}>
              <div className='cell'>
                <p>
                  2024
                </p>
              </div>
              <div className='cell'>
                <p>
                  VUOTO COLLETTIVO
                </p>
              </div>
              <div className='cell'>
                <p>
                  Spazio Serra_x Alvar Altissimo_Milano IT
                </p>
              </div>
            </div>

            <div className='row' style={{marginLeft: '2%'}}>
              <div className='cell'>
                <p>
                  2024
                </p>
              </div>
              <div className='cell'>
                <p>
                  VUOTO COLLETTIVO
                </p>
              </div>
              <div className='cell'>
                <p>
                  QClub_w/ Settemenouno_Milano IT
                </p>
              </div>
            </div>

            <div className='row' style={{marginLeft: '2%'}}>
              <div className='cell'>
                <p>
                  2024
                </p>
              </div>
              <div className='cell'>
                <p>
                  VUOTO COLLETTIVO
                </p>
              </div>
              <div className='cell'>
                <p>
                  QClub_w/ Settemenouno_Milano IT
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='paragraf-name'>
            <p>006</p>
          </div>
          <div className='footer'>
            <ImgLoader src={icon} style={{width: '25%', height: 'auto'}} styleImg={{width: '100%', height: 'auto'}}/>
            <div className='content-footer'>
              <div>
                <p style={{fontSize: 'calc(15px + 1vmax)'}}>
                  WORK
                </p>
              </div>
              <div>
                <p>
                  ferrari.cecilia@outlook.it
                </p>
              </div>
              <div>
                <p>
                  Instagram
                </p>
              </div>
              <div>
                <p>
                  Linkedin
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;