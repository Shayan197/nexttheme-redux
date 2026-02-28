import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins, Figtree } from 'next/font/google';
import React from 'react';
import './globals.css';
import Providers from '@/app/providers';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const figtree = Figtree({
    variable: '--font-figtree',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Next.js Boilerplate',
    description:
        'Ready-to-use Next.js boilerplate with TypeScript, Tailwind CSS, and best practices.',
    icons: {
        icon: 'next.svg',
        shortcut: 'next.svg',
        apple: 'next.svg',
    },
    keywords: [
        'Boilerplate',
        'Next-theme Boilerplate',
        'TypeScript',
        'Husky',
        'React Developer',
        'Next.js',
        'Tailwind CSS',
        'Redux',
        'Redux-toolkit',
        'Next-theme Boilerplate with Redux and TypeScript',
        'Best Practices',
        'EsLint',
        'TypeScript',
        'Next.js Setup with next-theme and TypeScript',
    ],
    authors: [{ name: 'Muhammad Shayan Bukhari', url: 'https://shayanbukhari.vercel.app/' }],
    openGraph: {
        title: 'next-theme Boilerplate | TypeScript | Redux | Tailwind CSS | Best Practices',
        description: 'Ready to use next-theme with Redux, TypeScript, and best practices.',
        url: 'https://shayanbukhari.vercel.app/',
        siteName: 'Next Theme Enterprise Boilerplate',
        images: [
            {
                url: 'https://shayanbukhari.vercel.app',
                width: 1200,
                height: 630,
                alt: 'next-theme Boilerplate',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${figtree.variable} antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;
