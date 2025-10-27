import React, { useState } from 'react'
import lupa from '../../assets/lupa.png'

export default function ProductHeader(): JSX.Element {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('relevance')

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-blue-200 p-3">
      <div className='bg-white rounded-full w-16 h-16 text-center'>Logo</div>
      <div className="max-w-full mx-auto px-4 h-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">        
        <div className="relative flex items-center w-full md:w-2/3">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Pesquisar..."
            className="w-full h-8 px-2 ml-8 pr-8 rounded-sm border border-gray-200 focus:outline-none"
          />          
          <img 
            src={lupa} 
            alt="Search" 
            className="absolute right-2 w-5 h-5 pointer-events-none" 
          />                    
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm">Ordenar</label>
          <select 
            value={sort} 
            onChange={e => setSort(e.target.value)} 
            className="h-10 px-3 border border-gray-200 rounded"
          >
            <option value="relevance">Relevância</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
            <option value="new">Novidades</option>
          </select>
        </div>
      </div>
    </header>
  )
}