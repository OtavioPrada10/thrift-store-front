import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ProductHeader from '../components/Product/ProductHeader'
import ProductFilters from '../components/Product/ProductFilters'
import CategorySection from '../components/Product/CategorySection'

export default function ProductsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <ProductHeader />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="hidden lg:block">
              <ProductFilters />
            </aside>
            <section className="lg:col-span-3 space-y-10">
              <CategorySection title="Camisetas" />
              <CategorySection title="Calças" />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
