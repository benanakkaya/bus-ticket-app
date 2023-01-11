import { useFormik } from 'formik';
import React, { useContext} from 'react'
import { VoyagesContext } from '../contexts/Voyages';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { LanguagesContext } from '../contexts/Languages';

function Hero() {

    const { fetchVoyages, setFilterMode } = useContext(VoyagesContext);

    const {locale} = useContext(LanguagesContext);
    
    
    const navigate = useNavigate();





    const formik = useFormik({
        initialValues: {
            start: "",
            stop: "",
            date: " "
        },
        onSubmit: (values) => {


            fetchVoyages(values)
            setFilterMode(false);

            navigate("/bus-list")



        },
        validationSchema: yup.object().shape({
            start: yup.string().required("Lütfen başlangıç noktanızı seçin."),
            stop: yup.string().required("Lütfen gidiş noktanızı seçin."),
            date: yup.string().required("Lütfen bir tarih seçin"),
        })
    })





    return (
        <section className="h-116 relative border-b-2 border-secondary">
            <img className='h-full w-full object-cover' src={require("../images/bus-travel.jpg")} alt="hero-pic" />
            <div className='bg-white text-secondary left-4 h-72 w-11/12 overflow-hidden sm:w-116 md:w-128 absolute md:left-16 top-20 px-4 py-2 flex-column rounded-lg'>
                <div className='flex opacity-100 gap-x-5  text-lg font-medium mb-2 '>
                    <a href='#/' className='border-b-2 border-secondary' ><FormattedMessage id="busTicket" /></a>
                </div>
                <hr />
                <div className='mt-4 text-customgray'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex-column'>
                            <div className='flex gap-x-2 items-center justify-start'>
                                <div className='flex-column w-40 md:w-56'>
                                    <label htmlFor='where' className='font-medium '><FormattedMessage id="fromWhere" />?</label> <br />
                                    <input id="start" onChange={formik.handleChange} placeholder={locale === "tr-TR" ? "Nereden" : "From where"} type="text" className='border-2 w-40 md:w-56 h-10 border-customgray mt-2 rounded-md box-border py-1 px-2' name='start' />
                                </div>
                                <i className="fa-solid fa-right-left mt-8"></i>
                                <div className='flex-column w-40 md:w-56'>
                                    <label htmlFor='towhere' className='font-medium mb-4'><FormattedMessage id="toWhere" />?</label> <br />
                                    <input id="stop" onChange={formik.handleChange} placeholder={locale === "tr-TR" ? "Nereye" : "To where"} type="text" className='border-2 w-40 md:w-56 h-10 border-customgray mt-2 rounded-md box-border py-1 px-2' name='stop' />
                                </div>
                            </div>
                            <div className='flex mt-4'>
                                <div className='flex-column'>
                                    <label htmlFor='when' className='font-medium mb-4'><FormattedMessage id="travelDate" />:</label>
                                    <div className='flex items-center justify-between'>
                                        <input onChange={formik.handleChange} value={formik.values.date} type="date" name="date" className='border-2 w-40 md:w-56 h-10 border-customgray mt-2 rounded-md box-border py-1 px-2' />
                                        <div className='flex ml-8 '>
                                            <button type='submit' className='border-2 mt-2 py-1 px-3 rounded-md font-medium w-40  md:w-56 border-white text-white bg-secondary hover:bg-green-600'><FormattedMessage id="find" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}


export default Hero;