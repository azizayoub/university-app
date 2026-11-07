import photo from "../assets/hero.png"
import "./StudentCard.css"
import { useState } from "react"
function StudentCard(props) {
  const [coordonneesVisibles,setcoordonnees]=useState(false)
  function basculerinformation(){
    setcoordonnees(!coordonneesVisibles);
  }
  const handleSuppr = () => props.onSupprimer(props.email)
  const handleModif=()=> props.onModifier(props.email)
  return (
    <div className="container">
      <div className="fiche">
        <img src={photo} alt="photo d'etudiant" />
        <h1>Fiche étudiant</h1>  

        <p>Nom  : {props.nom} </p>
        <p>Prénom  : {props.prenom} </p>
                {coordonneesVisibles && (
<>
        <p>Email : {props.email}</p>
        <p>Téléphone : {props.telephone}</p>
        </>
        )}
        <p>Filière : {props.filiere}</p>
        <p>Année d'étude : {props.anne}</p>
        <p>Groupe : {props.groupe}</p>
        <p>Ville : {props.ville}</p>
        <a href={`mailto:${props.email}`} className="btn-contact">
          Contacter
        </a>

        <button onClick={basculerinformation}>{coordonneesVisibles ?"Masquer les cordonnées" :"Afficher les cordonnées"}</button>
        <button onClick={handleSuppr}>Supprimer etudiant</button>
        <button onClick={handleModif}>Modifier etudiant</button>
      </div>
    </div>
  )
}

export default StudentCard