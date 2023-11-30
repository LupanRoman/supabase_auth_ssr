'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createPagesBrowserClient());

  const signUp = () => {
    supabase.auth.signUp({
      email: 'romalupan89@gmail.com',
      password: 'qwerty',
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: 'romalupan89@gmail.com',
      password: 'qwerty',
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <button onClick={signUp}>Sign up</button>
        <button onClick={signIn}>Sign in</button>
        <button onClick={signOut}>Sign out</button>
        {children}
      </body>
    </html>
  );
}
