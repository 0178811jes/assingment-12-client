import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();

    return (
        <div>
            <h3 className="text-3xl">Payment for {booking.productName}</h3>
            <p className="text-xl">Please pay ${booking.price} for your appointment</p>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckOutFrom
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;