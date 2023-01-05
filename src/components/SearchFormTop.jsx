import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { VoyagesContext } from '../contexts/Voyages';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';

function SearchFormTop() {

    const { filterValues, fetchVoyages, setFilterMode } = useContext(VoyagesContext);

    const formik = useFormik({
        initialValues: {
            start: "",
            stop: "",
            date: ""
        },
        onSubmit: (values) => {
            fetchVoyages(values);
            setFilterMode(false);
        },
        validationSchema: yup.object().shape({
            start: yup.string().required("Lütfen başlangıç noktanızı seçin."),
            stop: yup.string().required("Lütfen gidiş noktanızı seçin."),
            date: yup.string().required("Lütfen bir tarih seçin"),
        })
    })


    return (
        <section className=' mt-8 mb-4 font-kanit'>
            <div className='container bg-primary py-4 px-8 border border-secondary'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex justify-start md:justify-center items-center gap-x-4 flex-wrap'>
                        <div className='flex justify-start items-center gap-x-4'>
                            <div className='flex flex-col'>
                                <label htmlFor='start'><FormattedMessage id="fromWhere" />:</label>
                                <span className='mt-2 flex items-center border border-customgray px-2 bg-white' >
                                    <i className="fa-sharp fa-solid fa-location-dot text-secondary"></i>
                                    <input onChange={formik.handleChange} className='bg-white outline-none px-2 py-1 ml-2 w-28 md:w-48  h-8' placeholder={filterValues.start} name='start' type="text" />
                                </span>
                            </div>
                            <div>
                                <button className='mt-8 h-8'><i className="fa-solid fa-right-left"></i></button>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='stop'><FormattedMessage id="toWhere" />:</label>
                                <span className='mt-2 flex items-center border border-customgray px-2 bg-white' >
                                    <i className="fa-sharp fa-solid fa-location-dot text-secondary"></i>
                                    <input onChange={formik.handleChange} className='bg-white outline-none px-2 py-1 ml-2 w-28 md:w-48 h-8' placeholder={filterValues.stop} name='stop' type="text" />
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='where'><FormattedMessage id="travelDate" />:</label>
                            <span className='mt-2 border border-customgray px-2 bg-white' >
                                <i className="fa-regular fa-calendar text-secondary"></i>
                                <input onChange={formik.handleChange} className='bg-white date-input outline-none px-2 py-1 ml-2 w-30 md:w-48 text-center h-8' placeholder={filterValues.date} name='date' type="date" />
                                </span>
                        </div>
                        <div >
                            <button type='submit' className='px-5 py-1 bottom-0 mt-8 w-30 md:w-48 h-9 bg-secondary hover:bg-green-600 rounded-md text-white border border-white'><FormattedMessage id="find" /></button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default SearchFormTop;