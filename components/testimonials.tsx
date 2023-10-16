"use client";
import Image from 'next/image'

import TestimonialImage01 from '@/public/images/sali.jpeg'
import TestimonialImage02 from '@/public/images/asse.jpeg'
import TestimonialImage03 from '@/public/images/lihan2.jpeg'
import TestimonialImage04 from '@/public/images/johnDoe.jpeg'

import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [language, setLanguage] = useState<null | any>(null);
    useEffect(() => {
      setLanguage(localStorage.getItem('langage'));
    })
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2"> {language == "en" ?
                dataeng[0].data.notre_equipe : datafr[0].data.notre_equipe}</h2>
            {/* <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p> */}
          </div>

          {/* Testimonials */}
          <div className="grid items-start max-w-sm gap-8 mx-auto lg:grid-cols-3 lg:gap-6 lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4 overflow-hidden h-96 rounded-full">
                  <Image className="rounded-full" src={TestimonialImage01} width={300} height={100} alt="Testimonial 01" />
                 
                </div>
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <div className="pt-5 mt-6 font-medium text-gray-700 border-t border-gray-700">
                <cite className="not-italic text-gray-200">Sali mebenga guidere</cite> - <a className="text-red-600 transition duration-150 ease-in-out hover:text-gray-200" href="#0">PDG et directeur de recherche </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4 overflow-hidden h-96 rounded-full">
                  <Image className="rounded-full" src={TestimonialImage02} width={300} height={150} alt="Testimonial 02" />
                 
                </div>
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <div className="pt-5 mt-6 font-medium text-gray-700 border-t border-gray-700">
                <cite className="not-italic text-gray-200">Asse Betanga Gislain</cite> - <a className="text-red-600 transition duration-150 ease-in-out hover:text-gray-200" href="#0"></a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4 overflow-hidden h-96 rounded-full">
                  <Image className="rounded-full" src={TestimonialImage03} width={300} height={48} alt="Testimonial 03" />
                 
                </div>
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <div className="pt-5 mt-6 font-medium text-gray-700 border-t border-gray-700">
                <cite className="not-italic text-gray-200">Lihan Jephte Pascal</cite> - <a className="text-red-600 transition duration-150 ease-in-out hover:text-gray-200" href="#0">Directeur des finances, membres des gestion générale et des recherches</a>
              </div>
            </div>
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4 overflow-hidden h-96 rounded-full">
                  <img className="rounded-full w-full " src={TestimonialImage04.src}  alt="Testimonial 03" />
                 
                </div>
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <div className="pt-5 mt-6 font-medium text-gray-700 border-t border-gray-700">
                <cite className="not-italic text-gray-200">Yvan</cite> - <a className="text-red-600 transition duration-150 ease-in-out hover:text-gray-200" href="#0">Développeur web et designer graphique</a>
              </div>
            </div>

          </div>
          

        </div>
      </div>
    </section>
  )
}
