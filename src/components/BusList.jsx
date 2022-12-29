import React from 'react'
import ListItem from './ListItem';

function BusList() {
    return (
        <div className='flex flex-auto bg-primary flex-1 border border-secondary ml-4'>
            <div className='container p-4 flex flex-col gap-y-4'>
                <ListItem />


            </div>
        </div>
    )
}


export default BusList;
