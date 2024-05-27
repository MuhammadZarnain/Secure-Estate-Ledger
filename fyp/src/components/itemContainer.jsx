import React from 'react'
import Items from './items'
import {SEL,Company,Follow} from './Menu'
export default function itemContaienr(){
    return(
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 ml-20 gap-6 sm:px-8 px-5 py-16'>
            <Items Links={SEL} title="SEL"/>
            <Items Links={Company} title="Company"/>
            <Items Links={Follow} title="Follow"/>
        </div>
    );
}