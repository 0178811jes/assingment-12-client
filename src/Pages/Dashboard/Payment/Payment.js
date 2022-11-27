import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    
    return (
        <div>
            <h3 className="text-3xl">Payment for {booking.productName}</h3>
            <p className="text-xl">Please pay ${booking.price} for your appointment</p>
        </div>
    );
};

export default Payment;