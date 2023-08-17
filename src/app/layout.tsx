import './globals.css'
import type { Metadata } from 'next'
import { Mplus } from './../utils/fonts';
import "tw-elements/dist/css/tw-elements.min.css";


export const metadata: Metadata = {
  title: 'DoorSense',
  description: 'A experiência sensorial da inclusão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={Mplus.className}>{children}</body>
    </html>
  )
}
