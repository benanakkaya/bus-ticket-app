import React, { useRef, useState } from 'react'
import GenderSelector from './GenderSelector';

function ListItem() {

    const [targetRef, setTargetRef] = useState();

    const collapse = useRef();

    const [collapseItem, setCollapseItem] = useState();




    const handleClick = (e) => {

        const mycollapse = document.getElementById("varan1");
        mycollapse.classList.toggle("hidden")

    }



    return (
        <div className='flex flex-col border-customgray border shadow-md hover:border-orange-300 cursor-pointer '>
            <GenderSelector setTargetRef={setTargetRef} />
            <div  className='flex gap-x-1 md:gap-x-6  justify-between items-center p-6 '>
                <div className=""><img src={require("../images/varan.webp")} /></div>
                <div className="text-2xl flex gap-x-2 items-center justify-between"><i class="fa-regular fa-clock hidden md:flex"></i> 14:00</div>
                <div className="hidden md:flex flex-col justify-center items-center">
                    <h3 className='text-2xl text-secondary  '>Varan Turizm</h3>
                    <small className='italic '>Ankara <i class="fa-solid fa-arrow-right mx-1"></i> Zonguldak</small>
                </div>
                <div className="hidden md:flex flex-col justify-center items-center gap-y-3">
                    <div className='flex gap-x-3 items-center justify-center'>
                        <span className='flex flex-1 items-center justify-center gap-x-1'><i class="fa-solid fa-bus-simple"></i> 2+1</span>
                        <span className='flex flex-1 items-center justify-center gap-x-1'><i class="fa-solid fa-fingerprint"></i> 2846596</span>
                    </div>
                    <div className='flex justify-center items-center gap-x-2'>
                        <i class="fa-solid fa-wifi"></i>
                        <i class="fa-solid fa-bolt"></i>
                        <i class="fa-solid fa-tv"></i>
                        <i class="fa-solid fa-mug-saucer"></i>
                        <i class="fa-brands fa-usb"></i>
                    </div>
                </div>
                <div className="text-xl flex justify-center items-center gap-x-1">150 <i class="fa-solid fa-turkish-lira-sign hidden md:flex"></i></div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <button onClick={handleClick} className='border border-secondary text-secondary p-2 rounded-lg'>Koltuk Seç</button>
                    <small className='italic text-xs hidden md:flex'>13 Boş Koltuk</small>
                </div>
            </div>

            <div id='varan1' className='border-t border-orange-300 p-4 flex flex-wrap hidden'>

                <div className='flex-1 border border-customgray rounded-lg pl-4 pr-1 py-2 flex flex-col justify-center itemse-center gap-y-1  '>
                    <div className='flex gap-x-2 items-center relative'>
                        <div>
                            <h5 className='front-info'>Ön Taraf</h5>
                        </div>
                        <div>
                            <div className='flex gap-x-1'>
                                <div onClick={(e) => handleClick(e)} className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer mr-9'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                            </div>
                            <div className='flex gap-x-1'>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer mr-9'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                            </div>
                            <div className='flex gap-x-1  odd:mt-6'>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                            </div>
                            <div className='flex gap-x-1'>
                                <div onClick={(e) => console.log(e)} className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                                <div className='border border-customgray rounded-md py-1 px-3 cursor-pointer'>1</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-1 flex flex-col items-center- justify-center gap-y-4'>

                    <div className='seat-info flex justify-center gap-x-4 items-center'>
                        <div className='flex flex-col items-center gap-y-1'>
                            <div className='border border-customgray bg-gray-200 rounded-md py-1 px-3 w-8 '>-</div>
                            <small>Boş Koltuk</small>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <div className='border border-customgray bg-pink-200 rounded-md py-1 px-3 w-8 '>-</div>
                            <small>Kadın Yolcu</small>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <div className='border border-customgray bg-blue-200 rounded-md py-1 px-3 w-8 '>-</div>
                            <small>Erkek Yolcu</small>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <div className='border border-customgray bg-yellow-200 rounded-md py-1 px-3 w-8 '>-</div>
                            <small>Seçilen Koltuk</small>
                        </div>

                    </div>

                    <div className='user-info flex items-center justify-center gap-x-6'>

                        <div className='selected-seats flex flex-col'>
                            <small className='text-red-900'>Seçilen Koltuklar;</small>
                            <div className='flex mt-3 gap-x-1'>
                                <div className='border border-customgray bg-pink-200 rounded-md py-1 px-3 w-8 '>11</div>
                                <div className='border border-customgray bg-blue-200 rounded-md py-1 px-3 w-8 '>12</div>
                                <div className='border border-customgray bg-blue-200 rounded-md py-1 px-3 w-8 '>13</div>
                                <div className='border border-customgray bg-pink-200 rounded-md py-1 px-3 w-8 '>14</div>
                            </div>
                        </div>

                        <div className='mt-7 flex'>
                            <h5 className='flex items-center gap-x-1'>Toplam: 500 <i class="fa-solid fa-turkish-lira-sign hidden md:flex"></i></h5>
                            <button className='bg-secondary hover:bg-green-600 text-white border border-white rounded-md py-1 px-2 ml-4'>Öde</button>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}


export default ListItem;


