import React from 'react'
import { ToastContainer } from 'react-toastify';
import ListingMain from '../components/ListingMain';
import Navbar from '../components/Navbar';
import SearchFormTop from '../components/SearchFormTop';

function BusListing() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <SearchFormTop />
      <ListingMain />
    </div>
  )
}



export default BusListing;
