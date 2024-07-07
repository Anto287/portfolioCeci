import React from 'react';
import icon from '@images/img_home/image_1.png';
import ImgLoader from '@components/ImgLoader';

const Home = () => {
  return (
    <div>
      <ImgLoader
        src={icon + 'ciasooo'}
        width="300px"
        height="200px"
        backgroundColor="#cccccc"
      />
    </div>
  );
};

export default Home;