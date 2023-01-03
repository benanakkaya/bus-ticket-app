import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { VoyagesContext } from '../contexts/Voyages';

function SetFilter() {

  const { voyages, handleFilterSubmit, setFiltValues} = useContext(VoyagesContext);


  const companyList = Array.from(new Set(voyages.map((element) => element.company)));

  const formik = useFormik({
    initialValues: {
      timeRangeStart: "",
      timeRangeStop: "",
      priceRangeStart: "",
      priceRangeStop: "",
      types: [],
      companies: []
    },
    onSubmit: (values) => {
      handleFilterSubmit(values);
      setFiltValues(values);
    }
  })





  return (
    <div className='flex flex-col hidden md:flex w-48 bg-primary p-2 border border-secondary'>
      <div className='border-b border-secondary'>
        <h3 className='m-2 text-lg font-medium '><i className="fa-solid fa-filter text-secondary mr-4"></i> Filtreler</h3>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='my-4 pb-2 border-b border-secondary'>
          <h4 className='mx-2 font-medium'><i className="fa-regular fa-clock text-secondary mr-4"></i> Kalkış Saati</h4>
          <div className='flex justify-center items-center gap-x-3 my-4'>
            <input type="time" name='timeRangeStart' onChange={formik.handleChange} className='border border-customgray rounded-lg px-2 text-center' />
            -
            <input type="time" name='timeRangeStop' onChange={formik.handleChange} className='border border-customgray rounded-lg px-2 text-center' />
          </div>
          <div className='flex justify-center items-center gap-x-2'>
            <button className='border border-secondary p-2 rounded-md flex flex-col items-center flex-1'><i className="fa-regular fa-sun text-yellow-400"></i> Gündüz</button>
            <button className='border border-secondary p-2 rounded-md flex flex-col items-center flex-1' ><i className="fa-regular fa-moon text-blue-500 "></i> Gece </button>
          </div>
        </div>
        <div className='my-4 pb-2 border-b border-secondary'>
          <h4 className='mx-2 font-medium'><i className="fa-solid fa-chair text-secondary mr-4"></i> Oturma Düzeni</h4>
          <div className='p-2'>
            <div className='flex justify-between items-center'>
              <label>1+1</label>
              <input type="checkbox" onChange={formik.handleChange} className='accent-secondary' name='types' value="1+1" />
            </div>
            <div className='flex justify-between items-center'>
              <label>2+1</label>
              <input type="checkbox" onChange={formik.handleChange} className='accent-secondary' name='types' value="2+1" />
            </div>
            <div className='flex justify-between items-center'>
              <label>2+2</label>
              <input type="checkbox" onChange={formik.handleChange} className='accent-secondary' name='types' value="2+2" />
            </div>
          </div>
        </div>
        <div className='my-4 pb-2 border-b border-secondary'>
          <h4 className='mx-2 font-medium'><i className="fa-solid fa-money-bill text-secondary mr-4"></i> Bilet Ücreti</h4>
          <div className='p-2'>
            <div className='flex justify-center items-center gap-x-3 my-4'>
              <input type="number" name='priceRangeStart' onChange={formik.handleChange} min={0} placeholder='Min' className='border border-customgray rounded-lg px-2 text-center w-16' />
              -
              <input type="number" name='priceRangeStop' onChange={formik.handleChange} min={0} placeholder='Max' className='border border-customgray rounded-lg px-2 text-center w-16' />
            </div>
          </div>
        </div>
        <div className='my-4 pb-2 border-b border-secondary '>
          <h4 className='mx-2 font-medium'><i className="fa-solid fa-copyright text-secondary mr-4"></i> Firmalar</h4>
          <div className='p-2'>
            {companyList.sort().map((company, index) => (
              <div key={index} className='flex justify-between items-center'>
                <label>{company}</label>
                <input type="checkbox" value={company} onChange={formik.handleChange} name="companies" className='accent-secondary' />
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center my-2 '>
          <button type='submit' className='border border-secondary text-secondary py-1 px-2 rounded-md'>Filtreyi Uygula</button>
        </div>
      </form>
    </div>
  )
}

export default SetFilter;
