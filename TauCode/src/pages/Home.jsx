import React from 'react'
import '../styles/Home.css'; 
import '../App'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <nav className='navbarhome flex'>
        <div className="logodiv flex justify-start items-baseline gap-2">   
          <div className="logotext">
            <span className='text-black font-light text-7xl '>Tau </span>
            <span className='text-black font-light text-5xl '> Code </span>
          </div>
          <div className="logoimage">
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png" alt="Disguised Face" width="70" height="70" />
          </div>
        </div>
        
        <ul className='navhomes-links flex align-center justify-between gap-10 text-black font-light text-lg'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/documentation">Documentation</Link></li>
          <li>
  <Link 
    to="/compiler" 
    className="PlayGround inline-block text-white bg-black rounded-md px-14 py-2 hover:bg-gray-800 transition duration-300"
  >
    PlayGround
  </Link>
</li>
          
        </ul>
      </nav>

      <section className='Hero'>
        <img src="../70881520585.png" alt="" />
      </section>
      
      <section className='about'>
        <div className="content">
          <h1 className='text-4xl font-bold text-center'>Welcome to TauCode</h1>
          <p className='text-lg text-center mt-4'>
            TauCode is a powerful tool designed to help you write, test, and debug your code with ease. 
            Whether you're a beginner or an experienced developer, TauCode provides a user-friendly interface 
            and a rich set of features to enhance your coding experience.
          </p>
        </div>
      </section>

    </>
  )
}

export default Home
