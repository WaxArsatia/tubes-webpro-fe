import React from 'react'
import { IoSearchOutline, IoMenuSharp } from "react-icons/io5";
import logo_groei from "../../images/logo_groei.png"
import NavbarItem from './NavbarItem';

export default function Navbar() {
    const logoNavbar = [{
        key:0,
        logo:<IoSearchOutline size={24}/>
    },  
    {
        key:1,
        logo:<IoMenuSharp size={24}/>
    }  ];

    return (
        // latar belakang navbar
        <div className='flex bg-[linear-gradient(86deg,#FF5722_0%,#F19939_100%)] h-[80px] justify-center w-full'>

            {/* setting container dalam navbar */}
            <div className='flex justify-between w-[335px] h-[26px] self-center'>

                {/* logo */}
                <a href="#">
                    <img src={logo_groei} alt="" className='object-contain'/>
                </a>

                {/* menu item */}
                <div className='flex gap-6 text-white'>
                    {logoNavbar.map((item)=>(
                        <NavbarItem key={item.key} logo={item.logo}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
