'use client';

import { ReactNode, useState } from 'react';
import Sidebar from '@/app/[locale]/dashboard/Sidebar';
import TopMenu from '@/app/[locale]/dashboard/TopMenu';
export default function RootLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col md:pl-64">
        <TopMenu setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </>
  );
}
