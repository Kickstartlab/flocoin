import React, { useState } from 'react'
import logo from '../assets/logo.png';


export default function Menu() {

  const [isOpen, setIsopen] = useState(false);
  const [show, setShow] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-mulish h-28">
        <a href="/" className="flex items-center gap-x-2">
          <img src={logo} alt='logo' className='w-16'></img>
          <h1 className='text-xl font-bold text-yellow-100 font-draker uppercase'>
            Flo Coin Global
          </h1>
        </a>

        <nav>
          <ul className="flex justify-center gap-12 pt-4 items-center text-white-100">
            <li><a href="/" className="" >Home</a></li>
            <li><a href="#about" className="text-slate-400 hover:text-white-100">About us</a></li>
            <li><a href="#tokenomics" className="text-slate-400 hover:text-white-100">Tokenomics</a></li>
            <li><a href="#join" className="text-slate-400 hover:text-white-100">Join us</a></li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between py-6">
        <a href="/" className="flex items-center gap-x-2">
          <img src={logo} alt='logo' className='w-10'></img>
          <h1 className='text-md font-bold text-yellow-100 font-draker uppercase'>
            Flo Coin Global
          </h1>
        </a>

        <button onClick={ToggleSidebar} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''} dark:bg-blue-200 bg-black-100 border border-white-50 rounded-md`}>
        <div className='p-6'>
          <ul onClick={ToggleSidebar} className='space-y-5'>
            <li><a href="/" className="" >Home</a></li>
            <li><a href="#about" className="">About us</a></li>
            <li><a href="#tokenomics" className="">Tokenomics</a></li>
            <li><a href="#join" className="">Join us</a></li>
          </ul>
        </div>
      </div>

    </header >
  )
}
