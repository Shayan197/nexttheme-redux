'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTheme } from '@/store/slices/themeSlice';
import type { ThemeName } from '@/types/theme';

export const ThemeToggle = (): React.JSX.Element => {
    const { theme, setTheme: setThemeNext, resolvedTheme } = useTheme();
    const dispatch = useAppDispatch();

    // Prevent hydration error
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Sync redux
    useEffect(() => {
        if (!resolvedTheme) return;
        dispatch(setTheme(resolvedTheme as ThemeName));
    }, [resolvedTheme]);

    if (!mounted) {
        // Do NOT render theme-dependent UI before mount
        return <button className="bg-app text-app p-2 rounded">Loading...</button>;
    }

    const toggleTheme = () => {
        const next = resolvedTheme === 'dark' ? 'light' : 'dark';
        setThemeNext(next);
        dispatch(setTheme(next));
    };

    return (
        <button onClick={toggleTheme} className="bg-app text-app p-2 rounded">
            Toggle Theme — Current: {resolvedTheme}
        </button>
    );
};
