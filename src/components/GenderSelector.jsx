import React, { useRef } from 'react'

function GenderSelector({setTargetRef}) {

    const myTarget = useRef();

    setTargetRef(myTarget);


    return (
        <div ref={myTarget} className='flex flex-col absolute z-10 items-center hidden'  style={{top:"361px"}}>
        <div className='flex flex-col items-center bg-white w-48 p-4 gap-y-2 border border-orange-400  '>
            <small>Lütfen cinsiyet seçiniz;</small>
            <div className='flex gap-x-2'>
                <img className='hover:opacity-80' src={require("../images/man.png")} alt="man" />
                <img className='hover:opacity-80' src={require("../images/woman.png")} alt="woman" />
            </div>
        </div>
        <div className='arrow-down'>
          
        </div>
        </div>
    )
}


export default GenderSelector;
