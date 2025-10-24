import React, { useState } from 'react'

export default function ProductHeader(): JSX.Element {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('relevance')
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-3 w-full md:w-2/3">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Pesquisar..."
          className="w-full h-10 px-4 rounded border border-gray-200 focus:outline-none"
        />
        <button type="button" className="h-10 px-3 rounded border border-gray-200">🔍</button>
      </div>
      <div className="flex items-center gap-3">
        <label className="text-sm">Ordenar</label>
        <select value={sort} onChange={e => setSort(e.target.value)} className="h-10 px-3 border border-gray-200 rounded">
          <option value="relevance">Relevância</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
          <option value="new">Novidades</option>
        </select>
      </div>
    </div>
  )
}
