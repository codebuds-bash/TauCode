import React from 'react'
import '../styles/Home.css'; 
import '../App'

import { useState } from 'react';

import { Link } from 'react-router-dom'

const Home = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
       <nav className='navbarhome flex justify-between items-center px-4 py-2'>
        <div className="logodiv flex justify-start items-center gap-2">   
          <div className="logotext">
            <span className='span1 text-black font-light text-7xl '>Desi </span>
            <span className='span2 text-black font-light text-5xl '> Code </span>
          </div>
          <div className="logoimage flex justify-center items-center">
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png" alt="Disguised Face" width="50" height="50" />
          </div>
        </div>

        <div className="hamburger md:hidden flex flex-col gap-2" onClick={toggleMenu}>
  <div className="w-15 h-1 bg-black rounded"></div>
  <div className="w-10 h-1 bg-black rounded"></div>
  <div className="w-5 h-1 bg-black rounded"></div>
</div>




        <ul className={`navhomes-links flex-col md:flex-row md:flex items-center gap-10 text-black font-light text-lg ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
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
              DesiCode mein semicolon lagana optional hai, lekin code paar break lagana na se😌☕<br/>
              "Badmosi aab coding mein bhi chalegi, par yaar ke saath chalegi!"
            </p>
            <br />
            
            <p className="text-start text-lg font-semibold mt-6 text-gray-800">
              Tau kehwe: "Error na hai, thodi si hichki se… seedha kar denge!" 🔧🔥<br/>
              DesiCode likhne waale line-by-line nahi, <i>dialogue-by-dialogue</i> likhte hain!
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
          <img src="../coding.png" alt="" />
        </div>
        
      </section>

      <section className='Slogan' >
        <h1 className='text-4xl text-white '>"Thane reel mai coder dekhe se, mka real mai coder ham se 😎"</h1>

        <br />
     <div className="outercodeboxdiv">
       <div className="CodeBox">
    <div className="Buttons">
      <span>🔴</span>
      <span>🟡</span>
      <span>🟢</span>
    </div>

    <pre>
      <code>
        <span className="keyword">sun le chore</span>
        {"\n"}
        <span className="keyword">le le</span> x = 5;
        {"\n"}
        <span className="keyword">bol bera</span>
        (<span className="string">"x ka maan hai: "</span> + x);
        {"\n"}
        <span className="keyword">yo ho to</span>(x &gt; 0) {"{"}
        {"\n  "}
        <span className="keyword">bol bera</span>
        (<span className="string">"x positive hai"</span>);
        {"\n"}{"}"}
        <span className="keyword"> na ho to</span> {"{"}
        {"\n  "}
        <span className="keyword">bol bera</span>
        (<span className="string">"x negative ya zero hai"</span>);
        {"\n"}{"}"}
        {"\n"}
        <span className="keyword">jab tak yo ho</span>(x &lt; 10) {"{"}
        {"\n  "}
        <span className="keyword">bol bera</span>
        (<span className="string">"x abhi bhi 10 se chhota hai: "</span> + x);
        {"\n  "}x = x + 1;
        {"\n"}{"}"}
        {"\n"}
        <span className="keyword">ho liya kaam</span>
      </code>
    </pre>
  </div>
     </div>
      </section>


      <section className="social-links w-full flex flex-col justify-center items-center gap-6 mt-16 px-4">
  <div className="outerdivsocial w-full max-w-3xl bg-white rounded-2xl p-10 flex flex-col justify-center items-center gap-4 transition-all duration-300 ">
    <h1 className="text-2xl font-semibold text-gray-800">Made for fun by</h1>

    <div className="namediv flex flex-col sm:flex-row gap-4 mt-2">
      <span className="socialspan  text-gray-700 px-6 py-2 rounded-full text-lg font-medium border  "><a href="https://www.linkedin.com/in/dhruv-suthar-42174228b/">DHRUV </a></span>
      <span className="socialspan  text-gray-700 px-6 py-2 rounded-full text-lg font-medium border"><a href="https://www.linkedin.com/in/vishakha-saini-b7b14828b/">VISHAKHA</a></span>
    </div>

    <p className="text-sm text-gray-500 mt-4">Thanks for checking this out! We hope you enjoy it 💫</p>

    <div className="flex gap-4 mt-4">
      <a href="https://www.instagram.com/dhruv_sutar_779/" className="text-blue-600 hover:text-blue-800 transition">Instagram</a>
      <a href="https://www.linkedin.com/in/vishakha-saini-b7b14828b/" className="text-pink-600 hover:text-pink-800 transition">LinkedIn</a>
      <a href="https://github.com/codebuds-bash" className="text-green-600 hover:text-green-800 transition">GitHub</a>
    </div>
  </div>
</section>





    </>
  )
}

export default Home
