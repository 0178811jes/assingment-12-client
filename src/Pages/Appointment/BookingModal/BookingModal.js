import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthConext } from '../../../context/AuthProvider';

const BookingModal = ({ product, setProduct, selectedDate }) => {
    const { title, resalePrice, phone, location } = product;
    const date = format(selectedDate, 'PP')

    const { user } = useContext(AuthConext);

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
            productName: title,
            name,
            phone,
            price,
            email,
            location
        }

        fetch('https://assignment-12-server-livid.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Booking confirmed');
                if(data.acknowledge){
                    setProduct(null)
                    
                }
            })
            setProduct(null)


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
                        <input name='name' type="text" defaultValue={title} placeholder="Name" disabled className="input input-bordered input-primary w-full" />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email" disabled className="input input-bordered input-primary w-full" />
                        <input name='price' type="text" value={resalePrice} placeholder="Price" disabled className="input input-bordered input-primary w-full" />
                        <input name='location' type="text" defaultValue={location} placeholder="Location" className="input input-bordered input-primary w-full" />
                        <input name='phone' type="text" defaultValue={phone} placeholder="Phone" className="input input-bordered input-primary w-full" />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-primary input input-bordered input-primary w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;