import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
