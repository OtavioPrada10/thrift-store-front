import React from 'react'
import fundo from '../../assets/fundo.png'

export default function Banner(): JSX.Element {
  return (
    <section className="relative">
      <div className="max-w-9xl mx-auto">
        <div className="h-[calc(100vh-135px)] w-full bg-gray-200 overflow-hidden rounded-b">
          <img src={fundo} alt="loja" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="absolute inset-x-0 top-54 md:top-64 flex justify-center pointer-events-none">
        <div className="bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-md pointer-events-auto">
          <h2 className="text-xl md:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur</h2>
        </div>
      </div>
    </section>
  )
}
