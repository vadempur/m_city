import React from 'react';
import CityLogo from '../icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
         <div className='footer_logo'>
          <CityLogo
           width='50px'
           height='50px'
           link={true}
           linkto='/'
          />
         </div>
         <div className='footer_descl'>
          Manchester city @2019 All rights reserved
         </div>
        </footer>
    );
};

export default Footer;