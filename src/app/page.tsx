'use client';

import React, { useEffect } from 'react';
import { BsCircleHalf } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/store/slices/counterSlice';
import { RootState } from '@/store/store';

const Home = (): React.JSX.Element => {
    const count = useSelector((state: RootState) => state.counterReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const systemTheme = isDark ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', systemTheme);
            localStorage.setItem('theme', systemTheme);
        }
    }, []);

    const toggleTheme = (): void => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-between items-center p-4">
                    <p className="text-4xl font-thin">
                        Designs
                        <span className="inline-block w-2 h-2 bg-red-700 rounded-full"></span>
                    </p>
                    <ul className="flex gap-10 border border-foreground-300 px-10 py-2 rounded-full outline-none">
                        <li>Home</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                    </ul>

                    <div className="cursor-pointer text-2xl animate-pulse">
                        <BsCircleHalf onClick={toggleTheme} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold underline">Hello, Next.js! {count}</h1>
                <button onClick={() => dispatch(increment())} className="btn">
                    Plus 1
                </button>
                <button onClick={() => dispatch(decrement())} className="btn">
                    Minus 1
                </button>
                <button onClick={toggleTheme} className="btn hover:bg-blue-600">
                    Toggle Theme
                </button>
                <p>Ready to build your Next Webapp? Start by editing - Next Ts Boilerplate</p>
            </div>
        </>
    );
};

export default Home;
