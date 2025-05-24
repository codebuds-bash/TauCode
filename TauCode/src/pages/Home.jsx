import React from 'react'
import '../styles/Home.css'; 
import '../main'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <nav className='navbar flex'>
        <div className="logodiv flex justify-start items-baseline gap-2">   
          <div className="logotext">
            <span className='text-black font-light text-7xl '>Tau </span>
            <span className='text-black font-light text-5xl '> Code </span>
          </div>
          <div className="logoimage">
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png" alt="Disguised Face" width="70" height="70" />
          </div>
        </div>
        
        <ul className='nav-links flex align-center justify-between gap-10 text-black font-semibold text-lg'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/compiler">PlayGround</Link></li>
          <li><Link to="/documentation">Documentation</Link></li>
        </ul>
      </nav>

      <section className='Hero'>
        <h1 className=''>Tau Code</h1>


      </section>

    </>
  )
}

export default Home
