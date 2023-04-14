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
import Avoir from '../avoir/avoir';
import Conjugas from '../conjugas/conjugas'
import Etress from '../etress/etress'
import Alllers from '../alllers/alllers'
import Fairess from '../fairess/fairess'
import Plurielss from '../plurielss/plurielss'
import Formess from '../formess/formess'
import Articless from '../articless/articless'
import Genress from '../genress/genress'
import React from 'react';






function App() {
  const [isAddPopup, setAddPopup] = React.useState(false);
  const [isConjugas, setConjugas] = React.useState(false);
  const [isAlllers, setAlllers] = React.useState(false);
  const [isArticless, setArticless] = React.useState(false);
  const [isEtress, setEtress] = React.useState(false);
  const [isFairess, setFairess] = React.useState(false);
  const [isFormess, setFormess] = React.useState(false);
  const [isGenress, setGenress] = React.useState(false);
  const [isPlurielss, setPlurielss] = React.useState(false);
  // const [isAdjectifss, setAdjectifss] = React.useState(false);


  function open() {
    setAddPopup(true)
  }

  function openConjugas() {
    setConjugas(true)
  }

  function openAlllers() {
    setAlllers(true)
  }

  function openArticless() {
    setArticless(true)
  }

  function openEtress() {
    setEtress(true)
  }

  function openFairess() {
    setFairess(true)
  }

  function openFormess() {
    setFormess(true)
  }

  function openGenress() {
    setGenress(true)
  }

  function openPlurielss() {
    setPlurielss(true)
  }

  // function openAdjectifss() {
  //   setAdjectifss(true)
  // }

  function close() {
    setAddPopup(false)
    setConjugas(false)
    setAlllers(false)
    setArticless(false)
    setEtress(false)
    setFairess(false)
    setFormess(false)
    setGenress(false)
    setPlurielss(false)
    // setAdjectifss(false)
  }


  return (
    <div className="App">

      <Avoir
        isOpen = {isAddPopup}
        isClose = {close}
      />
      <Conjugas
        isOpen = {isConjugas}
        isClose = {close}
      />
      <Etress
        isOpen = {isEtress}
        isClose = {close}

      />

      <Alllers
        isOpen = {isAlllers}
        isClose = {close}
      />
      <Fairess
        isOpen = {isFairess}
        isClose = {close}
      />
      <Plurielss
        isOpen = {isPlurielss}
        isClose = {close}
      />
      <Formess
        isOpen = {isFormess}
        isClose = {close}
      />
      <Articless
        isOpen = {isArticless}
        isClose = {close}
      />
      <Genress
        isOpen = {isGenress}
        isClose = {close}
      />

      <img src={back} alt="" className='back' />

      <div className='wrapper'>
        <img className='place alllers' src={alllers} alt="" onClick={openAlllers} />
        <img className='place articless' src={articless} alt="" onClick={openArticless} />
        <img className='place avoirss' src={avoirss} alt="" onClick={open} />
        <img className='place conjugass' src={conjugass} alt="" onClick={openConjugas} />
        <img className='place etress' src={etress} alt="" onClick={openEtress} />
        <img className='place fairess' src={fairess} alt="" onClick={openFairess} />
        <img className='place formess' src={formess} alt="" onClick={openFormess} />
        <img className='place genress' src={genress} alt="" onClick={openGenress} />
        <img className='place plurielss' src={plurielss} alt="" onClick={openPlurielss} />
        <img className='place adjectifss' src={adjectifss} alt="" />
      </div>


    </div>
  );
}

export default App;
