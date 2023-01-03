import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { VoyagesContext } from '../contexts/Voyages';

function TicketPurchase() {

    const { targetSeats, setTargetSeats, newSeats, setNewVoyages, setFilterMode } = useContext(VoyagesContext);



    const handleName = (e) => {
        var seat = (e.target.id).split("-")[0];
        var targetPessenger = targetSeats.filter((element) => element[0] === seat);
        targetPessenger[0][4] = { name: e.target.value, lastname: targetPessenger[0][4].lastname, tel: targetPessenger[0][4].tel, tc: targetPessenger[0][4].tc };
        var newPessengers = targetSeats.filter((element) => element[0] !== seat);
        setTargetSeats([...newPessengers, targetPessenger[0]])
    }

    const handleLastname = (e) => {
        var seat = (e.target.id).split("-")[0];
        var targetPessenger = targetSeats.filter((element) => element[0] === seat);
        targetPessenger[0][4] = { name: targetPessenger[0][4].name, lastname: e.target.value, tel: targetPessenger[0][4].tel, tc: targetPessenger[0][4].tc };
        var newPessengers = targetSeats.filter((element) => element[0] !== seat);
        setTargetSeats([...newPessengers, targetPessenger[0]])
    }

    const handleTel = (e) => {
        var seat = (e.target.id).split("-")[0];
        var targetPessenger = targetSeats.filter((element) => element[0] === seat);
        targetPessenger[0][4] = { name: targetPessenger[0][4].name, lastname: targetPessenger[0][4].lastname, tel: e.target.value, tc: targetPessenger[0][4].tc };
        var newPessengers = targetSeats.filter((element) => element[0] !== seat);
        setTargetSeats([...newPessengers, targetPessenger[0]])
    }

    const handleTc = (e) => {
        var seat = (e.target.id).split("-")[0];
        var targetPessenger = targetSeats.filter((element) => element[0] === seat);
        targetPessenger[0][4] = { name: targetPessenger[0][4].name, lastname: targetPessenger[0][4].lastname, tel: targetPessenger[0][4].tel, tc: e.target.value };
        var newPessengers = targetSeats.filter((element) => element[0] !== seat);
        setTargetSeats([...newPessengers, targetPessenger[0]])
    }

    const formControl = () => {
        for (var i = 0; i < targetSeats.length; i++) {
            if (targetSeats[i][4].name === "" || targetSeats[i][4].lastname === "" || targetSeats[i][4].tel === "" || targetSeats[i][4].tc === "") {
                toast.error('Lütfen tüm alanları eksiksiz doldurun!', {
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
            console.log("serkan is my girl");
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
            console.log("serkan is my girl")
        }


    }






    return (
        <section className='bg-primary my-6 font-open'>

            <div className='bg-primary container p-4'>
                <div className='border-b border-secondary py-2'>
                    <h2 className='text-2xl '><i className="fa-solid fa-people-arrows text-secondary"></i> Rezervasyon Ekranı</h2>
                </div>
                <div className='px-4 py-8 flex flex-col gap-y-3'>
                    <h3 className='mb-4'>Lütfen yolcu bilgilerini giriniz;</h3>
                    {targetSeats.sort().map((seat, ind) => (
                        <div key={ind} className='flex justify-start items-center gap-x-2'>
                            <label className='mr-6 font-bold'>{seat[0]} Numaralı Koltuk</label>
                            <input id={`${seat[0]}-name`} onChange={(e) => handleName(e)} className='py-1 px-2 border-2 border-black' placeholder='Adı' />
                            <input id={`${seat[0]}-lastname`} onChange={(e) => handleLastname(e)} className='py-1 px-2 border-2 border-black' placeholder='Soyadı' />
                            <input id={`${seat[0]}-tel`} onChange={(e) => handleTel(e)} className='py-1 px-2 border-2 border-black' placeholder='TC No' />
                            <input id={`${seat[0]}-tc`} onChange={(e) => handleTc(e)} className='py-1 px-2 border-2 border-black' placeholder='Telefon No' />
                        </div>
                    ))}


                    <button onClick={btnClick} className='border border-secondary rounded-lg text-secondary w-48 mt-5'>Rezerve Et</button>

                </div>

            </div>

        </section>
    )
}



export default TicketPurchase;