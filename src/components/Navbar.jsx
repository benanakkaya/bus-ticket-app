import React from 'react'

function Navbar() {
    return (
        <header className='navbar bg-primary h-96 flex-col  md:h-16 flex md:flex-row font-kanit text-secondary border-b-2 border-secondary px-12 text-md'>
            <nav className='container flex justify-between items-center'>

                {/* LOGO */}
                <a href='#' className='text-4xl'>Biletcim</a>


                    <div className='navbar-middle flex flex-1 mx-10 gap-x-4 hidden lg:flex '>
                        <a href='#' className='hover:text-customgray'>Uçak Bileti</a>
                        <a href='#' className='hover:text-customgray'>Otobüs Bileti</a>
                        <a href='#' className='hover:text-customgray'>Bilet Sorgulama</a>
                    </div>

                    <div className='navbar-end flex gap-x-4 hidden md:flex '>
                        <a href='#' className='hover:text-customgray'>Hakkımızda</a>
                        <a href='#' className='hover:text-customgray'>İletişim</a>
                        <a href='#' className='hover:text-customgray'>Kayıt</a>
                        <a href='#' className='hover:text-customgray'>Giriş</a>
                        <a href='#' className='flex items-center hover:text-customgray'><span><img className='mr-2' src='https://sortitoutsi.b-cdn.net/uploads/flags_sm/799.png' alt='language-flag' /></span> Türkçe - TRY</a>
                    </div>

                {/* COLLAPSE MENU BUTTON */}
                <div>
                    <i className='fa-solid fa-bars text-2xl cursor-pointer md:hidden'></i>
                </div>
            </nav>

            {/* COLLAPSE MENU (MEDIUM RES VIEW) */}
            <div className='flex flex-col border-t-2 px-4 md:hidden'>
                <div className='flex flex-col flex-1 mt-5 gap-y-3 '>
                        <a href='#' className='hover:text-customgray'>Uçak Bileti</a>
                        <a href='#' className='hover:text-customgray'>Otobüs Bileti</a>
                        <a href='#' className='hover:text-customgray'>Bilet Sorgulama</a>
                    </div>
                    <hr className='mt-3'/>
                    <div className='flex flex-col mt-5 gap-y-3  '>
                        <a href='#' className='hover:text-customgray'>Hakkımızda</a>
                        <a href='#' className='hover:text-customgray'>İletişim</a>
                        <a href='#' className='hover:text-customgray'>Kayıt</a>
                        <a href='#' className='hover:text-customgray'>Giriş</a>
                        <a href='#' className='flex items-center hover:text-customgray'><span><img className='mr-2' src='https://sortitoutsi.b-cdn.net/uploads/flags_sm/799.png' alt='language-flag' /></span> Türkçe - TRY</a>
                    </div>
            </div>
        </header>
    )
}


export default Navbar;