import "./Footer.css"
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return(
    <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="network">
          <a href='https://github.com/ctrl-Sebastian'> 
              <AiFillGithub color="white" size="2em"/>
          </a>
          <a href='https://www.linkedin.com/in/sebastian-manuel-marrera-santos-919517196/'> 
              <AiFillLinkedin color="white" size="2em"/>
          </a>
          <a href='https://www.instagram.com/sebastian_marrera/'> 
          <AiFillInstagram color="white" size="2em"/>
          </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por: Sebastian Manuel Marrera Santos</strong>
    </footer>
  )
}

export default Footer;