'use client'
import "./about.css";
import dataeng from '@/public/json/englishData.json'
import datafr from '@/public/json/frenchData.json'
import { useEffect, useState } from 'react';

export default function About() {

    const [language, setLanguage] = useState<null | any>(null);
    useEffect(() => {
      setLanguage(localStorage.getItem('langage'));
    })
    return (
        <>
            <div className="relative " id="about" >
                <div style={{ zIndex: 5, position: "relative" }}>
                    <div>
                        <div>
                            <div style={{ padding: "70px" }} className="m-auto lg:bg-gray-900 bg-gray-900/20 lg:w-1/2 ">
                                <h2 className="mb-4 text-center h2">{language == "en" ?
                                    dataeng[0].data.a_propos : datafr[0].data.a_propos}</h2>
                                <p className="my-4 text-xl text-center text-gray-400">{language == "en" ?
                                    dataeng[0].data.qui_nous_sommes : datafr[0].data.qui_nous_sommes}</p>
                                <p className="text-lg text-justify text-gray-400">
                                    {language == "en" ?
                                        dataeng[0].data.text_qui_nous_sommes : datafr[0].data.text_qui_nous_sommes}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: "black",
                        opacity: 0.7,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1
                    }}
                ></div>
            </div>
        </>
    )
}
