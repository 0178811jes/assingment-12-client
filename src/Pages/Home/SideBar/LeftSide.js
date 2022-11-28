import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-livid.vercel.app/product-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='mt-5 mb-5 text-2xl'>
            <h2>All Category:{categories.length}</h2>
            <div>
                {
                    categories.map(category=> <p key={category._id}>
                        <Link to={`/category/${category._id}`}>{category.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;