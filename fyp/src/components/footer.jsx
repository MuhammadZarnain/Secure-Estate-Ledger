import React from 'react'
import Container from './itemContainer'
import Social from './socialIcons';
import {Icons} from './Menu'

export default function Footer(){
    return (
        <footer className='bg-[#197902] text-white'>
            <Container/>
            <div className='grid grid-cols-1 sm:grid col-span-2 lg:grid-cols-2 gap-10 items-center text-center pt2 text-gray-400 text-sm pb-8'>
                <span><Social Icons={Icons}/></span>
                <span>Copyright © 2023  | All Rights Reserved </span>
            </div>
        </footer>

    );
}
