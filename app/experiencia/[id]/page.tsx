import { experienceDetails } from "../data/ExperiencesData"
import ExperiencePageClient from "./ExperiencePageClient"

// Função necessária para exportação estática
export async function generateStaticParams() {
  // Retorna todos os IDs das experiências disponíveis
  return Object.keys(experienceDetails).map((id) => ({
    id: id,
  }))
}

interface ExperiencePageProps {
  params: {
    id: string
  }
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  return <ExperiencePageClient params={params} />
}
