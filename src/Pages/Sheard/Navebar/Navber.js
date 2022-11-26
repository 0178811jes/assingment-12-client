import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthConext } from '../../../context/AuthProvider';

const Navber = () => {
    const { user, logout } = useContext(AuthConext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/appointment'>My Product</Link></li>

        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </>
            : <li><Link to='/login'>Login</Link></li>}
    </>

    return (

        <div>
            <div className="text-4xl text-semibold m-3">
                <h1>RESALE WACHING TV</h1>
            </div>
            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Waching TV</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navMenu}
                    </ul>
                </div>

            </div>
            <label htmlFor="dasbord-drwer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navber;