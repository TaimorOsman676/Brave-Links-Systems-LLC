import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Join from '@/app/components/Home/Joinus'
import Services from '@/app/components/Home/Services'

import { Metadata } from 'next'
import ContactUs from './components/Home/ContactUs/ContactUs'

export const metadata: Metadata = {
  title: 'Brave Links Systems LLC',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
            <Services />

      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <Featured />
      <FAQ />
      <Testimonial />
      <Articles />
      <Join />
      <ContactUs/>
      {/* <Insta /> */}
    </main>
  )
}
