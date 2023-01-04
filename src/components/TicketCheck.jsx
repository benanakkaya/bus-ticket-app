import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { ReservationsContext } from '../contexts/Reservations';


function TicketCheck() {

    const { inquiredReservation, inquireReservation, reservationCancellation } = useContext(ReservationsContext);

    const [ticketNo, setTicketNo] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (ticketNo.length === 8) {
            inquireReservation(ticketNo);
            return false;
        }
        if (ticketNo.length === 0) {
            return false;
        } else {
            toast.error('Rezervasyon no 8 karakterli olmalı!', {
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

    const handleCancellation = () => {
        reservationCancellation();
        toast.success('Rezervasyonunuz başarıyla iptal edildi!', {
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

    return (
        <div className='flex flex-col gap-y-4 justify-center items-center bg-primary py-4' >
            <div>
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                    <h3 className="text-xl font-medium text-secondary "><i className="fa-solid fa-magnifying-glass mr-2"></i> Rezervasyon Sorgula</h3>
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-secondary block  mb-2 ">Rezervasyon No *</label>
                        <input onChange={(e) => setTicketNo(e.target.value)} type="text" name="username" id="username" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:outline-secondary block w-full p-2.5 " placeholder="00000000" required="" />
                    </div>
                    <button type="submit" className="w-full text-white bg-secondary hover:bg-green-600 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sorgula</button>
                </form>
            </div>
            {inquiredReservation.length === 1 ?
                <div>
                    <table className='table-auto'>
                        <thead>
                            <tr className='underline'>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Tc</th>
                                <th>Tel</th>
                                <th>Rezervasyon No</th>
                                <th>İptal Et</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>{inquiredReservation[0].name}</td>
                                <td>{inquiredReservation[0].lastname}</td>
                                <td>{inquiredReservation[0].tc}</td>
                                <td>{inquiredReservation[0].tel}</td>
                                <td>{inquiredReservation[0].id}</td>
                                <td className='text-red-600 cursor-pointer hover:scale-125'><i onClick={() => handleCancellation()} className="fa-solid fa-trash-can"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                : null}

        </div >
    )
}



export default TicketCheck;