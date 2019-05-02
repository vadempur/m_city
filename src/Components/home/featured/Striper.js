import React, { Component } from 'react';
import {easyPolyout} from 'd3-ease';
import Animate from 'react-move/Animate'

class Striper extends Component {
   
   showStripes=()=>(
       <div>stripes</div>
   )
    render() {
        return (
            <div className='featured_stripes'>
                {this.showStripes()}
            </div>
        );
    }
}

export default Striper;