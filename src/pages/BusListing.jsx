import React, { useContext } from 'react'
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';
import ListingMain from '../components/ListingMain';
import Navbar from '../components/Navbar';
import SearchFormTop from '../components/SearchFormTop';
import { LanguagesContext } from '../contexts/Languages';

function BusListing() {

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
        <SearchFormTop />
        <ListingMain />
      </IntlProvider>
    </div>
  )
}



export default BusListing;
