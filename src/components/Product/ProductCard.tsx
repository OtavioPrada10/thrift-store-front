import React from 'react'
import productNotAvailable from '../../assets/ProductNotAvailable.png'

type Product = {
  id: number
  title: string
  price: number
  image?: string
}

export default function ProductCard({ product }: { product: Product }): JSX.Element {
  return (
    <article className="bg-white rounded shadow-sm">
      <div className="h-44 w-36 relative bg-gray-100">
        <img 
          src={product.image || productNotAvailable} 
          alt={product.title} 
          className="w-full h-full object-contain"  
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = productNotAvailable;
          }}
        />
        <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">♡</button>
      </div>
    </article>
  )
}