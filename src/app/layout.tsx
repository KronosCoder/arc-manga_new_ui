import '../themes/globals.css';
import SidebarProvider from '@/contexts/SidebarContext';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  slug: string;
} 

export default function RootLayout({ children, title, description, slug }: Props) {
  return (
    <html lang="en">
      <head>
        <title>{`ArcManga | ${title}`}</title>
        <meta name="description" content={description == '' ? 'This website about manga, manhwa and webtoon etc.' : description} />
      </head>
      <body className="min-h-screen vsc-domain-localhost vsc-initialized">
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
