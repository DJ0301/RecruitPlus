import React, { useState } from 'react';
import './CandidateSearch.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[200px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ height: '200px'}} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
  
        <li>
          <Link to='CandidateList' smooth={true} duration={500}>
          Candidate Search
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
          Login/Register
          </Link>
        </li>
      </ul>

      
    </div>
  );
};

export default Navbar;
