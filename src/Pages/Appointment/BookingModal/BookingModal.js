import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({product, selectedDate}) => {
    const{title} = product;
    const date= format(selectedDate, 'PP')
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 disabled className="text-lg font-bold">{title}</h3>
                    <form className="grid grid-cols-1 gap-4 mt-8">
                    <input type="text" disabled value={date} className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <br />
                    <input type="submit" value="Submit" className="btn btn-primary input input-bordered input-primary w-full"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;