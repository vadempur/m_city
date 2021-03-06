import React from 'react';
import {Link } from 'react-router-dom' ;


const Tag = (props) => {
   const template=<div
      style={{
           background:props.bck ,
           color:props.color,
           fontSize:props.size,
           padding: '5px 10px',
           display:'inline-block',
           fontFamily:'Righteous'

        }}    
   
   >
       {props.children}
   </div>

   if(props.link){
    return (
        <Link to={props.linkto}>
        {template}
        </Link>
    );
   }else{
       return template
   }
    
};

export default Tag;

export const firebaseLooper=(snapshot)=>{
     let data=[];
    snapshot.forEach(childSnapshot=>{
        data.push(
            {
                ...childSnapshot.val(),
                id:childSnapshot.key
            }
        )
    })
    return data
}

export const reversedArray=(actualarray)=>{
  const reverseArray=[]
  for(let i=actualarray.length-1; i>=0; i--){
      reverseArray.push(actualarray[i])
  }
  return reverseArray
}