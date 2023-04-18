import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'


function Etress(props) {


  return (

    <div className={`${props.isOpen ? 'conteiner' : 'conteiner_disable'}`}>
    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <h1>СПРЯЖЕНИЕ ГЛАГОЛА ÊTRE</h1>
      <h3>Être – быть, находиться, являться</h3>

      <table className='iksweb'><tbody>
          <tr>
              <td>Je suis</td>
              <td>Nous sommes</td>
          </tr>
          <tr>
              <td>Tu es</td>
              <td>Vous êtes</td>
          </tr>
          <tr>
              <td>Il est</td>
              <td>Ils sont</td>
          </tr>
          <tr>
              <td>Elle est</td>
              <td>Elles sont</td>
          </tr></tbody>
      </table>
    </div>


    </div>


  )
}

export default Etress;
