import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img  app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we specialize in!</h1>

      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem Ipsum Do9lor Meehr Hrer Serev Un dia para que 9un tele fonto</p>
        </div>
        <p className="p__opensans">Lorem Ipsum rest of the quotation</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Fouder</p>
        <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
