import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyList from "../components/CompanyList";
import HeroFooter from "../components/HeroFooter";
import SiteInfo from "../components/SiteInfo";
import LetsRegister from "../components/LetsRegister";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <div>
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