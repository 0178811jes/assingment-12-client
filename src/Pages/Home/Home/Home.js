import React from 'react';
import LeftSide from '../SideBar/LeftSide';
import RightSide from '../SideBar/RightSide';
import Slider from './Slider';


const Home = () => {
    return (
        <div className="mx-5">
            <h2>This is Home Page</h2>
            <Slider></Slider>
            <div className='justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='...'>
                    <LeftSide></LeftSide>
                </div>
                <div  className='col-span-2 ...'>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;