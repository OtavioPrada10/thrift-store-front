import React from 'react'

export default function ProductFilters(): JSX.Element {
  return (
    <div className="p-4 bg-white border border-gray-100 rounded">
      <div className="mb-4">
        <div className="font-medium mb-2">Categoria</div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li><button className="w-full text-left">Camisetas</button></li>
          <li><button className="w-full text-left">Calças</button></li>
          <li><button className="w-full text-left">Acessórios</button></li>
        </ul>
      </div>
      <div className="mb-4">
        <div className="font-medium mb-2">Tamanho</div>
        <div className="flex flex-wrap gap-2">
          <button className="px-2 py-1 border rounded text-sm">P</button>
          <button className="px-2 py-1 border rounded text-sm">M</button>
          <button className="px-2 py-1 border rounded text-sm">G</button>
          <button className="px-2 py-1 border rounded text-sm">GG</button>
        </div>
      </div>
      <div>
        <div className="font-medium mb-2">Faixa de preço</div>
        <div className="flex gap-2">
          <input placeholder="R$ min" className="w-1/2 h-9 px-2 border rounded" />
          <input placeholder="R$ max" className="w-1/2 h-9 px-2 border rounded" />
        </div>
      </div>
    </div>
  )
}
