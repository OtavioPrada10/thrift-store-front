import React from 'react'
import ProductCard from '../Product/ProductCard'

type Product = {
  id: number
  title: string
  brand?: string
  code?: string
  price: number
  image?: string
}

const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Produto Exemplo ${i + 1}`,
  brand: 'Marca',
  code: `C${1000 + i}`,
  price: 79.9,
  image: '/b6d0e3af-3c18-481f-8718-b44b682fd36b.png'
}))

export default function ProductGrid(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Novidades</h3>
        <div className="flex gap-3 text-sm text-gray-600">
          <button className="px-3 py-1 rounded-md hover:bg-gray-100">Ver tudo</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
