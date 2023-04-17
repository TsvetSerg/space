import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'

function Plurielss(props) {


  return (

    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <div className='popup__textwrap'>
        <h1>МНОЖЕСТВЕННОЕ ЧИСЛО СУЩ</h1>
        <p className='popup__p'>
        Множественное число образуется присоединением к существительному в единственном числе буквы s. Если эта буква уже имеется в конце слова в единственном числе, или существительное оканчивается на -x или -z, то в первозданном виде переходит во множественное число.
        </p>

        <p className='popup__p'>un homme - des hommes (мужчина - мужчины)</p>
        <p className='popup__p'>un loup - des loups (Волк - волки)</p>
        <p className='popup__p'>une femme - des femmes (женщина - женщины)</p>
        <p className='popup__p'>un fils [fis] - des fils (сын - сыновья)</p>
        <p className='popup__p'>une croix - des croix (Крест - кресты)</p>
        <p className='popup__p'>un nez - des dez (нос - носы)</p>

        <p className='popup__p'><b>Запомни!</b></p>
        <p className='popup__p'>Un animal – des animaux</p>
        <p className='popup__p'>Un journal – des journaux</p>
        <p className='popup__p'><b>НО!</b> Un festival – des festivals</p>

      </div>


    </div>

  )
}

export default Plurielss;
