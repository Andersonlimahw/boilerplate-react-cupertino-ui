import React from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '@react-cupertino-ui/button';

export const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        toast("Welcome!.", { type: "success" });
        navigate('/chat');
    }
    return (
        <Button size="lg" onClick={handleLogin} >
            login
        </Button>
    )
}