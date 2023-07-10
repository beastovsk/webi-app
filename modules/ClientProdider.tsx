'use client';
import React from 'react';
import AntdThemeProvider from '@/modules/AntdThemeProvider';
import {ThemeProvider} from 'next-themes';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

function ClientProvider({children}: {children: React.ReactNode}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ThemeProvider enableSystem={false} attribute='class' forcedTheme='dark' defaultTheme='dark'>
        <AntdThemeProvider>
        {children}
        </AntdThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default ClientProvider;
