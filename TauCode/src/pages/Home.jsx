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

      <section className='Hero flex'>

        <div className="leftdiv">
        <div className="content flex flex-col justify-center gap-4">
          <div className="spandiv">
            <span className='text-5xl'> Ram Ram </span><span className='text-5xl'> Mitar!!!!! 🙏</span>
            <p className="text-left text-lg mt-6 text-gray-700">
              TauCode mein semicolon lagana optional hai, lekin code paar break lagana na se😌☕<br/>
              "Badmosi aab coding mein bhi chalegi, par yaar ke saath chalegi!"
            </p>
            <br />
            
            <p className="text-start text-lg font-semibold mt-6 text-gray-800">
              Tau kehwe: "Error na hai, thodi si hichki se… seedha kar denge!" 🔧🔥<br/>
              TauCode likhne waale line-by-line nahi, <i>dialogue-by-dialogue</i> likhte hain!
            </p>
            <br/>

          </div>
        </div>
          <div className='Buttonsdiv flex  gap-2 mt-8 w-full'>
          <Link to="/compiler" className='btn btn-primary rounded-2xl text-1xl text-white bg-black '>PlayGround</Link>
          <Link to="/documentation" className='btn btn-secondary rounded-2xl text-1xl'>Documentation</Link>
        </div>
        </div>
        <div className="imagediv">
          <img src="../70881520585.png" alt="" />
        </div>
        
      </section>

      <section className='Slogan flex justify-center items-center mt-10'>
        <h1 className='text-4xl text-white '>"Thane reel mai coder dekhe se, mka real mai coder ham se 😎"</h1>
      </section>


      
      

    </>
  )
}

export default Home
