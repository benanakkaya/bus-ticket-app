import React, { useState } from 'react'
import axios from "axios";

export const VoyagesContext = React.createContext();


function Voyages(props) {

  const [voyages, setVoyages] = useState([]);
  const [status, setStatus] = useState("idle");

  const [filterValues, setFilterValues] = useState({});

  const [filterMode,setFilterMode] = useState(false);
  const [filteredList,setFilteredList] = useState([]);
  const [filtValues,setFiltValues] = useState({});

  const [targetSeats,setTargetSeats] = useState([]);
  const [newSeats,setNewSeats] = useState([]);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const fetchVoyages = async (values) => {
    var dateFormat = values.date.split("-").reverse();
    dateFormat[0] = dateFormat[0] + "-";
    dateFormat[1] = dateFormat[1] + "-";
    dateFormat = dateFormat.join().replace(/,/g, "")
    const res = await axios.get("http://localhost:3002/voyages", { params: { start: values.start, lastStop: values.stop, date: dateFormat } });
    setVoyages(res.data);
    setStatus("ready");
    setFilterValues({ start: values.start, stop: values.stop, date: values.date });
  }

  const setNewVoyages = async (id, mani) => {

    await axios.patch(`http://localhost:3002/voyages/${id}`, { seats: mani }).then(() => {
      fetchVoyages(filterValues);
    }).then(() => {
      if(filterMode === true){
        handleFilterSubmit(filtValues)
      }
    })

    


  }

  const handleFilterSubmit = (values) => {
    var newList = voyages;
    setFilterMode(true);
    if (values.timeRangeStart !== "" && values.timeRangeStop !== "") {
      newList = newList.filter((voyage) => values.timeRangeStart <= voyage.time);
      newList = newList.filter((voyage) => voyage.time <= values.timeRangeStop);
    }
    if (values.types.length !== 0) {
      newList = newList.filter((voyage) => (values.types).indexOf(voyage.type) >= 0)
    }
    if (values.priceRangeStart !== "" && values.priceRangeStop !== "") {
      newList = newList.filter((voyage) => values.priceRangeStart <= voyage.price);
      newList = newList.filter((voyage) => voyage.price <= values.priceRangeStop);
    }
    if (values.companies.length !== 0) {
      newList = voyages.filter((voyage) => (values.companies).indexOf(voyage.company) >= 0)
    }

  
    setFilteredList(newList)
  }







  const values = {
    fetchVoyages,
    status,
    voyages,
    setVoyages,
    setNewVoyages,
    filterValues,
    filterMode,
    setFilterMode,
    filteredList,
    setFilteredList,
    handleFilterSubmit,
    setFiltValues,
    setTargetSeats,
    targetSeats,
    newSeats,
    setNewSeats,
    selectedSeats,
    setSelectedSeats

  }

  return (
    <VoyagesContext.Provider value={values} >
      {props.children}
    </VoyagesContext.Provider>
  )
}

export default Voyages;
