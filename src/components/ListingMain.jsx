import React from 'react'
import BusList from './BusList';
import SetFilter from './SetFilter';

function ListingMain() {
  return (
    <section className='my-4 font-kanit'> 
        <div className='container py-4 flex'>
            <SetFilter />
            <BusList />
        </div>
    </section>
  )
}


export default ListingMain;
