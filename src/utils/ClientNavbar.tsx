'use client';

import SidebarProvider from '@/contexts/SidebarContext'
import Sidebar from '@/components/layouts/sidebar/Sidebar';
import React from 'react'

interface NavbarClientWrapperProps {
    children: React.ReactNode;
}

export default function SidebarClientWrapper({ children }: NavbarClientWrapperProps) {
  return (
    <SidebarProvider>
      <Sidebar />
    </SidebarProvider>
  )
}
