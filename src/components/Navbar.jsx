import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UsersContext } from '../contexts/Users';

function Navbar() {

    const { setFormState, setModalState, loginned, loginnedUser, handleLogout } = useContext(UsersContext);

    const handleForm = (modal, form) => {
        setFormState(form);
        setModalState(modal);
    }




    return (

        <header className='navbar bg-primary h-96 flex-col  md:h-16 flex md:flex-row font-kanit text-secondary border-b-2 border-secondary px-12 text-md'>
            <nav className='container flex justify-between items-center'>

                {/* LOGO */}
                <Link to='/' className='text-4xl'>Biletcim</Link>


                <div className='navbar-middle flex flex-1 mx-10 gap-x-4 hidden lg:flex '>
                    <a href='#/' className='hover:text-customgray'>Otobüs Bileti</a>
                    <Link to='/ticket-check' className='hover:text-customgray'>Bilet Sorgulama</Link>
                </div>

                {loginned === true ?
                    <div className='mr-8'>
                        Hoşgeldin <span className='text-orange-300'>{loginnedUser} </span>
                    </div>
                    : null}

                <div className='navbar-end flex gap-x-4 hidden md:flex '>
                    <a href='#/' className='hover:text-customgray'>Hakkımızda</a>
                    <a href='#/' className='hover:text-customgray'>İletişim</a>
                    {loginned === false ?
                        <>
                            <a href='#/' onClick={() => handleForm(true, "register")} className='hover:text-customgray'>Kayıt</a>
                            <a href='#/' onClick={() => handleForm(true, "login")} className='hover:text-customgray'>Giriş</a>
                        </>
                        :
                        <>
                            <a href='#/' className='hover:text-customgray'>Rezervasyonlarım</a>
                            <a href='#/' onClick={() => handleLogout()} className='hover:text-customgray text-orange-600'>Çıkış</a>
                        </>
                    }
                    <a href='#/' className='flex items-center hover:text-customgray'><span><img className='mr-2' src='https://sortitoutsi.b-cdn.net/uploads/flags_sm/799.png' alt='language-flag' /></span> Türkçe - TRY</a>
                </div>

                {/* COLLAPSE MENU BUTTON */}
                <div>
                    <i className='fa-solid fa-bars text-2xl cursor-pointer md:hidden'></i>
                </div>
            </nav>

            {/* COLLAPSE MENU (MEDIUM RES VIEW) */}
            <div className='flex flex-col border-t-2 px-4 md:hidden'>
                <div className='flex flex-col flex-1 mt-5 gap-y-3 '>
                    <a href='#/' className='hover:text-customgray'>Otobüs Bileti</a>
                    <a href='#/' className='hover:text-customgray'>Bilet Sorgulama</a>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-col mt-5 gap-y-3  '>
                    <a href='#/' className='hover:text-customgray'>Hakkımızda</a>
                    <a href='#/' className='hover:text-customgray'>İletişim</a>
                    <a href='#/' onClick={() => handleForm(true, "register")} className='hover:text-customgray'>Kayıt</a>
                    <a href='#/' onClick={() => handleForm(true, "login")} className='hover:text-customgray'>Giriş</a>
                    <a href='#/' className='flex items-center hover:text-customgray'><span><img className='mr-2' src='https://sortitoutsi.b-cdn.net/uploads/flags_sm/799.png' alt='language-flag' /></span> Türkçe - TRY</a>
                </div>
            </div>
        </header>
    )
}


export default Navbar;