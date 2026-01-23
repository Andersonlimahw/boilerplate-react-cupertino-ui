import { useNavigate } from 'react-router-dom';
import { Button } from '@react-cupertino-ui/button';
import { Card } from '@react-cupertino-ui/card';
import { Title } from '@react-cupertino-ui/title';
import { Accordion } from '@react-cupertino-ui/accordion';

export const Landing = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    };

    const handleGithub = () => {
        window.open('https://github.com/Andersonlimahw/boilerplate-react-cupertino-ui', '_blank');
    };

    const features = [
        {
            emoji: "⚡",
            title: "Vite Powered",
            description: "Lightning fast HMR and optimized build performance. Experience sub-second hot module replacement and instant feedback during development."
        },
        {
            emoji: "🎯",
            title: "Type Safety First",
            description: "Built with TypeScript for robust, error-free code. Catch bugs before runtime with comprehensive type checking and IntelliSense support."
        },
        {
            emoji: "🗄️",
            title: "Smart State Management",
            description: "Zustand for global state and React Query for server state. Handle complex application state with minimal boilerplate and maximum performance."
        },
        {
            emoji: "🎨",
            title: "Beautiful UI Components",
            description: "100+ pre-built Cupertino UI components with Tailwind CSS. Create stunning, native-feeling interfaces that delight your users."
        },
        {
            emoji: "✅",
            title: "Testing Suite Included",
            description: "Complete testing infrastructure with Vitest and Playwright. Write unit, integration, and E2E tests with confidence and comprehensive coverage."
        },
        {
            emoji: "📱",
            title: "PWA Ready",
            description: "Offline capabilities and app-like experience out of the box. Turn your web app into a progressive web app with zero configuration."
        },
        {
            emoji: "📦",
            title: "API Mocking",
            description: "MirageJS integration for realistic API mocking. Develop and test without backend dependencies, ensuring consistent development workflow."
        },
        {
            emoji: "🔒",
            title: "Production Security",
            description: "Security best practices built-in from day one. Protected against common vulnerabilities with secure defaults and dependency updates."
        },
        {
            emoji: "⚛️",
            title: "Modern Architecture",
            description: "Clean, modular structure following React best practices. Scalable folder organization and code patterns that grow with your project."
        },
        {
            emoji: "📊",
            title: "Performance Optimized",
            description: "Code splitting, lazy loading, and optimization strategies. Ship fast applications with excellent Core Web Vitals scores."
        },
        {
            emoji: "✨",
            title: "Developer Experience",
            description: "ESLint, Prettier, and Git hooks configured. Maintain code quality and consistency across your entire team effortlessly."
        },
        {
            emoji: "🔄",
            title: "CI/CD Ready",
            description: "Optimized for continuous integration and deployment. GitHub Actions, parallel testing, and automated workflows included."
        }
    ];

    const faqs = [
        {
            id: "1",
            question: "Is this boilerplate free to use?",
            answer: "Yes! It's completely open-source and MIT licensed. You can use it for personal and commercial projects without any restrictions. Feel free to customize it to your needs."
        },
        {
            id: "2",
            question: "How do I start a new project?",
            answer: "Clone the repository, run 'npm install' or 'pnpm install', then 'npm run dev'. The development server will start at localhost:5173. Check our comprehensive README and documentation for detailed setup instructions."
        },
        {
            id: "3",
            question: "Can I remove components I don't need?",
            answer: "Absolutely! The architecture is completely modular. You can safely remove any unused dependencies, components, or features. The boilerplate is designed to be a starting point, not a constraint."
        },
        {
            id: "4",
            question: "What's included in the testing setup?",
            answer: "The boilerplate includes Vitest for unit/component testing with coverage reporting, Playwright for E2E tests across multiple browsers, and React Testing Library for component testing. All are pre-configured and ready to use."
        },
        {
            id: "5",
            question: "Does it support mobile development?",
            answer: "Yes! The PWA support allows your application to work on mobile devices with offline capabilities. The UI components are responsive and touch-friendly. E2E tests include mobile viewport testing for Chrome and Safari."
        },
        {
            id: "6",
            question: "How do I deploy this to production?",
            answer: "Run 'npm run build' to create an optimized production bundle. The output can be deployed to any static hosting service like Vercel, Netlify, or AWS S3. See our deployment documentation for platform-specific guides."
        },
        {
            id: "7",
            question: "What makes this different from Create React App?",
            answer: "This uses Vite instead of Webpack for significantly faster builds and HMR. It includes modern tooling like React Query, Zustand, TypeScript, Tailwind CSS, and a full testing suite pre-configured. Plus, it has 100+ production-ready UI components."
        },
        {
            id: "8",
            question: "Can I use this for commercial projects?",
            answer: "Yes, absolutely! The MIT license allows you to use this boilerplate for any purpose, including commercial applications. No attribution required, though it's always appreciated."
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)' }}>
            {/* Hero Section */}
            <section style={{
                padding: '80px 20px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '20px',
                        opacity: 0.9,
                        letterSpacing: '1px'
                    }}>
                        v1.0.0 • PRODUCTION READY
                    </div>

                    <h1 style={{
                        fontSize: '56px',
                        fontWeight: 700,
                        marginBottom: '24px',
                        lineHeight: 1.2
                    }}>
                        Boilerplate React Cupertino UI
                    </h1>

                    <p style={{
                        fontSize: '20px',
                        lineHeight: 1.6,
                        marginBottom: '40px',
                        opacity: 0.95
                    }}>
                        The ultimate production-ready starting point for modern, high-performance React applications.
                        Built with speed, scalability, and developer experience in mind. Skip the setup and focus on building amazing products.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button size="lg" onClick={handleGetStarted}>
                            🚀 Get Started
                        </Button>
                        <Button size="lg" variant="secondary" onClick={handleGithub}>
                            View on GitHub
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <Title>Everything you need to build faster</Title>
                    <p style={{ fontSize: '18px', color: '#666', marginTop: '16px' }}>
                        A comprehensive suite of tools and configurations pre-setup for your success
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px'
                }}>
                    {features.map((feature, index) => (
                        <Card key={index} style={{ padding: '24px', height: '100%' }}>
                            <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.emoji}</div>
                            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>
                                {feature.title}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <Title>Frequently Asked Questions</Title>
                </div>

                <Accordion
                    items={faqs.map(faq => ({
                        id: faq.id,
                        title: faq.question,
                        content: faq.answer
                    }))}
                />
            </section>

            {/* Footer */}
            <footer style={{
                padding: '40px 20px',
                textAlign: 'center',
                borderTop: '1px solid #e0e0e0',
                background: 'white'
            }}>
                <div style={{ marginBottom: '16px' }}>
                    <a href="https://twitter.com/andersonlimahw" target="_blank" rel="noopener noreferrer" style={{
                        margin: '0 12px',
                        color: '#667eea',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        Twitter
                    </a>
                    <a href="https://linkedin.com/in/andersonlimahw" target="_blank" rel="noopener noreferrer" style={{
                        margin: '0 12px',
                        color: '#667eea',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        LinkedIn
                    </a>
                    <a href="https://github.com/andersonlimahw" target="_blank" rel="noopener noreferrer" style={{
                        margin: '0 12px',
                        color: '#667eea',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        GitHub
                    </a>
                    <a href="https://lemon.dev.br" target="_blank" rel="noopener noreferrer" style={{
                        margin: '0 12px',
                        color: '#667eea',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        Website
                    </a>
                </div>
                <p style={{ fontSize: '14px', color: '#999' }}>
                    © 2026 Anderson Lima (Lemon 🍋). All rights reserved.
                </p>
            </footer>
        </div>
    );
};
