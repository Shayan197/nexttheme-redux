'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setTheme } from '@/store/slices/themeSlice';
import type { ThemeName } from '@/types/theme';

export const ThemeToggle = (): React.JSX.Element => {
    const { setTheme: setThemeNext, resolvedTheme } = useTheme();
    const dispatch = useAppDispatch();

    // Prevent hydration error
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(t);
    }, []);

    // Sync redux
    useEffect(() => {
        if (!resolvedTheme) return;
        dispatch(setTheme(resolvedTheme as ThemeName));
    }, [resolvedTheme, dispatch]);

    if (!isMounted) {
        // Do NOT render theme-dependent UI before mount
        return <button className="text-foreground-primary p-2 rounded">Loading...</button>;
    }

    const toggleTheme = () => {
        const next = resolvedTheme === 'dark' ? 'light' : 'dark';
        setThemeNext(next);
        dispatch(setTheme(next));
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-foreground-primary p-2 rounded cursor-pointer"
        >
            Toggle Theme — Current: {resolvedTheme}
        </button>
    );
};
