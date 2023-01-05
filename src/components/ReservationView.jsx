import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { UsersContext } from '../contexts/Users';
import { VoyagesContext } from '../contexts/Voyages'

export default function ReservationView() {

    const { targetSeats } = useContext(VoyagesContext);
    const {loginned,loginnedUser,fetchUserReservations} = useContext(UsersContext);

    const navigate = useNavigate();



    const handleClickBtn = () => {
        navigate("/");
    }


    return (
        <section className='bg-primary my-4 font-open'>

            <div className='bg-primary container p-4'>

                <div className='px-4 py-8 flex flex-col gap-y-3 items-center'>

                    <div className='flex flex-col items-center justify-center gap-y-4'>
                        <img src={require("../images/success.png")} alt="success" />
                        <h2 className='text-2xl'>Rezervasyonunuz Başarıyla Yapılmıştır</h2>
                        <h3 className='text-md'>Rezervasyon Bilgileriniz Aşağıda Yer Almaktadır</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center my-6 gap-y-2'>
                        <table className='table-auto'>
                            <thead>
                                <tr className='underline'>
                                    <th>Ad</th>
                                    <th>Soyad</th>
                                    <th>Tc</th>
                                    <th>Tel</th>
                                    <th>Koltuk No</th>
                                    <th>Rezervasyon No</th>
                                </tr>
                            </thead>
                            <tbody>
                                {targetSeats.map((pessenger) => (
                                    <tr key={pessenger[4].id}>
                                        <td>{pessenger[4].name}</td>
                                        <td>{pessenger[4].lastname}</td>
                                        <td>{pessenger[4].tel}</td>
                                        <td>{pessenger[4].tc}</td>
                                        <td>{pessenger[4].seatNo}</td>
                                        <td>{pessenger[4].id}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h6 className='italic text-xs font-thin'>Not: Rezervasyon numaralarını not almanızı öneririz, kayıtlı bir kullanıcı değilseniz bu numaralar üzerinden iptal işlemlerinizi yapabilirsiniz.</h6>
                    </div>


                    <button onClick={handleClickBtn} className='border border-secondary rounded-lg text-secondary w-48 mt-5'>Ana Sayfaya Dön</button>

                </div>

            </div>

        </section>
    )
}
