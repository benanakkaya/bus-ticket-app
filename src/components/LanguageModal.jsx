import React, { useContext } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import { LanguagesContext } from '../contexts/Languages'

export default function LanguageModal() {

    const  {locale,messages,setLocale,langModalState,setLangModalState} = useContext(LanguagesContext); 

    const handleLang = (value) => {
    
        setTimeout(() => {
            setLocale(value);
            setLangModalState(false);
        },200)
        
    }

  return (
    <IntlProvider locale={locale} messages={messages[locale]} >
            {langModalState === true ?
                <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center" style={{ zIndex: "2" }}>
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="bg-primary rounded-lg shadow relative w-96 md:w-116 lg:116 ">
                        <div className="flex justify-end  p-2">
                            <button onClick={() => setLangModalState(false)}   type="button" className="text-secondary bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                    
                            <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                                <h3 className="text-xl font-medium text-secondary text-center "><i className="fa-solid fa-globe mr-2"></i> <FormattedMessage id="languageSelection" /></h3>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center gap-x-6'>
                                        <div onClick={() => handleLang("tr-TR")} className='flex font-medium justify-center items-center py-2 px-4 border gap-x-2 cursor-pointer opacity-70 hover:opacity-100'><img className='w-16' src='https://sortitoutsi.b-cdn.net/uploads/flags/799.png'  alt='turkish'/> <FormattedMessage id="turkish" /></div>
                                        <div onClick={() => handleLang("en-US")} className='flex font-medium justify-center items-center py-2 px-4 border gap-x-2 cursor-pointer opacity-70 hover:opacity-100 '><img className='w-16'src='https://sortitoutsi.b-cdn.net/uploads/flags/145174.png'  alt='english'/> <FormattedMessage id="english" /></div>
                                    </div>
                                </div>

                            </form>
                        
                    </div>

                </div>
                : null}
                </IntlProvider>
  )
}
