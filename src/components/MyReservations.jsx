import React, { useContext, useEffect } from 'react'
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import { ReservationsContext } from '../contexts/Reservations';
import { UsersContext } from '../contexts/Users';

function MyReservations() {

    const { userReservations, setUserReservations, loginned, loginnedUser, fetchUserReservations } = useContext(UsersContext);
    const { reservationCancellation } = useContext(ReservationsContext);

    useEffect(() => {
        if(loginned === true){
            fetchUserReservations(loginnedUser);
        }
    },[])


    const handleCancellation = (id) => {
        //Delete dom
        setUserReservations(userReservations.filter((reservation) => reservation.id !== id));
        //Delete JSON
        reservationCancellation(id);
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
        <div className='flex justify-center items-center p-4 font-kanit '>
            {loginned === true ?
                <div>
                    {userReservations.length >= 1 ?
                        <table className='table-auto'>
                            <caption className='mb-4 text-secondary font-bold tracking-wider '><FormattedMessage id="yourReservations" /></caption>
                            <thead>
                                <tr className='underline'>
                                    <th><FormattedMessage id="name" /></th>
                                    <th><FormattedMessage id="lastName" /></th>
                                    <th><FormattedMessage id="tcNo" /></th>
                                    <th><FormattedMessage id="phoneNumber" /></th>
                                    <th><FormattedMessage id="seatNo" /></th>
                                    <th><FormattedMessage id="reservationNo" /></th>
                                    <th><FormattedMessage id="cancel" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {userReservations.map((reservation) => (
                                    <tr key={reservation.id}>
                                        <td>{reservation.name}</td>
                                        <td>{reservation.lastname}</td>
                                        <td>{reservation.tc}</td>
                                        <td>{reservation.tel}</td>
                                        <td>{reservation.seatNo}</td>
                                        <td>{reservation.id}</td>
                                        <td onClick={() => handleCancellation(reservation.id)} className='text-red-600 cursor-pointer hover:scale-125'><i className="fa-solid fa-trash-can"></i></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        : <div className='h-96 flex justify-center items-center'><FormattedMessage id="reservationNotFound" /></div>}
                </div>
                : <div lassName='h-96 flex justify-center items-center'><FormattedMessage id="pleaseLogin" /></div>}
        </div>
    )
}



export default MyReservations;