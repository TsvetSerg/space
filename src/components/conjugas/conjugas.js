import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'

function Conjugas(props) {


  return (

    <div className={`${props.isOpen ? 'conteiner' : 'conteiner_disable'}`}>
    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <div className='popup__textwrap'>
        <h1>ГЛАГОЛ</h1>
        <p className='popup__p'>
        Глагол — это подвижный, деятельный и энергичный персонаж языка, и не только французского. Благодаря ему язык живет и меняется. Он создает динамику, действо, а стало быть — движение. Попробуйте представить себе язык без глагола! Нечто статичное, неподвижное и застойное — просто ужас какой-то! А глагол вносит в язык жизнь.
        </p>

        <p className='popup__p'>
        Глагол — часть речи, которая обозначает действие. В неопределенной форме или инфинитиве он отвечает на вопрос «что делать?».
        </p>

        <p className='popup__p'>
        Как и в русском, глагол тоже спрягается, и в тех же лицах. Во французском языке есть три типа спряжения:
        </p>
        <p className='popup__p'>1) глаголы с окончанием -er в инфинитиве;</p>
        <p className='popup__p'>2) глаголы с окончанием -ir в инфинитиве;</p>
        <p className='popup__p'>3) неправильные глаголы с разными окончаниями в инфинитиве.</p>

        <p className='popup__p'>Спряжение глаголов I группы </p>
        <p className='popup__p'>Parler</p>

        <table className='iksweb'><tbody>
          <tr>
              <td>Je parlE</td>
              <td>Nous parlONS</td>
          </tr>
          <tr>
              <td>Tu parlES</td>
              <td>Vous parlEZ</td>
          </tr>
          <tr>
              <td>Il parlE</td>
              <td>Ils parlENT</td>
          </tr>
          <tr>
              <td>Elle parlE</td>
              <td>Elles parlENT</td>
          </tr></tbody>
      </table>


      </div>


    </div>

    </div>




  )
}

export default Conjugas;
