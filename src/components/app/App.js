import './App.css';
import back from '../../images/backss.png'
import alllers from '../../images/alllers.svg'
import articless from '../../images/articless.svg'
import avoirss from '../../images/avoirss.svg'
import conjugass from '../../images/conjugass.svg'
import etress from '../../images/etress.svg'
import fairess from '../../images/fairess.svg'
import formess from '../../images/formess.svg'
import genress from '../../images/genress.svg'
import plurielss from '../../images/plurielss.svg'
import adjectifss from '../../images/adjectifss.svg'
import popup from '../popup/popup';
import React from 'react';






function App() {
  const [isAddPopup, setAddPopup] = React.useState(false)


  function open() {
    setAddPopup(true)
  }

  function close() {
    setAddPopup(false)
  }


  return (
    <div className="App">

      <img src={back} alt="" className='back' />

      <div className='wrapper'>
        <img className='place alllers' src={alllers} alt="" />
        <img className='place articless' src={articless} alt="" />
        <img className='place avoirss' src={avoirss} alt="" />
        <img className='place conjugass' src={conjugass} alt="" />
        <img className='place etress' src={etress} alt="" />
        <img className='place fairess' src={fairess} alt="" />
        <img className='place formess' src={formess} alt="" />
        <img className='place genress' src={genress} alt="" />
        <img className='place plurielss' src={plurielss} alt="" />
        <img className='place adjectifss' src={adjectifss} alt="" />
      </div>


    </div>
  );
}

export default App;
