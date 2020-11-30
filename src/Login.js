import './Login.css';
import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(err => alert(err.message));
    };

    return (
        <div className="login">
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
