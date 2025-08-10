import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Service'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

const Home = () => {
  return (
    <div className='overflow-hidden '>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
    </div>
  )
}

export default Home
