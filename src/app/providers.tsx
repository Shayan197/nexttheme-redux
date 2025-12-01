'use client';

import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { ThemeProvider, useTheme } from 'next-themes';
import { setTheme } from '@/store/slices/themeSlice';
import type { ThemeName } from '@/types/theme';

// Small helper to keep redux in sync with next-themes
const ThemeSyncToRedux = () => {
    const { theme, systemTheme, resolvedTheme } = useTheme();
    // resolvedTheme will be 'light' | 'dark' once useTheme is ready
    useEffect(() => {
        if (!resolvedTheme) return;
        const t = resolvedTheme as ThemeName;
        store.dispatch(setTheme(t));
    }, [resolvedTheme]);
    return null;
};

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <Provider store={store}>
            {/*
attribute="data-theme" ensures next-themes toggles `data-theme` on <html>
defaultTheme="dark" ensures first-time users see dark.
enableSystem={false} -> do not auto-follow OS. Set true if you want system preference.
*/}
            <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
                <ThemeSyncToRedux />
                {children}
            </ThemeProvider>
        </Provider>
    );
};

export default Providers;
