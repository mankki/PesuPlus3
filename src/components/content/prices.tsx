import React, { useState } from 'react'
import sofa from '../../assets/sofa.png'
import bed from '../../assets/bed.png'
import car from '../../assets/car.png'
import carpet from '../../assets/carpet.png'
import steam_cleaner from '../../assets/steam_cleaner.jpeg'
import cleaning from '../../assets/cleaning.jpg'
import Otherwashable from './otherwashable'
import ReservationModal from '../reservationModal/reservationModal'

const Prices  =  ()  => {
  const [showReservationModal, setShowReservationModal]  =  useState(false);
  const toggleReservationModalState  =  ()  => {
    setShowReservationModal(!showReservationModal)
  }

  return (
    <div className  = 'flex flex-wrap'>
      <div className  = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-1 sm:mb-9 xl:pl-24" id = 'Sohvan_pesu'>
        <div className  = "relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px] sm:shadow-[-9px_13px_20px_5px_rgb(0,0,0)] shadow-none">
          <img src = {sofa} alt = "sofa" className = 'h-[600px] object-cover sm:h-auto'/>
        <div className = "absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black text-white bg-fixed opacity-30"></div>
      </div>
      <div className='flex flex-col items-center absolute' style={{ textShadow: "2px 2px black"}}>
        <h5 className = "mb-2 text-5xl font-medium leading-tight text-white">Sohvan pesu</h5>
          <p className = "mb-4 text-xl text-white text-center">
            Pesemme kangas- ja nahkapintaiset sohvat ja nojatuolit kätevästi paikan päällä.
          </p>
        <h5 className = "mb-2 text-xl leading-tight text-white font-bold">Sohvapesun hinnasto:</h5>
          <p className = "mb-4 text-xl text-white text-center">
            Nojatuoli: 39 €{<br/>}
            Kahden istuttava: 69 €{<br/>}
            Kolmen istuttava: 98 €{<br/>}
            Neljän istuttava: 126 €{<br/>}
            Viiden istuttava: 147 €{<br/>}
            Kuuden istuttava: 161 €{<br/>}
          </p>
        <div className = "flex justify-center mt-2">
          <button
            onClick = {toggleReservationModalState}
            className = "py-3 px-4 mx-3 rounded-[40px] w-48 border-2 border-white text-white text-center"  
            style = {{fontSize: "x-large", boxShadow: " 0px 1px 5px 0px, inset 0px 0px 20px 11px rgb(0 0 0 / 10%)"}}>
            Varaa aika
          </button>
        </div>
      </div>
    </div>
    <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-1 sm:mb-9 xl:pr-24" id = 'Sängyn_pesu'>
      <div className = "relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px] sm:shadow-[-9px_13px_20px_5px_rgb(0,0,0)] shadow-none">
        <img src = {bed} alt = "bed" className = 'h-[600px] object-cover sm:h-auto'/>
          <div className = "absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
      </div>
      <div className='flex flex-col items-center absolute' style={{ textShadow: "2px 2px black"}}>
        <h5 className = "mb-2 text-5xl font-medium leading-tight text-white">Sängyn pesu</h5>
          <p className = "mb-4 text-xl text-white text-center">
            Sängyn tekstiilipesussa poistamme sängystä mm. rasvalian, pölypunkit{<br/>}  ja kuolleet ihosolut. Pesu tekee sängystä raikkaan tuoksuisen.{<br/>} Sänky pestään kätevästi paikan päällä.
          </p>
        <h5 className = "mb-2 text-xl leading-tight text-white font-bold">Sänkypesun hinnasto:</h5>
          <p className = "mb-4 text-xl text-white text-center">
            Yhden hengen sänky: 66 €{<br/>}
            Parisänky: 94 €{<br/>}
          </p>
        <div className = "flex justify-center mt-2">
          <button
            onClick = {toggleReservationModalState}
            className = "py-3 px-4 mx-3 rounded-[40px] w-48 border-2 border-white text-white text-center"
            style = {{fontSize: "x-large",boxShadow: " 0px 1px 5px 0px, inset 0px 0px 20px 11px rgb(0 0 0 / 10%)"}}>
            Varaa aika
          </button>
        </div>
      </div>
    </div>
    <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-1 sm:mb-9 xl:pl-24" id = 'Auton_tekstiilipesu'>
      <div className = "relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px] sm:shadow-[-9px_13px_20px_5px_rgb(0,0,0)] shadow-none">
        <img
          src = {car} alt = "car" className = 'h-[600px] object-cover sm:h-auto'/>
          <div className = "absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
      </div>
      <div className='flex flex-col items-center absolute' style={{ textShadow: "2px 2px black"}}>
        <h5 className = "mb-2 text-5xl font-medium text-center leading-tight text-white">Auton tekstiilipesu</h5>
          <p className = "mb-4 text-xl text-white text-center">
            Auton penkkien pesussa poistetaan ensin kuivat roskat, jonka jälkeen{<br/>} pinttynyt lika poistetaan tekstiilipesurilla kätevästi paikan päällä.
          </p>
        <h5 className = "mb-2 text-xl leading-tight text-center text-white font-bold">Autopesun hinnasto:</h5>
          <p className = "mb-4 text-xl text-white text-center">
            Yksittäinen penkki: 35 €{<br/>}
            Mopoauto: 60 €{<br/>}
            2-paikkainen auto: 60 €{<br/>}
            5-paikkainen auto: 120 €{<br/>}
            7-paikkainen auto: 160 €{<br/>}
          </p>
        <div className = "flex justify-center mt-2">
        <button
            onClick = {toggleReservationModalState}
            className = "py-3 px-4 mx-3 rounded-[40px] w-48 border-2 border-white text-white text-center"
            style = {{fontSize: "x-large", boxShadow: " 0px 1px 5px 0px, inset 0px 0px 20px 11px rgb(0 0 0 / 10%)"}}>
            Varaa aika
          </button>
        </div>
      </div>
    </div>
    <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-1 sm:mb-9 xl:pr-24" id = 'Maton_pesu'>
      <div className = "relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px] sm:shadow-[-9px_13px_20px_5px_rgb(0,0,0)] shadow-none">
        <img src = {carpet} alt = "steam_cleaner" className = 'h-[600px] object-cover sm:h-auto'/>
        <div className = "absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
      </div>
      <div className='flex flex-col items-center absolute' style={{ textShadow: "2px 2px black"}}>
        <h5 className = "mb-2 text-5xl font-medium leading-tight text-white">Maton pesu</h5>
          <p className = "mb-4 text-xl text-white text-center sm:p-0 p-1">
            Maton pesussa poistetaan ensin kuivat roskat, jonka {<br/>}jälkeen pinttynyt lika pestään pois tekstiilipesurilla kätevästi paikan päällä.
          </p>
        <h5 className = "mb-2 text-xl leading-tight text-white font-bold">Mattopesun hinnasto:</h5>
          <p className = "mb-4 text-xl text-white text-center">
              XS-matto (max 0,5 m²): 9 €{<br/>}
              S-matto (max 1 m²): 14 €{<br/>}
              M-matto (max 3 m²): 38 €{<br/>}
              L-matto (max 5 m²): 59€{<br/>}
              XL-matto (max 8 m²): 89 €{<br/>}
              XXL-matto (max 10 m²): 99 €{<br/>}
          </p>
        <div className = "flex justify-center mt-2">
        <button
            onClick = {toggleReservationModalState} 
            className = "py-3 px-4 mx-3 rounded-[40px] w-48 border-2 border-white text-white text-center" 
            style = {{fontSize: "x-large", boxShadow: " 0px 1px 5px 0px, inset 0px 0px 20px 11px rgb(0 0 0 / 10%)"}}>
            Varaa aika
          </button>
        </div>
      </div>
    </div>
    {/* Steam Cleaning Section */}
    <div className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-1 sm:mb-9 xl:pl-24" id='Höyrypesu'>
        <div className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px] sm:shadow-[-9px_13px_20px_5px_rgb(0,0,0)] shadow-none">
          <img src={steam_cleaner} alt="steam_cleaner" className='h-[600px] object-cover sm:h-auto' />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
        </div>
        <div className='flex flex-col items-center absolute' style={{ textShadow: "2px 2px black"}}>
        <h5 className="mb-2 text-5xl font-medium leading-tight text-white">Höyrypesu</h5>
          <p className="mb-4 text-xl text-white text-center">
            Höyrypesu puhdistaa tehokkaasti mm. kylpyhuoneen kaakelit. {<br />}
            Käytämme ammattikäyttöön tarkoitettua höyryimuria. Höyrypesut {<br />}
            varataan puhelimitse.
          </p>
          <h5 className="mb-2 text-xl leading-tight text-white font-bold">Höyrypesun hinnasto:</h5>
          <p className="mb-4 text-xl text-white text-center">
            58 €/tunti
          </p>
          <p
            style={{ fontSize: "x-large", color: "white"}}>
            <b>Puh. 044 243 6843</b>
          </p>
          <p
            style={{ fontSize: "x-large", color: "white"}}>
            <b>myynti@pesuplus.fi</b>
          </p>
        </div>
      </div>

      {/* Basic Cleaning Section */}
      <div className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-1 sm:mb-9 xl:pr-24" id='Perussiivous'>
        <div className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px] sm:shadow-[-9px_13px_20px_5px_rgb(0,0,0)] shadow-none">
          <img src={cleaning} alt="cleaning" className='h-[600px] object-cover sm:h-auto' />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
        </div>
      <div className='flex flex-col items-center absolute' style={{ textShadow: "2px 2px black"}}>
          <h5 className="mb-2 text-5xl font-medium leading-tight text-white">Perussiivous</h5>
          <p className="mb-4 text-xl text-white text-center">
            Perussiivouksessa imuroimme kodin lattiat ja matot sekä pyyhimme pölyt.{<br />} 
            Vessoissa ja kylpytiloissa pesemme tasot, wc-istuimen, pesualtaan sekä{<br />}
            lasi- ja peilipinnat. Keittiössä pyyhimme tasot ja pesemme pesualtaan.{<br />}
            Perussiivous varataan puhelimitse.

          </p>
          <h5 className="mb-2 text-xl leading-tight text-white font-bold">Perussiivouksen hinnasto:</h5>
          <p className="mb-4 text-xl text-white text-center">
            Kertakäynti: 48 €/tunti{<br />}
            Jatkuva siivous: 38 €/tunti
          </p>
          <p
            style={{ fontSize: "x-large", color: "white"}}>
            <b>Puh. 044 243 6843</b>
          </p>
          <p
            style={{ fontSize: "x-large", color: "white"}}>
            <b>myynti@pesuplus.fi</b>
          </p>
        </div>
      </div>
    <ReservationModal toggle = {showReservationModal} action = {toggleReservationModalState}/>
    <div className = 'min-w-[100%] my-6'>
      <h5 className = "my-7 text-2xl leading-tight text-black font-bold text-center">Pesemme myös... </h5>
      <Otherwashable></Otherwashable>
      </div>
  </div>
  )
}

export default Prices
