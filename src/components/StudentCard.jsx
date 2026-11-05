import photo from "../assets/hero.png"
import "./StudentCard.css"
import { useState } from "react"
function StudentCard(props) {
  const [coordonneesVisibles,setcoordonnees]=useState(false)
  function basculerinformation(){
    setcoordonnees(!coordonneesVisibles);
  }
  return (
    <div className="container">
      <div className="fiche">
        <img src={photo} alt="photo d'etudiant" />
        <h1>Fiche étudiant</h1>  
        {coordonneesVisibles && (
<>
        <p>Nom  : {props.nom} </p>
        <p>Prénom  : {props.prenom} </p>
        <p>Email : {props.email}</p>
        <p>Téléphone : {props.telephone}</p>
        <p>Filière : {props.filiere}</p>
        <p>Année d'étude : {props.anne}</p>
        <p>Groupe : {props.groupe}</p>
        <p>Ville : {props.ville}</p>
        <a href={`mailto:${props.email}`} className="btn-contact">
          Contacter
        </a></>
)}
        <button onClick={basculerinformation}>{coordonneesVisibles ?"Masquer les cordonnées" :"Afficher les cordonnées"}</button>

      </div>
    </div>
  )
}

export default StudentCard