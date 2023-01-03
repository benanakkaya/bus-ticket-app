import React, { useContext, useState } from 'react'
import { VoyagesContext } from '../contexts/Voyages';
import ListItem from './ListItem';
import GenderSelector from "./GenderSelector";

function BusList() {

    const { voyages, filterMode, filteredList } = useContext(VoyagesContext);

    const [activeVoyage, setActiveVoyage] = useState("");
    const [stateGT, setStateGT] = useState(false); //Gender Tool State
    const [xcordGT, setXCordGT] = useState(0);
    const [ycordGT, setYCordGT] = useState(0);
    const [selected, setSelected] = useState();
    const [selectedSeats, setSelectedSeats] = useState([]);











    return (
        <div className='flex flex-auto bg-primary flex-1 border border-secondary ml-4'>
            <div className='container p-4 flex flex-col gap-y-4'>
                <GenderSelector selectedSeats={selectedSeats} selected={selected} setSelectedSeats={setSelectedSeats} xcordGT={xcordGT} ycordGT={ycordGT} stateGT={stateGT} setStateGT={setStateGT} />
                {voyages.length === 0 && filterMode === false
                    ? <small className='text-center mt-10'>Aradığınız Kritere Uygun Sefer Bulunamadı!</small>
                    : filterMode === false ?
                        voyages.sort((a, b) => a.time >= b.time ? 1 : -1).map((voyage) =>
                            <ListItem setSelected={setSelected} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} setXCordGT={setXCordGT} setYCordGT={setYCordGT} stateGT={stateGT} setStateGT={setStateGT}  setActiveVoyage={setActiveVoyage} activeVoyage={activeVoyage} key={voyage.id} voyage={voyage} />
                        ) :
                        filteredList.length === 0 && filterMode === true ?
                            <small className='text-center mt-10'>Aradığınız Kritere Uygun Sefer Bulunamadı!</small>
                            : filterMode === true ?
                                filteredList.sort((a, b) => a.time >= b.time ? 1 : -1).map((voyage) =>
                                    <ListItem setSelected={setSelected} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} setXCordGT={setXCordGT} setYCordGT={setYCordGT} stateGT={stateGT} setStateGT={setStateGT}  setActiveVoyage={setActiveVoyage} activeVoyage={activeVoyage} key={voyage.id} voyage={voyage} />
                                ) :
                                null
                }



            </div>
        </div>
    )
}


export default BusList;
