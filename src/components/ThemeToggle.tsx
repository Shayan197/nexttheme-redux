'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTheme } from '@/store/slices/themeSlice';
import { ThemeName } from '@/types/theme';

export const ThemeToggle = (): React.JSX.Element => {
    const theme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        const next: ThemeName = theme === 'dark' ? 'light' : 'dark';
        dispatch(setTheme(next));
    };

    return (
        <button onClick={toggleTheme} className="bg-app text-app">
            Toggle Theme (Current: {theme})
        </button>
    );
};
