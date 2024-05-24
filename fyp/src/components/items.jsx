import React from 'react'

export default function items({Links,title}){
    return(
        <ul>
            <h1 className='mb-1 font-semibold'>{title}</h1>
            {
                Links.map((Link)=>(
                    <li key={Link.name}>
                        <a className='text-sm cursor-pointer leading-6' href={Link.link}>{Link.name}</a>
                    </li>
                ))
            }
        </ul>
    );
}
