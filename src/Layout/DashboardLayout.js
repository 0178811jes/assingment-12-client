import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Sheard/Navebar/Navber';

const DashboardLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;