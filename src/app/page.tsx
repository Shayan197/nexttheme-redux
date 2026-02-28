'use client';

import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Home = (): React.JSX.Element => {
    return (
        <div className="container mx-auto h-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Home;
