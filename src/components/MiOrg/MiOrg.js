import "./MiOrg.css"

const MiOrg = (props) => {
  return(
    <div className="orgSection">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.changeVisibility}/>
    </div>
  )
}

export default MiOrg