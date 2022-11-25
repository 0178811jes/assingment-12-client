import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ product, setProduct, selectedDate }) => {
    const { title, resalePrice } = product;
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const price = form.price.value;

        const booking = {
            bookingDate: date,
            productName:title,
            name,
            phone,
            price,
            email,
            location
        }
        console.log(booking);
        setProduct(null);

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 disabled className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 mt-8">
                        <input type="text" disabled value={date} className="input input-bordered input-primary w-full" />
                        <input name='name' type="text" placeholder="Name" disabled className="input input-bordered input-primary w-full" />
                        <input name='email' type="email" placeholder="Email" disabled className="input input-bordered input-primary w-full" />
                        <input name='price' type="text" value={resalePrice} placeholder="Price" disabled className="input input-bordered input-primary w-full" />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered input-primary w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-primary w-full" />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-primary input input-bordered input-primary w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;