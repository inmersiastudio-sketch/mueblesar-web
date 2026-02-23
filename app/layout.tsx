import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amobly',
  description: 'Marketplace de muebles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
