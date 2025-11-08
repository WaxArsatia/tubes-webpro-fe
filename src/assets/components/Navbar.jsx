import React from 'react';
import { IoSearchOutline, IoMenuSharp } from 'react-icons/io5';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  const logoNavbar = [
    {
      key: 0,
      logo: <IoSearchOutline size={24} />,
    },
    {
      key: 1,
      logo: <IoMenuSharp size={24} />,
    },
  ];

  return (
    <div className="flex h-20 w-full bg-linear-to-tr from-[#FF5722] to-[#F19939] justify-between px-8 items-center">
      <div className="flex">
        <a href="/">
          <img src="/assets/logo_groei.png" alt="Logo Groei" />
        </a>
      </div>

      <div className="text-white flex gap-3">
        {logoNavbar.map((item) => (
          <NavbarItem key={item.key} logo={item.logo} />
        ))}
      </div>
    </div>
  );
}
