import { customAlphabet } from 'nanoid';
import React, { memo, useContext } from 'react';
import { UsersContext } from '../contexts/Users';
import { VoyagesContext } from '../contexts/Voyages';


function GenderSelector({ stateGT, setStateGT, xcordGT, ycordGT, selected }) {


    const {selectedSeats,setSelectedSeats} = useContext(VoyagesContext);
    const {loginnedUser} = useContext(UsersContext);
    const nanoid = customAlphabet('1234567890abcdef', 10);

    const handleSelectGender = (e) => {

        setSelectedSeats((prev) => [...prev, [selected[0].slice(9), e.target.name, selected[1], selected[2], { name: "", lastname: "", tel: "", tc: "", id: nanoid(8), username: loginnedUser }]]);

        const targetSeat = document.getElementById(`${selected[0]}`);
        targetSeat.classList.toggle("bg-gray-200");
        targetSeat.classList.toggle("bg-yellow-200");
        setStateGT(false);


    }

    return (
        <div id='gender-tool' className={stateGT === true ? 'flex flex-col absolute z-10 items-center ' : 'flex flex-col absolute z-10 items-center hidden'} style={{ top: `${ycordGT}px`, left: `${xcordGT}px` }}>
            <div className='flex flex-col bg-white w-48 p-4 pt-2 gap-y-1 border  rounded-xl border-orange-400  '>
                <div className='flex justify-end'><span onClick={() => setStateGT(false)} className='text-customgray text-xs cursor-pointer '>X</span></div>
                <div className='flex flex-col items-center gap-y-1'>
                    <small>Lütfen cinsiyet seçiniz;</small>
                    <div className='flex gap-x-2'>
                        <img onClick={(e) => handleSelectGender(e)} name="man" className='hover:opacity-80 cursor-pointer' src={require("../images/man.png")} alt="man" />
                        <img onClick={(e) => handleSelectGender(e)} name="woman" className='hover:opacity-80 cursor-pointer' src={require("../images/woman.png")} alt="woman" />
                    </div>
                </div>
            </div>
            <div className='arrow-down'>

            </div>
        </div>
    )
}


export default memo(GenderSelector);
