'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
