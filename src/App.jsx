import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textform from './textform/textform'
import Darkmode from './textform/darkmode'


function App() {
 

  return (
    <>
    <div className="container">
   <Textform heading="enter your text"/>
 {/* <Darkmode/> */}
   </div>
    </>
  )
}

export default App
