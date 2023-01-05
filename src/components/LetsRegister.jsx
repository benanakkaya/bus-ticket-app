import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { UsersContext } from '../contexts/Users';

function LetsRegister() {

    const {setFormState,setModalState} = useContext(UsersContext);

    const handleForm = (modal,form) => {
        setFormState(form);
        setModalState(modal);
    }



    return (
        <section className='bg-gradient-to-t from-secondary to-primary h-96 flex items-center justify-center font-kanit text-primary font-bold tracking-wider text-3xl'> 
            <div className='container flex justify-center flex-col items-center px-5 text-center'>
                <h2 className='mb-5'><FormattedMessage id="lrHeader" /></h2>
                <button onClick={() => handleForm(true,"register")} className='border-4 py-2 px-4 rounded-md border-primary hover:bg-primary hover:bg-opacity-20'><FormattedMessage id="lrButton" /></button>
            </div>
        </section>
    )
}

export default LetsRegister;
