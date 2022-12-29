import React from 'react'

function SetFilter() {
  return (
    <div className='flex flex-col hidden md:flex w-48 bg-primary p-2 border border-secondary'>
      <div className='border-b border-secondary'>
        <h3 className='m-2 text-lg font-medium '><i class="fa-solid fa-filter text-secondary mr-4"></i> Filtreler</h3>
      </div>
      <form>
        <div className='my-4 pb-2 border-b border-secondary'>
          <h4 className='mx-2 font-medium'><i class="fa-regular fa-clock text-secondary mr-4"></i> Kalkış Saati</h4>
          <div className='flex justify-center items-center gap-x-3 my-4'>
            <input type="time" name='startTime' className='border border-customgray rounded-lg px-2 text-center' />
            -
            <input type="time" name='stopTime' className='border border-customgray rounded-lg px-2 text-center' />
          </div>
          <div className='flex justify-center items-center gap-x-2'>
            <button className='border border-secondary p-2 rounded-md flex flex-col items-center flex-1'><i class="fa-regular fa-sun text-yellow-400"></i> Gündüz</button>
            <button className='border border-secondary p-2 rounded-md flex flex-col items-center flex-1' ><i class="fa-regular fa-moon text-blue-500 "></i> Gece </button>
          </div>
        </div>
        <div className='my-4 pb-2 border-b border-secondary'>
          <h4 className='mx-2 font-medium'><i class="fa-solid fa-chair text-secondary mr-4"></i> Oturma Düzeni</h4>
          <div className='p-2'>
            <div className='flex justify-between items-center'>
              <label>1+1</label>
              <input type="checkbox" className='accent-secondary' name="oneplusone" />
            </div>
            <div className='flex justify-between items-center'>
              <label>2+1</label>
              <input type="checkbox" className='accent-secondary' name="twoplusone" />
            </div>
            <div className='flex justify-between items-center'>
              <label>2+2</label>
              <input type="checkbox" className='accent-secondary' name="twoplustwo" />
            </div>
          </div>
        </div>
        <div className='my-4 pb-2 border-b border-secondary'>
          <h4 className='mx-2 font-medium'><i class="fa-solid fa-money-bill text-secondary mr-4"></i> Bilet Ücreti</h4>
          <div className='p-2'>
          <div className='flex justify-center items-center gap-x-3 my-4'>
            <input type="number" name='startTime' min={0} placeholder='Min' className='border border-customgray rounded-lg px-2 text-center w-16' />
            -
            <input type="number" name='stopTime' min={0} placeholder='Max' className='border border-customgray rounded-lg px-2 text-center w-16' />
          </div>
          </div>
        </div>
        <div className='my-4 pb-2 '>
          <h4 className='mx-2 font-medium'><i class="fa-solid fa-copyright text-secondary mr-4"></i> Firmalar</h4>
          <div className='p-2'>
            <div className='flex justify-between items-center'>
              <label>Efe Tur</label>
              <input type="checkbox" className='accent-secondary' name="oneplusone" />
            </div>
            <div className='flex justify-between items-center'>
              <label>Metro</label>
              <input type="checkbox" className='accent-secondary' name="twoplusone" />
            </div>
            <div className='flex justify-between items-center'>
              <label>Pamukkale</label>
              <input type="checkbox" className='accent-secondary' name="twoplustwo" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SetFilter;
