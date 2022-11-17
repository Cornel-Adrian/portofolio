import React from 'react'
import Footer from '../components/Footer'
import Presentation from '../components/Presentation'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Toolbar from '../components/Toolbar'

function Main() {
  return (
    <div className='m-2 sm:mx-72 font-mono text-2xl'>
        <Toolbar></Toolbar>
        <Presentation></Presentation>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
    </div>
  )
}

export default Main