import React, { useState } from 'react';
import './CandidateSearch.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
const { loginWithRedirect,isAuthenticated,user , logout} = useAuth0();

  return (
    <div className='fixed w-full h-[200px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <a className="navbar-brand" href="#">
        <img src={Logo} alt='Logo Image' style={{ height: '130px'}} />
        </a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to='CandidateList' smooth={true} duration={500}>
          Candidate Search
          </Link>
        </li>
        {isAuthenticated && (
            <li>
              <p> {user.name} </p>
            </li>
          )}
        {isAuthenticated ? (
            <li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
      </ul>
    </div>
  );
};

export default Navbar;
