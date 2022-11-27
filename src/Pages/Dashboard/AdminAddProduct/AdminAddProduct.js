import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminAddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate= useNavigate();
    
    const {data:specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name : data.name,
                    email : data.email,
                    specialty: data.specialty,
                    image: imgData.data.url,
                }

                fetch('http://localhost:5000/products', {
                    method:'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/manageproduct');
                })

            }
            
        })
    }

    if(isLoading){
        return <progress className="progress w-56"></progress>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl">Admin add a product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">Name</span></label>

                    <input {...register("name",
                    )} type='text'
                        className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">Email</span></label>

                    <input {...register("email",
                        { required: "email is requird" })} type='text'
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">specialty</span></label>

                    <select className="input input-bordered w-full max-w-xs mt-5"
                        {...register("specialty",
                            { required: 'specialty is required' })} type='text'>
                        <option disabled selected>Select one</option>
                        {
                            specialties.map(specialty=> <option
                                key={specialty._id}
                                value={specialty.title}
                             >{specialty.title}</option>)
                        }
                        
                        
                        {errors.specialty && <p className='text-red-600'>{errors.specialty?.message}</p>}
                    </select>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">Photo</span></label>

                    <input {...register("image",
                    )} type='file'
                        className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}

                </div>

                <input type="submit" value='Admin add product' className="btn btn-accent mt-5 input input-bordered w-full max-w-xs" />
                {
                }
            </form>
        </div>
    );
};

export default AdminAddProduct;