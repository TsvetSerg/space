import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'


function Alllers(props) {


  return (

    <div className={`${props.isOpen ? 'conteiner' : 'conteiner_disable'}`}>

    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <h1>СПРЯЖЕНИЕ ГЛАГОЛА ALLER</h1>
      <h3>Aller – идти, ехать</h3>

      <table className='iksweb'><tbody>
          <tr>
              <td>Je vais</td>
              <td>Nous allons</td>
          </tr>
          <tr>
              <td>Tu vas</td>
              <td>Vous allez</td>
          </tr>
          <tr>
              <td>Il va</td>
              <td>Ils vont</td>
          </tr>
          <tr>
              <td>Elle va</td>
              <td>Elles vont</td>
          </tr></tbody>
      </table>
      <div className='popup__textwrap'>
      <p className='popup__p'>Используется в оборотах:</p>
      <p className='popup__p'>• Comment allez-vous? – Как вы поживаете (как вы, как здоровье)?</p>
      <p className='popup__p'>• Comment vas-tu? – Как ты поживаешь (как ты)?</p>
      <p className='popup__p'>• Tu vas bien? – Ты в порядке?</p>
      <p className='popup__p'>• Je vais bien. – Я хорошо (я в порядке).</p>
      <p className='popup__p'>• Ça va? – Как дела?</p>

      </div>
    </div>

    </div>



  )
}

export default Alllers;
