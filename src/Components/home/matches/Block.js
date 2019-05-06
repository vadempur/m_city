import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase'
import { firebaseLooper, reversedArray } from '../../misc';
import MatchBlock from '../../ui/matches_blocks';
import Slide from 'react-reveal/Slide'


class Block extends Component {

   state={
       matches:[]
   }

  componentDidMount(){
   firebaseMatches.limitToLast(6).once("value")
   .then(snapshot=>{
     let matches= firebaseLooper(snapshot)
     
     this.setState({
        matches:reversedArray(matches)
     });
    
   })
   
  } 

  showMatches=(matches)=>(
    matches?
    matches.map((match)=>(
     <Slide bottom key={match.id}>
    <div  className='item' >
    <div className='wrapper'>
    <MatchBlock  match={match} />
    </div>
    </div>
    </Slide>   
      
    ))
    
   :null
  )

    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}



export default Block;