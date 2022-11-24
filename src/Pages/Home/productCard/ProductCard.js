import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../../Products/Products/Products';

const ProductCard = ({product}) => {
   const allProduct= useLoaderData()
    return (
        <div>
            {allProduct.title}
            {
                allProduct.map((product) => <Products></Products>)
            }
        </div>
    );
};

export default ProductCard;