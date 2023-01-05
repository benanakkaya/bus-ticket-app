import React, { useContext } from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyList from "../components/CompanyList";
import HeroFooter from "../components/HeroFooter";
import SiteInfo from "../components/SiteInfo";
import LetsRegister from "../components/LetsRegister";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import { UsersContext } from '../contexts/Users';
import { LanguagesContext } from '../contexts/Languages';
import { IntlProvider } from 'react-intl';

function HomePage() {

    const { loginned } = useContext(UsersContext);
    const {locale,messages} = useContext(LanguagesContext);

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
                <Hero />
                <HeroFooter />
                <CompanyList />
                {loginned === false ?
                    <LetsRegister />
                    : null}
                <SiteInfo />
                <Footer />
            </IntlProvider>
        </div>
    )
}


export default HomePage;