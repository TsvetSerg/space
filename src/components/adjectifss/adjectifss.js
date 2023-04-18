import '../avoir/popup.css'
import cl_bt from '../../images/cl_bt.svg'


function Adjectifss(props) {


  return (

    <div className={`${props.isOpen ? 'conteiner' : 'conteiner_disable'}`}>
    <div className={`${props.isOpen ? 'popup__wrapper' : 'popup_disable'}`}>
      <img className='popup__close' src={cl_bt} alt="" onClick={props.isClose}/>
      <h1>ПРИТЯЖАТЕЛЬНЫЕ ПРИЛАГАТЕЛЬНЫЕ</h1>
      <h3>Эти маленькие словечки используются вместо артикля перед существительным и указывают на то, кому принадлежит тот или иной предмет. </h3>

      <table class="iksweb">
      	<tbody>
      		<tr>
      			<td rowspan="2">Местоимение
      </td>
      			<td colspan="2">Единственное число
      </td>
      			<td rowspan="2">Множественное число
      </td>
      		</tr>
      		<tr>
      			<td>Мужской род
      </td>
      			<td>Женский род
      </td>
      		</tr>
      		<tr>
      			<td>Je (Я)
      </td>
      			<td>Mon (мой, моя)
      </td>
      			<td>Ma (мой, моя)
      </td>
      			<td>Mes (мои)
      </td>
      		</tr>
      		<tr>
      			<td>Tu (Ты)
      </td>
      			<td>Ton (твой, твоя)
      </td>
      			<td>Ta (твой, твоя)
      </td>
      			<td>Tes (твои)
      </td>
      		</tr>
      		<tr>
      			<td>Il (Он)
      </td>
      			<td>Son (его, её)
      </td>
      			<td>Sa (его, её)
      </td>
      			<td>Ses (его, её)
      </td>
      		</tr>
      		<tr>
      			<td>Elle (Она)
      </td>
      			<td>Son (его, её)
      </td>
      			<td>Sa (его, её)
      </td>
      			<td>Ses (его, её)
      </td>
      		</tr>
      		<tr>
      			<td>Nous (Мы)
      </td>
      			<td colspan="2">Notre (наш, наша)
      </td>
      			<td>Nos (наши)
      </td>
      		</tr>
      		<tr>
      			<td>Vous (Вы)
      </td>
      			<td colspan="2">Votre (ваш, ваша)
      </td>
      			<td>Vos (ваши)
      </td>
      		</tr>
      		<tr>
      			<td>Ils (Они)
      </td>
      			<td colspan="2">Leur (их)
      </td>
      			<td>Leurs (их)
      </td>
      		</tr>
      		<tr>
      			<td>Elles (Они)
      </td>
      			<td colspan="2">Leur (их)
      </td>
      			<td>Leurs (их)
      </td>
      		</tr>
      	</tbody>
      </table>


      <table class="iksweb">
        <tbody>
          <tr>
            <td>J`ai un chat. C`est mon chat.
      </td>
            <td>J`ai des chats. Ce sont mes chats.
      </td>
          </tr>
          <tr>
            <td>У меня есть кот. Это мой кот.
      </td>
            <td>У меня есть коты. Это мои коты.
      </td>
          </tr>
          <tr>
            <td>Tu as une poupée. C`est ta poupée.
      </td>
            <td>Tu as des poupées. Ce sont tes poupées.
      </td>
          </tr>
          <tr>
            <td>У тебя есть кукла. Это твоя кукла.
      </td>
            <td>У тебя есть куклы. Это твои куклы.
      </td>
          </tr>
          <tr>
            <td>Il a un livre. C`est son livre.
      </td>
            <td>Il a des livres. Ce sont ses livres.
      </td>
          </tr>
          <tr>
            <td>У него есть книга. Это его книга.
      </td>
            <td>У него есть книги. Это его книги.
      </td>
          </tr>
          <tr>
            <td>Elle a une pomme. C`est sa pomme.
      </td>
            <td>Elle a des pommes. Ce sont ses pommes.
      </td>
          </tr>
          <tr>
            <td>У неё есть яблоко. Это её яблоко.
      </td>
            <td>У неё есть яблоки. Это её яблоки.
      </td>
          </tr>
        </tbody>
    </table>

    </div>


    </div>



  )
}

export default Adjectifss;
