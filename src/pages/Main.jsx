import React from 'react'
import Footer from '../components/Footer'
import Presentation from '../components/presentation'
import Skills from '../components/Skills'
import Toolbar from '../components/Toolbar'

function Main() {
  return (
    <div>
        <Toolbar></Toolbar>
        <Presentation></Presentation>
        <Skills></Skills>
        <Footer></Footer>
    </div>
  )
}

export default Main