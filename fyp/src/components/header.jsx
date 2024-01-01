import React from 'react'
import imsg from '../assets/Logo.png'
export default function Header(){
   return(
    <div className='bg-[#197902] p-4'>
        <header className='max-w-[1240px] py-[20px] items-center flex justify-between mx-auto'>
            <div>
                <a href='/'><img className='h-48 w-auto absolute top-[-55px] left-[5px] ' src={imsg} alt='logo'/></a> 
            </div>
            <div>
            <ul className='hidden md:flex text-white gap-10'>
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Our Policy
                </li>
                <li>
                    Contact Us
                </li>
                <li>
               <a href='/login'>Login</a>
                </li>
                <li>
               |
                </li>
                <li>
               <a href='/register'>Register</a>
                </li>

            </ul>
            </div>

        </header>

    </div>
   );

}