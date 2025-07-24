'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Skip Links */}
        <div className="sr-only">
          <Link href="#MainContent" className="skip-link">Skip to main content</Link>
          <Link href="#Footer" className="skip-link">Skip to footer</Link>
        </div>
        
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/faklogo-small-transparent.png"
                alt="F.A.K. Logistics, Inc."
                width={120}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* About Us Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border ${aboutOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200`}
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <div className="py-2">
                  <Link href="/who-we-are" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Who We Are</Link>
                  <Link href="/our-culture" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Our Culture</Link>
                  <Link href="/meet-the-owner" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Meet the Owner</Link>
                  <Link href="/meet-the-fakers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Meet the FAK'ers</Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="py-2">
                  <Link href="/truckload" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Truckload</Link>
                  <Link href="/flatbed-and-specialized" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Flatbed & Specialized</Link>
                  <Link href="/freight-management-solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Freight Management Solutions</Link>
                  <Link href="/intermodal" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Intermodal</Link>
                  <Link href="/ltl" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">LTL</Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border ${resourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200`}
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <div className="py-2">
                  <Link href="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Testimonials</Link>
                </div>
              </div>
            </div>
            
            {/* Contact Us Button */}
            <Link
              href="/contact-us"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
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
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <div>
                <p className="px-2 py-2 text-sm font-semibold text-gray-500 uppercase">About Us</p>
                <Link href="/who-we-are" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Who We Are</Link>
                <Link href="/our-culture" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Our Culture</Link>
                <Link href="/meet-the-owner" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Meet the Owner</Link>
                <Link href="/meet-the-fakers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Meet the FAK'ers</Link>
              </div>
              
              <div>
                <p className="px-2 py-2 text-sm font-semibold text-gray-500 uppercase">Services</p>
                <Link href="/truckload" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Truckload</Link>
                <Link href="/flatbed-and-specialized" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Flatbed & Specialized</Link>
                <Link href="/freight-management-solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Freight Management Solutions</Link>
                <Link href="/intermodal" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Intermodal</Link>
                <Link href="/ltl" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>LTL</Link>
              </div>
              
              <div>
                <p className="px-2 py-2 text-sm font-semibold text-gray-500 uppercase">Resources</p>
                <Link href="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Testimonials</Link>
              </div>
              
              <Link
                href="/contact-us"
                className="block mx-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}