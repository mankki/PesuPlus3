import React, { useEffect } from 'react'

const ReservationModal = (props:any) => {
        const modalState = props.toggle;
        const action = props.action;
   
         useEffect(() => {
             document.body.style.overflow = modalState ? "hidden" : "unset";
         }, [modalState]);
   
  return (
      <>
        {modalState ? (
          <>
            <div className = "justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none">
              <div className = "relative my-6 mx-auto w-full h-full">
                <div className = "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className = "flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className = "text-3xl font-semibold">
                      Ajanvaraus
                    </h3>
                    <button
                      className = "p-1 ml-auto bg-transparent border-0 flex text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick = {action}>
                      <span className = 'bg-transparent text-black block outline-none focus:outline-none mr-4" style={{fontSize: "2.25rem", lineHeight:"0.5"}}'>
                        Sulje
                      </span>
                      <span className = "bg-transparent text-red-600 h-6 w-6 block outline-none focus:outline-none mr-4" style={{fontSize: "4.25rem", lineHeight:"0.5"}}>
                        ×
                      </span>
                    </button>
                  </div>
                  <div className = "relative p-6 flex-auto">
                    <iframe title = 'PesuPlus - Tilausivu' style = {{width: "100%", height:"87vh"}}
                        
                        srcDoc="<div style=height:87vh; >
                                    <iframe title='PesuPlus - Tilausivu'
                                    src=https://forms.fillout.com/t/43KF4KbywUus
                                    width=100%
                                    height=100%
                                    ></iframe>
                                  </div>
                          <div style='text-align:center; font-family: KnockoutCruiseweight, sans-serif;'>
                          <h2>Huom! Toiminta-alueemme on Oulu.</h2>
                          <p>Jos ajanvarauskalenteri ei avaudu tälle sivulle, paina <a href=https://forms.fillout.com/t/43KF4KbywUus>tästä</a> linkistä.</p>
                          <h2>Voit varata ajan myös numerosta:</h2>
                          <p>044 243 6843</p></div>">
                    </iframe>
                  </div>       
                </div>
              </div>
              
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
        
export default ReservationModal
