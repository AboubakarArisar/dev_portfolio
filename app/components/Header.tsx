export const Header = () => {
  return (
    <>
      <header className='w-full h-20  p-16'>
        <nav className='flex justify-between items-center rounded-lg bg-slate-900 p-8 '>
          <h1 className='font-bold text-2xl'>Aboubakar Arisar</h1>

          <ul className='flex space-x-8 text-decoration-none font-bold '>
            <li>
              <a
                href='/'
                className='hover:underline duration-300 transition-transform'
              >
                Home
              </a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/skills'>Skills</a>
            </li>
            <li>
              <a href='/projects'>Projects</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
