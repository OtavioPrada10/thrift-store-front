import React from 'react';

export default function Guide(): JSX.Element {
  return (
    <nav className='group h-full w-20 hover:w-64 bg-slate-800 shadow-xl transition-all duration-300 overflow-hidden'>
 
      <div className='flex justify-center items-center p-4 border-b border-slate-600 h-20'>
        <div className='bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg'>
          <span className='font-bold text-slate-700 text-xs'>L</span>
        </div>
      </div>
 
      <ul className='p-2 space-y-1 mt-2'>
        <li>
          <button className="w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 bg-blue-500 text-white shadow-md h-12">
            <span className='text-xl min-w-6 text-center'>🏠</span>
            <span className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
              Inicio
            </span>
          </button>
        </li>
        
        <li>
          <button className="w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 text-gray-300 hover:bg-slate-600 hover:text-white h-12">
            <span className='text-xl min-w-6 text-center'>📦</span>
            <span className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
              Produtos
            </span>
          </button>
        </li>
        
        <li>
          <button className="w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 text-gray-300 hover:bg-slate-600 hover:text-white h-12">
            <span className='text-xl min-w-6 text-center'>📊</span>
            <span className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
              Métricas
            </span>
          </button>
        </li>
        
        <li>
          <button className="w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 text-gray-300 hover:bg-slate-600 hover:text-white h-12">
            <span className='text-xl min-w-6 text-center'>👥</span>
            <span className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
              Usuários
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}