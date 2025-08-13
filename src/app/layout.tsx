import '../themes/globals.css';
import SidebarProvider from '@/contexts/SidebarContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen vsc-domain-localhost vsc-initialized">
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  )
}