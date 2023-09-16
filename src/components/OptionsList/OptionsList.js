import "./OptionsList.css"

const OptionList = (props) => {
  const handleChange =(e)=>{
    props.updateTeam(e.target.value)
  }

  return(
    <div className="optionslist">
      <label>Equipos</label>
      <select value={props.value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Selecciona un equipo</option>
        {props.teams.map((equipo, i) => <option key={i}>{equipo.title}</option>)}
      </select>
    </div>
  )
}

export default OptionList;