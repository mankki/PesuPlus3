import React from 'react'
import kotimainen from '../../assets/kotimainen.png'
import laatu from '../../assets/laatu.png'
import laatutakuu from '../../assets/laatutakuu.png'

const valuescontent = () => {
  return (
    <div className = "lg:flex lg:justify-center my-12">
      <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center p-5 ">
        <img className = "rounded-t-lg sm:rounded-tr-none h-32 mb-5"
          src={kotimainen}
          alt = "Kotimainen"/>
        <h5 className = "mb-2 text-xl font-bold leading-tight text-black">KOTIMAINEN - OULULAINEN</h5>
          <p className = "mb-4 text-2xl text-black text-center">
            Yrityksemme on ylpeästi kotimainen ja juuremme ovat Oulussa.
          </p>
      </div>

      <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center p-5">
        <img className = "rounded-t-lg sm:rounded-tr-none h-32 mb-5"
          src={laatu}
          alt = "Laatu"/>
        <h5 className = "mb-2 text-xl font-bold leading-tight text-black">LAADUKKAAT TYÖVÄLINEET</h5>
          <p className = "mb-4 text-2xl text-black text-center">
            Käytämme vain jatkuvaan ammattikäyttöön tarkoitettuja tekstiilipesureita ja laadukkaita pesuaineita.
          </p>
      </div>
      <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center p-5">
        <img className = "rounded-t-lg sm:rounded-tr-none h-32 mb-5"
          src={laatutakuu}
          alt = "Laatutakuu" />
        <h5 className = "mb-2 text-xl font-bold leading-tight text-black">100% LAATUTAKUU AINA</h5>
          <p className = "mb-4 text-2xl text-black text-center">
            Teemme työn uudestaan tai palautamme rahat, jos työn jälki ei miellytä silmää.
          </p>
      </div>
    </div>
  )
}

export default valuescontent
