import React from 'react'
import Footer from '../components/Footer'
import Presentation from '../components/Presentation'
import Skills from '../components/Skills'
import Toolbar from '../components/Toolbar'

function Main() {
  return (
    <div className=''>
        <Toolbar></Toolbar>
        <Presentation></Presentation>
        <Skills></Skills>
        <Footer></Footer>
    </div>
  )
}

export default Main