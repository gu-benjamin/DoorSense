import '../globals.css';
import type { Metadata } from 'next';
import Header from './../../components/Header/header';
import Footer from './../../components/Footer/footer';

export const metadata: Metadata = {
  title: 'Dashboard - DoorSense',
  description: 'A experiência sensorial da inclusão'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`w-screen h-screen flex flex-col justify-between`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
