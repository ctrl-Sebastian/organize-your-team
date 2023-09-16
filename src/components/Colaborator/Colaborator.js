import "./Colaborator.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Colaborator = (props) => {
  const {name, job, photo, id, fav} = props.data
  const {primaryColor, deleteColaborator, like} = props

  return(
    <div className="colaborator">
      <AiFillCloseCircle className="deleteIcon" onClick={() => deleteColaborator(id)} />
      <div className="header" style={{backgroundColor: primaryColor}}>
        <img src={photo} alt={name}/>
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{job}</h5>
        { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
      </div>
    </div>
  )
}

export default Colaborator