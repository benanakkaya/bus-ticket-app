import React from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TicketPurchase from '../components/TicketPurchase'

export default function PurchasePage() {
  return (
    <div className='bg-primary'>
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
      <TicketPurchase />
      <Footer />
    </div>
  )
}
