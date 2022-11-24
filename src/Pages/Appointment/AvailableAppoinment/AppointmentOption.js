import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
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
                    <button className="btn btn-primary">Buy Now</button>
                    <label htmlFor="booking-modal" className="btn">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;