import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-gray-800">Hi, welcome to my portfolio!</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
            <a href="#projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Projects</a>
            <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}