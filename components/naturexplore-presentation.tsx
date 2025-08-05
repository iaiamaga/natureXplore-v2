import { Instagram, MessageCircle, Mail } from "lucide-react"
import Image from "next/image"


export default function NaturexplorePresentation() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative py-[40vh] overflow-hidden">

      {/* Fundo sólido da seção */}
      <div className="absolute inset-0 z-0 bg-[#2E450F]" />

      {/* Textura por cima do fundo, mas NÃO cobre o gradiente de transição */}

    

      <div
  className="absolute inset-0 z-0 bg-[url('/shley-tree-2.png')] opacity-25 mix-blend-overlay bg-repeat pointer-events-none"
  style={{
    maskImage:
      "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
  }}
/>

      {/* Conteúdo */}
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Mobile Only */}
          <div className="md:hidden mb-8">
            <div className="flex justify-center">
              <div className="relative w-20 h-20">
                <Image src="/logo-naturexplore.png" alt="NatureXplore Logo" fill className="object-contain" priority />
              </div>
            </div>
          </div>

          <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-12">
            Bem-vindos ao NatureXplore
          </h2>

          <div className="space-y-8 text-lg text-areia/90 leading-relaxed mb-12">
            <p><strong>O NatureXplore é mais do que uma agência de turismo. É um convite a se reconectar com a natureza, com o presente e com você mesmo.</strong></p>
            <p>Criamos experiências autênticas para quem busca algo além do óbvio — trilhas, cachoeiras, montanhas e refúgios onde o tempo desacelera e a alma respira...</p>
            <p>Acreditamos que explorar é pertencer, e que o verdadeiro luxo está em sentir o vento no rosto, o cheiro da Mata Atlântica e o silêncio que cura.</p>
            <p><strong>Viva o agora. Viva o natural. Viva o NatureXplore.</strong></p>
            <p>Trabalhamos diretamente com moradores, produtores, artesãos e guias locais...</p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/naturexplore_sana"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-areia rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300 group"
            >
              <Instagram size={24} className="text-[#2E450F] group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://wa.me/5522981261825"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-areia rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300 group"
            >
              <MessageCircle size={24} className="text-[#2E450F] group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:naturexploradores@gmail.com"
              className="w-14 h-14 bg-areia rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300 group"
            >
              <Mail size={24} className="text-[#2E450F] group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Gradiente suave no final da seção - sem textura */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-0 bg-gradient-to-t from-[#0F220B] to-transparent" />
    </section>
  );
}
