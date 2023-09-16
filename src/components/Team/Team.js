import "./Team.css"
import hexToRgba from 'hex-to-rgba'
import Colaborator from "../Colaborator/Colaborator"

const Team = (props) => {
  const {title, primaryColor, secondaryColor, id} = props.data
  const {colaborators, deleteColaborator, updateTeamColor, like} = props;

  return <>
  { 
    colaborators.length > 0  &&
    <section className="team" style={{backgroundColor: hexToRgba(primaryColor, 0.6)}}>
      <input 
        type="color"
        className="colorPicker"
        value={primaryColor}
        onChange={(e) =>{
          updateTeamColor(e.target.value, id);
        }}
      />
      <h3 style={{borderColor: primaryColor}}>{title}</h3>
      <div className="colaborators">
      {
        colaborators.map( (colaborator) => <Colaborator 
          key={colaborator.id} 
          data={colaborator} 
          primaryColor={primaryColor} 
          deleteColaborator={deleteColaborator} 
          like={like}
        />)
      }
      </div>
    </section>
  }</>
}

export default Team;