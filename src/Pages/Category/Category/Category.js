import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const allProduct = useLoaderData()
    return (
        <div className="text-center">
            <h2>Category:{allProduct.length} </h2>
        </div>
    );
};

export default Category;