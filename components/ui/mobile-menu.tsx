'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })
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
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 text-gray-300 transition duration-150 ease-in-out fill-current hover:text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute left-0 z-20 w-full px-4 overflow-hidden transition-all duration-300 ease-in-out top-full sm:px-6"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="px-4 py-2 bg-gray-800">
          {language == "en" ?
            navbardataEnglish : navbardataFrench}
          <li>
            <button

              className="inline-flex items-center justify-center w-full px-4 py-2 my-2 font-medium text-white transition duration-150 ease-in-out bg-pink-600 border border-transparent rounded-sm hover:bg-pink-700" onClick={() => setMobileNavOpen(false)}
            >
              {language == "en" ?
                'french' : 'anglais'}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
