import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'


function Fairess(props) {


  return (

    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <h1>СПРЯЖЕНИЕ ГЛАГОЛА FAIRE</h1>
      <h3>Faire – делать </h3>

      <table className='iksweb'><tbody>
          <tr>
              <td>Je fais</td>
              <td>Nous faisons</td>
          </tr>
          <tr>
              <td>Tu fais</td>
              <td>Vous faites</td>
          </tr>
          <tr>
              <td>Il fait</td>
              <td>Ils font</td>
          </tr>
          <tr>
              <td>Elle fait</td>
              <td>Elles font</td>
          </tr></tbody>
      </table>
      <div className='popup__textwrap'>
      <p className='popup__p'>Устойчивые выражения с глаголом «faire»:</p>
      <p className='popup__p'>Faire du sport – заниматься спортом</p>
      <p className='popup__p'>Faire du ski – кататься на лыжах</p>
      <p className='popup__p'>Faire de la luge – кататься на санках</p>
      <p className='popup__p'>Faire du patin – кататься на коньках </p>
      <p className='popup__p'>Faire le lit – заправлять кровать</p>

      <p className='popup__p'>Выражения о погоде:</p>
      <p className='popup__p'>• Il fait beau – хорошая погода</p>
      <p className='popup__p'>• Il fait mauvais – плохая погода</p>
      <p className='popup__p'>• Il fait du vent – ветрено</p>
      <p className='popup__p'>• Il fait du soleil – солнечно</p>

      </div>
    </div>

  )
}

export default Fairess;
