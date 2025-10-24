import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, className = '', onClick, type = 'button' }: Props): JSX.Element {
  return (
    <button type={type} onClick={onClick} className={`px-3 py-1 rounded-md inline-flex items-center justify-center ${className}`}>
      {children}
    </button>
  )
}
