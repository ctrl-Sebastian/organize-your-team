import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  const [formIsVisible, changeFormVisibility] = useState(false)
  
  const [colaborators, updateColaborators] = useState([
    {
      id: uuid(),
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      job: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/genesysrm.png",
      name: "Genesys Rondon",
      job: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      job: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      job: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      job: "Dev FullStack",
      fav: true
    }
  ])

  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Dev Ops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ])

  const changeVisibility = () =>{
    changeFormVisibility(!formIsVisible);
  }

  const createColaborator = (colaborator) =>{
    updateColaborators([...colaborators, colaborator])
  }

  const createTeam = (newTeam) =>{
    updateTeams([...teams, {...newTeam, id: uuid()}])
  }

  const deleteColaborator = (id) =>{
    const colaboratorsToStay = colaborators.filter((colaborator) => colaborator.id !== id)
    console.log(colaboratorsToStay)
    updateColaborators(colaboratorsToStay)
  }

  const updateTeamColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      if(team.id === id){
        team.primaryColor = color
      }
      return team
    })
    updateTeams(updatedTeams)
  }

  const like = (id) =>{
    const updatedColaborators = colaborators.map((colaborator) => {
      if(colaborator.id === id){
        colaborator.fav = !colaborator.fav
      }
      return colaborator
    })
    updateColaborators(updatedColaborators)
  }

  return (
    <div>
      <Header />
      {
        formIsVisible && <Form 
          teams={teams}
          createColaborator={createColaborator}
          createTeam={createTeam}
        />
      }
      <MiOrg changeVisibility={changeVisibility}/>
      {teams.map((team, i) => <Team 
        key={team.title} 
        data={team} 
        colaborators={colaborators.filter(colaborator => colaborator.team === team.title)}
        deleteColaborator={deleteColaborator}
        updateTeamColor={updateTeamColor}
        like={like}
      />
      )}
      <Footer />
    </div>
  );
}

export default App;
