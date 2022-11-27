import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthConext } from '../../../context/AuthProvider';

const MyAppointProduct = () => {
    const {user}= useContext(AuthConext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data:bookings = []}=useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(url, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('accessToken')}`

                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-6">My Appointment Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                            <th>{i+1}</th>
                            <td>{booking.productName}</td>
                            <td>{booking.bookingDate}</td>
                            <td>{booking.price}</td>
                        </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointProduct;