export const metadata = {
  title: 'About - ScanCuisine',
  description: 'Page description',
}

import Intro from './intro'
import Story from './story'
import Stats from '@/components/stats'
import Team from '@/components/team'
import Career from '@/components/career'
import Process from '@/components/process'
import Cta from '@/components/cta-02'
import TestimonialsCarousel from '@/components/testimonials-carousel'

export default function About() {
  return (
    <>
      <Intro />
 
      <Story />
     
        <TestimonialsCarousel />
         <Stats />
    {/*   <Team />
      <Career />
      <Process />
      <Cta /> */}
    </>
  )
}
