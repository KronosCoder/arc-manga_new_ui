'use client';

import SidebarProvider from '@/contexts/SidebarContext'
import Sidebar from '@/components/layouts/sidebar/Sidebar';
import React from 'react'

interface SidebarClientWrapperProps {
    children: React.ReactNode;
}

export default function SidebarClientWrapper({ children }: SidebarClientWrapperProps) {
  return (
    <SidebarProvider>
      <Sidebar />
    </SidebarProvider>
  )
}
