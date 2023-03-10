import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export const ReservationsContext = React.createContext();

function Reservations(props) {

  const [inquiredReservation,setInquiredReservation] = useState([]);



  const setReservation = async (value) => {
    await axios.post("https://json-server-vercel-steel.vercel.app/reservations", value);
    console.log(value)
  }

  const reservationCancellation = async (id) => {
    await axios.delete(`https://json-server-vercel-steel.vercel.app/reservations/${id}`);
    setInquiredReservation([]);
  }

  const inquireReservation = async (reservationNo) => {
    const response = await axios.get("https://json-server-vercel-steel.vercel.app/reservations", {params: {id:reservationNo}});
      setInquiredReservation(response.data);
      if(response.data.length === 0){
        toast.error('Lütfen doğru no girdiğinize emin olun!', {
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
    

    

  


    const values = {
      setReservation,
      inquiredReservation,
      inquireReservation,
      reservationCancellation
    }



  return (
    <ReservationsContext.Provider value={values}>
        {props.children}
    </ReservationsContext.Provider>
  )
}




export default Reservations;