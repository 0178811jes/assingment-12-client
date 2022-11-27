import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthConext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const {logout} = useContext(AuthConext)
    const error = useRouteError();

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p className="text-red-500">Sorry somthing is wrong</p>
            <p className="texr-400">{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button onClick={handleLogout}>Logout</button> and login</h4>      
        </div>
    );
};

export default DisplayError;