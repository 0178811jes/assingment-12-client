import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthConext } from '../../context/AuthProvider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthConext);
    const [signupError, setSignupError] = useState('')
    const navigate = useNavigate()

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
                        navigate('/');
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.error(err)
                setSignupError(err.message)
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
                        <option value="admine">Admine</option>
                        <option value="user">User</option>
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Location</span></label>

                        <input {...register("location",
                            { required: "Location is requird" })} type='text'
                            className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Phone</span></label>

                        <input {...register("phone",
                            { required: "phone is requird" })} type='text'
                            className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
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