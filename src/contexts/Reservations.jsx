import React from 'react'

export const ReservationsContext = React.createContext();

function Reservations(props) {

    const values = {

    }



  return (
    <ReservationsContext.Provider value={values}>
        {props.children}
    </ReservationsContext.Provider>
  )
}




export default Reservations;