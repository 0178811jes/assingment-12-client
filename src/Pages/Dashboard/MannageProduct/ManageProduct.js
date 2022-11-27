import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmetionModal from '../../Sheard/ConfirmetionModal/ConfirmetionModal';

const ManageProduct = () => {
    const [deletProduct, setDeletProduct] = useState(null);

    const modalClose =()=>{
        setDeletProduct(null);
    }

    const productDelet = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }) 
        .then(res => res.json())
        .then(data=>{
            if(data.deletedCount > 0) {
                refetch();
                toast.success(`product ${product.name} deleted successfully`);
            }
            
        })
    }


    const { data: products, isLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }
    })


    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }


    return (
        <div>
            <h2 className="text-3xl">Manage Product:{products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{<div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt='' />
                                    </div>
                                </div>}</td>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.specialty}</td>
                                <td>
                                    <label onClick={()=> setDeletProduct(product)} htmlFor="confirmetion-modal" className="btn btn-sm btn-error">Delete</label>
                                
                                    
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletProduct && <ConfirmetionModal
                title={`Are you sure you want to delete this product?`}
                message={`If you delete ${deletProduct.name} . Its not undone`}
                productDelete={productDelet}
                successBtnName='Delete'
                modalClose={modalClose}
                modalData ={deletProduct}
                
                ></ConfirmetionModal>

            }
        </div>
    );
};

export default ManageProduct;