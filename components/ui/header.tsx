"use client";

import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo.png'
import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'
import { useEffect, useState } from 'react';
export default function Header() {

  const changeLanguage = () => {
    var lang = localStorage.getItem('langage');
    if (lang == 'en') {
      localStorage.setItem('langage', 'fr');
    } else {
      localStorage.setItem('langage', 'en');
    }
    location.reload()
  }
    const [language, setLanguage] = useState<null | any>(null);
    useEffect(() => {
      setLanguage(localStorage.getItem('langage'));
    })
  const navbardataEnglish = dataeng[0].data.navigatordata.map((item: any) => {
    return (
      <li key={item.route}>
        <a
          href={`/${item.route}`}
          className="flex items-center px-4 py-3 font-medium text-red-600 transition duration-150 ease-in-out hover:text-gray-200"
        >
          {item.text}
        </a>
      </li>
    )
  })
  const navbardataFrench = datafr[0].data.navigatordata.map((item: any) => {
    return (
      <li key={item.route}>
        <a
          href={`/${item.route}`}
          className="flex items-center px-4 py-3 font-medium text-red-600 transition duration-150 ease-in-out hover:text-gray-200"
        >
          {item.text}
        </a>
      </li>
    )
  })
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img src={logo.src} width={48} alt="Testimonial 03"></img>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow">
              {language == "en" ?
                navbardataEnglish : navbardataFrench}
              <li>
                <button onClick={changeLanguage} className="ml-3 text-white bg-black btn-sm hover:bg-stone-700">
                  {language == "en" ?
                    'french' : 'anglais'}
                </button>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
