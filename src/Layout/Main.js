import React from 'react';
import { Outlet } from 'react-router-dom';

import LeftSide from '../Pages/Home/SideBar/LeftSide';
import RightSide from '../Pages/Home/SideBar/RightSide';

import Footer from '../Pages/Sheard/Footer/Footer';
import Header from '../Pages/Sheard/Header/Header';
import Navber from '../Pages/Sheard/Navebar/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            
            <Header></Header>
            <Outlet className=" grid grid-cols-3 gap-4">
            <div className='justify-between grid grid-cols-3 gap-4 mt-5'>
                <div className='...'>
                    <LeftSide></LeftSide>
                </div>
                <div  className='col-span-2 ...'>
                    <RightSide></RightSide>
                </div>
            </div>
            </Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;