import LandingBody  from "@/components/LandingBody"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sn:px-6 md:max-w-5xl">
      <LandingBody/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  )
}