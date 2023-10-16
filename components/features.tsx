"use client";

import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'
import { useEffect, useState } from 'react';

export default function Features() {
  const [language, setLanguage] = useState<null | any>(null);
    useEffect(() => {
      setLanguage(localStorage.getItem('langage'));
    })
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6" id="service">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2"> {language == "en" ?
                dataeng[0].data.nos_services : datafr[0].data.nos_services}</h2>
            <p className="text-xl text-gray-400">{language == "en" ?
                dataeng[0].data.text_nos_services : datafr[0].data.text_nos_services}</p>
          </div>

          {/* Items */}
          <div className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="text-red-600 fill-current" width="64" height="64" rx="32" />
                <path className="text-red-100 stroke-current" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="text-red-300 stroke-current" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="mb-2 text-center h4"> {language == "en" ?
                dataeng[0].data.services_data[0].titre : datafr[0].data.services_data[0].titre}</h4>
              <p className="text-lg text-center text-gray-400"> {language == "en" ?
                dataeng[0].data.services_data[0].text : datafr[0].data.services_data[0].text}</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="text-red-600 fill-current" cx="32" cy="32" r="32" />
                <path className="text-red-100 stroke-current" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="text-red-300 stroke-current" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="mb-2 text-center h4">{language == "en" ?
                dataeng[0].data.services_data[1].titre : datafr[0].data.services_data[1].titre}</h4>
              <p className="text-lg text-center text-gray-400">{language == "en" ?
                dataeng[0].data.services_data[1].text : datafr[0].data.services_data[1].text}</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="text-red-600 fill-current" cx="32" cy="32" r="32" />
                <path className="text-red-100 stroke-current" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="text-red-300 stroke-current" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="mb-2 text-center h4">{language == "en" ?
                dataeng[0].data.services_data[2].titre : datafr[0].data.services_data[2].titre}</h4>
              <p className="text-lg text-center text-gray-400">{language == "en" ?
                dataeng[0].data.services_data[2].text : datafr[0].data.services_data[2].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
