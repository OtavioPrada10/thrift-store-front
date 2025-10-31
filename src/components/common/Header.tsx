import React, { useState } from 'react'
import lupa from '../../assets/lupa.png'
import user from '../../assets/user.png'
import cart from '../../assets/cart.png'
import NoAccount from '../common/NoAccount'
import LoginForm from '../common/Login' 

export default function Header(): JSX.Element {
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showNoAccount, setShowNoAccount] = useState(true)

  const handleLoginSuccess = () => {
    setShowLoginForm(false)
    setShowNoAccount(false)  
  }

  return (
    <header className="bg-blue-200">
 
      {showNoAccount && (
        <NoAccount 
          onClick={() => setShowLoginForm(true)}
          onClose={() => setShowNoAccount(false)}
        />
      )}

      {showLoginForm && (
        <LoginForm 
          onClose={() => setShowLoginForm(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

 
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center h-14 relative">
          <nav className="flex items-center gap-6 text-xl">
            <a className="hover:underline">Feminino</a>
            <a className="hover:underline">Masculino</a>
            <a className="hover:underline">Sobre</a>
          </nav>
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold">
            Thrift-Store-Plus
          </h1>
          <div className="flex items-center gap-4 ml-auto">
            <button aria-label="search" className="p-2">
              <img src={lupa} alt="Search" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
            </button>
            <button 
              aria-label="account" 
              className="p-2"
              onClick={() => setShowLoginForm(true)}
            >
              <img src={user} alt="Account" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
            </button>
            <button aria-label="cart" className="p-2">
              <img src={cart} alt="Cart" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-12">
            <nav className="flex gap-8 text relative bottom-2 font-semibold">
              <a className="hover:text-blue-600 hover:underline cursor-pointer">Camisetas</a>
              <a className="hover:text-blue-600 hover:underline cursor-pointer">Calças</a>
              <a className="hover:text-blue-600 hover:underline cursor-pointer">Saias</a>
              <a className="hover:text-blue-600 hover:underline cursor-pointer">Shorts</a>
              <a className="hover:text-blue-600 hover:underline cursor-pointer">Casacos</a>
              <a className="hover:text-blue-600 hover:underline cursor-pointer">Vestidos</a>
              <a className="hover:text-blue-600 hover:underline cursor-pointer">Bolsas</a>
              <a className="hover:text-blue-600 hover:underline cursor-pointer">Sapatos</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}