"use client";



import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'

import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function SignIn() {
const [language, setLanguage] = useState<null | any>(null);
    useEffect(() => {
      setLanguage(localStorage.getItem('langage'));
    })
  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h1 className="h1"> {language == "en" ?
              dataeng[0].data.entrer_en_contact : datafr[0].data.entrer_en_contact}</h1>
              <h6 className="h6"><a href="mailto:administration@bigbang-company.com">administration@bigbang-company.com</a></h6>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="name"> {language == "en" ?
                    dataeng[0].data.nom_prenom : datafr[0].data.nom_prenom}</label>
                  <input id="name" name='name' type="text" className="w-full text-gray-300 form-input" placeholder="John Doe" required />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="email"> {language == "en" ?
                    dataeng[0].data.adresse_e_mail : datafr[0].data.adresse_e_mail}</label>
                  <input id="email" type="email" className="w-full text-gray-300 form-input" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="tel"> {language == "en" ?
                    dataeng[0].data.num_tel : datafr[0].data.num_tel}</label>
                  <input id="tel" type="tel" className="w-full text-gray-300 form-input" placeholder="+237 698752023" required />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="message">Message</label>
                  <textarea id="message" className="w-full text-gray-300 form-input" required ></textarea>
                </div>
              </div>


              <div className="flex flex-wrap mt-6 -mx-3">
                <div className="w-full px-3">
                  <button className="w-full text-white bg-black btn hover:bg-stone-700"> {language == "en" ?
                    dataeng[0].data.envoyer : datafr[0].data.envoyer}</button>
                </div>
              </div>
            </form>

          </div>

        </div>
      </div>
    </section>
  )
}
