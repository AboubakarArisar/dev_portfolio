import { Link } from "@remix-run/react";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className='w-full h-20 p-8 relative'>
        <div
          className={`fixed inset-0 bg-slate-800 z-10 transform ${
            showMenu
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <div
            className='fixed right-14 top-14'
            onClick={() => setShowMenu(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='30'
              height='30'
              fill='white'
              viewBox='0 0 50 50'
            >
              <path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'></path>
            </svg>
          </div>
          <ul className='flex flex-col items-center justify-center h-full space-y-8 text-white text-xl font-bold'>
            <li>
              <Link to='/' onClick={() => setShowMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={() => setShowMenu(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to='/projects' onClick={() => setShowMenu(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setShowMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <nav className='flex justify-between items-center rounded-lg p-4 md:p-8 '>
          <h1 className='font-bold text-xl md:text-2xl'>Ab</h1>

          <ul className='hidden md:flex space-x-8 font-bold'>
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index} className='relative group'>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className=' duration-300 transition-transform relative'
                >
                  {item}
                  <span className='absolute bottom-[-5px] font-bold left-0 w-full h-[2px] bg-green-600 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100'></span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className='md:hidden duration-300'
            onClick={() => setShowMenu(!showMenu)}
          >
            {!showMenu ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='30'
                height='30'
                viewBox='0 0 50 50'
                fill='white'
              >
                <path d='M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='30'
                height='30'
                fill='white'
                viewBox='0 0 50 50'
              >
                <path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'></path>
              </svg>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
