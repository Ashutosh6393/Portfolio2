import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import CurrentlyDoing from "@/components/CurrentlyDoing"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Philosophy from "@/components/Philosophy"
import Timeline from "@/components/Timeline"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <CurrentlyDoing />
      <Projects />
      <Skills />
      <Philosophy />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
