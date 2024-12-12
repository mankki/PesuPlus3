import React from 'react';
import Navbar from './components/navbar/navbar';
import Herosection from './components/herosection/herosection';
import Valuescontent from './components/content/valuescontent';
import Prices from './components/content/prices';
import Pricelist from './components/content/pricelist';
import ReservationModal from './components/reservationModal/reservationModal';
import Footer from './components/footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Valuescontent/>
      <Prices/>
      <Pricelist/>
      <ReservationModal/>
      <Footer/>
    </div>
  );
}

export default App;
