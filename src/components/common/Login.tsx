import React from 'react';

interface LoginFormProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginForm = ({ onClose, onLoginSuccess }: LoginFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    {/* teste depois faço o resto */}
    onLoginSuccess();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md">

        <div className="flex items-center justify-between p-6 border-b border-gray-400">
          <h2 className="text-2xl font-bold text-gray-900">
            Login            
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 transition-colors p-2 rounded-lg text-3xl hover:bg-gray-200 h-8 w-8 flex items-center justify-center"
          >
            ×
          </button>        
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg transition-colors"
              placeholder="@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg transition-colors"
              placeholder="Senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Entrar
          </button>
        </form>

        <div className="px-6 py-4 bg-gray-800 rounded-b-2xl">
          <p className="text-center text-sm text-gray-200">
            Não tem conta?
            <button type="button" className="text-blue-400 hover:text-blue-500 text-lg transition-colors pl-3">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;