import React from 'react'
import nahkakaluste from '../../assets/nahkakalusteet.png'
import pehmolelu from '../../assets/pehmolelu.png'
import puutarhakaluste from '../../assets/puutarhakaluste.png'

const otherwashable = () => {
  
    return (
      <div className = "lg:flex lg:justify-center">
        <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center">
          <img className="rounded-t-lg sm:rounded-tr-none h-32 mb-5"
            src={nahkakaluste}
            alt="nahkakaluste" />
            <h5 className="mb-2 text-xl font-bold leading-tight text-black">NAHKAKALUSTEET</h5>
              <p className="mb-4 text-2xl text-black text-center">
                Pesemme ja hoitokäsittelemme nahkakalusteet käsin.
              </p>
        </div>
        <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center">
          <img className = "rounded-t-lg sm:rounded-tr-none h-32 mb-5"
            src={pehmolelu}
            alt="pehmolelu" />
            <h5 className = "mb-2 text-xl font-bold leading-tight text-black">PEHMOLELUT</h5>
              <p className = "mb-4 text-2xl text-black text-center">
                Pesemme pehmolelut paikanpäällä.
              </p>
          </div>
        <div className = "flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center">
          <img className = "rounded-t-lg sm:rounded-tr-none h-32 mb-5"
            src={puutarhakaluste}
            alt="puutarhakaluste" />
            <h5 className="mb-2 text-xl font-bold leading-tight text-black">PUUTARHAKALUSTEET</h5>
              <p className="mb-4 text-2xl text-black text-center">
                Pesemme myös puutarhakalusteiden tekstiilipehmusteet!
              </p>
          </div>
      </div>
      )
}

export default otherwashable
