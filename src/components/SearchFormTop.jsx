import React from 'react'

function SearchFormTop() {
    return (
        <section className=' mt-8 mb-4 font-kanit'>
            <div className='container bg-primary py-4 px-8 border border-secondary'>
                <form>
                    <div className='flex justify-start md:justify-center items-center gap-x-4 flex-wrap'>
                        <div className='flex justify-start items-center gap-x-4'>
                            <div className='flex flex-col'>
                                <label htmlFor='where'>Nereden:</label>
                                <span className='mt-2 flex items-center border border-customgray px-2 bg-white' ><i class="fa-sharp fa-solid fa-location-dot text-secondary"></i><input className=' outline-none px-2 py-1 ml-2 w-28 md:w-48  h-8' placeholder='Nereden' name='where' type="text" /></span>
                            </div>
                            <div>
                                <button className='mt-8 h-8'><i class="fa-solid fa-right-left"></i></button>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='where'>Nereye:</label>
                                <span className='mt-2 flex items-center border border-customgray px-2 bg-white' ><i class="fa-sharp fa-solid fa-location-dot text-secondary"></i><input className=' outline-none px-2 py-1 ml-2 w-28 md:w-48 h-8' placeholder='Nereye' name='where' type="text" /></span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='where'>Tarih:</label>
                            <span className='mt-2 border border-customgray px-2 bg-white' ><i class="fa-regular fa-calendar text-secondary"></i><input className='date-input outline-none px-2 py-1 ml-2 w-30 md:w-48 text-center h-8' placeholder='Tarih' name='where' type="date" /></span>
                        </div>
                        <div >
                            <button className='px-5 py-1 bottom-0 mt-8 w-30 md:w-48 h-9 bg-secondary hover:bg-green-600 rounded-md text-white border border-white'>ARA</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default SearchFormTop;