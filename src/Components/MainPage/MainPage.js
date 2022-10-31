import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = (props) => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [confirmaEmail,setConfirmaEmail]= useState("") //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
const [formFlow,setFormFlow]=useState(2)

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeChecaEmail = (e) => {
  setConfirmaEmail(e.target.value);
};

// para achar o campo name
// console.log(name)
const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  // setFormFlow(2)

  if (age <18){
    alert ("A pessoa estudante só pode se inscrever na Labenu se for maior de idade")
  }


if (name.length <10 || name.length > 30){
  alert ("O input de nome precisa ter no mínimo 10 caracteres e no máximo 30.")
}

if (email !== confirmaEmail) {
  alert(
    "Caso os dois inputs de email estejam com conteúdo iguais, o usuário pode seguir pra próxima etapa."
  );
}

}



  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
       <NameForm
    // insira aqui suas props
      name={name}
      onChangeName={onChangeName}
      age={age}
      onChangeAge={onChangeAge}
      email={email}
      onChangeEmail={onChangeEmail}
      sendData={sendData}
      confirmaEmail={confirmaEmail}
      onChangeChecaEmail={onChangeChecaEmail}
      /> 
      ):( 
      <ConfirmationForm/>)}
    </MainContainer>
  )
}

export default MainPage