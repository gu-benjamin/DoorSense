'use client'

import '../globals.css';
import Header from './../../components/Header/header';
import Footer from './../../components/Footer/footer';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`w-screen h-screen flex flex-col justify-between overflow-x-hidden`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
