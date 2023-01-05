import React, { useContext } from 'react'
import { IntlProvider } from 'react-intl';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ReservationView from '../components/ReservationView';
import { LanguagesContext } from '../contexts/Languages';

function ReservationPage() {

  const {locale,messages} = useContext(LanguagesContext);


  return (
    <div className='bg-primary'>
      <IntlProvider locale={locale} messages={messages[locale]} >
        <Navbar />
        <ReservationView />
        <Footer />
        </IntlProvider>
    </div>
  )
}


export default  ReservationPage;