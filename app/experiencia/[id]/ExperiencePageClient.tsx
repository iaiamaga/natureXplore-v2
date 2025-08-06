"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { experienceDetails} from "../data/ExperiencesData"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useMochilaStore } from "@/lib/store"
import { MapPin, Clock, User, Mail, MessageCircle } from "lucide-react"



interface ExperiencePageProps{
  params: {
    id: string
  }
}

export default function ExperiencePageClient({ params }: ExperiencePageProps ) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const experience = experienceDetails[params.id]
  const { addItem, items } = useMochilaStore()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!experience) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-16 section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-title text-5xl font-bold text-terra mb-6">Experiência não encontrada</h1>
              <Link href="/jornada" className="btn-primary">
                Voltar às experiências
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const isInMochila = items.some((item) => item.id === experience.id)

  const handleAddToMochila = () => {
    if (!isInMochila) {
      addItem(experience)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/jornada"
              className="inline-flex items-center text-folha hover:text-terra transition-colors duration-300 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar às experiências
            </Link>

            <h1 className="font-title text-4xl md:text-5xl font-bold text-terra mb-4">{experience.name}</h1>

            <div className="flex flex-wrap items-center gap-6 text-pedra mb-8">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center">
                <User size={20} className="mr-2" />
                <span>{experience.provider.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-8 section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={experience.gallery[currentImageIndex] || "/placeholder.svg"}
                    alt={experience.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {experience.gallery.slice(1).map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index + 1)}
                    className="relative w-full h-32 rounded-lg overflow-hidden hover:opacity-80 transition-opacity duration-300"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${experience.name} - ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-title text-3xl font-bold text-terra mb-4">Sobre a Experiência</h2>
                <p className="text-pedra leading-relaxed text-lg">{experience.fullDescription}</p>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="font-title text-2xl font-bold text-terra mb-4">Localização</h3>
                <div className="bg-folha/10 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-folha mx-auto mb-2" />
                    <p className="text-pedra">Mapa interativo em desenvolvimento</p>
                    <p className="text-sm text-pedra">{experience.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-terra mb-2">R$ {experience.basePrice}</div>
                  <div className="text-pedra">por pessoa</div>
                </div>

                <button
                  onClick={handleAddToMochila}
                  disabled={isInMochila}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 mb-4 ${
                    isInMochila
                      ? "bg-verde text-terra cursor-not-allowed"
                      : "bg-terra text-areia hover:bg-folha hover:shadow-lg transform hover:-translate-y-1"
                  }`}
                >
                  {isInMochila ? "Já está na Mochila" : "Adicionar à Mochila"}
                </button>

                <Link
                  href="/mochila"
                  className="block w-full py-3 px-6 border-2 border-terra text-terra text-center rounded-lg font-medium hover:bg-terra hover:text-areia transition-all duration-300"
                >
                  Ver Mochila ({items.length})
                </Link>
              </div>

              {/* Provider Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-title text-xl font-bold text-terra mb-4">Contato do Fornecedor</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User size={20} className="text-folha mr-3" />
                    <span className="text-pedra">{experience.provider.name}</span>
                  </div>

                  {experience.provider.contact.whatsapp && (
                    <a
                      href={`https://wa.me/5522981261825`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-folha hover:text-terra transition-colors duration-300"
                    >
                      <MessageCircle size={20} className="mr-3" />
                      <span>WhatsApp</span>
                    </a>
                  )}

                  {experience.provider.contact.email && (
                    <a
                      href={`mailto:naturexploradores@gmail.com`}
                      className="flex items-center text-folha hover:text-terra transition-colors duration-300"
                    >
                      <Mail size={20} className="mr-3" />
                      <span>E-mail</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
