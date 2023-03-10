import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { LanguagesContext } from '../contexts/Languages';
import { ReservationsContext } from '../contexts/Reservations';
import { UsersContext } from '../contexts/Users';
import { VoyagesContext } from '../contexts/Voyages';

function TicketPurchase() {

    const { targetSeats, setTargetSeats, newSeats, setNewVoyages, setFilterMode } = useContext(VoyagesContext);

    const {loginned,loginnedUser,fetchUserReservations} = useContext(UsersContext);

    const { setReservation } = useContext(ReservationsContext)

    const {locale} = useContext(LanguagesContext);


    const navigate = useNavigate();

  

    const handleName = (e) => {
        var seat = (e.target.id).split("-")[0];
        var targetPessenger = targetSeats.filter((element) => element[0] === seat);
        targetPessenger[0][4] = { name: e.target.value, lastname: targetPessenger[0][4].lastname, tel: targetPessenger[0][4].tel, tc: targetPessenger[0][4].tc, id: targetPessenger[0][4].id, username: targetPessenger[0][4].username, seatNo: targetPessenger[0][4].seatNo };
        var newPessengers = targetSeats.filter((element) => element[0] !== seat);
        setTargetSeats([...newPessengers, targetPessenger[0]])
    }

    const handleLastname = (e) => {
        var seat = (e.target.id).split("-")[0];
        var targetPessenger = targetSeats.filter((element) => element[0] === seat);
        targetPessenger[0][4] = { name: targetPessenger[0][4].name, lastname: e.target.value, tel: targetPessenger[0][4].tel, tc: targetPessenger[0][4].tc, id: targetPessenger[0][4].id, username: targetPessenger[0][4].username, seatNo: targetPessenger[0][4].seatNo };
        var newPessengers = targetSeats.filter((element) => element[0] !== seat);
        setTargetSeats([...newPessengers, targetPessenger[0]])
    }

    const handleTel = (e) => {
        var seat = (e.target.id).split("-")[0];
        var targetPessenger = targetSeats.filter((element) => element[0] === seat);
        targetPessenger[0][4] = { name: targetPessenger[0][4].name, lastname: targetPessenger[0][4].lastname, tel: e.target.value, tc: targetPessenger[0][4].tc, id: targetPessenger[0][4].id, username: targetPessenger[0][4].username, seatNo: targetPessenger[0][4].seatNo };
        var newPessengers = targetSeats.filter((element) => element[0] !== seat);
        setTargetSeats([...newPessengers, targetPessenger[0]])
    }

    const handleTc = (e) => {
        var seat = (e.target.id).split("-")[0];
        var targetPessenger = targetSeats.filter((element) => element[0] === seat);
        targetPessenger[0][4] = { name: targetPessenger[0][4].name, lastname: targetPessenger[0][4].lastname, tel: targetPessenger[0][4].tel, tc: e.target.value, id: targetPessenger[0][4].id, username: targetPessenger[0][4].username, seatNo: targetPessenger[0][4].seatNo };
        var newPessengers = targetSeats.filter((element) => element[0] !== seat);
        setTargetSeats([...newPessengers, targetPessenger[0]])
    }

    const formControl = () => {
        for (var i = 0; i < targetSeats.length; i++) {
            if (targetSeats[i][4].name === "") {
                toast.error('L??tfen t??m bilgileri eksiksiz doldurun!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return false;
            }
            if (targetSeats[i][4].surname === "") {
                toast.error('L??tfen t??m bilgileri eksiksiz doldurun', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return false;
            }
            if (targetSeats[i][4].tel.length !== 10) {
                toast.error('Telefon numaralar?? 10 haneli olmal??d??r!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return false;
            }
            if (targetSeats[i][4].tc.length !== 11) {
                toast.error("TC No'lar 11 Haneli Olmal??d??r!", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return false;
            }
        }

        return true;

    }


    const btnClick = () => {

        if (formControl() === true) {

            var newS = newSeats.seats;
            targetSeats.forEach((element) => {
                var newRows = newS.filter((rw, ind) => ind !== element[3]);
                var newRow = newS.filter((rw, ind) => ind === element[3]);
                var newR = newRow[0].filter((rw, ind) => rw.number !== Number(element[0]));
                var newSeat = { number: Number(element[0]), status: element[1] };
                newR = [...newR, newSeat].sort((a, b) => a.number > b.number ? 1 : -1);
                newRows = [...newRows, newR].sort((a, b) => a[0].number > b[0].number ? 1 : -1);
                newS = newRows;
            })

            setNewVoyages(newSeats.id, newS)
            setFilterMode(false);
            for (var i = 0; i < targetSeats.length; i++) {
                setReservation(targetSeats[i][4])
            }
         
            navigate("/reservation-view")
        }


    }






    return (
        <section className='bg-primary my-4 font-kanit'>

            <div className='bg-primary container p-4'>
                <div className='border-b border-secondary py-2'>
                    <h2 className='text-2xl '><i className="fa-solid fa-people-arrows text-secondary"></i> <FormattedMessage id="reservationScreen" /></h2>
                </div>
                <div className='px-4 py-8 flex flex-col gap-y-3'>
                    <h3 className='mb-4'><FormattedMessage id="reservationP2" />;</h3>
                    {targetSeats.sort().map((seat, ind) => (
                        <div key={ind} className='flex justify-start items-center gap-x-2'>
                            <label className='mr-6 font-bold'>{seat[0]} Numaral?? Koltuk</label>
                            <input id={`${seat[0]}-name`} onChange={(e) => handleName(e)} className='py-1 px-2 border-2 border-black' placeholder={locale === "tr-TR" ? "Ad" : "Name"} />
                            <input id={`${seat[0]}-lastname`} onChange={(e) => handleLastname(e)} className='py-1 px-2 border-2 border-black' placeholder={locale === "tr-TR" ? "Soyad" : "Last Name"} />
                            <input id={`${seat[0]}-tel`} onChange={(e) => handleTel(e)} className='py-1 px-2 border-2 border-black' placeholder={locale === "tr-TR" ? "Tel No" : "Phone Number"}/>
                            <input id={`${seat[0]}-tc`} onChange={(e) => handleTc(e)} className='py-1 px-2 border-2 border-black' placeholder={locale === "tr-TR" ? "TC No" : "Tc Number"} />
                        </div>
                    ))}


                    <button onClick={btnClick} className='border border-secondary rounded-lg text-secondary w-48 mt-5'><FormattedMessage id="reservationButton" /></button>

                </div>

            </div>

        </section>
    )
}



export default TicketPurchase;