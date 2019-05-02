import React from 'react';
import manchesterLogo from '../Resources/images/logos/manchester_city_logo.png';
import {Link} from 'react-router-dom'

const CityLogo = (props) => {

   const template=<div
              className='img_cover'
              style={{
                  background:`url(${manchesterLogo})`,
                  width:props.width,
                  height:props.height
              }}
   ></div>

   if(props.link){
    return (
        <Link to={props.linkto}>
          {template}
        </Link>
    )
   }else{
       return template
   }
   
};

export default CityLogo;