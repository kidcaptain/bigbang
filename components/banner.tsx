'use client';


import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'
import { useEffect, useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)
  const [language, setLanguage] = useState<null | any>(null);
    useEffect(() => {
      setLanguage(localStorage.getItem('langage'));
    })
  const acceptCookies = () => {
    localStorage.setItem('langage', 'fr');
    setBannerOpen(false)
  }
  return (
    <>

      {bannerOpen && (
        <div className="fixed bottom-0 right-0 z-50 w-full md:bottom-8 md:right-12 md:w-auto">
          <div className="flex justify-between p-3 text-sm shadow-lg bg-slate-800 text-slate-50 md:rounded">
            <div className="inline-flex items-center text-slate-500">
              <a
                className="font-medium hover:underline text-slate-50"
                href="https://github.com/cruip/open-react-template"
                target="_blank"
                rel="noreferrer"
              >
                {language == "en" ?
                  dataeng[0].data.accepter_les_cookies : datafr[0].data.accepter_les_cookies}<span className="hidden sm:inline"></span>
              </a>{' '}
              <span className="italic px-1.5"></span>{' '}
              <button className="p-2 font-medium text-white hover:underline bg-stone-900" rel="noreferrer">
                {language == "en" ?
                  "Accept" : "Valider"}
              </button>
            </div>
            <button className="pl-2 ml-3 border-l border-gray-700 text-slate-500 hover:text-slate-400" onClick={acceptCookies}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
