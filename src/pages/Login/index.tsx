import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TextField } from '@react-cupertino-ui/text-field';
import { Button } from '@react-cupertino-ui/button';
import { Title } from '@react-cupertino-ui/title';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isSignUp && !name) {
            toast.error("Please enter your name");
            return;
        }

        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        toast.success(isSignUp ? "Account created successfully!" : "Welcome!");
        navigate('/chat');
    };

    const handleSocialLogin = (provider: string) => {
        toast.info(`Logging in with ${provider}...`);
        setTimeout(() => {
            toast.success("Welcome!");
            navigate('/chat');
        }, 1000);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                padding: '48px',
                maxWidth: '440px',
                width: '100%',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
                    <Title>React Cupertino UI</Title>
                    <div style={{ color: '#666', marginTop: '8px', fontSize: '14px' }}>
                        {isSignUp ? 'Create your account' : 'Welcome back'}
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {isSignUp && (
                        <div style={{ width: '100%' }}>
                            <TextField
                                label="Full Name"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}

                    <div style={{ width: '100%' }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div style={{ width: '100%' }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <Button type="submit" size="lg">
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                    </div>
                </form>

                <div style={{ margin: '24px 0', textAlign: 'center', color: '#999', fontSize: '14px' }}>
                    or continue with
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Button
                        variant="secondary"
                        onClick={() => handleSocialLogin('Google')}
                    >
                        Continue with Google
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => handleSocialLogin('Apple')}
                    >
                        Continue with Apple
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => handleSocialLogin('GitHub')}
                    >
                        Continue with GitHub
                    </Button>
                </div>

                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                    <div style={{ color: '#666', fontSize: '14px' }}>
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
                        <button
                            type="button"
                            onClick={() => setIsSignUp(!isSignUp)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#667eea',
                                cursor: 'pointer',
                                fontWeight: 600,
                                padding: 0,
                                fontSize: '14px'
                            }}
                        >
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                </div>

                <div style={{ color: '#999', textAlign: 'center', marginTop: '24px', fontSize: '12px' }}>
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </div>
            </div>
        </div>
    );
};
