import React from 'react'

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl max-h-14 mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">TS</div>
              <div>
                <div className="font-semibold">Thrift-Store-Plus</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="font-semibold mb-2">Ajuda</div>
            </div>            
            <div>
              <div className="font-semibold mb-2">Conta</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Siga-nos</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
