import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RightSide = () => {
    const allProduct = useLoaderData()
    const {title}= allProduct
    
    return (
        <div>
            <h2> All product:{allProduct.length}</h2>
            <h2>{title}</h2>
            
        </div>
    );
};

export default RightSide;