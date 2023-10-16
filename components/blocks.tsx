"use client";
import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'
import { useEffect, useState } from 'react';

export default function Blocks() {
  const [language, setLanguage] = useState<null | any>(null);
    useEffect(() => {
      setLanguage(localStorage.getItem('langage'));
    })

  const itemEn = dataeng[0].data.aptitudes.map((item: any) => {
    return (
      <div key={item.titre} className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
        <h4 className="mb-2 text-red-600 h4">{item.titre}</h4>
        <p className="text-sm text-left text-gray-400">{item.text}</p>
      </div>
    )
  })
  const itemFr = datafr[0].data.aptitudes.map((item: any) => {
    return (
      <div key={item.titre} className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
        <h4 className="mb-2 text-red-600 h4">{item.titre}</h4>
        <p className="text-sm text-left text-gray-400">{item.text}</p>
      </div>
    )
  })
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <p className="text-xl text-gray-400">{language == "en" ?
              dataeng[0].data.text_nos_produits_2 : datafr[0].data.text_nos_produits_2}</p>
          </div>

          {/* Items */}
          <div className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
          {language == "en" ?
                itemEn : itemFr}


          </div>

        </div>
      </div>
    </section>
  )
}
