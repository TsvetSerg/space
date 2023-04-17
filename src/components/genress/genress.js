import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'

function Genress(props) {


  return (

    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <div className='popup__textwrap'>
        <h1>ПРИЛАГАТЕЛЬНОЕ</h1>
        <p className='popup__p'>
        Во-первых, давайте немножко вспомним, что такое это прилагательное и к чему оно прилагательное? Прилагается оно к существительному, так сказать, определяет его и отвечает на вопрос «какой, какая, какое, какие?»
        </p>

        <p className='popup__p'>Женский род прилагательного обычно образуется от мужского прибавлением -e.</p>
        <p className='popup__p'>Petit – petite</p>
        <p className='popup__p'>Grand – grande </p>
        <p className='popup__p'>Если в конце слова уже есть -е, то прилагательное имеет одинаковую форму в обоих родах:</p>
        <p className='popup__p'>Jaune – jaune</p>
        <p className='popup__p'>Rouge – rouge</p>

        <p className='popup__p'>Некоторые прилагательные образуют женский род не по стандарту:</p>
        <p className='popup__p'>Bas – basse</p>
        <p className='popup__p'>Long – longue </p>
        <p className='popup__p'>Blanc – blanche </p>
        <p className='popup__p'>Gros – grosse </p>
        <p className='popup__p'>Bon – bonne </p>
        <p className='popup__p'>Actif – active </p>
        <p className='popup__p'>Heureux – heureuse </p>
      </div>
    </div>

  )
}

export default Genress;
