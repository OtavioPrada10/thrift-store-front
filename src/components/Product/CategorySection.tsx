import React, { useRef } from 'react'
import ProductCard from './ProductCard'

type Product = {
  id: number
  title: string
  price: number
  image?: string
}

const sampleProducts = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Produto ${i + 1}`,
  price: 79.9 + i,
  image: '/b6d0e3af-3c18-481f-8718-b44b682fd36b.png'
}))

export default function CategorySection({ title }: { title: string }): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!ref.current) return
    const offset = ref.current.clientWidth * 0.8
    ref.current.scrollBy({ left: dir === 'right' ? offset : -offset, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">{title}</h3>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-200">‹</button>
          <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-gray-200">›</button>
        </div>
      </div>
      <div className="relative">
        <div ref={ref} className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
          {sampleProducts.map(p => (
            <div key={p.id} className="min-w-[180px] max-w-[220px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
