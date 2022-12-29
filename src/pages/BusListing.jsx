import React from 'react'
import ListingMain from '../components/ListingMain';
import Navbar from '../components/Navbar';
import SearchFormTop from '../components/SearchFormTop';

function BusListing() {
  return (
    <div>
        <Navbar />
        <SearchFormTop />
        <ListingMain />
    </div>
  )
}



export default BusListing;
