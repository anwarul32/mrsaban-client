import React from 'react';
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {  img, name, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-6">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl text-orange-600
                 font-semibold'>Price: ৳ {price}</p>
                <div className="card-actions justify-end">
                     {/* <Link to={`/checkout/${_id}`}> */}
                     <Link to=''>
                        <button className="btn btn-primary"><span>
                            </span> Add To Cart <FaCartPlus className='m-3' /></button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;