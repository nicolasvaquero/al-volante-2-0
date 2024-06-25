import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link legacyBehavior href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 46.875 46.875"
              >
                <path
                  d="M23.25 16.875c-1.087 0.87 -1.061 1.639 -1.882 1.95 -0.834 0.315 -2.773 -0.467 -3.551 -0.861 -0.424 -0.216 -0.772 -0.403 -0.864 -0.911C16.841 16.444 17.494 15.049 17.737 14.437l1.549 -3.75c0.221 -0.499 0.609 -1.389 1.037 -1.716 0.454 -0.343 1.072 -0.339 1.614 -0.347h2.625c0.456 0.009 0.864 -0.004 1.239 0.3 0.604 0.486 1.841 3.684 2.214 4.575l4.684 11.437c0.799 1.997 1.967 4.207 1.987 6.375 -1.794 -0.084 -3.386 -0.928 -5.062 -1.5l-10.875 -3.562c-0.157 0.673 -0.814 2.625 -1.256 3.092 -0.369 0.392 -1.226 0.611 -1.744 0.784 -1.464 0.487 -2.94 1.151 -4.5 1.187 0.047 -1.903 1.774 -5.134 2.625 -6.937 -0.78 -0.141 -1.862 -0.532 -2.625 -0.816 -0.347 -0.129 -0.872 -0.307 -0.988 -0.709 -0.161 -0.559 0.602 -0.994 0.988 -1.23 0.924 -0.564 3.097 -1.702 4.125 -1.871 1.031 -0.169 2.542 0.384 3.562 0.66l6.375 1.528zm-6.375 6c-0.542 -0.988 -2.248 -1.753 -3.187 -0.937 1.054 0.54 2.006 0.838 3.187 0.937Zm4.312 1.5c-0.549 -1.031 -1.736 -1.254 -2.812 -1.5l-0.187 0.75zm4.5 1.5c-0.819 -0.926 -1.644 -1.076 -2.812 -1.312l-0.187 0.75c1.037 0.345 1.89 0.727 3 0.562Zm4.312 1.125c-0.934 -0.431 -1.959 -0.885 -3 -0.75 0.832 1.003 1.594 1.082 2.812 1.312l0.187 -0.187z"
                  stroke-width="0.187499765625293"
                />
              </svg>
              <span className="ml-3 text-xl">Al volante</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/servicios" >
              Servicios
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/paquetes" >
              Paquetes
            </Link>
            <Link href="/clientes" className="mr-5 hover:text-gray-900">
              Clientes
            </Link>
            <Link href="/ubicacion" className="mr-5 hover:text-gray-900">
              Ubicación
            </Link>
            <Link href="/contacto" className="mr-5 hover:text-gray-900">
              Contacto
            </Link>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
