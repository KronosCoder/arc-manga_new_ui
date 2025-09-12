import '../themes/globals.css';
import '../themes/home.css';
import SidebarProvider from '@/contexts/SidebarContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ArcManga',
  description: 'This website about manga, manhwa and webtoon etc.',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="h-full w-full">
          <main className="w-full h-full flex">
            <SidebarProvider>
              { children }
            </SidebarProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
