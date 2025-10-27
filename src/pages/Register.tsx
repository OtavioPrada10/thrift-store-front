import React from 'react'

export default function Register(): JSX.Element {  
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center p-4">
      <div className='bg-gray-300 p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-400'>
        <h1 className='text-2xl font-bold text-black mb-6 text-center'>Criar Conta</h1>
        
        <form>
          <div className='mb-4'>
            <input 
              type="text" 
              placeholder='Nome completo' 
              className='w-full px-4 py-3 rounded-lg bg-gray-200 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          
          <div className='mb-4'>
            <input 
              type="email" 
              placeholder='Email' 
              className='w-full px-4 py-3 rounded-lg bg-gray-200 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          
          <div className='mb-4'>
            <input 
              type="password" 
              placeholder='Senha' 
              className='w-full px-4 py-3 rounded-lg bg-gray-200 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          
          <div className='mb-6'>
            <input 
              type="password" 
              placeholder='Confirmar senha' 
              className='w-full px-4 py-3 rounded-lg bg-gray-200 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          
          <button 
            type="submit"
            className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800'
          >
            Cadastrar
          </button>
        </form>

        <div className='mt-6 text-center'>
          <span className='text-gray-700'>Já tem uma conta? </span>
          <a href="/login" className='text-blue-600 hover:text-blue-800 font-medium'>
            Fazer login
          </a>
        </div>
      </div>
    </div>
  )
}