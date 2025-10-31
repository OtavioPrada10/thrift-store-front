import React from 'react'

interface NoAccountProps {
  onClick: () => void;
  onClose: () => void;
}

export default function NoAccount({ onClick, onClose }: NoAccountProps): JSX.Element {
  return (
      <div className='bg-black text-white text-sm relative'>
          <div 
            className='flex items-center justify-center cursor-pointer p-1 select-none'
            onClick={onClick}
          >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm text-black mr-1 text-xs font-bold">
                TS
              </div>
              <p>Crie uma conta para melhorar a sua experiência</p> 
          </div>
          <button 
            onClick={onClose}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            X
          </button>
      </div>
  )
}