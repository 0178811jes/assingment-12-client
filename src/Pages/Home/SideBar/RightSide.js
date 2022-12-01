import React from 'react';


const RightSide = ({category}) => {

    return (
        <div>
            <h2> All category product</h2>
            <div className="card shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={category?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category?.title}</h2>
                     <p>Orginal Price:${category?.orginalPrice}</p>              
                     <p>Resale Price:${category?.resalePrice}</p>              
                     <p>Date:{category?.date}</p>              
                     <p>Location:{category?.location}</p>              
                                   
                </div>
            </div>


        </div>
    );
};

export default RightSide;