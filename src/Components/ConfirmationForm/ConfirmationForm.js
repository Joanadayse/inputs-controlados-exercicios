import React, { useState } from 'react'
import { Form} from '../MainPage/styles'

const ConfirmationForm = () => {
  const [dataNasc, setDataNasc]=useState("");
  const [telefone,setTelefone]=useState("");
  const [genero, setGenero] = useState("");
  const [autoDeclara, setAutoDeclara] = useState("");
  const [curso, setCurso] = useState("");
  const [ensinoMedio, setEnsinoMedio] = useState(false);
  const [disponibilidade, setDisponibilidade] = useState(false);


  const onChangeDataNasc=(event)=>{
    setDataNasc (event.target.value)
  }

  const onChangeTelefone = (event)=>{
    setTelefone (event.target.value)
  };

  const onChangeGenero = (event) => {
    setGenero(event.target.value);
  };

  
  const onChangeAutoDeclara = (event) => {
    setAutoDeclara(event.target.value);
  };

  const onChangeCurso = (event) => {
    setCurso(event.target.value);
  };

  const onChangeEnsinoMedio = (event) => {
    setEnsinoMedio(event.target.value);
  };

  const onChageDisponibilidade = (event) => {
    setDisponibilidade(event.target.value);
  };

  console.log("ensino médio", ensinoMedio);
  console.log("disponibilidade", disponibilidade);

    return (
    <Form>

      <label>
        Data de Nascimento:
        <input type = {"date"} onChange={onChangeDataNasc} value= {dataNasc} />
      </label>

      <label>
        Telefone
        <input type={"tel"} onChange={onChangeTelefone} value= {telefone} />
      </label>

      <label>
      Gênero:
        <select value={genero} onChange={onChangeGenero}>
          <option></option>
          <option>Homem Cis</option>
          <option>Mulher Cis</option>
          <option>Homem Trans</option>
          <option>Mulher Trans</option>
          <option>Pessoa não binária</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>

      <label>
      Como você se auto-declara?
        <select value={autoDeclara} onChange={onChangeAutoDeclara}>
          <option></option>
          <option>Negro</option>
          <option>Branco</option>
          <option>Pardo</option>
          <option>Amarelo</option>
          <option>Indígena</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>

      <label>
        Curso:
        <br />
        <input
          type={"radio"}
          name={"curso"}
          onChange={onChangeCurso}
          value={"integral"}
        />
        <label>Curso integral web fullstack</label>
        <br/>
        <input
          type={"radio"}
          name={"curso"}
          onChange={onChangeCurso}
          value={"noturno"}
        />
         <label>Curso noturno web fullstack</label>
      </label>
      <label>
        Ensino Médio:
        <br />
        <input type={"checkbox"} value={true} onChange={onChangeEnsinoMedio} />
        <label>Ensino médio completo</label>
        <br />
        <input
          type={"checkbox"}
          value={true}
          onChange={onChageDisponibilidade}
        />
        <label>Tem disponibilidade para participar das atividades.</label>
      </label>
      <button>Enviar dados</button>
      
      </Form>
  )
}

export default ConfirmationForm