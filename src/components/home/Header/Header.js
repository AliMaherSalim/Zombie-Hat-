import React, { useState } from 'react';
import { FaFacebook, FaSearch, FaFacebookMessenger } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import { RiGroupFill } from 'react-icons/ri';
// import { HiUserGroup } from 'react-icons/hi';
import { BsBellFill } from 'react-icons/bs';
import profileImg from '../../../assets/images/default_profile.png';
import { Link } from 'react-router-dom';
import { BsToggleOn } from 'react-icons/bs';
import { BsToggle2Off } from 'react-icons/bs';
import SearchMenu from './SearchMenu';
import UseDarkMode from '../../../Theme/UseDarkMode';

const Header = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [isDarkMode,toggleMode]=UseDarkMode();
  const [lang, setLang] = useState(false);
  const [showSearchMenu,setShowSearchMenu]=useState(false);


  
  return (
    <nav className="py-4 px-6 dark:bg-darkBgSideBar dark:text-white bg-gray-100 text-gray-500 shadow-md flex align-baseline justify-between sticky-top">
        
      <div className="flex">
      
      {!showSearchMenu?
      <div className='flex'>
        <FaFacebook className="text-facebook-blue text-4xl mr-5" />
          
          {/*Start Search Input */}

        <div className="relative mb-4"  onClick={()=>{
              setShowSearchMenu(true);
            }
          }>
          <input
            type="text"
            className="px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded-full focus:text-gray-700 focus:bg-white focus:outline-none w-24 md:w-full"
            placeholder="Search"
          />
          <FaSearch className="absolute top-1/4 right-3 md:right-5" />
        </div>
        </div>
          
        : <SearchMenu setShowSearchMenu={setShowSearchMenu} /> }
    
      </div>
     

      <div className="flex mt-1">
        <Link to='/'>
        <TiHome className="hover:text-facebook-blue text-3xl mr-1 md:mr-10" />
        </Link>
      <Link to='/friends/friendRequest'>
      <RiGroupFill className="hover:text-facebook-blue text-3xl ml-1 md:ml-10" />
      </Link>

        {
          //   <HiUserGroup className="hover:text-facebook-blue text-4xl ml-1 md:ml-20" />
        }
      </div>

      <div className="flex">
        <div className="dropdown relative mr-1 md:mr-10">
          <a
            className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center
        "
            href="/"
            id="dropdownMenuButton1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
              <FaFacebookMessenger className="hover:text-facebook-blue w-11/12 h-6" />
            </div>

            <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-9 ml-7 py-0 px-1.5">
              1
            </span>
          </a>
          <ul
            className="dropdown-menu min-w-max absolute hidden 
            bg-white text-base z-50 float-left py-2 list-none text-left 
            rounded-lg shadow-lg mt-1 m-0 bg-clip-padding dark:bg-darkBgSideBar border-none left-auto right-0"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <div className="relative dark:bg-darkBgSideBar dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                <input
                  type="text"
                  className="px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded-full focus:text-gray-700 focus:bg-white focus:outline-none"
                  placeholder="Search"
                />
                <FaSearch className="absolute right-7 top-1/3" />
              </div>
            </li>
            <li>
              <Link
                className="dropdown-item dark:text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to={'/profile'}
              >
                Action
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item dark:text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="/"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown relative mr-1 md:mr-10">
          <a
            className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center"
            href="/"
            id="dropdownMenuButton3"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
              <BsBellFill className="hover:text-facebook-blue w-11/12 h-6" />
            </div>
            <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-9 ml-7 py-0 px-1.5">
              1
            </span>
          </a>
          <ul
            className="dropdown-menu dark:bg-darkBgSideBar  min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0
    "
            aria-labelledby="dropdownMenuButton3"
          >
            <li>
              <Link
                className="dropdown-item dark:text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to={'/profile'}
              >
                Profile
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item dark:text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="1"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="dropdown-item dark:text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="1"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown relative">
          <a
            className="dropdown-toggle flex items-center hidden-arrow"
            href="/"
            id="dropdownMenuButton2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="w-10">
              <img
                src={profileImg}
                className="rounded-full"
                alt="profile img"
                loading="lazy"
              />
            </div>
          </a>
          <ul
            className="
          dropdown-menu min-w-max dark:bg-darkBgSideBar absolute hidden bg-white  text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1  m-0 bg-clip-padding border-none left-auto right-0"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <Link
                className="dropdown-item dark:text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to={'/profile'}
              >
                Profile
              </Link>
            </li>
            <li>
            <div className='text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 flex'>
            <div className="form-check form-switch">
            <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" 
            type="checkbox" 
            role="switch"
            id="flexSwitchCheckChecked"
           onChange={()=>toggleMode(isDarkMode)}/>
            <label className="form-check-label inline-block text-gray-800 dark:text-white" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
           </div>
           </div>
              {/* <button className="dropdown-item text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 flex">
                Dark mode{' '}
                {darkMode && (
                  <BsToggleOn
                    className="text-facebook-blue text-2xl ml-3 -mt-0.5"
                    onClick={()=>setTheme(colorTheme)}
                   
                   
                  />
                )}
                {!darkMode && (
                  <BsToggle2Off
                    className="text-2xl ml-3 -mt-0.5"
                    onClick={()=>setTheme(colorTheme)}
               
                  />
                )}
              </button> */}
            </li>
            <li>
              <button className="dropdown-item text-sm py-2 px-4 font-normal flex w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                <span
                  className={!lang ? 'text-facebook-blue dark:text-white' : ''}
                  onClick={() => {
                    setLang(!lang);
                  }}
                >
                  En
                </span>{' '}
                {lang && (
                  <BsToggleOn
                    className="text-facebook-blue dark:text-whit text-2xl mx-3 -mt-0.5"
                    onClick={() => {
                      setLang(!lang);
                    }}
                  />
                )}
                {!lang && (
                  <BsToggle2Off
                    className="text-facebook-blue text-2xl mx-3 -mt-0.5"
                    onClick={() => {
                      setLang(!lang);
                    }}
                  />
                )}{' '}
                <span
                  className={lang ? 'text-facebook-blue dark:text-white' : ''}
                  onClick={() => {
                    setLang(!lang);
                  }}
                >
                  Ar
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
