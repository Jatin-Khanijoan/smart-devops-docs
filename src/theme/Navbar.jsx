import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { useColorMode } from '@docusaurus/theme-common';
// import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Link from '@docusaurus/Link';

const routeList = [
  {
    href: 'http://localhost:5173/',
    label: 'Home',
  },
  {
    href: 'http://localhost:5173/dashboard',
    label: 'Dashboard',
  },
  {
    href: '/docs/intro',
    label: 'Documentation',
  },
  {
    href: 'http://localhost:5173/support',
    label: 'Support',
  },
];

function ModeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <button
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
    >
      {colorMode === 'dark' ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default function NavbarWrapper(props) {
  return (
    <header className="sticky border-b border-border top-0 z-40 w-full bg-background">
      <div className="mx-auto">
        <nav className="container h-20 px-4 w-screen flex justify-between items-center">
          <div className="font-bold flex">
            <Link to="/" className="ml-2 font-bold text-2xl flex items-center text-foreground">
              {/* Replace with your logo component or image */}
              MAJS.
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            {routeList.map((route, i) => (
              <Link
                to={route.href}
                key={i}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {route.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-4 items-center pr-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {/* Replace with appropriate GitHub icon */}
              Github
            </a>

            {/* <ModeToggle /> */}
          </div>
        </nav>
      </div>
      <OriginalNavbar {...props} style={{display: 'none'}} />
    </header>
  );
}