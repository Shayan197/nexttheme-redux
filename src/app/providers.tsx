'use client';

import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTheme } from '@/store/slices/themeSlice';
import type { ThemeName } from '@/types/theme';

// Top-level component inside provider to sync theme (client-only)
const ThemeSyncer = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((s) => s.theme.theme);

    // On mount: read stored value and apply
    useEffect(() => {
        const stored = (typeof window !== 'undefined' &&
            localStorage.getItem('theme')) as ThemeName | null;
        if (stored) {
            dispatch(setTheme(stored));
            document.documentElement.setAttribute('data-theme', stored);
        } else {
            // ensure document attribute matches initial store
            document.documentElement.setAttribute('data-theme', theme);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    // Whenever theme in store changes (toggle), sync DOM + localStorage
    useEffect(() => {
        if (typeof window === 'undefined') return;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return null;
};

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <Provider store={store}>
            <ThemeSyncer />
            {children}
        </Provider>
    );
};

export default Providers;
