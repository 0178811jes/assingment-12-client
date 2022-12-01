import { useState } from "react";
import RightSide from "./RightSide";



const LeftSide = () => {

    const [category, setCategory] = useState([]);

    const handleCategory = id => {
        fetch(`https://assignment-12-server-livid.vercel.app/category/${id}`)
            .then(res => res.json())
            .then(data => setCategory(data))

    }

    return (
        <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className='mt-5 mb-5 text-2xl'>
                <button onClick={() => handleCategory('Walton')}>Walton</button>
                <br />
                <button onClick={() => handleCategory('LG')}>LG</button>
                <br />
                <button onClick={() => handleCategory('Marcel')}>Marcel</button>
                <br />
                <button onClick={() => handleCategory('Vision')}>Vision</button>
            </div>
            <div>
                {
                    category.map(category => <RightSide key={category._id}
                        category={category}
                    >

                    </RightSide>)
                }
            </div>
        </div>
    );
};

export default LeftSide;