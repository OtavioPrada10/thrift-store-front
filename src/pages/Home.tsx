import React from 'react'
import Header from '../components/common/Header'
import Banner from '../components/home/Banner'

//import Footer from '../components/common/Footer'

export default function HomePage(): JSX.Element {
  return (
    <div className="h-screen bg-white text-gray-800 flex flex-col">
      <Header />
      <main className="flex-1 min-h-0 overflow-hidden">
        <Banner />
      </main>
      {/*<Footer /> tem q ter footer ou não otavio? */}
    </div>
  )
}