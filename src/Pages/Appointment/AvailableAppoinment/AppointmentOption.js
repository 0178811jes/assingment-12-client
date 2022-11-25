import React from 'react';

const AppointmentOption = ({ appointmentOption, setProduct }) => {
    const { orginalPrice, img, resalePrice, title, date, location} = appointmentOption;
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>OrginalPrice:$ {orginalPrice}</p>
                <p>ResalePrice:$ {resalePrice}</p>
                <p>Date: {date}</p>
                <p>Location: {location}</p>
                <div className="card-actions">
                    
                    <label 
                    disabled={title.length === 0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary"
                    onClick={()=> setProduct(appointmentOption)}
                    >Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;