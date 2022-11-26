import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthConext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navber from '../Pages/Sheard/Navebar/Navber';

const DashboardLayout = () => {
    const {user} = useContext(AuthConext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dasbord-drwer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    
                </div>
                <div className="drawer-side">
                    <label htmlFor="dasbord-drwer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><Link to='/dashboard'>My Appointment Product</Link></li>
                        {
                            isAdmin && <>
                            <li><Link to='/dashboard/allusers'>All Users</Link></li>
                            </>
                        }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;