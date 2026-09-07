import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Stats } from '@/components/site/stats'
import { MembersSection } from '@/components/site/members-section'
import { Questline } from '@/components/site/questline'
import { Squads } from '@/components/site/squads'
import { About } from '@/components/site/about'
import { JoinSection } from '@/components/site/join-section'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <MembersSection />
        <Questline />
        <Squads />
        <About />
        <JoinSection />
      </main>
      <Footer />
    </>
  )
}
