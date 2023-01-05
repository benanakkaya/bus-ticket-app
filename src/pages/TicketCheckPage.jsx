import React, { useContext } from 'react'
import { IntlProvider } from 'react-intl'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TicketCheck from '../components/TicketCheck'
import { LanguagesContext } from '../contexts/Languages'

export default function TicketCheckPage() {

    const { locale, messages } = useContext(LanguagesContext);


    return (
        <div>
            <IntlProvider locale={locale} messages={messages[locale]} >
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
            </IntlProvider>
        </div>
    )
}
