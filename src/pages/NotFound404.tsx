import React from 'react'

export default function NotFound404(): JSX.Element {  
  return (
    <div className=" bg-blue-950 text-white justify-center items-center text-center h-[100vh] flex">
      <div>
        <h1 className='text-2xl'>404 - Página não encontrada</h1>
        <p className='text-lg'>Não encontramos esta página, talvez tenha escrito algo errado?</p>      
      </div>
    </div>
  )
}