"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function SanaSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center section-padding bg-[#0F220B] relative py-[40vh] overflow-hidden"
    >

      {/* Content */}
      <div className="container-max relative z-20">
        <div className="max-w-4xl mx-auto">

          <div className="flex justify-center p-8">
                        <div className="relative w-20 h-20">
                          <Image src="/green-earth.png" alt="Icone de Local verde" fill className="object-contain" priority />
                        </div>
                      </div>
        
          <h2 className="text-center font-title text-3xl md:text-4xl font-bold text-areia 
          mb-8">Descobrindo o Sana</h2>
          <div className="p-8 md:p-12 bg-white/20 backdrop-blur-md border border-areia/30 rounded-2xl">
            <div className="text-center">
              
              <p className="text-lg text-areia/90 leading-relaxed mb-8">
                Descubra onde fica, como chegar, como é o local, e dicas do que fazer neste distrito único de Macaé, onde a Mata Atlântica preservada encontra
                uma comunidade vibrante. O Sana é um refúgio natural que mantém viva sua biodiversidade, oferecendo aos visitantes uma experiência autêntica de conexão com a natureza e a cultura
                local. Conheça suas trilhas históricas, cachoeiras cristalinas, artesanatos e artes locais e os sabores
                anrtesanais que fazem deste lugar um verdadeiro tesouro da região serrana fluminense.
              </p>

                          <div className="hidden md:block">
                            <Link
                              href="/sana"
                              className="inline-block bg-areia text-[#0F220B] px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#B6F442] hover:text-terra hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative z-30"
                            >
                              Venha saber sobre o Sana!
                            </Link>
                            </div>
              
                          <div className="md:block md:hidden">
                            <Link
                              href="/sana"
                              className="inline-block bg-[#B6F442] text-terra px-8 py-4 rounded-lg font-medium text-lg hover:bg-areia hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                            >
                              Venha saber sobre o Sana!
                            </Link>
                          </div>                  
            
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040C04] to-transparent pointer-events-none" />
    </section>
  )
}
