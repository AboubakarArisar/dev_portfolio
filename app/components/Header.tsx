import { Link } from "@remix-run/react";
export const Header = () => {
  return (
    <>
      <header className='w-full h-20  p-16'>
        <nav className='flex justify-between items-center rounded-lg bg-slate-900 p-8 '>
          <h1 className='font-bold text-2xl'>Aboubakar Arisar</h1>

          <ul className='flex space-x-8 text-decoration-none font-bold'>
            <li>
              <Link
                to='/'
                className='hover:underline duration-300 transition-transform'
              >
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
