import React from 'react';
import './expert.css'
const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="container expert col-lg-4 col-md-6 col-12">
            <img src={ img } alt="" />
            <h3>name: { name }</h3>
            <h5>Expert: { expertize}</h5>
        </div>
    );
};

export default Expert;