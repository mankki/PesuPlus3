import React, { useState } from 'react'
import landingpage_img from '../landingpage/sofa_e.jpg'
import ReservationModal from '../reservationModal/reservationModal';



const Herosection = () => {
    const [showReservationModal, setShowReservationModal] = useState(false);
    const toggleReservationModalState = () => {
        setShowReservationModal(!showReservationModal)
    }

    return (
      <div className = 'w-full h-[90vh]' id = 'hero'>
        <img className = 'w-full h-full object-cover' src = {landingpage_img} alt="landingpage"/>
          <div className = "absolute bottom-0 left-0 right-0 top-0 h-[99%] w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
        <div className = "absolute top-[10%] left-[50%] translate-x-[-50%] flex flex-col items-baseline mt-6 lg:mt-2 text-white">
          <h1 className = "text-7xl/[2.5rem] sm:text-8xl lg:text-9xl tracking-wide" >
            PesuPlus 
          </h1>
            <p className = 'mt-9 mb-5 sm:my-0 text-2xl sm:text-2xl lg:text-2xl/[3rem] text-left tracking-wide' >
              Tekstiilipintojen pesu paikan päällä.
            </p>
            <p className="text-2xl lg:text-2xl sm:text-2xl text-start text-white-500 max-w-4xl">
              PesuPlus tuo tekstiilipintojen pesupalvelut kätevästi koteihin ja yrityksiin Oulun alueella.
            </p>
        { <div className="flex justify-center mt-2 w-full sm:w-auto">
          <button
            onClick = {toggleReservationModalState}
            className = " mt-36 py-3 px-4 mx-3 rounded-[40px] w-60 border-2 border-white text-white text-center"  style = {{fontSize: "x-large",
              boxShadow: " 0px 1px 5px 0px"}}
          >
            Varaa aika
          </button>
        </div> }
      </div>
      <ReservationModal toggle = {showReservationModal} action = {toggleReservationModalState}/>
      </div>
    );
  };
export default Herosection