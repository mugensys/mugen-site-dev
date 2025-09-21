'use client'

import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-border py-8">
      <div className="container-max text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Mugen Systems. All rights reserved.</p>
        <nav aria-label="Footer" className="flex gap-4">
          <a href="#why-mugen" className="hover:underline">Why Mugen</a>
          <a href="#industries" className="hover:underline">Industries</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
