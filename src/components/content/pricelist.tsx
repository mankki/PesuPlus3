import React, { useState } from 'react'
import './pricelist.css'
import ReservationModal from '../reservationModal/reservationModal';

const Pricelist = (props:any) => {
    const [showReservationModal, setShowReservationModal] = useState(false);
    const toggleReservationModalState = () => {
        setShowReservationModal(!showReservationModal)
    }
    
  return (
    <div className='center max-w-[80%]'>
       <details id='Hinnasto'>
                <summary className='my-6 text-2xl hover:cursor-pointer'><b>Katso koko hinnasto</b></summary>
                <div className="dropdown-text">
                    <h1 style={{}}>Hinnasto</h1>
                    <p style={{}}>Käytämme urakkaveloitusta, jotta tiedät työn hinnan tarkalleen etukäteen. Hinta sis. alv 24 %.
                        Käytämme vain ammattikäyttöön tarkoitettuja, erittäin laadukkaita laitteita ja pesuaineita. Pidätämme
                        oikeuden hinnanmuutoksiin. Minimiveloituksemme on 100 €. Pesu tapahtuu kätevästi asiakkaan kotona.
                        Maksaminen onnistuu kätevästi maksupäätteellä. Palvelumme ovat kotitalousvähennyskelpoisia (60 %).
                    </p>
                    <h2>Hinta-arvio:</h2>
                    <table>
                        <tr>
                            <th>Palvelu:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Hinta-arvio puhelimitse</td>
                            <td>0 €</td>
                        </tr>
                        <tr>
                            <td>Hinta-arviokäynti kotona (Oulu)</td>
                            <td>0 €</td>
                        </tr>
                    </table>
                    <h2>Tekstiilikalusteet:</h2>
                    <p>Tekstiilipintaiset kalusteet pestään ammattikäyttöön tarkoitetulla tekstiilipesurilla.
                    </p>
                    <table>
                        <tr>
                            <th>Työ:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Ruokatuoli</td>
                            <td>18 €</td>
                        </tr>
                        <tr>
                            <td>Työtuoli</td>
                            <td>27 €</td>
                        </tr>
                        <tr>
                            <td>Rahi</td>
                            <td>29 €</td>
                        </tr>
                        <tr>
                            <td>Nojatuoli</td>
                            <td>49 €</td>
                        </tr>
                        <tr>
                            <td>Kahden istuttava sohva</td>
                            <td>69 €</td>
                        </tr>
                        <tr>
                            <td>Kolmen istuttava sohva</td>
                            <td>98 €</td>
                        </tr>
                        <tr>
                            <td>Neljän istuttava sohva</td>
                            <td>126 €</td>
                        </tr>
                        <tr>
                            <td>Viiden istuttava sohva</td>
                            <td>147 €</td>
                        </tr>
                        <tr>
                            <td>Kuuden istuttava sohva</td>
                            <td>161 €</td>
                        </tr>
                        <tr>
                            <td>Yhden hengen sänky</td>
                            <td>66 €</td>
                        </tr>
                        <tr>
                            <td>Parisänky</td>
                            <td>94 €</td>
                        </tr>
                    </table>
                    <h2>Nahkakalusteet:</h2>
                    <p>Nahkakalusteisiin sovelletaan samaa hinnastoa kuin kangaskalusteisiin. Nahkakalusteet pestään käsin. Pesun jälkeen nahkakalusteet
                        käsitellään niihin soveltuvilla laadukkailla hoitoaineilla.</p>
                    <h2>Matot:</h2>
                    <table>
                        <tr>
                            <th>Työ:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>XS-matto ( 0,5 m²)</td>
                            <td>9 €</td>
                        </tr>
                        <tr>
                            <td>S-matto ( 1 m²)</td>
                            <td>14 €</td>
                        </tr>
                        <tr>
                            <td>M-matto (3 m²)</td>
                            <td>38 €</td>
                        </tr>
                        <tr>
                            <td>L-matto ( 5 m²)</td>
                            <td>59 €</td>
                        </tr>
                        <tr>
                            <td>XL-matto ( 8 m²)</td>
                            <td>89 €</td>
                        </tr>
                        <tr>
                            <td>XXL-matto (10 m²)</td>
                            <td>99 €</td>
                        </tr>
                    </table>
                    <h2>Ajoneuvot (penkit, muu verhoilu):</h2>
                    <table>
                        <tr>
                            <th>Työ:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Yksittäinen penkki</td>
                            <td>35 €</td>
                        </tr>
                        <tr>
                            <td>Mopoauto</td>
                            <td>60 €</td>
                        </tr>
                        <tr>
                            <td>2-paikkainen auto</td>
                            <td>60 €</td>
                        </tr>
                        <tr>
                            <td>5-paikkainen auto</td>
                            <td>120 €</td>
                        </tr>
                        <tr>
                            <td>7-paikkainen auto</td>
                            <td>160 €</td>
                        </tr>
                        <tr>
                            <td>Venetekstiilit</td>
                            <td>Tarjouksen mukaan</td>
                        </tr>
                        <tr>
                            <td>Asuntoauton tekstiilit</td>
                            <td>Tarjouksen mukaan</td>
                        </tr>
                    </table>
                    <h2>Muut tekstiilipestävät:</h2>
                    <table>
                        <tr>
                            <th>Työ:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Puutarhakalusteen pehmuste</td>
                            <td>18 €</td>
                        </tr>
                        <tr>
                            <td>Pehmolelu</td>
                            <td>9 €</td>
                        </tr>
                        <tr>
                            <td>Ryijyt ja seinävaatteet</td>
                            <td>19 €/m²</td>
                        </tr>
                        <tr>
                            <td>Lastenvaunut ja -rattaat</td>
                            <td>27 €</td>
                        </tr>
                        <tr>
                            <td>Lasten turvaistuin</td>
                            <td>27 €</td>
                        </tr>
                    </table>
                    <h2>Lisäpalvelut:</h2>
                    <table>
                        <tr>
                            <th>Palvelu:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Pelkkä tekstiilipinnan imurointi</td>
                            <td>Tarjouksen mukaan</td>
                        </tr>
                        <tr>
                            <td>Hoitokäsittely hoitoaineella</td>
                            <td>Tarjouksen mukaan</td>
                        </tr>
                    </table>
                    <h2>Huom!</h2>
                    <p>Jos et löytänyt etsimääsi hintaa tältä välilehdeltä, lähetäthän meille tarjouspyynnön sähköpostitse
                        (mielellään kuvan kera). Voit tiedustella tarjouspyyntöä myös puhelimitse.
                    </p>
                    <p>Jos pestävässä tuotteessa ei ole pesulappua, tapahtuu pesu asiakkaan omalla vastuulla.</p>
                </div> 
                <button className="text-xl my-3 p-1 border" onClick={toggleReservationModalState}>Varaa aika</button>  
            </details>
            <ReservationModal toggle={showReservationModal} action={toggleReservationModalState}/>
    </div>
  )
}

export default Pricelist
