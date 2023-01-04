import React from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TicketCheck from '../components/TicketCheck'

export default function TicketCheckPage() {
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
            <TicketCheck />
            <Footer />
        </div>
    )
}
