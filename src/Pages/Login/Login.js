
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthConext } from '../../context/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn, googleLogin}= useContext(AuthConext);
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(err => {
            console.error(err.message);
            setLoginError(err.message)
        })
    }


    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => console.error(e));
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
                    
                    

                    <input type="submit" value='Login' className="btn btn-accent mt-5 input input-bordered w-full max-w-xs" />
                    <div>
                        {loginError && <p className="text-red-600">{loginError}</p>}
                    </div>
                </form>
                <p className='mt-3'>New to Waching TV ? <Link className="text-secondary" to='/signup'>Create New Account?</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;