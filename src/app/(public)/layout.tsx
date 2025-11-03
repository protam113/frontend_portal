'use client';

import { ScrollToTopButton } from '@/components/button/scroll.button';
import { DefaultLayout } from '@/components/layout/DefaultLayout/DefaultLayout';
import { RadiatingLoader } from '@/components';
import React, { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

export default function CustomerLayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, loading, checkAuth } = useAuthStore();
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const verifyAuth = async () => {
      try {
        await checkAuth();
        if (isMounted) setAuthChecked(true);
      } catch (error) {
        console.error('Authentication check failed:', error);
        if (isMounted) {
          setAuthChecked(true);
        }
      }
    };

    verifyAuth();

    return () => {
      isMounted = false;
    };
  }, [checkAuth]);

  useEffect(() => {
    if (authChecked && !loading && !isAuthenticated) {
      setTimeout(() => {
        router.replace('/login');
      }, 3000);
    }
  }, [isAuthenticated, loading, router, authChecked]);

  // Show loading state while checking authentication
  if (loading || !authChecked) {
    return (
      <div>
        <RadiatingLoader />
      </div>
    );
  }

  return isAuthenticated ? (
    <>
      <main>
        <DefaultLayout>
          <div className='p-4 bg-gray-50'>{children}</div>
          <ScrollToTopButton />
        </DefaultLayout>
      </main>
    </>
  ) : null;
}