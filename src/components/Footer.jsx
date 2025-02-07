import React from 'react'

const Footer = () => {
  return (
    <footer>
  
  <section className="py-8 bg-black px-5">
    <div className="container flex flex-col-reverse items-center justify-between md:flex-row">
      <p className="text-sm text-white">
        © {/* */}2025{/* */} Lonely Planet, a Red Ventures company. All rights
        reserved. No part of this site may be reproduced without our written
        permission.
      </p>
      <div className="inline-flex items-center w-full mb-6 md:w-96 md:mb-0">
        <label
          htmlFor="language-dropdown"
          className="mr-6 font-semibold text-white uppercase"
        >
          Language
        </label>
        <div id="language-dropdown" className="relative h-auto flex-auto">
          <div className="relative">
            <button
              className="relative flex justify-between items-center w-full rounded-lg px-4 py-2 md:px-5 md:py-4 text-left font-semibold focus:outline-none border z-10 border-white border-black-200"
              type="button"
            >
              <p className="leading-none text-white">English</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                className="text-xs ml-4 text-white"
                viewBox="0 0 11 6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.60504 5.5L0 0H11.2101L5.60504 5.5Z" />
              </svg>
            </button>
            <ul className="absolute bottom-full w-full bg-white border border-b-0 border-black-100 rounded-tr-lg rounded-tl-lg py-2 shadow-lg-inverted hidden">
              <li className="mx-1 md:mx-3">
                <button
                  className="w-full p-3 my-2 text-left rounded hover:bg-black-100 hover:font-semibold"
                  type="button"
                >
                  Deutsch
                </button>
              </li>
              <li className="mx-1 md:mx-3">
                <button
                  className="w-full p-3 my-2 text-left rounded hover:bg-black-100 hover:font-semibold"
                  type="button"
                >
                  Français
                </button>
              </li>
              <li className="mx-1 md:mx-3">
                <button
                  className="w-full p-3 my-2 text-left rounded hover:bg-black-100 hover:font-semibold"
                  type="button"
                >
                  Español
                </button>
              </li>
              <li className="mx-1 md:mx-3">
                <button
                  className="w-full p-3 my-2 text-left rounded hover:bg-black-100 hover:font-semibold"
                  type="button"
                >
                  Italiano
                </button>
              </li>
              <li className="mx-1 md:mx-3">
                <button
                  className="w-full p-3 my-2 text-left rounded hover:bg-black-100 hover:font-semibold"
                  type="button"
                >
                  Česky
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</footer>

  )
}

export default Footer