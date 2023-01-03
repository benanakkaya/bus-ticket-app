import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyList from "../components/CompanyList";
import HeroFooter from "../components/HeroFooter";
import SiteInfo from "../components/SiteInfo";
import LetsRegister from "../components/LetsRegister";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';

function HomePage() {
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
            <Hero />
            <HeroFooter />
            <CompanyList />
            <LetsRegister />
            <SiteInfo />
            <Footer />
        </div>
    )
}


export default HomePage;