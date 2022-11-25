import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7">
                <h2 className="text-xl text-center">Signup</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    
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

                    <input type="submit" value='Signup' className="btn btn-accent mt-5 input input-bordered w-full max-w-xs" />
                </form>
                <p className='mt-3'>Already have an account ? <Link className="text-secondary" to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};


export default Signup;