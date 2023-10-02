import React from 'react';
import myimg from './myimg.png';
export default function Info (){
  return(
    <div className='info'>
      <img className='myImg' src={myimg}></img>
      <div className='info-content sec'>
      <h1 className='MyName'>Taha Shaban </h1>
      <p className='jobTitle'>Software Engineer</p>
      <div className='btns'>
        <button className='btn  btn-Email'>Email</button>
        <button className='btn btn-linkedine'>Linkedine</button>
      </div>
      </div>
    </div>   
  )
};