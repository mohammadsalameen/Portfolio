'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Service'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Certifications from './Certifications/Certifications'

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import ('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      })
    }
    initAOS();
  }, [])
  return (
    <div className='overflow-hidden '>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  )
}

export default Home
