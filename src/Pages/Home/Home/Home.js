import React from 'react';

import LeftSide from '../SideBar/LeftSide';

import Slider from './Slider';


const Home = () => {
    
    return (
        <div className="mx-5">
            <h2>This is Home Page</h2>
            <Slider></Slider>
            <div>
                <div className='...'>
                    <LeftSide></LeftSide>
                </div>
                <div  className='col-span-2 ...'>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;