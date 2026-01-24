import { useNavigate } from 'react-router-dom';
import { Button } from '@react-cupertino-ui/button';
import { Card } from '@react-cupertino-ui/card';
import { Title } from '@react-cupertino-ui/title';
import { Accordion } from '@react-cupertino-ui/accordion';
import {
    Lightning,
    Target,
    Database,
    Palette,
    CheckCircle,
    DeviceMobile,
    Package,
    Lock,
    Atom,
    ChartBar,
    Sparkle,
    ArrowsClockwise,
    Rocket,
    GithubLogo
} from '@phosphor-icons/react';

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
            icon: <Lightning size={32} className="text-yellow-400" weight="fill" />,
            title: "Vite Powered",
            description: "Lightning fast HMR and optimized build performance. Experience sub-second hot module replacement and instant feedback during development."
        },
        {
            icon: <Target size={32} className="text-red-400" weight="duotone" />,
            title: "Type Safety First",
            description: "Built with TypeScript for robust, error-free code. Catch bugs before runtime with comprehensive type checking and IntelliSense support."
        },
        {
            icon: <Database size={32} className="text-blue-400" weight="duotone" />,
            title: "Smart State Management",
            description: "Zustand for global state and React Query for server state. Handle complex application state with minimal boilerplate and maximum performance."
        },
        {
            icon: <Palette size={32} className="text-purple-400" weight="duotone" />,
            title: "Beautiful UI Components",
            description: "100+ pre-built Cupertino UI components with Tailwind CSS. Create stunning, native-feeling interfaces that delight your users."
        },
        {
            icon: <CheckCircle size={32} className="text-green-400" weight="duotone" />,
            title: "Testing Suite Included",
            description: "Complete testing infrastructure with Vitest and Playwright. Write unit, integration, and E2E tests with confidence and comprehensive coverage."
        },
        {
            icon: <DeviceMobile size={32} className="text-orange-400" weight="duotone" />,
            title: "PWA Ready",
            description: "Offline capabilities and app-like experience out of the box. Turn your web app into a progressive web app with zero configuration."
        },
        {
            icon: <Package size={32} className="text-amber-400" weight="duotone" />,
            title: "API Mocking",
            description: "MirageJS integration for realistic API mocking. Develop and test without backend dependencies, ensuring consistent development workflow."
        },
        {
            icon: <Lock size={32} className="text-emerald-400" weight="duotone" />,
            title: "Production Security",
            description: "Security best practices built-in from day one. Protected against common vulnerabilities with secure defaults and dependency updates."
        },
        {
            icon: <Atom size={32} className="text-cyan-400" weight="duotone" />,
            title: "Modern Architecture",
            description: "Clean, modular structure following React best practices. Scalable folder organization and code patterns that grow with your project."
        },
        {
            icon: <ChartBar size={32} className="text-indigo-400" weight="duotone" />,
            title: "Performance Optimized",
            description: "Code splitting, lazy loading, and optimization strategies. Ship fast applications with excellent Core Web Vitals scores."
        },
        {
            icon: <Sparkle size={32} className="text-yellow-300" weight="duotone" />,
            title: "Developer Experience",
            description: "ESLint, Prettier, and Git hooks configured. Maintain code quality and consistency across your entire team effortlessly."
        },
        {
            icon: <ArrowsClockwise size={32} className="text-sky-400" weight="duotone" />,
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
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 text-center">
                <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/5 rounded-3xl p-12 border border-white/10 shadow-2xl">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-panel text-sm font-semibold tracking-wider text-blue-300">
                        v1.0.0 • PRODUCTION READY
                    </div>

                    <h1 className="text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                        Boilerplate React Cupertino UI
                    </h1>

                    <p className="text-xl leading-relaxed mb-10 text-glass-text-secondary max-w-2xl mx-auto">
                        The ultimate production-ready starting point for modern, high-performance React applications.
                        Built with speed, scalability, and developer experience in mind.
                    </p>

                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button size="lg" onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 border-none transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                            <Rocket size={24} weight="fill" />
                            Get Started
                        </Button>
                        <Button size="lg" onClick={handleGithub} className="glass-button text-white hover:bg-white/10 border-white/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                            <GithubLogo size={24} weight="fill" />
                            View on GitHub
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Title className="text-4xl text-white mb-4">Everything you need</Title>
                    <p className="text-lg text-glass-text-secondary">
                        A comprehensive suite of tools and configurations pre-setup for your success
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-panel p-8 hover:bg-white/15 transition-colors duration-300">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-glass-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Title className="text-3xl text-white">Frequently Asked Questions</Title>
                </div>

                <div className="glass-panel p-6 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-xl">
                    <Accordion
                        items={faqs.map(faq => ({
                            id: faq.id,
                            title: faq.question,
                            content: faq.answer
                        }))}
                        className="text-gray-900 dark:text-white"
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 px-4 text-center border-t border-white/10 bg-black/20 backdrop-blur-md">
                <div className="mb-4 space-x-6">
                    <a href="https://twitter.com/andersonlimahw" target="_blank" rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                        Twitter
                    </a>
                    <a href="https://linkedin.com/in/andersonlimahw" target="_blank" rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                        LinkedIn
                    </a>
                    <a href="https://github.com/andersonlimahw" target="_blank" rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                        GitHub
                    </a>
                    <a href="https://lemon.dev.br" target="_blank" rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                        Website
                    </a>
                </div>
                <p className="text-sm text-white/40">
                    © 2026 Anderson Lima (Lemon 🍋). All rights reserved.
                </p>
            </footer>
        </div>
    );
};
