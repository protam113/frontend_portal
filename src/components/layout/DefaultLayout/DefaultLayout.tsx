'use client';

import type { DefaultLayoutProps } from '@/types/types.prob';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DefaultSidebar } from './app-sidebar';
import TopNav from './top-nav';

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {

  return (
    <SidebarProvider>
      <DefaultSidebar />
      <SidebarInset>
        <header className="h-16 border-b border-gray-200 dark:border-[#1F1F23] flex-shrink-0">

          <TopNav />
        </header>


        <main className="flex-1 ">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};
