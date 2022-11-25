
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const handleLogin =data=>{
        console.log(data);
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7">
                <h2 className="text-xl text-center">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Email</span></label>

                        <input {...register("email")} type='text' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Password</span></label>

                        <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text-alt">Forget Password ?</span></label>
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