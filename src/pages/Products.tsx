import React from 'react'
import Footer from '../components/common/Footer'
import ProductHeader from '../components/Product/ProductHeader'


export default function ProductsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <ProductHeader />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            <section className="lg:col-span-3 space-y-10">
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
