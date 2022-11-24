import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RightSide = () => {
    const allProduct = useLoaderData()
    
    return (
        <div>
            <h2> All product:{allProduct.length}</h2>
            
        </div>
    );
};

export default RightSide;