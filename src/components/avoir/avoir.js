import './popup.css';
import cl_bt from '../../images/cl_bt.svg'


function Avoir(props) {


  return (

    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <h1>СПРЯЖЕНИЕ ГЛАГОЛА AVOIR</h1>
      <h3>Avoir – иметь</h3>

      <table className='iksweb'><tbody>
        <tr>
            <td>J'ai</td>
            <td>У меня есть</td>
            <td>Nous avons</td>
            <td>У нас есть</td>
        </tr>
        <tr>
            <td>Tu as</td>
            <td>У тебя есть</td>
            <td>Vous avez</td>
            <td>У вас есть</td>
        </tr>
        <tr>
            <td>Il a</td>
            <td>У него есть</td>
            <td>Ils ont</td>
            <td>У них есть</td>
        </tr>
        <tr>
            <td>Elle a</td>
            <td>У неё есть</td>
            <td>Elles ont</td>
            <td>У них есть</td>
        </tr></tbody>
      </table>
    </div>

  )
}

export default Avoir;
