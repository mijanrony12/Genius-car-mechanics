import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, price, img, desc } = service;
   return (
        <div className="service">
           <img src={ img } alt="" />
           <h2>name: <span className="text-primary">{ name }</span> </h2>
           <h4>Price: { price }</h4>
           <p>{ desc }</p>
           <Link to={`/booking/${id}`}>
                  <button className="btn btn-primary">Book {name}</button>
           </Link>
        </div>
    );
};

export default Service;