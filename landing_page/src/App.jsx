import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Introduction/Intro'
import Mission from './Components/Mission/Mission'
import Milestone from './Components/Milestones/Milestone'
import Value from './Components/Value_Proposition/Value'
import Catering from './Components/Catering/Catering'
import Client from './Components/Clients/Client'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Lets do it</h1> */}
      <Navbar/>
      <div className='practice'>
      <Intro/>
      <Mission/>
      <Milestone/>
      <Value/>
      <Catering/>
      <Client/>

    
      </div>

      <Footer/>
      
    </>
  )
}

export default App
