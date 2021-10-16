import React from 'react';
import expert1 from '../../../images/experts/expert1.jpg'
import expert2 from '../../../images/experts/expert2.jpg'
import expert3 from '../../../images/experts/expert3.jpg'
import Expert from '../Expert/Expert';

const ourExperts = [
    {
        name: 'mijan rony',
        expertize: 'polish expert',
        img: expert1
    },
    {
        name: 'sagar ahmed',
        expertize: 'Engine expert',
        img: expert2
    },
    {
        name: 'masfiq hossain',
        expertize: 'wash expert',
        img: expert3
    }
]

const Experts = () => {
    return (
        <div className="container"> 
            <h2 className="text-primary mt-5 mb-4"> Our experts</h2>
            <div className="row">
                {
                    ourExperts.map(expert => <Expert
                        key={ expert.name }
                        expert={expert}
                    ></Expert>)
                  }
            </div>
        </div>
    );
};

export default Experts;