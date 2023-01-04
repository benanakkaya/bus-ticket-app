import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ReservationView from '../components/ReservationView';

function ReservationPage() {
  return (
    <div className='bg-primary'>
        <Navbar />
        <ReservationView />
        <Footer />
    </div>
  )
}


export default  ReservationPage;