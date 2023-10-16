"use client";

import Image from 'next/image'


import photo from "@/public/images/googleplay.png";
import photo2 from "@/public/images/applestore.png";
import image from "@/public/images/ss.jpeg";
import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'
import { useEffect, useState } from 'react';

export default function Zigzag() {
  const [language, setLanguage] = useState<null | any>(null);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var day1 = new Date(`11/01/${year}`);
    var day2 = new Date();
    var difference = Math.abs(+day1 - +day2);
    let timeLeft = {};
    if (difference > 0) {
      if (language == 'en') {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }else{
        timeLeft = {
          jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
          heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          secondes: Math.floor((difference / 1000) % 60)
        };
      }
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setLanguage(localStorage.getItem('langage'));
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  })
  const timerComponents: any[] = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6" id='produit'>
        <div className="py-12 border-t border-gray-800 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            {/* <div className="inline-flex px-3 py-1 m-2 mb-4 text-sm font-semibold text-green-600 bg-green-200 rounded-full">Reach goals that matter</div> */}
            <h1 className="mb-4 h2">{language == "en" ?
              dataeng[0].data.nos_produits : datafr[0].data.nos_produits}</h1>
            <p className="text-xl text-gray-400">{language == "en" ?
              dataeng[0].data.text_nos_produits_1 : datafr[0].data.text_nos_produits_1}</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="h-auto max-w-full mx-auto md:max-w-none" src={image} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="mb-2 text-xl text-green-600 font-architects-daughter">{language == "en" ?
                    dataeng[0].data.produits_data[0].sous_titre : datafr[0].data.produits_data[0].sous_titre}</div>
                  <h3 className="mb-3 h3">Tutankha</h3>
                  <div>
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                  </div>
                  <p className="mb-4 text-xl text-gray-400">{language == "en" ?
                    dataeng[0].data.produits_data[0].text : datafr[0].data.produits_data[0].text}</p>
                  <div style={{ display: "flex" }}>
                    <a href="#"><div style={{ backgroundColor: "white", borderRadius: "8px", padding: "2px" }}>
                      <Image className="h-auto max-w-full mx-auto md:max-w-none" src={photo} width={150} alt="Features 03" />
                    </div> </a>
                  </div>
                  <div style={{ display: "flex", marginTop: 10 }}>
                    <a><div style={{ backgroundColor: "white", borderRadius: "8px", padding: "2px" }}>
                      <Image className="h-auto max-w-full mx-auto md:max-w-none" src={photo2} width={150} alt="Features 03" />
                    </div></a>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
