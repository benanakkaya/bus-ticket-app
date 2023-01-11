import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { LanguagesContext } from '../contexts/Languages';
import { UsersContext } from '../contexts/Users';

function Navbar() {

    const { setFormState, setModalState, loginned, loginnedUser, handleLogout } = useContext(UsersContext);
    const { setLangModalState, locale } = useContext(LanguagesContext);

    const handleForm = (modal, form) => {
        setFormState(form);
        setModalState(modal);
    }




    return (

        <header className='navbar bg-primary flex-col flex md:flex-row font-kanit text-secondary border-b-2 border-secondary px-12 text-md'>
            <nav className='container flex justify-between items-center h-16'>

                {/* LOGO */}
                <Link to='/' className='text-4xl'>Biletcim</Link>


                <div className='navbar-middle flex-1 mx-10 gap-x-4 hidden lg:flex '>
                    <a href='#/' className='hover:text-customgray'><FormattedMessage id="busTicket" /></a>
                    <Link to='/ticket-check' className='hover:text-customgray'><FormattedMessage id="ticketCheck" /></Link>
                </div>

                {loginned === true ?
                    <div className='mx-10 hidden lg:flex gap-x-2 '>
                        <FormattedMessage id="welcome" /> <span className='text-orange-300'>{loginnedUser} </span>
                    </div>
                    : null}

                <div className='navbar-end gap-x-4 hidden lg:flex '>
                    <a href='#/' className='hover:text-customgray'><FormattedMessage id="aboutUs" /></a>
                    <a href='#/' className='hover:text-customgray'><FormattedMessage id="contact" /></a>
                    {loginned === false ?
                        <>
                            <a href='#/' onClick={() => handleForm(true, "register")} className='hover:text-customgray'><FormattedMessage id="register" /></a>
                            <a href='#/' onClick={() => handleForm(true, "login")} className='hover:text-customgray'><FormattedMessage id="login" /></a>
                        </>
                        :
                        <>
                            <Link to='/my-reservations' className='hover:text-customgray'><FormattedMessage id="myReservations" /></Link>
                            <a href='#/' onClick={() => handleLogout()} className='hover:text-customgray text-orange-600'><FormattedMessage id="logout" /></a>
                        </>
                    }
                    {locale === "tr-TR" ?
                        <a href='#/' onClick={() => setLangModalState(true)} className='flex items-center hover:text-customgray'><img className='mr-2 ' src='https://sortitoutsi.b-cdn.net/uploads/flags_sm/799.png' alt='turkish' /> <FormattedMessage  id="turkish" /> </a>
                        :
                        <a href='#/' onClick={() => setLangModalState(true)} className='flex items-center hover:text-customgray'><img className='mr-2 ' src='https://sortitoutsi.b-cdn.net/uploads/flags_sm/145174.png' alt='english' /> <FormattedMessage id="english" /> </a>
                    }
                </div>

                {/* COLLAPSE MENU BUTTON */}
                <div>
                    <i className='fa-solid fa-bars text-2xl cursor-pointer lg:hidden'></i>
                </div>
            </nav>

            {/* COLLAPSE MENU (MEDIUM RES VIEW) */}
            <div className='flex flex-col border-t-2 px-4 hidden'>
                <div className='flex flex-col flex-1 mt-5 gap-y-3 '>
                    <a href='#/' className='hover:text-customgray'><FormattedMessage id="busTicket" /></a>
                    <a href='#/' className='hover:text-customgray'><FormattedMessage id="ticketCheck" /></a>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-col mt-5 gap-y-3  '>
                    <a href='#/' className='hover:text-customgray'><FormattedMessage id="aboutUs" /></a>
                    <a href='#/' className='hover:text-customgray'><FormattedMessage id="contact" /></a>
                    <a href='#/' onClick={() => handleForm(true, "register")} className='hover:text-customgray'><FormattedMessage id="register" /></a>
                    <a href='#/' onClick={() => handleForm(true, "login")} className='hover:text-customgray'><FormattedMessage id="login" /></a>
                    <a href='#/' onClick={() => setLangModalState(true)} className='flex items-center hover:text-customgray'><span><img className='mr-2' src='https://sortitoutsi.b-cdn.net/uploads/flags_sm/799.png' alt='language-flag' /></span> <FormattedMessage id="turkish" /> - TRY</a>
                </div>
            </div>
        </header>
    )
}


export default Navbar;