import React from 'react';
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
    const {signInUsingGoogle}=useAuth()
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInUsingGoogle} className="btn btn-primary">google sign in</button>
        </div>
    );
};

export default Login;