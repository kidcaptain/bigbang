export const metadata = {
  title: 'BigBang',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Blocks from '@/components/blocks'
import About from '@/components/about'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Zigzag />
      <Blocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
