import React from 'react'

function CompanyList() {
    return (
        <section className='bg-primary'>
            <div className='container px-10 py-5'>
                <ul className='flex flex-wrap justify-center items-center gap-x-5 '>
                    <li><img className='cursor-pointer grayscale hover:grayscale-0' alt='company-pic' src={require("../images/varan.webp")} /></li>
                    <li><img className='cursor-pointer grayscale hover:grayscale-0' alt='company-pic' src={require("../images/vib.webp")} /></li>
                    <li><img className='cursor-pointer grayscale hover:grayscale-0' alt='company-pic' src={require("../images/metro.webp")} /></li>
                    <li><img className='cursor-pointer grayscale hover:grayscale-0' alt='company-pic' src={require("../images/efe.webp")} /></li>
                    <li><img className='cursor-pointer grayscale hover:grayscale-0' alt='company-pic' src={require("../images/pamukkale.webp")} /></li>
                    <li><img className='cursor-pointer grayscale hover:grayscale-0' alt='company-pic' src={require("../images/duzce.webp")} /></li>
                    <li><img className='cursor-pointer grayscale hover:grayscale-0 hidden md:flex' alt='company-pic' src={require("../images/nilufer.webp")} /></li>
                </ul>
            </div>
        </section>
    )
}

export default CompanyList;