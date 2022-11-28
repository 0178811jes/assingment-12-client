import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useState } from 'react';

import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppoinment = ({ selectedDate }) => {
    
    const [product, setProduct] = useState(null);
    const date = format(selectedDate, 'PP')

    const {data:appointmentOptions=[]} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: ()=> fetch(`https://assignment-12-server-livid.vercel.app/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    
    return (
        <section className='my-16'>
            <p className="text-center text-info font-bold">Available appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setProduct={setProduct}
                    ></AppointmentOption>)
                }
            </div>
            {
                product &&
                <BookingModal
                    selectedDate={selectedDate}
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </section>

    );
};

export default AvailableAppoinment;