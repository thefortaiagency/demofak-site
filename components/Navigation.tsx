'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
  {
    "text": "Skip to main content",
    "href": "#MainContent",
    "target": "",
    "className": "HeaderSkipContentMain"
  },
  {
    "text": "Skip to footer",
    "href": "#Footer",
    "target": "",
    "className": "HeaderSkipContentFooter"
  },
  {
    "text": "",
    "href": "/",
    "target": "",
    "className": "HeaderLogoLink"
  },
  {
    "text": "Who We Are",
    "href": "/who-we-are",
    "target": "",
    "className": "NavigationItemContent NavigationItemInteractiveContent "
  },
  {
    "text": "Our Culture",
    "href": "/our-culture",
    "target": "",
    "className": "NavigationItemContent NavigationItemInteractiveContent "
  },
  {
    "text": "Meet the Owner",
    "href": "/meet-the-owner",
    "target": "",
    "className": "NavigationItemContent NavigationItemInteractiveContent "
  },
  {
    "text": "Meet the FAK'ers",
    "href": "/meet-the-fakers",
    "target": "",
    "className": "NavigationItemContent NavigationItemInteractiveContent "
  },
  {
    "text": "Truckload",
    "href": "/truckload",
    "target": "",
    "className": "NavigationItemContent NavigationItemInteractiveContent "
  },
  {
    "text": "Flatbed & Specialized",
    "href": "/flatbed-and-specialized",
    "target": "",
    "className": "NavigationItemContent NavigationItemInteractiveContent "
  },
  {
    "text": "Freight Management Solutions",
    "href": "/freight-management-solutions",
    "target": "",
    "className": "NavigationItemContent NavigationItemInteractiveContent "
  }
]
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              F.A.K.
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}