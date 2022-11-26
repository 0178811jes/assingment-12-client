import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthConext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthConext);
    const [signupError, setSignupError] = useState('')

    const [createdUserEmail, setCreatedUserEmail]= useState('')
    const[token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleLogin = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.error(err)
                setSignupError(err.message)
            })
    }

    const saveUser =( name, email) => {
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=> {
            setCreatedUserEmail(email);
    
            
        })
    }

    

    

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7">
                <h2 className="text-xl text-center">Signup</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                    <select className="input input-bordered w-full max-w-xs mt-5"
                        {...register("gender",
                            { required: 'gender is required' })} type='text'>
                        <option disabled selected>Select one</option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                        {errors.gender && <p className='text-red-600'>{errors.gender?.message}</p>}
                    </select>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Password</span></label>

                        <input type='password' {...register("password",
                            { required: "password is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text-alt">Forget Password ?</span></label>
                    </div>
                    


                    <input type="submit" value='Signup' className="btn btn-accent mt-5 input input-bordered w-full max-w-xs" />
                    {
                        signupError && <p className="text-red-600">{signupError}</p>
                    }
                </form>
                <p className='mt-3'>Already have an account ? <Link className="text-secondary" to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};


export default Signup;