import "./Form.css";
import { useState } from "react";
import InputField from "../InputField/InputField";
import OptionList from "../OptionsList/OptionsList";
import Button from "../Button/Button";

const Form = (props) => {
  const [name, updateName] = useState("")
  const [job, updateJob] = useState("")
  const [photo, updatePhoto] = useState("")
  const [team, updateTeam] = useState("")

  const [title, updateTitle] = useState("")
  const [color, updateColor] = useState("")

  const { createColaborator, createTeam } = props

  const SubmitColaboratorHandler = (event) => {
    event.preventDefault();
    let colaborador = {
      name,
      job,
      photo,
      team
    }
    createColaborator(colaborador)
  }

  const SubmitTeamHandler = (event) => {
    event.preventDefault();
    let team = {
      title,
      primaryColor: color,
    }
    createTeam(team)
  }

  return(
    <section className="form">
      <form onSubmit={SubmitColaboratorHandler}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <InputField title="Nombre" placeholder="Ingrese el nombre..." required value={name} updateValue={updateName}/>
        <InputField title="Puesto" placeholder="Ingrese el puesto..." required value={job} updateValue={updateJob}/>
        <InputField title="Foto" placeholder="Ingrese la foto..." required value={photo} updateValue={updatePhoto}/>
        <OptionList value={team} updateTeam={updateTeam} teams={props.teams}/>
        <Button text="Crear colaborador"/>
      </form>

      <form onSubmit={SubmitTeamHandler}>
        <h2>Rellena el formulario para crear un equipo nuevo.</h2>
        <InputField title="Titulo" placeholder="Ingrese el nombre del equipo..." required value={title} updateValue={updateTitle}/>
        <InputField type="color" title="Color" placeholder="Eliga el color" required value={color} updateValue={updateColor}/>
        <Button text="Registrar equipo"/>
      </form>
    </section>
  )
}

export default Form;