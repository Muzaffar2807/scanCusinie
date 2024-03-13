'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4" style={{ display: 'flex', alignItems:'center', }}>
            <Logo /> 
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About us</Link>
              </li>
              
              
               <Dropdown title="Business Type">
              
                 <li>
                  <Link href="/documentation" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Dhaba's</Link>
                </li>
                <li>
                  <Link href="/documentation" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Restaurants</Link>
                </li>
                <li>
                  <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Cafe's</Link>
                </li>
                <li>
                  <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Cinema Halls</Link>
                </li>
                 <li>
                  <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Bakery's</Link>
                </li>
                 <li>
                  <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Ice Cream Center's</Link>
                </li>
              </Dropdown> 
              
            </ul> 
            

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
