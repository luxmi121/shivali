import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { data } from "@/data/services"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header
        logo={data?.logo}
        name={data?.name}
        tagline={data?.tagline}
        phone={data?.phone}
        whatsappNumber={data?.whatsappNumber}
        email={data?.email}
        whatsappMessage={data?.whatsappMessage}
      />
      <main>
        <HeroSection
          name={data?.name}
          tagline={data?.tagline}
          phone={data?.phone}
          whatsappNumber={data?.whatsappNumber}
          email={data?.email}
          whatsappMessage={data?.whatsappMessage}
          address={data?.address}
          hero={data?.hero}
        />
        <ServicesSection categories={data?.categories} sectionTitle={data?.servicesTitle} sectionDescription={data?.servicesDescription} />
      </main>
      <Footer
        logo={data?.logo}
        name={data?.name}
        tagline={data?.tagline}
        phone={data?.phone}
        whatsappNumber={data?.whatsappNumber}
        email={data?.email}
        address={data?.address}
        whatsappMessage={data?.whatsappMessage}
        socialMedia={data?.socialMedia}
        services={data?.categories.slice(0, 10)}
      />
    </div>
  )
}
