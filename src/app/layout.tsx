import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen vsc-domain-localhost vsc-initialized">
        {children}
      </body>
    </html>
  )
}