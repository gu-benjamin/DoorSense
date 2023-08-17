import { Mplus } from 'utils/fonts'
import '../globals.css'
import type { Metadata } from 'next'
import Header from './../../components/Header/header';
import Footer from './../../components/Footer/footer';
import "tw-elements/dist/css/tw-elements.min.css";


export const metadata: Metadata = {
  title: 'Dashboard - DoorSense',
  description: 'A experiência sensorial da inclusão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={Mplus.className}>
        <div className={`w-screen h-screen flex flex-col justify-between`}>
          <Header/>
          {children}
          <Footer/>
        </div>
        </body>
    </html>
  )
}
