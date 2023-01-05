import React, { useContext } from 'react'
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TicketPurchase from '../components/TicketPurchase';
import { LanguagesContext } from '../contexts/Languages';


export default function PurchasePage() {

  const {locale,messages} = useContext(LanguagesContext);


  return (
    <div className='bg-primary'>
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
      <TicketPurchase />
      <Footer />
      </IntlProvider>
    </div>
  )
}
