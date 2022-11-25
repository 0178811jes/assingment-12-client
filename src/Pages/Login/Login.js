
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7">
                <h2 className="text-xl text-center">Login</h2>
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
                    </div><div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Phone</span></label>

                        <input {...register("phone",
                            { required: "phone is requird" })} type='text'
                            className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>

                    <input type="submit" value='Login' className="btn btn-accent mt-5 input input-bordered w-full max-w-xs" />
                </form>
                <p className='mt-3'>New to Waching TV ? <Link className="text-secondary" to='/signup'>Create New Account?</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;