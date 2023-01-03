import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { VoyagesContext } from '../contexts/Voyages';



function ListItem({ voyage, activeVoyage, setActiveVoyage, setStateGT, setXCordGT, setYCordGT, selectedSeats, setSelectedSeats, setSelected }) {

    const { setTargetSeats, setPessengers, pessengers,setNewSeats } = useContext(VoyagesContext);
    

    var navigate = useNavigate();

    const handleClick = (e) => {
        if (activeVoyage === voyage.id) {
            setActiveVoyage("");
        }
        else {
            setActiveVoyage(voyage.id)
            setStateGT(false);
            selectedSeats.forEach(element => {
                // Sarı renkteki koltukları düzeltiyoruz
                var targetSeat = document.getElementById(`${activeVoyage}-${element[0]}`);
                targetSeat.classList.toggle("bg-yellow-200")
                targetSeat.classList.toggle("bg-gray-200");
            });
            setSelectedSeats([]);
        }


    }


    const handleReserve = () => {

        // handleAddElement();

        // setSelectedSeats([]);

        setNewSeats(voyage);
        setTargetSeats(selectedSeats);
        navigate(`/ticket-purchase/`)
    }




    const handleSelectSeat = (status, e, row, rowIndex) => {
        const seat = document.getElementById(e.target.id);
        if (seat.classList.contains("bg-yellow-200")) {
            seat.classList.toggle("bg-yellow-200");
            seat.classList.toggle("bg-gray-200");

            setSelectedSeats((prev) => prev.filter((st) => st[0] !== e.target.id.slice(9)))
            setPessengers(pessengers.filter((e,ind) => ind !== 0));
            return false;
        }
        if (status === "empty" && (selectedSeats.length < 4)) {
            setStateGT(true);
            setSelected([e.target.id, row, rowIndex]);
            setXCordGT(e.pageX - 100);
            setYCordGT(e.pageY - 150);
        }
        if (selectedSeats.length >= 4) {
            toast.error('En fazla 4 koltuk seçebilirsin!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }


    return (
        <div className='flex flex-col border-customgray border shadow-md hover:border-orange-300'>

            <div className='flex gap-x-1 md:gap-x-6  justify-between items-center p-6 '>
                <div className=""><img src={require(`../images/${voyage.logo}.webp`)} alt="company-logo" /></div>
                <div className='flex flex-col items-center gap-y-1' >
                    <div className="text-2xl flex gap-x-2 items-center justify-between">
                        <i className="fa-regular fa-clock hidden md:flex"></i> {voyage.time}
                    </div>
                    <small className='text-xs'>{voyage.date}</small>
                </div>
                <div className="hidden md:flex flex-col justify-center items-center">
                    <h3 className='text-2xl text-secondary  '>{voyage.company.length > 12 ? voyage.company.slice(0, 9) + "..." : voyage.company}</h3>
                    <small className='italic '>{voyage.start} <i className="fa-solid fa-arrow-right mx-1"></i> {voyage.lastStop} </small>
                </div>
                <div className="hidden md:flex flex-col justify-center items-center gap-y-3">
                    <div className='flex gap-x-3 items-center justify-center'>
                        <span className='flex flex-1 items-center justify-center gap-x-1'><i className="fa-solid fa-bus-simple"></i> {voyage.type}</span>
                        <span className='flex flex-1 items-center justify-center gap-x-1'><i className="fa-solid fa-fingerprint"></i> {voyage.id}</span>
                    </div>
                    <div className='flex justify-center items-center gap-x-2'>
                        {voyage.features.map((feature, ind) =>
                        (
                            <i key={ind} className={feature}></i>
                        )
                        )}

                    </div>
                </div>
                <div className="text-xl flex justify-center items-center gap-x-1">{voyage.price} <i className="fa-solid fa-turkish-lira-sign hidden md:flex"></i></div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <button
                        id={`btn-${voyage.id}`}
                        onClick={(e) => handleClick(e)}
                        className={activeVoyage === voyage.id ? 'border border-red-600 text-red-600 p-2 rounded-lg' : 'border border-secondary text-secondary p-2 rounded-lg'}>{activeVoyage === voyage.id ? "Kapat" : "Koltuk Seç"}</button>
                    <small className='italic text-xs hidden md:flex'>{voyage.seats.flat().filter((seat) => seat.status === "empty").length > 0 ? voyage.seats.flat().filter((seat) => seat.status === "empty").length + " Boş Koltuk" : "Boş Koltuk Kalmadı"}</small>
                </div>
            </div>

            <div id={voyage.id} className={activeVoyage === voyage.id ? 'border-t border-orange-300 p-4 flex flex-wrap' : 'border-t border-orange-300 p-4 flex flex-wrap hidden'}>

                <div className='flex-1 border border-customgray rounded-lg pl-4 pr-1 py-2 flex flex-col justify-center itemse-center gap-y-1  '>
                    <div className='flex gap-x-2 items-center relative h-44 '>
                        <div>
                            <h5 className='front-info'>Ön Taraf</h5>
                        </div>
                        <div className='flex justify-between items-end'>
                            {voyage.seats.map((row, rowIndex) => (
                                <div key={rowIndex} className='flex flex-col'>
                                    {row.sort((a, b) => a.number > b.number ? -1 : 1).map((seat, ind) => (
                                        // Araç Tipi 2+1 İse 
                                        voyage.type === "2+1" ?
                                            // 1. Koltuktan Sonraki Ara İçin
                                            ((ind % 3) === 2 ?
                                                <div key={ind} id={voyage.id + "-" + seat.number}
                                                    onClick={(e) => handleSelectSeat(seat.status, e, row, rowIndex)}
                                                    className={seat.status === "empty"
                                                        ? 'border border-customgray bg-gray-200 rounded-md py-1 px-3 mt-16 cursor-pointer'
                                                        : seat.status === "woman" ?
                                                            'border border-customgray bg-pink-200 rounded-md py-1 px-3 mt-16 cursor-default'
                                                            : seat.status === "man" ?
                                                                'border border-customgray bg-blue-200 rounded-md py-1 px-3 mt-16 cursor-default'
                                                                : 'border border-customgray bg-yellow-200 rounded-md py-1 px-3 mt-16 cursor-pointer'
                                                    }
                                                >
                                                    {seat.number}
                                                </div> :
                                                <div key={ind} id={voyage.id + "-" + seat.number}
                                                    onClick={(e) => handleSelectSeat(seat.status, e, row, rowIndex)}
                                                    className={seat.status === "empty"
                                                        ? 'border border-customgray bg-gray-200 rounded-md py-1 px-3 cursor-pointer'
                                                        : seat.status === "woman" ?
                                                            'border border-customgray bg-pink-200 rounded-md py-1 px-3 cursor-default'
                                                            : seat.status === "man" ?
                                                                'border border-customgray bg-blue-200 rounded-md py-1 px-3 cursor-default'
                                                                : 'border border-customgray bg-yellow-200 rounded-md py-1 px-3 cursor-pointer'
                                                    }
                                                >
                                                    {seat.number}
                                                </div>) :
                                            // Araç Tipi 2+2 ise
                                            (
                                                (ind % 4) === 2 ?
                                                    <div key={ind} id={voyage.id + "-" + seat.number}
                                                        onClick={(e) => handleSelectSeat(seat.status, e, row, rowIndex)}
                                                        className={seat.status === "empty"
                                                            ? 'border border-customgray bg-gray-200 rounded-md py-1 px-3 mt-8 cursor-pointer'
                                                            : seat.status === "woman" ?
                                                                'border border-customgray bg-pink-200 rounded-md py-1 px-3 mt-8 cursor-default'
                                                                : seat.status === "man" ?
                                                                    'border border-customgray bg-blue-200 rounded-md py-1 px-3 mt-8 cursor-default'
                                                                    : 'border border-customgray bg-yellow-200 rounded-md py-1 px-3 mt-8 cursor-pointer'
                                                        }
                                                    >
                                                        {seat.number}
                                                    </div> :
                                                    <div key={ind} id={voyage.id + "-" + seat.number}
                                                        onClick={(e) => handleSelectSeat(seat.status, e, row, rowIndex)}
                                                        className={seat.status === "empty"
                                                            ? 'border border-customgray bg-gray-200 rounded-md py-1 px-3 cursor-pointer'
                                                            : seat.status === "woman" ?
                                                                'border border-customgray bg-pink-200 rounded-md py-1 px-3 cursor-default'
                                                                : seat.status === "man" ?
                                                                    'border border-customgray bg-blue-200 rounded-md py-1 px-3 cursor-default'
                                                                    : 'border border-customgray bg-yellow-200 rounded-md py-1 px-3 cursor-pointer'
                                                        }
                                                    >
                                                        {seat.number}
                                                    </div>
                                            )
                                    )
                                    )}
                                </div>
                            ))}
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
                    {selectedSeats.length > 0 ?
                        <div className='user-info flex items-center justify-center gap-x-6'>

                            <div className='selected-seats flex flex-col'>
                                <small className='text-red-900'>Seçilen Koltuklar;</small>
                                <div className='flex mt-3 gap-x-1'>
                                    {selectedSeats.map((st, ind) => (
                                        <div key={ind} className={st[1] === "man" ? 'border text-center border-customgray bg-blue-200 rounded-md py-1 w-8 ' : 'border text-center border-customgray bg-pink-200 rounded-md py-1 w-8 '}>{st[0]}</div>
                                    ))}
                                </div>
                            </div>

                            <div className='mt-7 flex'>
                                <h5 className='flex items-center gap-x-1'>Toplam: {selectedSeats.length * voyage.price} <i className="fa-solid fa-turkish-lira-sign hidden md:flex"></i></h5>
                                <button onClick={() => handleReserve()} className='bg-secondary hover:bg-green-600 text-white border border-white rounded-md py-1 px-2 ml-4'>Ödeme Yap</button>
                            </div>

                        </div>
                        : null}
                </div>



            </div>

        </div>
    )
}


export default ListItem;


