import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { UsersContext } from '../contexts/Users';
import * as yup from "yup";
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LanguagesContext } from '../contexts/Languages';

function UserModal() {

    const { locale, messages } = useContext(LanguagesContext);

    const { modalState, setModalState, loginFormState, setFormState, formState, setNewUser,loginControl } = useContext(UsersContext);

    const handleForm = (e,status) => {
        console.log(status)
        e.preventDefault();
        setFormState(status);
    }


    const registerForm = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:"",
            password2:"",
        },
        onSubmit : (values) => {
            setNewUser(values)
        },
        validationSchema: yup.object().shape({
            username: yup.string().min(5,"Kullanıcı adı çok kısa!").max(13,"Kullanıcı adı çok uzun!").required("Lütfen başlangıç noktanızı seçin."),
            email: yup.string().email().required("Lütfen gidiş noktanızı seçin."),
            password: yup.string().min(6,"Parolanız çok kısa").max(15,"Parolanız çok uzun!").required("Lütfen bir tarih seçin"),
            password2: yup.string().oneOf([yup.ref("password"), null], "Parolalar eşleşmiyor!"),
        })
    })


    const loginForm = useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        onSubmit : (values) => {
            loginControl(values)
        },
        validationSchema: yup.object().shape({
            username: yup.string().required("Kullanıcı adınızı yazın!"),
            password: yup.string().required("Parolanızı yazın!"),
        })
    })





    return (
        <>
        <IntlProvider locale={locale} messages={messages[locale]} >
            {modalState === true ?
                <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center" style={{ zIndex: "2" }}>
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="bg-primary rounded-lg shadow relative w-96 md:w-116 lg:116 ">
                        <div className="flex justify-end  p-2">
                            <button onClick={() => setModalState(false)}   type="button" className="text-secondary bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        {formState === "register" ?
                            <form onSubmit={registerForm.handleSubmit} className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                                <h3 className="text-xl font-medium text-secondary "><i className="fa-solid fa-user-plus mr-2"></i> <FormattedMessage id="registerHeader" /></h3>
                                <div>
                                    <label htmlFor="username" className="text-sm font-medium text-secondary block mb-2 "><FormattedMessage id="username" /> *</label>
                                    <input onChange={registerForm.handleChange} type="text" name="username" id="username" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:outline-secondary block w-full p-2.5 " placeholder={locale === "tr-TR" ? "Kullanıcı Adı" : "Username"} required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm font-medium text-secondary block mb-2 ">E-mail *</label>
                                    <input onChange={registerForm.handleChange} type="email" name="email" id="email" placeholder={locale === "tr-TR" ? "isim@email.com" : "name@email.com"} className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:outline-secondary block w-full p-2.5 " required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="text-sm font-medium text-secondary block mb-2 "><FormattedMessage id="password" /> *</label>
                                    <input onChange={registerForm.handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:outline-secondary block w-full p-2.5" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password2" className="text-sm font-medium text-secondary block mb-2 "><FormattedMessage id="password" /> (<FormattedMessage id="repeat" />) *</label>
                                    <input onChange={registerForm.handleChange} type="password" name="password2" id="password2" placeholder="••••••••" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:outline-secondary block w-full p-2.5" required="" />
                                </div>
                                <button type="submit" className="w-full text-white bg-secondary hover:bg-green-600 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><FormattedMessage id="complete" /></button>
                                <div className="text-sm font-medium text-gray-900  flex justify-center">
                                <FormattedMessage id="alreadyHave" /> <a href="#" onClick={(e) => handleForm(e,"login")}  className="text-secondary hover:underline  ml-1"><FormattedMessage id="signIn" /></a>
                                </div>
                            </form> :
                            <form onSubmit={loginForm.handleSubmit} className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                                <h3 className="text-xl font-medium text-secondary "><i className="fa-solid fa-arrow-right-to-bracket mr-2"></i> <FormattedMessage id="loginHeader" /></h3>
                                <div>
                                    <label htmlFor="username" className="text-sm font-medium text-secondary block mb-2 "><FormattedMessage id="username" /> *</label>
                                    <input onChange={loginForm.handleChange} type="text" name="username" id="username" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:outline-secondary block w-full p-2.5 " placeholder={locale === "tr-TR" ? "Kullanıcı Adı" : "Username"} required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="text-sm font-medium text-secondary block mb-2 "><FormattedMessage id="password" /> *</label>
                                    <input onChange={loginForm.handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:outline-secondary block w-full p-2.5" required="" />
                                </div>
                                <button type="submit" className="w-full text-white bg-secondary hover:bg-green-600 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><FormattedMessage id="signIn" /></button>
                                <div className="text-sm font-medium text-gray-900  flex justify-center">
                                    <FormattedMessage id="dontHave" /> <a href='#/'  onClick={(e) => handleForm(e,"register")} className="text-secondary hover:underline  ml-1"><FormattedMessage id="signUp" /></a>
                                </div>
                            </form>
                        }
                    </div>

                </div>
                : null}
                </IntlProvider>
        </>
    )
}


export default UserModal;