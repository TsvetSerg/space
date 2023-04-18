import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'

function Formess(props) {


  return (

    <div className={`${props.isOpen ? 'conteiner' : 'conteiner_disable'}`}>
    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <div className='popup__textwrap'>
        <h1>ОТРИЦАТЕЛЬНАЯ ФОРМА</h1>
        <p className='popup__p'>
        Нужно прояснить, как происходит отрицание глагола. Прежде всего, нужно обязательно упомянуть, что во французском языке используется парное отрицание. Это необычно для нас, русскоговорящих. Дело в том, что франкофоны используют при отрицании две частицы:<b>ne</b> — перед глаголом, а <b>pas</b> — после оного.
        </p>

        <p className='popup__p'>Если частица ne ставится перед глаголом, начинающимся с гласной, то «е» редуцируется, и получается <b>n’</b>. </p>
        <p className='popup__p'>Я говорю – Je parle</p>
        <p className='popup__p'>Я <b>НЕ</b> говорю – Je  <b>NE</b> parle <b>PAS</b></p>
      </div>


    </div>

    </div>



  )
}

export default Formess;
