'use client'

import Image from "next/image"
import { FaTimes, FaBars } from 'react-icons/fa'
import { useState } from "react";
import Link from "next/link";


const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const categories = [
    {
      id: 1,
      name: 'webs',
      to: 'webs'
    },
    {
      id: 2,
      name: 'quien soy',
      to: 'me'
    },
    {
      id: 3,
      name: 'donar',
      to: 'donate'
    },
  ];

  return (
    <section className="flex justify-between items-center w-full h-20 px-4 text-white sticky top-0 z-10 bg-[#faf9f9]">
      <div>
        <Image
          src={'/assets/argentina.png'}
          width={50}
          height={50}
          alt="Argentinian Flag"
        />
      </div>

      <ul className="hidden md:flex">
        {categories.map(({ id, name, to }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-blue-400 duration-300 text-lg"
            key={id}
          >
            <Link href={to} duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer mr-4 p-1 z-10 text-gray-600 md:hidden rounded-lg hover:scale-110 duration-200"
      >
        {isActive ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isActive && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#e6e6e6] to-[#d3d3d3] text-gray-600 ">
          {categories.map(({ id, name, to }) => (
            <li
              className="cursor-pointer capitalize my-6 text-4xl hover:text-blue-400 hover:scale-105 duration-300 list-none"
              key={id}
            >
              <Link
                href={to}
                duration={500}
                onClick={() => setIsActive(!isActive)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </section>
  )
}

export default Navbar