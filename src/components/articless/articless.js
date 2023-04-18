import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'

function Articless(props) {


  return (

    <div className={`${props.isOpen ? 'conteiner' : 'conteiner_disable'}`}>
    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <div className='popup__textwrap'>
        <h1>АРТИКЛИ</h1>
        <p className='popup__p'>
        <b>Артикли</b> — это маленькие такие словечки, которые обычно предшествуют существительным. Нам очень повезло, что во французском языке нет падежей и только два рода — мужской и женский. Поэтому нам понадобится запомнить всего шесть маленьких (да, очень маленьких) слов. О некоторых дополнительных формах я расскажу позже.
        </p>

        <p className='popup__p'>Итак, вот они!</p>
        <table className='iksweb'><tbody>
          <tr>
              <td></td>
              <td>Мужской род</td>
              <td>Женский род</td>
              <td>Множественное число</td>
          </tr>
          <tr>
              <td>Неопределенный артикль</td>
              <td>un</td>
              <td>une</td>
              <td>des</td>
          </tr>
          <tr>
              <td>Определенный артикль</td>
              <td>le</td>
              <td>la</td>
              <td>les</td>
          </tr></tbody>
        </table>



        <p className='popup__p'>Перед гласной буквой или немой h определенный артикль единственного числа обоих родов принимает форму l’.</p>
        <p className='popup__p'><b>Un</b> chien – <b>le</b> chien</p>
        <p className='popup__p'><b>Une</b> tasse – <b>la</b> tasse</p>
        <p className='popup__p'><b>Des</b> balles – <b>les</b> balles</p>

      </div>


    </div>

    </div>



  )
}

export default Articless;
