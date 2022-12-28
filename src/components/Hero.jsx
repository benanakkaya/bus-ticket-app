import React from 'react'

function Hero() {
    return (
        <section className="h-116 relative border-b-2 border-secondary">
            <img className='h-full w-full object-cover' src={require("../images/bus-travel.jpg")} alt="hero-pic" />
            <div className='bg-white text-secondary h-72 w-96 sm:w-116 md:w-128 absolute left-2 md:left-16 top-20 px-4 py-2 flex-column rounded-lg'>
                <div className='flex opacity-100 gap-x-5  text-lg font-medium mb-2 '>
                    <a href='#/' className='border-b-2 border-secondary' >Otobüs Bileti</a>
                    <a href='#/' >Uçak Bileti</a>
                </div>
                <hr />
                <div className='mt-4 text-customgray'>
                    <form>
                        <div className='flex-column'>
                            <div className='flex gap-x-2 items-center justify-start'>
                                <div className='flex-column w-40 md:w-56'>
                                    <label htmlFor='where' className='font-medium '>Nereden?</label> <br />
                                    <input type="text" className='border-2 w-40 md:w-56 h-10 border-customgray mt-2 rounded-md box-border py-1 px-2' name='where' />
                                </div>
                                <button className='mt-8'><i class="fa-solid fa-right-left"></i></button>
                                <div className='flex-column w-40 md:w-56'>
                                    <label htmlFor='towhere' className='font-medium mb-4'>Nereye?</label> <br />
                                    <input type="text" className='border-2 w-40 md:w-56 h-10 border-customgray mt-2 rounded-md box-border py-1 px-2' name='towhere' />
                                </div>
                            </div>
                            <div className='flex mt-4'>
                                <div className='flex-column'>
                                    <label htmlFor='when' className='font-medium mb-4'>Yolculuk Tarihi:</label>
                                    <div className='flex items-center justify-between'>
                                            <input type="date" name="when" className='border-2 w-40 md:w-56 h-10 border-customgray mt-2 rounded-md box-border py-1 px-2' />
                                        <div className='flex ml-8 '>
                                            <button className='border-2 mt-2 py-1 px-3 rounded-md font-medium w-40  md:w-56 border-white text-white bg-secondary hover:bg-green-600'>BUL</button>
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