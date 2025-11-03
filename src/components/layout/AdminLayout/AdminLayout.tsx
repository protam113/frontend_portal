'use client';

import React from 'react';
import { AppSidebar } from './app-sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components';
import { Footer } from './adminFooter';
import type { DefaultLayoutProps } from '@/types/types.prob';

export const AdminLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    // Trong DefaultLayout.tsx
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="relative flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>

        <main className="flex-1 ">{children}</main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
};
