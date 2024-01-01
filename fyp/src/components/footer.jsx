import React from 'react'
import Container from './itemContainer'
import Social from './socialIcons';
import {Icons} from './Menu'

export default function Footer(){
    return (
        <footer className='bg-[#197902] text-white'>
            <div className='md:flex md:justify-between md:items-center sm:px-4 bg-[#197902] py-7'>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>Free</span> until you're ready!</h1>
            <div>
                <input type='text' placeholder='Enter your Email...' className='sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'  />
                <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-sans rounded-md text-white md:w-auto w-full'>Send Email</button>
            </div>
            </div>
            <Container/>
            <div className='grid grid-cols-1 sm:grid col-span-2 lg:grid-cols-2 gap-10 items-center text-center pt2 text-gray-400 text-sm pb-8'>
                <span><Social Icons={Icons}/></span>
                <span>Copyright © 2023  | All Rights Reserved </span>
            </div>
        </footer>

    );
}
