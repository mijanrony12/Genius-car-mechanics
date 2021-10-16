import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, img, desc } = service;
   return (
        <div className="service">
           <img src={ img } alt="" />
           <h2>name: { name }</h2>
           <h4>Price: { price }</h4>
           <p>{ desc}</p>
        </div>
    );
};

export default Service;