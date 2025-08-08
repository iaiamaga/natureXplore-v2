import Link from "next/link"
import Image from "next/image"


export default function DiarySection() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-[#B6F442]  relative py-[40vh] pt-[20vh]">

      <div
  className="absolute inset-0 z-0 bg-[url('/grav.] opacity-20 mix-blend-overlay bg-repeat pointer-events-none"
  style={{
    maskImage:
      "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
  }}
/>


      <div className="container-max">

        
        <div className="flex justify-center p-8 ">
          <div className="relative w-20 h-20">
            <Image src="/diary.png" alt="Icone do diário de um explorador" fill className="object-contain" priority />
          </div>
        </div>
       

        <div className="max-w-4xl mx-auto">

          <h2 className="text-center font-title text-3xl md:text-4xl font-bold text-terra mb-8">Diário do Explorador</h2>

          
          <div className="p-8 md:p-12 bg-white/20 backdrop-blur-md border border-terra/30 rounded-2xl ">

            <div className="text-center">
              
              <div className="space-y-6 text-lg text-terra/90 leading-relaxed mb-8">
              
                <p>
                  As melhores histórias nascem das experiências vividas. No Diário do Explorador, compartilhamos relatos
                  autênticos de viajantes que se conectaram profundamente com o Sana. São memórias, descobertas,
                  encontros inesperados e momentos de pura magia que acontecem quando nos abrimos para o novo.
                </p>

                <p>
                  Cada entrada do diário é uma janela para as possibilidades que aguardam você. Desde trilhas ao nascer
                  do sol até conversas noturnas com moradores locais, passando por sabores únicos e paisagens que ficam
                  gravadas na alma. Inspire-se com essas histórias e imagine-se protagonizando a próxima.
                </p>
              
              </div>
            
            <div className="hidden md:block">
              <Link
                href="/diario"
                className="inline-block bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#B6F442] hover:text-terra hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Dê uma olhada nas memórias do diário!
              </Link>
              </div>

            <div className="md:block md:hidden">
              <Link
                href="/diario"
                className="inline-block bg-[#B6F442] text-terra px-8 py-4 rounded-lg font-medium text-lg hover:bg-areia hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Dê uma olhada nas memórias do diário!
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#344E27] to-transparent" />
    </section>
  )
}
