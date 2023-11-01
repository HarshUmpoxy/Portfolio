import React from "react";
// import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [OpenMenu,SetOpenMenu]=useState(false)
    
  return (
    <section className="container w-full z-10 mx-auto">
      <header>
        <nav className="flex justify-between px-4 pt-2">
          <div>
            <h3 className="font-bold text-2xl md:3xl">Harsh.algoacer</h3>
          </div>
          
            <ul className="md:flex md:flex-row md:justify-around hidden px-2">
              <li className='px-2 hover:text-yellow-500 font-large'>
                <a href="/">Home</a>
              </li>
              <li className='px-2 hover:text-yellow-500 text-semibold font-large'>
                <a href="#About">About</a>
              </li>
              <li className='px-2 hover:text-yellow-500 text-semibold font-large'>
                <a href="#Projects">Projects</a>
              </li>
              <li className='px-2 hover:text-yellow-500 text-semibold font-large'>
                <a
                  href="https://drive.google.com/file/d/1osi-FXGga24lMLYu2gjc1fAEyIKMth6M/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer" // Security best practice for opening in a new tab
                >
                  Resume
                </a>
              </li>
              <li className='px-2 hover:text-yellow-500 text-semibold font-large'>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            
          
          <OutsideClickHandler onOutsideClick={ () => SetOpenMenu(false) }> 
            <GiHamburgerMenu  className=' md:hidden h-6 w-8 position: fixed;' onClick={() => SetOpenMenu((prev) => !prev)} />
            <div
              className={` pt-6 transition-transform transform ${
                OpenMenu ? 'translate-x-0' : 'translate-x-[600px]'
              }`}
            >
              <ul className="flex flex-col bg-yellow-500 rounded-xl px-1 font-semibold transition-shadow">
              <li className='px-2 hover:text-yellow-500 font-large'>
                <a href="/">Home</a>
              </li>
              <li className='px-2 hover:text-yellow-500 text-semibold font-large'>
                <a href="#About">About</a>
              </li>
              <li className='px-2 hover:text-yellow-500 text-semibold font-large'>
                <a href="#Projects">Projects</a>
              </li>
              <li className='px-2 hover:text-yellow-500 text-semibold font-large'>
                <a
                  href="https://drive.google.com/file/d/1osi-FXGga24lMLYu2gjc1fAEyIKMth6M/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer" // Security best practice for opening in a new tab
                >
                  Resume
                </a>
              </li>
              <li className='px-2 hover:text-yellow-500 text-semibold font-large'>
                <a href="#Contact">Contact</a>
              </li>
              </ul>
            </div>                    
          </OutsideClickHandler>
        </nav>
      </header>
    </section>
  );
};

export default Header;
