import React from 'react'
import Guide from '../components/admin/Guide'

export default function HomePage(): JSX.Element {
  return (
    <div className="h-screen bg-white text-gray-800 flex flex-col">
        <Guide />
    </div>
  )
}