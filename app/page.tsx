import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import {
  About,
  Experience,
  Skills,
  DeepProject,
  Education,
  Contact,
  Footer,
} from "@/components/sections"
import { SideElements } from "@/components/side-elements"
import { PassionSection } from "@/components/passion-section"

export default function Page() {
  return (
    <>
      <Nav />
      <SideElements />
      <main>
        <Hero />
        <About />
        <PassionSection />
        <Experience />
        <DeepProject />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
